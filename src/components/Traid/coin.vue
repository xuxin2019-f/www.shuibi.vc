<template>
  <div>
    <el-row>
      <el-col :span="8">
        <!-- 二维列表 -->
        <!-- 横向选择 -->
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <el-tab-pane v-for="item in lineData" :key="item" :label="item" :name="item">
            <!-- 搜索框 -->
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入想要搜索的币种"
              prefix-icon="el-icon-search"
              @select="handleSelect"
            ></el-autocomplete>

            <!-- 表格列表 -->
            <el-table
              class="cointable"
              :data="tableData"
              style="width: 100%"
              fit
              highlight-current-row
              @row-click="showdetail"
              :height="winheight"
            >
              <el-table-column prop="value" label="币种" width="150" sortable></el-table-column>
              <el-table-column prop="close" label="最新价" width="200" sortable></el-table-column>
              <el-table-column prop="rise" label="涨幅" width="180" sortable></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="16">
        <!-- k线图 -->
        <div id="echartContainer" ref="echartContainer" style="width:100%; height:500px"></div>
        <!-- 购买和出售 -->
        <div class="traid">
          <el-row :gutter="50">
            <el-col :span="12">
              <el-form ref="buyform" :model="buyform">
                <el-form-item label="买入价">
                  <el-input v-model="buyform.value"></el-input>
                </el-form-item>
                <el-form-item label="买入量">
                  <el-input v-model="buyform.count"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button>买入</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="12">
              <el-form ref="sellform" :model="sellform">
                <el-form-item label="卖入价">
                  <el-input v-model="sellform.value"></el-input>
                </el-form-item>
                <el-form-item label="卖入量">
                  <el-input v-model="sellform.count"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button>卖出</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
var echarts = require('echarts')
import { rawData, calculateMA, dates, data, option } from '../../kline'
export default {
  data() {
    return {
      winheight: window.innerHeight - 200,
      activeName: '自选',
      // 横向数据
      lineData: ['自选', 'USDT', 'HUSD', 'BTC', 'ETH', 'HT', 'ATLS'],
      // 纵向数据
      tableData: [],
      // 搜索框内容
      state: '',
      // 买入
      buyform: {
        value: '',
        count: ''
      },
      // 卖出
      sellform: {
        value: '',
        count: ''
      }
    }
  },
  mounted() {
    var charts = echarts.init(this.$refs.echartContainer)
    charts.setOption(option)
  },
  methods: {
    async handleClick(tab, event) {
      // console.log(tab.label)
      let ret = await this.$http.get(`/coin/detail/${tab.label}`)
      // console.log(ret.data)
      this.tableData = ret.data
    },
    // 默认应该是传入搜索框的输入内容
    querySearchAsync(queryString, cb) {
      var data = this.tableData
      var results = queryString
        ? data.filter(this.createStateFilter(queryString))
        : data

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 300)
    },
    createStateFilter(queryString) {
      return state => {
        // state.value指定是遍历value属性,indexOf!==保证模糊搜索
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
        )
      }
    },
    handleSelect(item) {
      this.tableData = []
      this.tableData.push(item)
    },
    showdetail(row) {
      console.log(row.info)
      this.detail.type = row.value
      this.detail.info = row.info
    },
    async getdetail() {
      // let { data } = await this.$http.get('/test')
      // let arr = []
      // for (let i = 0; i < data.length; i++) {
      //   arr.push(Object.values(data[i]))
      // }
      // console.log(arr)

      let { coin } = await this.$http.get('/coin/detail')
      // console.log(coin)
      this.lineData = coin
      console.log(this.lineData)
    }
  }
}
</script>

<style lang="scss">
.el-tabs {
  background-color: #28344d;
  border: none;
  // display: flex;
  padding: 0;
  // 页面缩小左右滑动框背景颜色
  .el-tabs__nav-wrap.is-scrollable {
    background-color: #28344d;
  }
  .el-tabs__nav-scroll {
    background-color: #28344d;
    .el-tabs__item {
      background-color: #28344d !important;
      border: none;
    }
  }
  .el-autocomplete {
    width: 80%;
    float: left;
    margin-bottom: 30px;
    .el-input__inner {
      background-color: #28344d;
    }
  }
  // 表格
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent !important;
  }

  .cointable th,
  .cointable tr {
    border: 0 !important;
    background-color: transparent !important;
  }
  .cointable tr {
    color: rgb(192, 189, 189);
  }
  .cointable th {
    color: #606266;
  }
  .el-table--border tr,
  td {
    border: none !important;
  }
  .el-table::before {
    height: 0;
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 15px; /*滚动条宽度*/
    height: 7px; /*滚动条高度*/
    background-color: rgb(169, 170, 173);
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(216, 39, 39, 0.3);
    background-color: rgb(0, 12, 46); /*滚动条的背景颜色*/
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgb(0, 12, 46) !important;
  }
  .el-table thead {
    color: #606266 !important;
  }
}

.traid {
  .el-form-item {
    width: 80%;
    margin: 0 auto;
    .el-button {
      margin-top: 30px;
    }
  }
}
</style>
