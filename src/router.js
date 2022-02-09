import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => import("./views/About.vue")
const Users = () => import("./views/Users")
const Test = () => import("./views/Test")


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about-name',
      component:About,
    },
    {
      path: '/users/:userId',
      name: 'users',
      component:Users,
    },
    {
      path: '/test/:testNumver',
      name: 'test',
      component:Test,
    }
  ]
})
