<template>
  <div class="login">
    <h2>管理员登录</h2>
    <div class="login-form">
      <el-input v-model="account"  placeholder="请输入账号"></el-input>
      <el-input v-model="password" class="login-password" placeholder="请输入密码"></el-input>
      <el-button type="primary"  @click="login" style="width: 100%;">登录</el-button>
      <!-- <el-button type="default"  @click="register" style="width: 100%;">注册</el-button>  -->
      
    </div>
  </div>
</template>

<script>
    import md5 from 'md5'
    import {mapState,mapMutations} from "vuex"

    export default {
    data() {
        return {
            account : '',
            password : ''
        }
    },
    computed: mapState({
      count: 'numb'
    }),
    methods:{
      ...mapMutations([
        'GETLOGIN'
      ]),
      login() {
        //练习Vuex
        // console.log(this.$store.state.account)
        //页面js加载时间（本地）
        var loadTime = parseInt(new Date().getTime()/1000);
        
        //当前时间
        var currTime = parseInt(new Date().getTime()/1000);
      //  console.log(new Date().getTime()/1000)



        var mytimestrap = currTime -loadTime
        var passwordMd5 = md5(this.password)
        // console.log(passwordMd5)
        // 获取已有账号密码
        this.$axios.get('/api/login/getAccount')
          .then((response) => {
            // 响应成功回调
            console.log(response.data[2].account)
            this.GETLOGIN(response.data[2].account)
          })
          .catch((reject) => {
            console.log(reject)
          });
        }
      },
      register() {
        console.log()
        let params = { 
          account : this.account,
          password : this.password
        };
        // 创建一个账号密码
        this.$axios.post('/api/login/createAccount',params).then(function(res){
          console.log(res)
        }).catch(function(err){
          console.log(err)
        });

      },
      //加密方法
      passwordMethod() {
        var username = this.phoneNum;
            var password = this.cipherNum;

            var encrypt = new this.$jsEncrypt.JSEncrypt();
            var data = encrypt.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbq7p4v7WUMoP8mIK6Rnx31ZCMTA3qhBFJ34eOMx8WvIO3ddJk4l35psSVncbtQSxr0JgFb7oejEaAzMXNGG5xbGMqUYOZ++TTN+XTqpuTxvQ15M/AZWjf2eUgLtSz3DsO9JFMld+vxlv2WoUkiBbP0ahLPoP7p1OrT4LRl25QIDAQAB-----END PUBLIC KEY-----");
            // console.log(data+"公钥加密");
            var usernamepass = encrypt.encrypt(username);
            var passwordpass = encrypt.encrypt(password);

            var userpass = encodeURI(usernamepass).replace(/\+/g, '%2B');
            var pass = encodeURI(passwordpass).replace(/\+/g, '%2B');
            // console.log(encrypted+"内容加密");
      }
      
    }

</script>

<style scoped src="../css/login.css"></style>