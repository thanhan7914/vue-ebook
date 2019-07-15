import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/app.styl'
import './assets/css/main.styl'

/* eslint-disable-next-line no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
