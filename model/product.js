/**
 * @description 产品model
 */

import mongoose from 'mongoose'

// 定义Schema
const productSchema = new mongoose.Schema({
  superId: {
    type: String,
    required: true
  },// 管理员
  Name: {
    type: String,
    required: true
  },// 产品名称
  style: {
    type: String
  },// 款式
  texture: {
    type: String
  },// 材质
  lining: {
    type: String
  },// 面料
  spec: {
    type: String,
    required: true
  },// 参考尺寸
  colors: {
    type: Object,
    required: true
  },// 颜色分类
  Unit: {
    type: String,
    required: true
  },// 单位
  price: {
    type: Number,
    required: true
  },// 单价
  remark: {
    type: String
  }// 备注
});

// 定义model
const product = mongoose.model("product",productSchema);
export default product;
