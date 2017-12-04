// 系统配置参数
const config = require('config')
const port = config.server.port
const controllerRoot = config.server.controllerRoot
const controllerDir = __dirname + config.server.controllerDir
// 应用服务相关
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const xcontroller = require(__dirname + '/xcontroller_modules/koa-xcontroller/index.js')
// 日志相关
const log = require('tracer').colorConsole({ level: config.log.level })

// 初始化应用服务
const app = new Koa()
// 加载中间件
app.use(async function (ctx, next) {
	log.info('进入权限控制')
	if (true) {
		await next()
	} else {
		ctx.body = '权限校验失败'
	}
})
app.use(bodyParser())														// 入参JSON解析

// 加载所有控制器
xcontroller.loadController(app, controllerRoot, controllerDir)				// 应用实例,访问根路径,控制器目录路径

// 启动应用服务
app.listen(port)
log.info(`XController服务启动【执行环境:${process.env.NODE_ENV},端口:${port}】`)
log.info(`RESTful  API路径【localhost:${port}${controllerRoot}MODULE_NAME/*】`)