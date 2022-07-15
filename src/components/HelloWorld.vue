<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;


  list-style-type: none;
  padding: 0;

  display: inline-block;
  margin: 0 10px;
  color: #42b983;
  color: red;
}
</style>
