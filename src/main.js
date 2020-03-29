import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "./assets/css/global.css"
// 路由守卫
import "./permission";
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL:'回头再写',
  withCredentials:true,//跨域时若要发送cookies需设置该选项
  timeout:5000 //超时
})

// 请求拦截器
service.interceptors.request.use(
  config=>{
    // 为请求头对象，添加token验证的Authorization字段
    // 或者用vuex中的token，这个到时候再定
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
  },
  error =>{
    // 请求错误预处理
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 这里可以通过自定义code判断响应状态，也可以通过HTTP状态码判断
  response =>{
    const res = response.data
    // 现在先不写东西，只是过滤只剩下返回数据的data数据
    return res
  }
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
