/**
 * @description 通用api
 */

import Koa from 'koa'
import Router from 'koa-router'
import {
  upload
} from '../controllers/common.js'

const router = Router();

const routers = router
  // 上传图片
  .put('/upload', upload)

export default routers