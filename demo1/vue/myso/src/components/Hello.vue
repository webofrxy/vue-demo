<template>
  <div class="hello">
    <h1>element</h1>
    <h2><router-link to="/admin">Admin</router-link></h2>
    <h3><router-link to="/adminArticleList">adminArticleList</router-link></h3>
    <h3><router-link to="/adminArticleEdit">adminArticleEdit</router-link></h3>
    <h3><router-link to="/select">Select</router-link></h3>
    <h3><router-link to="/navMenu">navMenu</router-link></h3>
    <h3><router-link to="/header">header</router-link></h3>
    <h3><router-link to="/breadcrumb">breadcrumb</router-link></h3>
    <h3><router-link to="/datePicker">datePicker</router-link></h3>
    <h3><router-link to="/list">list</router-link></h3>
    <h3><router-link to="/pagination">pagination</router-link></h3>
    <h3><router-link to="/login">login</router-link></h3>
    <h3><router-link to="/reg">reg</router-link></h3>
    <h3><router-link to="/banner">banner</router-link></h3>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
