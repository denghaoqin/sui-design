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

## 项目目录说明

``` project
.
|-- config/                          // 项目开发环境配置
|-- public/                          // 公共文件
|   |-- favicon.ico                  // 页面图标
|   |-- index.html                   // webpack管理的模板
|   |-- manifest.json                // 详细属性文件
|-- tests/                           // 测试用例
|-- src/                             // 源码目录
|   |-- components/                  // 公共组件,展示类组件
|       |-- content.vue              // 页面内容公共组件
|       |-- data-null.vue            // 数据为空时公共组件
|       |-- footer.vue               // 底部导航栏公共组件
|       |-- header.vue               // 页面头部公共组件
|   |-- containers/                  // 公共组件,逻辑类组件
|       |-- smart.vue                // 逻辑计算组件
|   |-- router/                      // 路由配置和程序的基本信息配置
|       |-- index.js                 // 配置项目的基本信息
|   |-- assets/                      // 静态资源管理
|       |-- scss/                    // scss管理
|           |-- utils/               // 辅助工具
|           |-- base/                // 基础标准样式
|           |-- components/          // 局部组件样式
|           |-- layout/              // 布局样式
|           |-- pages/               // 页面样式
|           |-- themes/              // 主题样式
|           |-- vendors/             // 可能引用的外部样式表
|           |-- main.scss            // css样式表管理
|       |-- images                   // 公共图片
|   |-- mixins/                      // 各种全局mixins
|       |-- pull-list.js             // 上拉加载
|   |-- views/                       // 各种页面入口组件
|       |-- about                    // 关于
|       |-- index                    // 首页
|   |-- store/                       // vuex的状态管理
|       |-- index.js                 // 加载各种store模块
|   |-- utils/                       // 公共的js方法,工具类
|       |-- index.js                 // 测试工具方法
|   |-- libs/                        // 公共的插件调用,初始化
|       |-- index.js                 // 测试插件调用
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

### scss目录文件规范

文件命名要遵循统一的命名规则-使用连字符界定 : _theme.scss

* utils文件夹:包含了整个项目中使用到的 Sass 辅助工具，这里存放着每一个全局变量、函数、混合宏和占位符
* base文件夹:存放项目中的模板文件。在这里，可以找到重置文件、排版规范文件或者一个样式表——定义一些 HTML 元素公认的标准样式.
* layout文件夹:存放构建网站或者应用程序使用到的布局部分。该文件夹存放网站主体（头部、尾部、导航栏、侧边栏…）的样式表、栅格系统甚至是所有表单的 CSS 样式。
* components文件夹:包含各类具体模块，基本上是所有的独立模块，比如一个滑块、一个加载块、一个部件
* pages文件夹:如果页面有特定的样式，最好将该样式文件放进 pages/ 文件夹并用页面名字。例如，主页通常具有独特的样式，因此可以在 pages/ 下包含一个 _home.scss 以实现需求。
* themes文件夹:在大型网站和应用程序中，往往有多种主题
* main.scss:主文件（通常写作 main.scss）应该是整个代码库中唯一开头不用下划线命名的 Scss 文件。除 @import 和注释外，该文件不应该包含任何其他代码。

为了保持可读性，主文件应遵守如下准则：

* 每个 @import引用一个文件；
* 每个 @import单独一行；
* 从相同文件夹中引入的文件之间不用空行；
* 从不同文件夹中引入的文件之间用空行分隔；
* 忽略文件扩展名和下划线前缀。

## License

**MIT**
