import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import SubmitTopic from '../views/SubmitTopic'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/toLogin',
    component: Login
  },
  {
    path: '/toRegister',
    component: Register
  },
  {
    path: '/toSubmitTopic',
    component: SubmitTopic
  },
  {
    path: '/about',
    name: 'about',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
