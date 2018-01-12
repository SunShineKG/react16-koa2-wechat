/**
 * @description 产品router
 */

import Koa from 'koa'
import Router from 'koa-router'
import {
  getProductInfo,
  createProduct,
  delProduct,
  putProduct
} from '../controllers/product.js'

const router = Router();

const routers = router
  // 获取产品信息
  .get('/getProductInfo', getProductInfo)
  // 新增产品
  .post('/createProduct', createProduct)
  // 删除产品
  .delete('/delProduct', delProduct)
  // 修改产品
  .put('/putProduct', putProduct)

export default routers