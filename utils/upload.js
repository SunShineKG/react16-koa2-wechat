import co from 'co'
import fs from 'fs'
import path from 'path'
const os = require('os')
const Busboy = require('busboy')
const inspect = require('util').inspect
import { clientOSS } from '../config'

function mkdirsSync( dirname ) {
  if (fs.existsSync( dirname )) {
    return true
  } else {
    if (mkdirsSync( path.dirname(dirname)) ) {
      fs.mkdirSync( dirname )
      return true
    }
  }
}

/**
 * 获取上传文件的后缀名
 * @param  {string} fileName 获取上传文件的后缀名
 * @return {string}          文件后缀名
 */
function getSuffixName( fileName ) {
  let nameList = fileName.split('.')
  return nameList[nameList.length - 1]
}

/**
 * 上传文件
 * @param  {object} ctx     koa上下文
 * @param  {object} options 文件上传参数 fileType文件类型， path文件存放路径
 * @return {promise}         
 */
export function uploadFile( ctx, options) {
  let req = ctx.req,
      res = ctx.res,
      busboy = new Busboy({headers: req.headers}),
      fileName,
      saveTo,
      _uploadFilePath,
      filePath = path.join( options.path ),
      mkdirResult = mkdirsSync( filePath )

  return new Promise((resolve, reject) => {

    let result = { 
      success: false
    }

    // 解析请求文件事件
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

      fileName = Math.random().toString(16).substr(2) + '.' + getSuffixName(filename)
      _uploadFilePath = path.join( filePath, fileName )
      saveTo = path.join(_uploadFilePath)

      // 文件保存到制定路径
      file.pipe(fs.createWriteStream(saveTo))

      // 文件写入事件结束
      file.on('end', function() {
        result.success = true
        result.name = fileName
        result.url = `http://wechatshops.oss-cn-shanghai.aliyuncs.com/wechat/${fileName}`
        resolve(result)
      })
    })

    // 解析结束事件
    busboy.on('finish', async function() {
      co(function* () {
        var stream = fs.createReadStream(saveTo);
        var result = yield clientOSS.putStream(`wechat/${fileName}`, stream);
        fs.unlink(saveTo,function(){
          resolve(result)
        });
      }).catch(function (err) {
        console.log(err);
      });
    })

    // 解析错误事件
    busboy.on('error', function(err) {
      reject(result)
    })

    req.pipe(busboy)
  })

} 