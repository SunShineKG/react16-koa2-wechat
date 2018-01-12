/**
 * @description 管理员router
 */

import Koa from 'koa'
import Router from 'koa-router'
import {
  signIn,
  getUserInfo,
  reviseSuper
} from '../controllers/superAdmin.js'

const router = Router();

const routers = router
  // 获取用户信息
  .get('/getUserInfo', getUserInfo)
  // 登录
  .post('/signIn', signIn)
  // 修改用户信息
  .put('/reviseSuper', reviseSuper)

export default routers