<template>
    <div class="footer">
        <router-link :to="{path:'/home'}">
            <i class="iconfont icon-dianpu"></i>
            <span>首页</span>
        </router-link>
        <router-link :to="{path:'/home'}">
            <i class="iconfont icon-fenlei"></i>
            <span>分类</span>
        </router-link>
        <router-link :to="{path:'/home'}">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
        </router-link>
        <router-link :to="{path:'/home'}">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"footer",
    data(){
        return {

        }
    },
    methods:{

    }
  
}
</script>
<style lang="scss" scoped>
 .footerNav{
 width: 100%;
  height: 100%;
  background: #fff;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  &:before{
    content: '';
    position: absolute;
    width: 200%;
    height: 1px;
    top: 0;
    border-top: 1px solid #eee;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(.5,.5);
    transform: scale(.5,.5);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  a{
    text-align: center;
    float: left;
    width: 25%;
    height: 100%;
    i{
      float: left;
      width: 100%;
      color: #666;
      margin-top: .1rem;
      font-size: .4rem;
    }
    span{
      float: left;
      width: 100%;
      font-size: .22rem;
      color: #333;
    }
  }
  .router-link-exact-active{
    i,span{
      color: #009e4d;
    }   
  }
}
</style>
