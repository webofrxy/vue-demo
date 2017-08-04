<template>
  <div class="login">
    <!-- <input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="account">
    <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
    <button type="submit" class="btn btn-default" @click="login">登录</button> -->
    <el-input v-model="account"  placeholder="请输入账号"></el-input>
    <el-input v-model="password" class="login-password" placeholder="请输入密码"></el-input>
    <el-button type="primary"  @click="login">账号密码</el-button>
    <el-button>二维码</el-button>
  </div>
</template>

<script>
    export default {
    data() {
        return {
            account : '',
            password : ''
        }
    },
    methods:{
      login() {
        // 获取已有账号密码
        this.$axios.get('/api/login/getAccount')
          .then((response) => {
            // 响应成功回调
            console.log(response)
            let params = { 
              account : this.account,
              password : this.password
            };
            // 创建一个账号密码
            return this.$axios.post('/api/login/createAccount',params);
          })
          .then((response) => {
            console.log(response)
          })
          .catch((reject) => {
            console.log(reject)
          });
        }
      }
    }
</script>

<style scoped src="../css/register.css"></style>