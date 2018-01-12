/**
 * @description 管理员model
 */

import mongoose from 'mongoose'

// 定义Schema
const superAdminSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },// 用户名
    pass: {
      type: String,
      required: true
    }// 密码
});

// 定义model
const superAdmin = mongoose.model("superAdmin",superAdminSchema);
export default superAdmin;