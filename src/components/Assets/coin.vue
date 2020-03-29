<template>
  <div>
      <!-- 头部 -->
      <el-card class="box-card1">
       <div  class="header">
        <span>币币账户</span>
       </div>
      </el-card>

       <!--主体内容  -->
      <div>
          <el-card class="box-card2">
        <div slot="header" class="clearfix">
              <span>总资产折合：0.00000000 BTC ≈ 0.00 CNY</span>
              <!-- 不加这层的话el-input和el-input prefix不一起动 -->
              <div class='input'>
                <el-autocomplete
                 v-model="state"
                 :fetch-suggestions="querySearchAsync"
                 placeholder="请输入想要搜索的币种"
                 prefix-icon="el-icon-search"
                 @select="handleSelect"
                ></el-autocomplete>
              </div>
        </div>
        <div class="text item">
          <!-- 列表显示 -->
          <el-table
           :data="tableData"
           style="width: 100%"
           fit
           highlight-current-row
          >
           <el-table-column
            prop="value"
            label="币种"
            width="250"
            sortable>
           </el-table-column>
           <el-table-column
            prop="have"
            label="持有量"
            width="300">
           </el-table-column>
            <el-table-column
            prop="calculate"
            label="BTC估值"
            width="250">
           </el-table-column>
            <el-table-column
            label="冻结"
            width="250">
            0.0000000000
           </el-table-column>
           <el-table-column
            label="操作"
            width="250">
            <el-button type="text">充币</el-button>
            <el-button type="text">提币</el-button>
           </el-table-column>
          </el-table>
        </div>
      </el-card>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          // 搜索框信息
          // restaurants: [],
          state: '',
          timeout:  null,
          // 数据列表
          tableData:[
              {
                  value:'ETH',
                  have:'1,000,000',
                  calculate:'0.00000000 ≈ 0.00 CNY'
              },
              {
                  value:'ETH',
                  have:'1,000,000',
                  calculate:'0.00000000 ≈ 0.00 CNY'
              },
              {
                  value:'BTC',
                  have:'1,000,000',
                  calculate:'0.00000000 ≈ 0.00 CNY'
              },
              {
                  value:'BTC',
                  have:'1,000,000',
                  calculate:'0.00000000 ≈ 0.00 CNY'
              },
              {
                  value:'BTC',
                  have:'1,000,000',
                  calculate:'0.00000000 ≈ 0.00 CNY'
              }
          ]
      }
  },
  methods:{
    // 默认应该是传入搜索框的输入内容
    querySearchAsync(queryString, cb) {
        var data = this.tableData;
        var results = queryString ? data.filter(this.createStateFilter(queryString)) : data;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 300);
      },
    createStateFilter(queryString) {
        return (state) => {
          // state.value指定是遍历value属性,indexOf!==保证模糊搜索
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
        };
      },
    handleSelect(item) {
        this.tableData = []
        this.tableData.push(item)
      }
  }
}
</script>

<style scoped>
  /* .input {
    width:30%
  } */
  .item {
    margin-bottom: 18px;
  }
  .clearfix span {
      position: absolute;
      left: 30px;
      font-size: 18px;
      float: left;
  }
  .input {
    float: right;
  }
  .clearfix{
      height: 30px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .header {
      font-size: 25px;
      font-weight: bold;
      position: absolute;
      left: 30px;
  }
  .box-card1 {
    position: absolute;
    margin-top: 30px;
    left: 50%;
    transform:translateX(-50%) ;
    width: 80%;
    height: 10%;
  }
  .box-card2 {
    position: absolute;
    margin-top: 130px;
    left: 50%;
    transform:translateX(-50%) ;
    width: 80%;
    height: 90%;
  }
</style>