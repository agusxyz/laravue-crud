
import Vue from 'vue'

import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

import App from './App.vue'
import Example from './components/Example.vue'
import CreateItem from './components/CreateItem.vue'
import DisplayItem from './components/DisplayItem.vue'
import EditItem from './components/EditItem.vue'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  {
    name: "CreateItem",
    path: '/items/create',
    component: CreateItem
  },
  {
    name: "DisplayItem",
    path: "/",
    component: DisplayItem
  },
  {
    name: "EditItem",
    path: "/edit/:id",
    component: EditItem
  }
]

const router = new VueRouter({ mode: 'history', routes: routes })

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
