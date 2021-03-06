/**
 * @description 产品controllers
 */

import product from '../model/product'
import {
  putc,
  findc,
  removec,
  insertc
} from './base.js'

// 获取产品信息
export async function getProductInfo (ctx) {
  return findc(ctx, product)
}

// 新增产品
export async function createProduct (ctx) {
  return insertc(ctx, product)
}

// 删除产品
export async function delProduct (ctx) {
  return removec(ctx, product)
}

// 修改产品 (包括上下架产品)
export async function putProduct (ctx) {
  return putc(ctx, product)
}