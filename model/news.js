/**
 * @description 消息通知model
 */

const mongoose = require('mongoose');

// 定义Schema
const newsSchema = new mongoose.Schema({
    superId: {
      type: String,
      required: true
    },// 管理员
    creatTime: {
      type: Date,
      required: true,
      default: Date.now()
    },// 创建时间
    userId: {
      type: String,
      required: true
    }// 被拉黑人Id
});

// 定义model
const news = mongoose.model("news",newsSchema);
module.exports = news;