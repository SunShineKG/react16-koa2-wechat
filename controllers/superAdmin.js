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
  putc,
  insertc
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
      data = {},
      result = await find(superAdmin, { username: option.username, pass: await setHash(option.pass) })

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

  let oldPass = await setHash(params.oldPass),
      result

  if (!params.oldPass || oldData.rows.pass === oldPass) {

    params.pass = await setHash(ctx.request.body.newPass)
    result = await update(
      superAdmin,
      { 
        _id: id
      },
      outType(params, ['token', "oldPass", "newPass", "confirm"])
    )
  } else {
    result = {
      ok: -1,
      message: '密码输入不正确，请重新输入！'
    }
  }

  if (!result) return

  ctx.body = result
}