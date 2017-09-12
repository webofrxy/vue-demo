<template>
  <div class="index">
      <keep-alive>
        <router-view v-if="this.$route.name != 'shopCart'"></router-view>
      </keep-alive>
      <router-view v-if="this.$route.name == 'shopCart'"></router-view>
      <div class="footer">
          <footerNav></footerNav>
      </div>
  </div>
</template>
<script>
import footerNav from 'footer'
export default {
  name: "index",
  data(){
    return {

    }
  },
  components:{
      footerNav
  }
}
</script>
<style>
.index{
    height: calc(100% - .98rem);
    height: -moz-calc(100% - .98rem);
    height: -webkit-calc(100% - .98rem);

}
.footer{
    width: 100%;
    height: .98rem;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99999;
}
</style>
