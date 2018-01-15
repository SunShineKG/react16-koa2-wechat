/**
 * @description 产品模型model
 */

import mongoose from 'mongoose'

// 定义Schema
const productModelSchema = new mongoose.Schema({
  superId: {
    type: String,
    required: true
  },// 管理员
  Name: {
    type: String,
    required: true
  },// 模板名称
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
  }// 单价
});

// 定义model
const productModel = mongoose.model("productModel",productModelSchema);
export default productModel;