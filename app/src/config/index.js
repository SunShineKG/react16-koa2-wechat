/**
 * Created by Administrator on 2017/12/22 0022.
 */

import $http from 'axios'
import { message } from 'antd'

export const interceptors = that => {
  $http.interceptors.response.use(
    response => {
        if (response.data.ok === -2) {
            that.props.history.push('/login')
            message.error(response.data.message)
            return false
        }
        return response
    },
    error => {
        message.error('拉去数据失败，请重试！')
        return Promise.reject(error)
    })
}

$http.defaults.baseURL = '/v1';

export const port = 'http://wechatshops.oss-cn-shanghai.aliyuncs.com/wechat/'

export function outType (obj, arr) {
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