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
  }
})
