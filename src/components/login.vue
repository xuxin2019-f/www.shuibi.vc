<template>
    <div class="login-wrap">
        <el-form class="login-container"
         :model="loginForm" ref="LoginFormRef" :rules="loginFormRules">
            <span>欢迎登录</span>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="账户" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%;" @click="Login()">登录</el-button>
            </el-form-item>
            <el-row style="text-align: center; margin-top: -10px;;">
                <el-link type="primary" @click="doRegister()">用户注册</el-link>
            </el-row>
        </el-form>
    </div>
</template>

<script>
export default {
   data(){
     return {
      //数据绑定
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '登录名长度在 3 到 10 个字符',
            trigger: 'blur'
          }
        ],
        password:[
          {required: true, message: '请输入密码', trigger: 'blur'},
          {
            min:6,
            max:15,
            message: '密码长度在6-15个字符',
            trigger:'blur'
          }
        ]
      }
     }
   },
   methods:{
     Login(){
       this.$refs.LoginFormRef.validate(async valid => {
         if(!valid){
           return
         }
        //  校验成功 这里写业务逻辑：请求数据
        // this.$store.commit('change')
        // this.$router.push('/market')
        // 这里应该写axios请求，比如
        // const token = this.$http.post('/login').then(
        //      res.getHeader('token')
        // ) 这里先写死
        this.$store.commit('login','123')
        if(this.$store.state.token){
          sessionStorage.setItem('token',this.$store.state.token)
          this.$router.push('/home')
        }
       } )
     },
     doRegister(){
       this.$router.push('/register')
     }
   }
}
</script>

<style scoped>
/* 设置背景色 */
   .login-wrap {
     /* align-self: center; */
     margin: 100px auto;
     width:30%;
     height: 400px;
     background-color:white;
   }
   .el-form{
     width: 100%;
     height: 100%;
   }
   span{
     font-size: 25px;
     text-align: center;
     line-height: 100px;
   }
   .el-form-item {
     width: 70%;
     margin: 10px auto;
     padding: 10px;
   }
</style>

