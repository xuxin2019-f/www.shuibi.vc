<template>
  <div class="container">
    <el-row :gutter="10">
      <!-- 左边 -->
      <el-col :span="18">
        <el-card class="left-card">
          <!-- 搜索框 -->

          <div class="input">
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入想要搜索的币种"
              prefix-icon="el-icon-search"
              @select="handleSelect"
            ></el-autocomplete>
          </div>

          <!-- 表格主题 -->
          <el-table
            :data="tableData"
            style="width: 100%"
            fit
            highlight-current-row
            @row-click="showdetail"
            :height="winheight"
          >
            <el-table-column prop="value" label="币种" width="200">
            </el-table-column>
            <el-table-column prop="low" label="当前最低价" width="200" sortable>
            </el-table-column>
            <el-table-column
              prop="high"
              label="当前最高价"
              width="200"
              sortable
            >
            </el-table-column>
            <el-table-column prop="bid[1]" label="涨幅" width="200" sortable>
              <!-- 使用作用域插槽 -->
              <template slot-scope="scope">
                <el-tag v-if="scope.row.bid[1] > 0" type="success">{{
                  scope.row.bid[1]
                }}</el-tag>
                <el-tag v-else-if="scope.row.bid[1] === 0" type="info">{{
                  scope.row.bid[1]
                }}</el-tag>
                <el-tag v-else type="danger">{{ scope.row.bid[1] }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="count" label="24H量" width="200">
            </el-table-column>
            <el-table-column
              prop="amount"
              label="24H交易量"
              width="200"
              sortable
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <!-- 右边 -->
      <el-col :span="6">
        <el-card class="right-card">
          <div slot="header" class="clearfix">
            <span class="title">概况</span>
          </div>
          <div class="header">
            <span>{{ detail.type }}</span>
          </div>
          <div class="content">
            <el-tabs v-model="activeName">
              <el-tab-pane label="基本信息" name="first">
                <div>
                  <ul>
                    <li>
                      <span>发行时间</span>
                      <span>{{ detail.publictime }}</span>
                    </li>
                    <li>
                      <span>发行总量</span>
                      <span>{{ detail.publicamount }}</span>
                    </li>
                    <li>
                      <span>简介</span>
                    </li>
                    <li>
                      <p>
                        {{ detail.info }}
                      </p>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winheight: window.innerHeight - 110,
      activeName: "first",
      // 搜索框内容
      state: "",
      tableData: [],
      detail: {
        type: "BTC",
        publictime: "2018-11-1",
        publicamount: "21,000,000",
        info: "这里是简介"
      }
    };
  },
  async mounted() {
    let { usdt } = await this.$http.get("/market");
    this.tableData = usdt;
  },
  methods: {
    showdetail(row) {
      console.log(row.info);
      this.detail.type = row.value;
      this.detail.info = row.info;
    },
    // 默认应该是传入搜索框的输入内容
    querySearchAsync(queryString, cb) {
      var data = this.tableData;
      var results = queryString
        ? data.filter(this.createStateFilter(queryString))
        : data;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 300);
    },
    createStateFilter(queryString) {
      return state => {
        // state.value指定是遍历value属性,indexOf!==保证模糊搜索
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
        );
      };
    },
    handleSelect(item) {
      this.tableData = [];
      this.tableData.push(item);
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}
.el-row {
  width: 100%;
}
.right-card {
  display: flex;
  flex-direction: column;
}
.el-table {
  height: 100%;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.el-card__header {
  background-color: #a8c4e0;
}
.title {
  font-size: 18px;
  font-weight: bolder;
  margin-left: -340px;
}
.header > span {
  font-size: 30px;
  font-weight: normal;
  margin-left: -310px;
  margin-bottom: 50px;
}
li {
  margin: 10px;
  display: flex;
  flex-wrap: nowrap;
  align-content: space-between;
  position: relative;
}
li > span:nth-child(1) {
  font-size: 17px;
  align-self: flex-start;
  color: #9ca9b5;
}
li > span:nth-child(2) {
  font-size: 15px;
  position: absolute;
  right: 0;
}
li > p {
  margin-top: -5px;
}
.clearfix:after {
  clear: both;
}
.input {
  float: left;
}
</style>
