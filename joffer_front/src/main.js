import Vue from 'vue'
import App from './App.vue'
import Detail from "./components/Dettaglio.vue"
import List from "./components/Lista.vue"
import Edit from "./components/Modifica.vue"
import Create from "./components/Creazione.vue"


import "./tailwind.css"

import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes=[
  {
    path: "/home",
    name: "home",
    component: App
  },
  {
    path: "",
    redirect:"/home"
  },
  {
    path:"/detail/:id",
    name: "detail",
    component: Detail
  },
  {
    path:"/list",
    name: "list",
    component: List
  },
  {
    path:"/edit",
    name: "edit",
    component: Edit
  },
  {
    path:"/create",
    name: "create",
    component: Create
  },
]

const router = new VueRouter({
  mode: "history",
  routes})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
