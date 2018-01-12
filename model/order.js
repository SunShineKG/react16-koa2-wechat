/**
 * @description 订单model
 */

import mongoose from 'mongoose'
import { createRandom } from '../utils/tool'

// 定义Schema
const orderModelSchema = new mongoose.Schema({
  superId: {
    type: String,
    required: true
  },// 管理员
  userId: {
    type: String,
    required: true
  },// 会员id
  referrerId: {
    type: String,
    default: '0'
  },// 推荐人id
  code: {
    type: Number,
    required: true,
    index: true,
    default: createRandom
  },// 订单编号
  Name: {
    type: String
  },// 名称
  spec: {
    type: String
  },// 规格
  color: {
    type: String
  },// 颜色
  size: {
    type: String,
    required: true
  },// 参考尺寸
  price: {
    type: Number,
    required: true
  },// 单价
  quantity: {
    type: Number,
    required: true
  },// 数量
  Unit: {
    type: String,
    required: true
  },// 单位
  contacts: {
    type: String,
    required: true
  },// 联系人
  phone: {
    type: Number,
    required: true
  },// 联系电话
  address: {
    type: String,
    required: true,
    default: "线下"
  },// 收货地址
  state: {
    type: Number,
    required: true,
    default: 0
  },// 订单状态
  creatTime: {
    type: Date,
    required: true,
    default: Date.now()
  },// 创建时间
  imgUrls: {
    type: String
  }
});

// 定义model
const orderModel = mongoose.model("orderModel",orderModelSchema);
export default orderModel;