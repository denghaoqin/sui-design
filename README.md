# sui-design(web极速建站构建工具)

> 该工具依赖于vue@2.0,bootstrap@3.3.7

## 初始化

``` install
npm install
```

用于安装项目中所需要的详细模块,初始化整个项目

## 运行命令

``` serve
npm run serve
```

本地调试运行,建立一个自动刷新,自动css转换的测试服务器.

``` build
npm run build
```

运行命令全集可参考<https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md>

打包整体目录

### 项目目录说明

``` project
.
|-- config                           // 项目开发环境配置
|-- public                           // 公共文件
|   |-- favicon.ico                  // 页面图标
|   |-- index.html                   // webpack管理的模板
|   |-- manifest.json                // 详细属性文件
|-- tests                            // 测试用例
|-- src                              // 源码目录
|   |-- components                   // 公共组件,展示类组件
|       |-- content.vue              // 页面内容公共组件
|       |-- data-null.vue            // 数据为空时公共组件
|       |-- footer.vue               // 底部导航栏公共组件
|       |-- header.vue               // 页面头部公共组件
|   |-- containers                   // 公共组件,逻辑类组件
|       |-- smart.vue                // 逻辑计算组件
|   |-- router                       // 路由配置和程序的基本信息配置
|       |-- index.js                // 配置项目的基本信息
|   |-- assets                       // 静态资源管理
|       |-- css                      // css样式表管理
|       |-- images                   // 公共图片
|   |-- mixins                       // 各种全局mixins
|       |-- pull-list.js             // 上拉加载
|   |-- views                        // 各种页面入口组件
|       |-- about                    // 关于
|       |-- index                    // 首页
|   |-- store                        // vuex的状态管理
|       |-- index.js                 // 加载各种store模块
|   |-- utils                        // 公共的js方法,工具类
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|   |-- registerServiceWorker.js     // 页面缓存设置配置文件
|-- .babelrc                         // ES6语法编译配置
|-- .eslintrc                        // 代码风格及错误配置文件
|-- .gitignore                       // git配置文件
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
|-- vue.config.js                    // vue cli配置项
|-- jest.config.js                   // jest 测试配置项
.
```

## License

MIT
