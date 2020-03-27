import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../layout/index.vue";
import Login from '../components/login'

Vue.use(VueRouter)

// 通用页面路由  这些页面不需要路由守卫
export const constRoutes = [
  {
    path: '/',
    component:Layout,
    redirect:'/login',
    children:[
      {
        path:'/login',
        component: Login
      },
      {
        path:'/register',
        component:()=>import('../components/register')
      },
      {
        path:'/market',
        component:()=>import('../components/market')
      }
    ]
  }
]

export default new VueRouter({
    routes:constRoutes
})