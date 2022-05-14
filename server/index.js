const Webpack = require('webpack')
const WebpackDevServer= require("webpack-dev-server")
const webpackConfig = require('../build/webpack.config.jsfig.js')

const compiler=Webpack(webpackConfig)
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server =new WebpackDevServer(devServerOptions,compiler)

const runServer=async () =>{
    console.log("starting server...");
    await server.start()
}

runServer()