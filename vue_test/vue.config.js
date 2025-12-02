const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // 转译依赖
  transpileDependencies: true,

  // 关闭 ESLint 校验
  lintOnSave: false,

  // Webpack 配置
  configureWebpack: {
    resolve: {
      alias: {
        // 使用完整版 Vue（带编译器）
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  //开启代理服务器(方式一)
  /* devServer: {
    proxy: 'http://localhost:5000'
  }, */
  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/stu': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/stu': '' },
        ws: true,//用于支持websocket
        changeOrigin: true//用于控制请求头中的host值
      },
      '/car': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/car': '' },
        ws: true,//用于支持websocket
        changeOrigin: true//用于控制请求头中的host值
      },
    }
  }
})
