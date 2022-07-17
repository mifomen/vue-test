<template>
  <HelloWorld msg="Welcome Mifomen to Your Vue.js App"/>
  <FetchTeacherList/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FetchTeacherList from './components/FetchTeachers.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    FetchTeacherList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color:red;
}
</style>
