<template>
   <el-col :span="8" style="width: 100%;height: 800px;">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>后台首页</template>
        <el-menu-item-group>          
          <el-menu-item index="1-1"><router-link to="/adminArticleList">文章列表</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/lastestPractise">最新练习</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>发布文章</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>修改信息</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-setting"></i>修改密码</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-setting"></i>退出登录</el-menu-item>
      
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  
</style>