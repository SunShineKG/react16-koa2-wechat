import Koa from 'koa'
import path from 'path'
import staticParser from 'koa-static'
import bodyParser from 'koa-bodyparser'
import routers from './routers/index'
import connection from './config/db'
import interceptor from './middlewares/interceptor'
import { NODE_ENV } from './config'

const app = new Koa()

// 使用ctx.body解析中间件
app.use(bodyParser())

//生产环境
if (NODE_ENV==='pro') {

}






// 静态资源目录对于相对入口文件index.js的路径 
const staticPath = './static'

app.use(staticParser(
  path.join( __dirname,  staticPath)
))

// 初始化路由中间件
app.use(interceptor).use(routers.routes() ).use( routers.allowedMethods() );

app.listen(3002);