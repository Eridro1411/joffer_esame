import Vue from 'vue'
import App from './App.vue'

import "./tailwind.css"

import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes=[
  
]

const router = new VueRouter({
  mode: history,
  routes})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
