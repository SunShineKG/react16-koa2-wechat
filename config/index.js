import OSS from 'ali-oss'

export const NODE_ENV = 'dev';// pro

export const clientOSS = new OSS({
  region: 'oss-cn-shanghai',
  accessKeyId: 'LTAIdGJO8n9D7twQ',
  accessKeySecret: '4qzMSnaqEWKas5qVsV0yS7U74af321',
  bucket: 'wechatshops'
});