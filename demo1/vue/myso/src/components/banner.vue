<template>
    <div class="bannerBox">
        <div class="block">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
            </el-carousel>
        </div>
        <img src="../../static/img/logo.png" alt="logo.png">
        <img src="../../static/img/kongb.png" alt="kongb.png">
        <img src="../../static/img/proof.png" alt="proof.png">
    </div>
    
</template>

<script>
export default {
  data() {
      return {
          list:[

          ]
      }
  }
}
</script>
<style>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
