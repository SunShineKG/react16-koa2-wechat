/**
 * @description 基础controllers，进一步对数据库增删改查封装
 */
import { outType } from '../utils/tool'
import {
  getJWT
} from '../utils/JWT.js'
import {
  find,
  insert,
  remove,
  update
} from '../utils/handleDataBase.js'

/**
 * 分页查询
   @param   {
     token
     ...query
     pageSize
     pageIndex
   }
 *
 */
export async function findc (ctx, model) {

  const id = getJWT(ctx.query.token).id,
        query = Object.assign(
          outType(ctx.query, ['token', 'pageSize', 'pageIndex']),
          {
            superId: id
          }
        ),
        result = await find(
          model,
          query,
          true,
          {
            pageSize: ctx.query.pageSize,
            pageIndex: ctx.query.pageIndex
          }
        )
  if (!result) return

  ctx.body = result
  
}

/**
 * 单条查询
   @param   {
    token
    ...query
   }
 *
 */
export async function findOnec (ctx, model) {
  
  const id = getJWT(ctx.query.token).id,
        query = Object.assign(
          outType(ctx.request.body, ['token']),
          {
            superId: id
          }
        ),
        result = await find(
          model,
          query
        )

  if (!result) return

  ctx.body = result
  
}

/**
 * 新增
  @param   {
    token
    ...data
  }
 *
 */
export async function insertc (ctx, model) {

  const id = getJWT(ctx.request.body.token).id,
      option = Object.assign(
        outType(ctx.request.body, ['token', '_id']),
        {
          superId: id
        }
      ),
      result = await insert(model, option),
      data = {}

  if (!result) return

  ctx.body = result

}

/**
 * 删除
  @param   {
    token
    id
  }
 *
 */
export async function removec (ctx, model) {

  const params = ctx.request.body,
        id = getJWT(params.token).id,
        result = await remove(
          model,
          { 
            _id: params.id,
            superId: id
          },
        )
        
  if (!result) return

  ctx.body = result
}

/**
 * 修改
  @param   {
    token
    id
    ...newData
  }
 *
 */
export async function putc (ctx, model) {
  
  const params = ctx.request.body,
        id = getJWT(params.token).id,
        result = await update(
          model,
          { 
            _id: params._id
          },
          outType(params, ['id','token'])
        )

  if (!result) return

  ctx.body = result
}