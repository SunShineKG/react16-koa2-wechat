/**
 * @description 
 */
import {
  observable,
  action,
  computed,
  runInAction
} from 'mobx'
import base from '../base'
import $http from '../../config/$http'
import product from '../product'
import { outType } from '../../config/index'


class ProductModel {

  // 缓存列表数据
  @observable cache = []
  @observable listData = []



  // 新增产品
  @action
  addproductModel = form => {
    this.form = form
  }

  // 修改产品
  @action
  putproductModel = async val => {
    let form,
        timer

    base.showModel()

    if(!product.form) {
      timer = await new Promise((resolve, reject) => {
        setTimeout( () => {
          form = product.form
          resolve()
        })
      })
    } else {
      form = product.form
    }

    clearTimeout(timer)
    product.changeXhrOption('put', 'productModel/putProductModel', 'productModel')
    form.setFieldsValue({...outType(val, ['__v', 'superId'])})

    product.imgLists = val.colors.length === 0
                        ? []
                        : val.colors

  }

  // 删除产品
  @action
  delproductModel = form => {
    this.form = form
  }

  // 获取产品信息
  @action
  getproductModel = async (Name = '', pageIndex = 0) => {
    const result = this.cache.length === 0
                      ? await
                          $http({
                            type: 'get',
                            url: '/productModel/getproductModelInfo',
                            values: {
                                token: window.localStorage.token,
                                Name,
                                pageIndex
                            }
                          })
                      : this.cache

    runInAction(() => {
      this.listData = result.rows
    })
  }
}

const productModel = new ProductModel();

export default productModel