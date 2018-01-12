/**
 * @description 存取token
 */

import jwt from 'jsonwebtoken'

// 设置token
export function setJWT (id) {
  return jwt.sign({ id: id }, 'wechatShop', { expiresIn: '10h' });
}

// 获取token
export function getJWT (token) {
  
  try {
    return jwt.verify(token, 'wechatShop');

  } catch(err) {
    throw err
  }
}