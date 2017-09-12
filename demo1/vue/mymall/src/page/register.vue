<template>
  <div class="register">
    <p class="phone-wrap">
        <span>
            <input type="text" maxlength="11" placeholder="请输入手机号码" v-model="phone">
        </span>
    </p>
    <p class="password-wrap">
        <span>
            <input type="text" minlength="6" placeholder="请输入密码" v-model="password">
        </span>
    </p>
    <p class="text-wrap">
        <span>
            <input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="text">
            <a href="javascript:;">获取验证码</a>
        </span>
    </p>
    <button class="register-btn" @click="registerMobile">注册</button>
  </div>
</template>
<script>
import {MessageBox} from 'mint-ui'
export default {
  data(){
      return {
          phone: '',
          password: '',
          text: ''
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
    registerMobile: function(){
        if(!this.rightPhoneNumber){
            MessageBox('手机号码格式不正确');
            return
        }else if(!this.rightPassword){
            MessageBox('密码格式不正确')
            return
        }
        this.$axios.post(this.$api.register.reg,{
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
.register{
    padding-top: 3rem;
}
.phone-wrap{
    height: .8rem;
    padding: .11rem;
    text-align: center;
    color: #999;
}
.phone-wrap span{
    width: 6rem;
    height: 100%;
    display: inline-block;
    position: relative;
}
.phone-wrap span input{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: none;
    box-sizing: border-box;
    padding: 0 1.24rem 0 .24rem;
}
.password-wrap{
    height: .8rem;
    padding: .11rem;
    text-align: center;
    color: #999;
}
.password-wrap span{
    width: 6rem;
    height: 100%;
    display: inline-block;
    position: relative;
}
.password-wrap span input{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: none;
    box-sizing: border-box;
    padding: 0 1.24rem 0 .24rem;
}
.text-wrap{
    height: .8rem;
    padding: .11rem;
    text-align: center;
    color: #999;
}
.text-wrap span{
    width: 6rem;
    height: 100%;
    display: inline-block;
    position: relative;
}
.text-wrap span input{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: none;
    box-sizing: border-box;
    padding: 0 1.24rem 0 .24rem;
}
.text-wrap span a{
    position: absolute;
    left: 4rem;
    top: .15rem;
    padding-left: .2rem;
}
.text-wrap span a::after{
    position: absolute;
    left: 0;
    top: -11%;
    content: '';
    width: 1px;
    height: 150%;
    background: #d8d8d8;
}
.register-btn{
    width: 6rem;
    height: .9rem;
    margin-top: .6rem;
    border: none;
    background: #009e4d;
    color: #fff;
    letter-spacing: .1rem;
}
</style>