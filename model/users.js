/**
 * @description 会员model
 */

import mongoose from 'mongoose'

// 定义Schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },// 用户名
    password: {
      type: String,
      required: true
    },// 密码
    coin: {
      type: Number,
      default: 0,
      required: true
    },// 金币
    recommendNum: {
      type: Number,
      required: true,
      default: 0
    },// 已推荐人数
    name: {
      type: String
    },// 姓名
    age: {
      type: Number
    },// 年龄
    address: {
      type: String
    },// 收货地址
    Alipay: {
      type: String
    },// 支付宝号或银行卡号
    Avatar: {
      type: String
    },// 头像
    creatTime: {
      type: Date,
      required: true,
      default: Date.now()
    },// 创建时间
});

// 定义model
const user = mongoose.model("user",userSchema);
export default user;