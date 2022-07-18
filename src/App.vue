<template>
  <HelloWorld msg="Welcome Mifomen to Your Vue.js App"/>
  <FetchTeachers/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FetchTeachers from './components/FetchTeachers.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    FetchTeachers,
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
