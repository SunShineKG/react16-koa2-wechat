/**
 * @description 产品router
 */

import Koa from 'koa'
import Router from 'koa-router'
import {
  getOrderInfo,
  createOrder,
  changeOrderState
} from '../controllers/order.js'

const router = Router();

const routers = router
  // 获取订单信息
  .get('/getOrderInfo', getOrderInfo)
  // 创建订单
  .post('/createOrder', createOrder)
  // 变更订单状态
  .put('/changeOrderState', changeOrderState)

export default routers