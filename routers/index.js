/**
 * @description 路由入口
 */

import Router from 'koa-router'
import superAdmin from './superAdmin'
import productModel from './productModel'
import product from './product'
import order from './order'
import common from './common'

const router = Router({
  prefix:'/v1'
})



router.use('/super', superAdmin.routes(), superAdmin.allowedMethods())
router.use('/productModel', productModel.routes(), productModel.allowedMethods())
router.use('/product', product.routes(), product.allowedMethods())
router.use('/order', order.routes(), order.allowedMethods())
router.use('/common', order.routes(), order.allowedMethods())

export default router