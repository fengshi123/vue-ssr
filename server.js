const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const microcache = require('route-cache')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
const { generateImage } = require('./server/canvas-echart.js')
var serverData = require('./server/server-data.js');

// process.env.NODE_ENV 为 undefined
const isProd = process.env.NODE_ENV === 'production'
const useMicroCache = process.env.MICRO_CACHE !== 'false'
const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()

// 服务端渲染相关配置
function createRenderer (bundle, options) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(bundle, Object.assign(options, {
    // 组件级别的缓存（不起作用？）
    cache: LRU({
      max: 1000 * 60 * 15,
      maxAge: 1000 * 60 * 15
    }),
    // 把路径解析为绝对路径
    basedir: resolve('./dist'),
    // runInNewContext: true(默认)  对于每次渲染，bundle renderer 将创建一个新的 V8 上下文并重新执行整个 bundle
    // 优点：无需担心状态单例问题；缺点：性能开销大
    runInNewContext: false
  }))
}

let renderer
let readyPromise
const templatePath = resolve('./src/index.template.html')
if (isProd) {
  // 读取html模板
  const template = fs.readFileSync(templatePath, 'utf-8')
  // bundle 为服务端渲染入口
  const bundle = require('./dist/vue-ssr-server-bundle.json')
  // clientManifest 为客户端渲染入口
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    template,
    clientManifest
  })
} else {
  // 开发环境：使用 setup-dev-server.js  并且有监听和热重载功能
  readyPromise = require('./build/setup-dev-server')(
    app,
    templatePath,
    (bundle, options) => {
      renderer = createRenderer(bundle, options)
    }
  )
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 }))
app.use(favicon('./public/favicon.png'))
app.use('/dist', serve('./dist', true))
app.use('/public', serve('./public', true))
app.use('/manifest.json', serve('./manifest.json', true))
app.use('/service-worker.js', serve('./dist/service-worker.js'))

// 页面级缓存，因为这个例子，所有用户访问的页面是一致的，所以开启缓存
app.use(microcache.cacheSeconds(1, req => useMicroCache && req.originalUrl))


// 前端请求的接口 api
app.get('/api/getUserlist', (req, res) => {
  console.log('/api/getUserlist调用...');
  res.json(serverData.userlist);
});

// 前端请求的接口 api
app.get('/api/getMovielist', (req, res) => {
  console.log('/api/getMovielist调用...');
  res.json(serverData.movielist)
});

// 前端请求的接口 api
app.get('/api/getAnalysis', (req, res) => {
  console.log('/api/getAnalysis调用...');
  var imgpath1 = '/public/11.jpg';
  generateImage(serverData.option1,__dirname+imgpath1);

  var imgpath2 = '/public/12.jpg';
  generateImage(serverData.option2,__dirname+imgpath2);
  res.json([imgpath1, imgpath2])
});

// 头部设置，以及页面返回逻辑处理：正常、404、500等
function render (req, res) {
  const s = Date.now()

  res.setHeader("Content-Type", "text/html")
  res.setHeader("Server", serverInfo)

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }
  // 模板插值显示数据，显示在 index.template.html 模板中
  const context = {
    title: 'Movie',
    url: req.url
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
    res.send(html)
    if (!isProd) {
      console.log(`whole request: ${Date.now() - s}ms`)
    }
  })
}

app.get('*', isProd ? render : (req, res) => {
  readyPromise.then(() => render(req, res))
})

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
