<template>
  <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>币币账户</span>
        </div>
        <div class="text item">
          <span>这里是内容</span>
        </div>
      </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>