import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "./assets/css/global.css"
// 路由守卫
import "./permission";
import axios from 'axios'

// mockjs接口
import Mock from 'mockjs'
import mockData from './mock'

// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// import './assets/css/common.css'

// 创建axios实例
axios.defaults.baseURL = 'http://mockjs.com/api'
//跨域时若要发送cookies需设置该选项
axios.defaults.withCredentials = true
axios.defaults.timeout = 5000//超时

// 请求拦截器
axios.interceptors.request.use(
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
axios.interceptors.response.use(
  // 这里可以通过自定义code判断响应状态，也可以通过HTTP状态码判断
  response =>{
    const res = response.data
    // 现在先不写东西，只是过滤只剩下返回数据的data数据
    return res
  }
)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
