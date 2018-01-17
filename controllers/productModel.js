/**
 * @description 产品模型controllers
 */

import productModel from '../model/productModel'
import {
  putc,
  findc,
  removec,
  insertc
} from './base.js'

// 获取产品模板信息
export async function getProductModelInfo (ctx) {
  return findc(ctx, productModel)
}

// 新增产品模板
export async function createProductModel (ctx) {
  return insertc(ctx, productModel)
}

// 删除产品模板
export async function delProductModel (ctx) {
  return removec(ctx, productModel)
}

// 修改产品模板
export async function putProductModel (ctx) {
  return putc(ctx, productModel)
}