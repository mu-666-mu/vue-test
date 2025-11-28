import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
Vue.config.devtools = true

const vm = new Vue({
        el: '#app',
        render: h => h(App)
})
window.vm = vm