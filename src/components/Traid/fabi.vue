<template>
  <div class="fabicontainer">
    <el-card>
      <!-- 一级tabs -->
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane :label="i" :name="i" v-for="(i,index) in lineData1" :key="index">
          <!-- 二级tabs -->
          <el-tabs v-model="lineactiveName" @tab-click="handleClick">
            <el-tab-pane v-for="(item,index) in lineData2" :key="index" :label="item" :name="item">
              <!-- 交易列表 -->
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="info" label="用户信息" width="250">
                  <template slot-scope="scope">
                    <span class="info">
                      <img class="avatar" src="../../assets/logo.png" alt />
                      {{scope.row.info.name}}
                    </span>
                  </template>
                </el-table-column>
                <el-table-column prop="amount" label="委托量" width="200"></el-table-column>
                <el-table-column prop="limit" label="限额" width="200"></el-table-column>
                <el-table-column prop="single" label="单价" width="200"></el-table-column>
                <el-table-column prop="way" label="支付方式" width="200">
                  <template slot-scope="scope">
                    <el-link
                      type="primary"
                      v-if="scope.row.way==='支付宝'"
                      :underline="false"
                    >{{scope.row.way}}</el-link>
                    <el-link type="warning" v-else :underline="false">{{scope.row.way}}</el-link>
                  </template>
                </el-table-column>
                <el-table-column prop="traid" label="交易" width="180">
                  <el-button type="primary">{{`${i}${item}`}}</el-button>
                  <!-- <template slot-scope="scope">
                    <el-button>{{`购买${scope.row.traid}`}}</el-button>
                  </template>-->
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '购买',
      lineactiveName: 'BTC',
      lineData1: ['购买', '出售'],
      lineData2: [
        'BTC',
        'ETH',
        'USDT',
        'EOS',
        'XRP',
        'LTC',
        'HT',
        'HUSD',
        'BCH'
      ],
      tableData: []
    }
  },
  async mounted() {
    // 默认加载BTC的所有卖家信息
    const { data } = await this.$http.get(`/more/fabi/buy-BTC`)
    this.tableData = data
  },
  methods: {
    async handleClick(tab, event) {
      console.log(tab.name)
      // 点击二级菜单渲染不同币种的卖家信息
      const { data } = await this.$http.get(`/more/fabi/buy-${tab.name}`)
      this.tableData = data
    }
  }
}
</script>

<style lang='scss'>
.fabicontainer {
  .el-card {
    width: 80%;
    margin: 30px auto;
    .el-table {
      span {
        display: inline-block;
        .avatar {
          width: 20px;
          height: 20px;
        }
      }
    }
    // 用伪元素去除边框
    .el-tabs__nav-wrap::after {
      height: 0;
    }
  }
}
</style>