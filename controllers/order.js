/**
 * @description 订单controllers
 */

import orderModel from '../model/order'
import {
  putc,
  findc,
  removec,
  insertc
} from './base.js'

// 获取订单信息
export async function getOrderInfo (ctx) {
  return findc(ctx, orderModel)
}

// 生成订单
export async function createOrder (ctx) {
  return insertc(ctx, orderModel)
}

// 删除订单 (目前只提供删除待付款订单)
// export async function delOrder (ctx) {
//   return removec(ctx, orderModel)
// }

// 变更订单状态
export async function changeOrderState (ctx) {
  return putc(ctx, orderModel)
}