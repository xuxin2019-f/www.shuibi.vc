import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../layout/index.vue";



Vue.use(VueRouter)

// 通用页面路由  这些页面不需要路由守卫
export const constRoutes = [
  {
    path: '/',
    component:Layout,
    redirect:'/home',
    children:[
      {
       path:'/home',
       component: ()=>import('../components/Home')
      },
      {
        path:'/login',
        component: ()=>import('../components/login')
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
  },
  {
    path:'/more',
    component:Layout,
    children:[
      {
        path:'coin',
        component:()=>import('../components/Traid/coin')
      },
      {
        path:'fabi',
        component:()=>import('../components/Traid/fabi')
      }
    ]
  }
]

export default new VueRouter({
    routes:constRoutes
})