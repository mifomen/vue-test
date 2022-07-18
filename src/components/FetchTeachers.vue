<template>
  <h1> text </h1>
  <span>{ teacherList }</span>
  <ul>
    <li v-for="teacherItem in teacherList" :key="teacherItem.id">
      counter = {{counterIncrease()}} teacherItem.fio = {{teacherItem.fio}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FetchTeachers',
  el: "#FetchTeachers",
  data: function() {
    return  {
      teacherList: null,
      counter: 10
     }
  },
  methods: {
    counterIncrease(){
      return this.counter++
    }
  },
  created() {
    const URL = 'https://raw.githubusercontent.com/mifomen/vue-test/master/src/teachers.json'
    try {
      fetch(URL)
      .then(response => response.json())
      .then(json => this.teacherList = json)
    } catch (errors ) {
      console.error('errors ',errors)
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: off;
  padding: 0;
  margin: 0;
}

li::marker {
  content: ""
}
</style>
