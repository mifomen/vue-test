<template>
  <div id="blog-post-demo" class="demo">
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:title="post.title"
      ></blog-post>
    </div>
</template>

<script>

 export default {
  el: "#blog-post-demo",
  name: 'FetchTeacherList',
  data(){
    return {
      info: null
    }
  },
  created: function() {
    var vm = this;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        vm.posts = data;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
