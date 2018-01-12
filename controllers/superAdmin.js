/**
 * @description 管理员controllers
 */
import { 
  outType,
  setHash
} from '../utils/tool'
import superAdmin from '../model/superAdmin'
import { 
  getJWT,
  setJWT
} from '../utils/JWT.js'
import { 
  find,
  update
} from '../utils/handleDataBase'
import {
  findOnec,
  putc
} from './base.js'

/**
 * 管理员登录
 * 
  @method signIn
  @param   {
    username
    pass
  }
 *
 */

 // 登录
export async function signIn (ctx) {

  const option = ctx.request.body,
      data = {}
      console.log(ctx.request.body.pass)
  let ss = setHash(ctx.request.body.pass)
  console.log(ss)
  const result = await find(superAdmin, { username: option.username, pass: option.pass })

  if (!result) return

  data.ok = result.ok
  data.message = data.ok === 1
                  ? '登录成功'
                  : '用户名不存在或密码错误'
  data.token = data.ok === 1
                ? setJWT(result.rows._id)
                : ''

  ctx.body = data

}

// 获取账户信息
export async function getUserInfo (ctx) {

  const id = getJWT(ctx.query.token).id,
        result = await find(
          superAdmin,
          {
            _id: id
          }
        ),
        data = {}

  if (!result) return
  data.username = result.rows.username
  result.rows = data

  ctx.body = result
}

// 修改账户信息
export async function reviseSuper (ctx) {
  
  const params = ctx.request.body,
  id = getJWT(params.token).id,
  oldData = await find(
    superAdmin,
    {
      _id: id
    }
  )
  if (!oldData) return

  let pass = setHash(params.pass)
  if (!params.pass || oldData.rows.pass === pass) {
    params.pass = setHash(ctx.request.body.pass)
    result = await update(
      superAdmin,
      { 
        _id: id
      },
      outType(params, ['id','token'])
    )
  }

  if (!result) return

  ctx.body = result
}