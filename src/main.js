import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import '../materialize-css/dist/js/materialize.min.js'

// import { createApp } from 'vue'

// import Paginate from 'vuejs-paginate'
// Vue.component('paginate-pages', Paginate)

// createApp(App).mount('#app')

new Vue({
  render: h=> h(App)
}).$mount('#app')
