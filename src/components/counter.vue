<template>
  <span class="v-counter" :title="inc(counter)">{{inc(counter)}}</span>
</template>

<script>
export default {
  name: "CounterItems",
  el: ".v-counter",
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    inc() {
      // console.log('this.counter ',this.counter)
      return this.counter++;
    },
  }
}
</script>

<style>

</style>
