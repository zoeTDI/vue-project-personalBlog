/*
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 12:25:15
 * @LastEditors: Caldm
 * @LastEditTime: 2024-11-06 08:27:21
 * @FilePath: \期末作业\config\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict'
// 模板版本: 1.3.1
// 请参阅 http://vuejs-templates.github.io/webpack 获取文档。

const path = require('path')

module.exports = {
  dev: {

    // 路径
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // 各种开发服务器设置
    host: 'localhost', // 可以被 process.env.HOST 覆盖
    port: 8080, // 可以被 process.env.PORT 覆盖，如果端口被占用，会选择一个空闲的端口
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // 使用 Eslint Loader？
    // 如果为 true，在打包过程中会检查代码，
    // 并在控制台显示 ESLint 错误和警告。
    useEslint: true,
    // 如果为 true，ESLint 错误和警告也会在浏览器的错误覆盖层中显示。
    showEslintErrorsInOverlay: false,

    /**
     * 源映射
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // 如果你在开发工具中调试 Vue 文件时遇到问题，
    // 将此设置为 false - 它 *可能* 会有帮助
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // index.html 的模板
    index: path.resolve(__dirname, '../dist/index.html'),
    // index: path.resolve('D:/Documents/01-study/CodeVault/JavaWeb/out/artifacts/JavaWeb_war_exploded/dist/index.html'),

    // 路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // assetsRoot: path.resolve('D:/Documents/01-study/CodeVault/JavaWeb/out/artifacts/JavaWeb_war_exploded/dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * 源映射
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // 默认关闭 Gzip，因为许多流行的静态主机如
    // Surge 或 Netlify 已经为所有静态资源进行了 Gzip 压缩。
    // 在设置为 `true` 之前，请确保已安装：
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // 使用额外的参数运行构建命令，
    // 在构建完成后查看 bundle 分析报告：
    // `npm run build --report`
    // 设置为 `true` 或 `false` 以始终开启或关闭
    bundleAnalyzerReport: process.env.npm_config_report
  }
}