import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueResource)
new Vue({
        el: '#app',
        render: h => h(App),
        beforeCreate() {
                Vue.prototype.$bus = this//安装全局事件总线
        }
})
