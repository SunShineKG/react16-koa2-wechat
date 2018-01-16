/**
 * @description 通用controllers
 */

import path from 'path'
import { uploadFile } from '../utils/upload'

export async function upload (ctx) {
    // 上传文件请求处理
    let result = { success: false }
    let serverFilePath = path.join('../static/image')

    // 上传文件事件
    result = await uploadFile( ctx, {
      path: serverFilePath
    })
    ctx.body = result
}




