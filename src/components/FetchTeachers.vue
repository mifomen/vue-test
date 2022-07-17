<template>
<div id="tacherList">
  <h1>Bitcoin Price Index</h1>

  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>

    <div
      v-else
      v-for="elem in teacherElements" :key="elem.id"
      class="currency"
    >
    <li>
      {{ elem.fio }}:
      <span class="lighten">
        <strong>dolzhnost</strong> {{ elem.dolzhnost }} <br>
        <strong>directionStudy</strong> {{ elem.directionStudy }} <br>
        <strong>levelStudy</strong> {{ elem.levelStudy }} <br>
        <strong>workExperienceInYearStart</strong> {{ workExperienceInYearStart }} <br>

        <!-- <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }} -->
      </span>
    </li>
    </div>

  </section>
</div>
</template>

<script>
export default {
  name: 'FetchTeacherList',
  el: '#tacherList',
  data () {
    return {
      teacherElements: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    fio (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    fetch('../teachers.json')
      .then(response => {
        this.elem = response.data.json()
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
