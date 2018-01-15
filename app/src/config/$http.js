import axios from 'axios'
import { message } from 'antd'

// 增
export default async function $http(type = 'post', url, option) {
  const opt = type === 'get'
                ? { params: option }
                : option

  return await axios[type](url, option)
                .then( res => {
                  let method = res.data.ok === -1
                                ? 'error'
                                : 'success',
                      result = type !== 'get'
                                ? false
                                : res.data

                  message[method](res.data.message)
                  return result
                })
                .catch( err => {
                  message.error('操作失败，请重试！')
                  return false
                })
}