/**
 * @description 全局过滤器，验证token
 */

import {
  getJWT
} from '../utils/JWT.js'

export default async (ctx,next) => {
 
  if (ctx.url !== '/v1/super/signIn') {
    let option = ctx.request.method === 'GET'
                  ? ctx.query
                  : ctx.request.body
                  
    // 判断是否传入token
    if (option && option.token) {
      
      try {

        getJWT(option.token)
      } catch (err) {
        ctx.body = {
          ok: -1,
          message: '身份验证失败，请重新登录'
        }

        return
      }
    } else {
      ctx.body = {
        ok: -1,
        message: '请先登录'
      }
      
      return
    }
  }

  await next()
  
}