import router from "./router";
import store from "./store";
import { Message } from "element-ui";

// 设置通行白名单
const whiteList = ['/home','/login','/register','/market']

router.beforeEach(async (to,from,next)=>{
    // 以后这里会根据是否有令牌来判断是否登录，现在先根据store里的状态判断
    const isLogin = store.state.isLogin

    if(isLogin){
        next()
    } else {
        if(whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})