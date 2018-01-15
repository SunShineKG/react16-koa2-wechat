/**
 * @description 通用controllers
 */

import co from 'co'
import OSS from 'ali-oss'

const client = new OSS({
  region: 'oss-cn-shanghai',
  accessKeyId: 'LTAIdGJO8n9D7twQ',
  accessKeySecret: '4qzMSnaqEWKas5qVsV0yS7U74af321',
  bucket: 'wechatshops'
});

export async function upload (ctx) {
  console.log(ctx.request.body)
  try {
    await client.put('wechat/ss', new Buffer('hello wdorld'))
    return {
      ok: 1
    }
  } catch (err) {
    console.log(err)
  }
}