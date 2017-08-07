<template>
  <div class="login">
    <h2>管理员登录</h2>
    <div class="login-form">
      <input v-model="account" type="text" placeholder="请输入账号"></input>
      <input v-model="password" type="password" class="login-password" placeholder="请输入密码"></input>
      <el-button type="primary"  @click="login" style="width: 200px;">登录</el-button>
    </div>
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

<style scoped src="../css/login.css"></style>