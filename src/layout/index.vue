<template>
  <div class='wrapper'>
      <el-container direction='vertical'>
  <el-header>

     <el-menu
         :default-active="activeIndex"
         class="el-menu-demo"
         mode="horizontal"
        @select="handleSelect"
        background-color="#1b2945"
        text-color="#aeb9bc"
        active-text-color="white"
        router
        >     
             <el-menu-item index="0">
                    <img src="../assets/icon.png" alt="">
                </el-menu-item>
                <el-menu-item index="/market">行情</el-menu-item>
                <el-menu-item index="/more/fabi">法币交易</el-menu-item>
                <el-menu-item index="/more/coin">币币交易</el-menu-item>
            
                <!-- 如果状态是未登录，则显示登录注册连接 -->
             <el-menu-item index="/login"  v-if="!isLogin">登录/注册</el-menu-item>
          
              <!-- 如果状态是登录的才显示订单资产 -->
             <el-submenu index="4"  v-if='isLogin' class='right'>
              <template slot="title">订单</template>
              <el-menu-item index="4-1">法币订单</el-menu-item>
              <el-menu-item index="4-2">币币订单</el-menu-item>
             </el-submenu>

             <el-submenu index="5" v-if='isLogin' class='right'>
              <template slot="title">资产</template>
              <el-menu-item index="/more/assets/fabi">法币资产</el-menu-item>
              <el-menu-item index="/more/assets/coin">币币资产</el-menu-item>
             </el-submenu>

             <el-submenu index="6" v-if='isLogin' class='right'>
              <template slot="title">
                  <i class="el-icon-user"></i>
              </template>
              <el-menu-item index="6-1">身份验证</el-menu-item>
              <el-menu-item index="6-3">账户信息</el-menu-item>
              <el-menu-item index="6-3">退出</el-menu-item>
             </el-submenu>      
        </el-menu>
        </el-header>
        <el-main >
             <router-view/>
        </el-main>
        </el-container>
  </div>
</template>

<script>

export default {
  data() {
      return {
        // isLogin:false,
        activeIndex: '1'
      }
    },
    // created(){
    //  this.isLogin = this.$store.state.token?true:false
    //  console.log(this.isLogin)
    // },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  async mounted(){
    //  let {btcusdt} = await this.$http.get('/k')
    //  console.log(btcusdt)
     let ret = await this.$http.get('/market')
     console.log(ret)
  },
  computed:{
     isLogin(){
       return this.$store.state.token
     }
  }
}
</script>

<style scoped>

    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
    .wrapper {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .el-container {
        height: 100%;
        padding: 0;
    }
    .right {
        float: right !important;
    }
    body{
        padding:0
    }
    .el-header {
    /* background-color: #B3C0D1; */
    padding: 0;
    color: #333;
    text-align: center;
  }

  
  .el-main {
    background-color:#28344d;
    padding: 0;
    color:#333;
    text-align: center;
    position: relative;
  }

  
</style>