const express = require('express')
const path = require('path')
const http = require('http')
global.NODE_ENV = process.env.NODE_ENV || 'production'

const PORT = 8080
const isDev = NODE_ENV === 'development';
const app = express()
const router = require('./server/routers/router')

app.set('views', path.join(__dirname, 'server/views'))
app.set('view engine', 'pug')

app.use(router)

if (isDev) {
    // local variables for all views
    app.locals.env = NODE_ENV;
    app.locals.reload = true;
    
    // static assets served by webpack-dev-middleware & webpack-hot-middleware for development
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpackDevConfig = require('./build/webpack.config.js')

    const compiler = webpack(webpackDevConfig)

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackDevConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true
        }
    }))

    app.use(webpackHotMiddleware(compiler))

    const server = http.createServer(app)

    app.use(express.static(path.join(__dirname, 'public')))

    server.listen(PORT, function(){
        console.log('App (dev) is now running on PORT '+ PORT +'!')
    })
} else {
    // static assets served by express.static() for production
    app.use(express.static(path.join(__dirname, 'public')))
    
    app.listen(PORT, function () {
        console.log('App (production) is now running on PORT '+ PORT +'!')
    })
}
