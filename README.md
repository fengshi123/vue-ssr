# vue-ssr

This instance built with Vue 2.0 + vue-router + vuex + element-ui + echart.js, with server-side rendering.

<p align="center">
   <img src="https://github.com/fengshi123/vue-ssr/blob/master/public/demo1.png" width="1000px">
   <img src="https://github.com/fengshi123/vue-ssr/blob/master/public/demo2.png" width="1000px">
   <img src="https://github.com/fengshi123/vue-ssr/blob/master/public/demo3.png" width="1000px">
</p>

## 特点

> Note: 这个项目是在尤大大给出的官方demo实例 HackerNews Demo 上进行改造的，克服尤大大给的 HackerNews Demo 需要翻墙才能运行起来的问题，新手在阅读SSR官方文档时，如果遇到疑惑点，可以直接在本文实例的基础上进行相关实验验证，从而解决疑惑，帮助国内ssr初学者更容易入门；并且本实例使用最受欢迎的vue ui库element-ui组件库和可视化echarts插件，演示如何在ssr中使用ui库以及进行数据可视化等。

## SSR 结构示意图

<img width="973" alt="screen shot 2016-08-11 at 6 06 57 pm" src="https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png">

**vue ssr 官方文档见连接 [here](https://ssr.vuejs.org).**

## 构建步骤

**需要 Node.js 7+ （作者使用的版本为：node.js 8.2.1  npm 5.3.0）**

``` bash
# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:80
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## License

MIT
