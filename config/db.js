/**
 * @description 链接mongodb数据库
 */

import mongoose from 'mongoose'

mongoose.Promise = global.Promise
const connection = mongoose.connect('mongodb://127.0.0.1:27017/wechatShop', {
  useMongoClient: true
});
      
export default connection;
