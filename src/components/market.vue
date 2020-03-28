<template>
  <div class='container'> 
    <el-row :gutter='10'>
      <!-- 左边 -->
       <el-col :span='18'>
         <el-card class='left-card'>
           <el-table
    :data="tableData"
    style="width: 100%"
    fit
    highlight-current-row
    @row-click='showdetail'>
    <el-table-column
      prop="type"
      label="币种"
      width="200">
    </el-table-column>
    <el-table-column
      prop="newprice"
      label="最新价(美元)"
      width="200"
      sortable>
    </el-table-column>
    <el-table-column
      prop="change"
      label="折合CYN价"
      width="200"
      sortable>
    </el-table-column>
    <el-table-column
      prop="rise"
      label="涨幅"
      width="200"
      sortable>
      <el-tag type="danger">{{tableData[0].rise}}</el-tag>
    </el-table-column>
    <el-table-column
      prop="oneday"
      label="24H量"
      width="200">
    </el-table-column>
    <el-table-column
      prop="onedayTraiding"
      label="24H交易量"
      width="200"
      sortable>
    </el-table-column>
  </el-table>
         </el-card>
       </el-col>
      <!-- 右边 -->
       <el-col :span='6'>
          <el-card class='right-card'>
          <div slot="header" class="clearfix">
            <span class='title'>概况</span>
         </div>
          <div class='header'>
            <span>{{detail.type}}</span>
          </div>
          <div class='content'>
            <el-tabs v-model="activeName">
             <el-tab-pane label="基本信息" name="first">
               <div>
                 <ul>
                   <li>
                     <span>发行时间</span>
                     <span>{{detail.publictime}}</span>
                   </li>
                   <li>
                     <span>发行总量</span>
                     <span>{{detail.publicamount}}</span>
                   </li>
                   <li>
                     <span>简介</span>
                   </li>
                   <li>
                       <p>
                       这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介
                       这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介
                       这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介
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
  data(){
    return{
      activeName:'first',
      tableData:[{
        type:'ETH',
        newprice:'6256.20',
        change:'￥87663.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'8427.20',
        change:'￥45623.22',
        rise:'-7.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6436.20',
        change:'￥45468.22',
        rise:'-3.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      },
      {
        type:'BTC',
        newprice:'6256.20',
        change:'￥45623.22',
        rise:'-5.58%',
        oneday:'60843',
        onedayTraiding:'¥ 2,910,692,511'
      }
      ],
      detail:{
        type:'BTC',
        publictime:'2018-11-1',
        publicamount:'21,000,000',
        info:'这里是简介'
      }
    }
  },
  methods:{
    showdetail(row){
      console.log(row.type)
      this.detail.type = row.type
    }
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
  }
  .el-row{
    width: 100%;
  }
  .left-card{
    height: 90%;
    overflow-y:auto;
    overflow-x:hidden;
  }
  .right-card{
    display: flex;
    flex-direction: column;
  }
  .el-table{
    height: 100%;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .el-card__header {
     background-color:#a8c4e0;
   }
   .title{
     font-size: 18px;
     font-weight: bolder;
     margin-left: -340px;
   }
   .header>span{
     font-size: 30px;
     font-weight: normal;
     margin-left: -310px;
     margin-bottom: 50px;
   }
   li{
     margin:10px;
     display: flex;
     flex-wrap: nowrap;
     align-content: space-between;
     position: relative;
   }
   li>span:nth-child(1){
     font-size: 17px;
     align-self: flex-start;
     color:#9ca9b5;
   }
   li>span:nth-child(2){
     font-size: 15px;
     position: absolute;
     right: 0;
   }
   li>p{
     margin-top:-5px;
   }
  .clearfix:after {
    clear: both
  }
</style>