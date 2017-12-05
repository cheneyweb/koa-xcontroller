# koa-xcontroller
Node后端微服务框架，基于koa-xcontroller中间件，自动路由映射控制器文件

[传送门：XServer官网文档](http://xserver.top)

快速上手
>
	1, config/default.js 中设置请求根路径和控制器目录，然后执行npm install

	2, node app.js

注意事项
>
	1, 启动 app.js 后，系统会自动加载 {project}/src/controller/ 下所有的JS文件，挂载为koa路由

	2, 切换到生产环境需要执行命令 export NODE_ENV=production

单独使用x-controller中间件(任意koa应用均可集成)
>
	1, npm install koa-xcontroller --save

	2, const xcontroller = require('koa-xcontroller')

	3, xcontroller.loadController(app, controllerRoot, controllerDir)

	可选设置controller目录，默认路径是 {project}/src/controller/
	
命名规则
>
	controller.js文件名将作为路由请求路径部分，方法名作为请求尾

框架目录结构
>
	├── app.js
	├── config
	│   ├── default.json
	│   ├── develop.json
	│   └── production.json
	├── node_modules
	├── package.json
	├── src
	│   └── controller
	└── xcontroller_modules
	    └── koa-xcontroller

RESTful规则
>
	http://host:port/xserver/MODEL_NAME/*

例子
>
	以一个scanlogin.js为例，对其中cb方法的请求路径为:
	
	http://host:port/xserver/scanlogin/cb

框架整合（开源力量）
>
    "config": "^1.28.1",
    "koa": "^2.4.1",
    "koa-bodyparser": "^4.2.0",
    "koa-mount": "^3.0.0",
    "koa-router": "^7.3.0",
    "tracer": "^0.8.11"

帮助联系
>
	作者:cheneyxu
	邮箱:457299596@qq.com
	QQ:457299596

更新日志
>
	2017.12.04:精简依赖包