import Vue from 'vue'
import App from './App.vue'

import { mixin } from "./mixin";
Vue.config.productionTip = false
Vue.mixin(mixin)//全局混合
new Vue({
        el: '#app',
        render: h => h(App)
})