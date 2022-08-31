import { createRouter, createWebHistory } from 'vue-router'
import login from '/src/views/login.vue'
// import main from '/src/views/main.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'main',
    component: ()=> import('/src/views/main.vue')
  },
  // {path: "/:domain(.*)*",
  // name:"notfuond",
  // component: ()=> import('/src/views/404')}
]

export default createRouter({ history, routes })