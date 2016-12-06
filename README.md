# vue-ssr-hmr-template

> a interesting Vue project template

- Vue2
- Webpack2 
- HotModuleReplacement 
- Server Side Render
- Express

## Build Setup

``` bash
# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run app
npm start
```

## Directory

- build     webpack config
- client    front end project
- server    back end project (router/view) 
- app.js    app entry

## Auto Webpack Entry

getEntries(
    webpackHotMiddlewareConfig, // String  webpackHotMiddlewareConfig,
    exceptList, // Array except some dir in client
    isServer // Boolean
)

```
const getEntries = require('./getEntries')
const webpackHotMiddlewareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'

const developmentConf = merge(baseConfig, {
    ...

    entry: getEntries(webpackHotMiddlewareConfig, [], false)

    ...
})
```

## Server Side Render 

[vue-ssr](https://github.com/hilongjw/vue-ssr)
[vue-server-renderer](https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer)

## License

[The MIT License](http://opensource.org/licenses/MIT)