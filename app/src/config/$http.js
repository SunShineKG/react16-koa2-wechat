import axios from 'axios'
import { message } from 'antd'

// 增
export default async (options) => {
  const type = options.type,
        url = options.url,
        opt = type === 'get'
                ? { params: options.values }
                : options.values

  return await axios[type](url, opt)
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