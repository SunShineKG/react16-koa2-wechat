/**
 * @description 对mongodb数据库基础增删改查的封装
 */

import { isEmptyObject } from './tool'

// 检验参数对象是否合法
function isExist (option) {

  return toString.call(option) === "[object Object]" 
                   ? option
                   : {}
}

/*
    查
    @param deep=true(find()) 反之 调findOne()
    pageConfig{
      page: 每页显示条数
      pageIndex: 当前页码
    }
 */
export async function find (model, option, deep, pageConfig) {
  
  let pageSize,
      pageIndex,
      counts = 0
  
  const opt = isExist(option),
        isOne = typeof(deep) === "boolean"
                  ? deep
                  : false,
        method = isOne ? model.find(opt) : model.findOne(opt)

  if (isEmptyObject(opt)) {
    return false
  }

  if (pageConfig && toString.call(pageConfig) === '[object Object]') {
    pageSize = pageConfig.pageSize || 10
    pageIndex = pageConfig.pageIndex || 0

    method
      .limit(pageSize)
      .skip(pageIndex * pageSize)
      .sort({_id:-1})

    counts = await count(model)
  }

  return await method
  .then(data => {
    let result = data 
                  ? {
                      ok: 1,
                      rows: data
                    }
                  : {
                      ok: -1,
                      message: '暂无数据'
                    }

    if (pageConfig && toString.call(pageConfig) === '[object Object]') {
      result.count = counts
    }
    return result
  })
  .catch(err => {
    return {
      ok: -1,
      message: '获取数据失败'
    }
    throw err
  })
}

// 增
export async function insert (model, option) {

  const opt = isExist(option)

  if (isEmptyObject(opt)) {
    return false
  }

  return await model.create(opt)
    .then(() => {
      return {
        ok: 1,
        message: '操作成功'
      }
    })
    .catch(err => {
      return {
        ok: -1,
        message: '操作失败'
      }
      throw err
    })
}

// 删
export async function remove (model, option) {
  
  const opt = isExist(option)

  if (isEmptyObject(opt)) {
    return false
  }

  return await model.remove(opt)
    .then(() => {
      return {
        ok: 1,
        message: '操作成功'
      }
    })
    .catch(err => {
      
      return {
        ok: -1,
        message: '操作失败'
      }
      throw err
    })
}

// 改
export async function update (model, option, newData) {
  
  const opt = isExist(option),
        data = isExist(newData);

  if (isEmptyObject(opt) && isEmptyObject(data)) {
    return false
  }
  
  return await model.update(opt, data)
    .then(() => {
      return {
        ok: 1,
        message: '修改成功'
      }
    })
    .catch(err => {
      return {
        ok: -1,
        message: '操作失败'
      }
      throw err
    })
}

// 获取数据总条数
async function count (model) {

  return await model.find({}).count()
}
  