<template>  
  <div class="hello">  
    <h1>add count template</h1>
     <button @click="increment">数量加{{count}}</button>   
  </div>  
</template>  
  
<script>  
  import {mapState,mapActions} from 'vuex'  
  
  export default {  
    name: 'add',  
    data () {  
      return {  
        msg: 'go to Your Vue.js App'  
      }  
    },  
    methods:{  
      increment(){  
        this.$store.commit('increment');
        console.log(this.$store.state.count)
      }  
    },  
    computed: mapState({ // mapState相当于映射  
        count: 'count',  
    })  
  }  
</script>  