<template>
  <div class="login">
    <p class="phone-wrap">
        <span>
            <input type="text" placeholder="请输入手机号码" v-model="phone" maxlength="11" class="login-phone">
        </span>
    </p>
    <p class="password-wrap">
        <span>
            <input type="text" placeholder="请输入密码" v-model="password" class="login-paw">
        </span>
    </p>
    <button class="login-btn" @click="loginMobile">登录</button>
  </div>
</template>
<script>
import {MessageBox} from 'mint-ui'
export default {
  data(){
      return {
          phone: '',
          password: ''
      }
  },
  computed:{
    //判断手机号码
    rightPhoneNumber: function(){
        return /^1\d{10}$/gi.test(this.phone)
    },
    //判断密码
    rightPassword: function(){
        return /^[a-zA-Z\d*_]{6}$/.test(this.password)
    }
  },
  methods:{
    //登录
    loginMobile: function(){
        if(!this.rightPhoneNumber){
            MessageBox('手机号码格式不正确');
            return
        }else if(!this.rightPassword){
            MessageBox('密码格式不正确')
            return
        }
        this.$axios.post(this.$api.login.login,{
            username: this.phone,
            password: this.password
        }).then(function(res){
            console.log(res)
        }).catch(function(err){
            console.log(err)
        })
    }
  }
}
</script>
<style scoped>
.login{
     padding-top: 3rem; 

}
/* .login input{
    width: 100%;
    height: .9rem;
    margin-top: .1rem;
    border: none;
    padding:0 1.24rem 0 .24rem;
} */
.phone-wrap{
    padding: .11rem;
    text-align: center;
    color: #999;
    height: .8rem;
}
.phone-wrap span {
    width: 6rem;
    display: inline-block;
    height: 100%;
    position: relative;
}
.phone-wrap span input{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 1.24rem 0 .24rem;
    box-sizing: border-box;
    font-size: .32rem;
    color: #333;
    border: none;
}
.password-wrap{
    padding: .11rem;
    text-align: center;
    color: #999;
    height: .8rem;
}
.password-wrap span {
    width: 6rem;
    display: inline-block;
    height: 100%;
    position: relative;
}
.password-wrap span input{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 1.24rem 0 .24rem;
    box-sizing: border-box;
    font-size: .32rem;
    color: #333;
    border: none;
}
.login-btn {
    width: 6rem;
    height: .9rem;
    margin-top: .6rem;
    border: none;
    background: #009e4d;
    color: #fff;
    letter-spacing: .1rem;
}
</style>