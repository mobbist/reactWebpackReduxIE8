# web前端构建解决方案
>使用webpack 来尝试设计一个前端构建解决方案

## 目录设计
```
项目名称 ------- 平台 ------ build
                           src 
```
### 项目名称
该项目所需要用的名称,也是项目根目录, 有些是大的项目, 比如商城类的, 有些是小的项目, 比如1~2个页面的活动, 这些可以根据项目再进行细分是否需要支持redux

### 平台
该项目运行于什么平台, pc 或者是 混合APP  H5等等


### build
最终生产环境的页面, 给测试或者后端直接拉取


### src
相关源码,webpack所编译的页面


## PC端兼容IE8web前端解决方案
在入口页面需要加载几段JS
```
require('es5-shim');
require('es5-shim/es5-sham');
```
react和react-dom 需要使用 0.14.9的版本,
react-redux 使用 @4.2.1
redux 使用 @3.2.1

## 在兼容IE8浏览器的基础上实现redux单项数据流
在src中的JS中分模块
js - index
js - list
js - member
然后在需要使用redux的模块下创建
index.action.js
index.container.js
index.reduce.js
这样的话, 在个别不复杂的模块则不需要使用redux来进行分离