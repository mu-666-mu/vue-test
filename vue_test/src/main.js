//入口文件
import Vue from 'vue'
import App from './App.vue'
//所有组件的父组件

Vue.config.productionTip = false
//关闭vue生产提示

new Vue({
  el: '#app',
  render: h => h(App),
  //将app组件放入容器
})
