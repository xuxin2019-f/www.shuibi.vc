<template>
  <div class="fabicontainer">
    <el-card>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="购买" name="first">
          <el-tabs v-model="lineactiveName" @tab-click="handleClick">
            <el-tab-pane v-for="(item,index) in lineData1" :key="index" :label="item" :name="item">
              <!-- 交易列表 -->
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="info" label="用户信息" width="180">
                  <template slot-scope="scope">
                    <span class="info">
                      <img class="avatar" src="../../assets/logo.png" alt />
                      {{scope.row.info.name}}
                    </span>
                  </template>
                </el-table-column>
                <el-table-column prop="amount" label="委托量" width="180"></el-table-column>
                <el-table-column prop="limit" label="限额" width="180"></el-table-column>
                <el-table-column prop="single" label="单价" width="180"></el-table-column>
                <el-table-column prop="way" label="交易方法" width="180"></el-table-column>
                <el-table-column prop="traid" label="购买" width="180"></el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>

        <el-tab-pane label="出售" name="second">用户管理</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      lineactiveName: 'BTC',
      lineData1: [
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
      tableData: [
        {
          info: { url: '../../assets/logo.png', name: 'xx最可爱' },
          amount: '0.77002180BTC',
          limit: '10,000-37,529CNY',
          single: '48,7000CNY',
          way: '银行卡',
          traid: 'BTC'
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang='scss'>
.fabicontainer {
  .el-card {
    width: 90%;
    margin: 30px auto;
    .el-table {
      // span {
      //   position: relative;
      //   margin-left: 30px;
      //   &:before {
      //     content: '';
      //     position: absolute;
      //     display: inline-block;
      //     left: -29px;
      //     top: 0;
      //     width: 20px;
      //     height: 20px;
      //     background-color: blue;
      //     border-radius: 50%;
      //   }
      // }
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