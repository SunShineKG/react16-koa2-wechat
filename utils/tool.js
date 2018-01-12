/**
 * @description 基础工具方法
 */

import bcrypt from 'bcryptjs'

// 判断对象是否为空
export function isEmptyObject (obj) {
  for (let n in obj) {
    return false
  }

  return true
}

// 排除对象指定属性
export function outType (obj, arr) {
  const args = {}

  for ( let k in obj ) {
    arr.map( i => {
      if ( k !== arr[i] ) {
        args[k] = obj[k]
      }
    })
  }

  return args
}

// 生成17位随机数
export function createRandom () {

  let outTradeNo = ""
  for(let i=0; i<4; i++) {
    outTradeNo += Math.floor(Math.random()*10)
  }

  return (new Date().getTime() + outTradeNo)
}

// 密码加密，生成hash
export function setHash (salt) {

  return bcrypt.genSalt(10, function(err, salt) {
    console.log(11)
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
      if (err) {
        throw err
        return false
      }
      console.log(hash)
      return hash
    });
  });
}
