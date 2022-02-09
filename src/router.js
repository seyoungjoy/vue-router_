import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => import("./views/About.vue")
const Users = () => import("./views/Users")
const UsersDetail = () => import("./views/UsersDetail")
const UsersEdit = () => import("./views/UsersEdit")
const Test = () => import("./views/Test")
const CarDetail = () => import("./views/CarDetail")
const CarEdit= () => import("./views/CarEdit")



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
      path: '/users',
      name: 'users',
      component:Users,
      children:[
        {
          path:':id',
          name:'users-detail',
          component:UsersDetail,
        },
        {
          path:':id/edit',
          name:'users-edit',
          component:UsersEdit,
        },
      ]
    },
    {
      path: '/test',
      name: 'test',
      component:Test,
      children:[
        {
          path:':id',
          name:'car-detail',
          component:CarDetail,
        },
        {
          path:':id/edit',
          name:'car-edit',
          component:CarEdit,
        },
      ]
    }
  ]
})
