<template>
	<!-- <div class="select"> -->
	  <el-select v-model="value" placeholder="请选择" size="mini" >
	    <el-option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value"
		
	      >
		    <span style="float: left;">{{ item.label }}</span>
		    <span style="float: right;">{{ item.value}}</span>
	    </el-option>
	  </el-select>
	<!-- </div> -->
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>

<style scoped>
/*.select{
	position: relative;
}*/
</style>