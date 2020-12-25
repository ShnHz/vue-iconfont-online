import Vue from 'vue'
import App from './App.vue'

import IconFontOnline from '../src/index';
Vue.use(IconFontOnline, {
  url: '//at.alicdn.com/t/font_2292720_gpwudclzhf6.css',
  symbol: 'alibaba-',
  fontFamily: 'alibaba-icon',
  fontSize: 22
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')