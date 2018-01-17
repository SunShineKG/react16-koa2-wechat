/**
 * @description 基础工具方法
 */

import md5 from 'md5'

// 判断对象是否为空
export function isEmptyObject (obj) {
  for (let n in obj) {
    return false
  }

  return true
}

// 排除对象指定属性
export function outType (obj, arr) {
console.log('arr', arr)
console.log('obj',obj)
  const args = {}

  for ( let k in obj ) {
    let a = true

    for (let i=0; i<arr.length; i++) {
      if ( k == arr[i] || !obj[k] ) {
        a = false
        break
      }
    }
    if (a) {
      args[k] = obj[k]
    }
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
export async function setHash (salt) {

  return await md5(salt)
}

