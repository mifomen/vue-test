<template>
  <div id="tacherList"> {{ title }}</div>
  <ul>
    <li>teacherElements</li>
  </ul>
</template>

<script>
export default {
  name: 'FetchTeacherList',
  el: '#tacherList',
  data: function() {
  return {
      title: 'Teachers list',
      teacherElements: null,
      teacherElements_URL: '../teachers.json',
      users: []
    }
  },
  mounted() {
     //get users
     this.getUsers()
  },
  methods: {
    async getUsers () {
      try {
        const response = await fetch(this.teacherElements_URL)
        const res = await response.json()
        this.users.push(...res)
      }
      catch(error) {
        this.errors.push(error)

      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: blue;
}
</style>
