<template>
    <!-- <div class="container">
        <p class="alert alert-danger" v-for="item in errors">{{item.msg}}</p>

        <form class="form-signin">
            <h2 class="form-signin-heading">
                注册
                <small><router-link class="pull-right" to="/login">登录</router-link></small>
            </h2>
            <label class="sr-only">邮箱</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email address" /><br>
            <label class="sr-only">密码</label>
            <input type="password" class="form-control noradius" v-model="password" placeholder="Password" /><br>
            <label class="sr-only">重复密码</label>
            <input type="password" class="form-control" v-model="comfirmPassword" placeholder="comfirm password" /><br>
            <a class="btn btn-lg btn-primary btn-block"  @click="reg(email, password, comfirmPassword)">注册</a>
        </form>

    </div> -->
    <div class="reg">
        <h2>管理员登录</h2>
        <div class="reg-form">
            <el-input v-model="email"  placeholder="请输入邮箱"></el-input>
            <el-input v-model="password" class="reg-password" placeholder="请输入密码"></el-input>
            <el-input v-model="comfirmPassword" class="reg-password" placeholder="请再次输入密码"></el-input>
            <el-button type="primary"  @click="reg(email, password, comfirmPassword)" class="reg-btn">注册</el-button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            email:'',
            password:'',
            comfirmPassword:'',

            errors:{}
        }
    },

    methods:{
        reg(email, password, comfirmPassword){
            this.$axios.post('/api/login/createAccount',{
                email: this.email,
                password: this.password,
                comfirmPassword: this.comfirmPassword
            }).then(function(res){
                console.log(res)
                if(res.status==200){
                    console.log('注册成功');
                    // this.$router.push('/login');
                }else{
                    console.log('注册失败')
                }
            },function(res){
                console.log('注册失败，未通过服务端校验'+ res.status);
                this.errors=res.body;
            });
        }
    }
}
</script>

<style scoped src="../css/reg.css">
</style>