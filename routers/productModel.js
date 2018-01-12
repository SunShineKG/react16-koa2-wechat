/**
 * @description 产品模板router
 */

import Koa from 'koa'
import Router from 'koa-router'
import {
  getProductModelInfo,
  createProductModel,
  delProductModel,
  putProductModel
} from '../controllers/productModel.js'

const router = Router();

const routers = router
  // 获取产品模板信息
  .get('/getProductModelInfo', getProductModelInfo)
  // 新增产品模板
  .post('/createProductModel', createProductModel)
  // 删除产品模板
  .delete('/delProductModel', delProductModel)
  // 修改产品模板
  .put('/putProductModel', putProductModel)

export default routers