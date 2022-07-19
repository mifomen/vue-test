<template>
  <h1>{{ title }} </h1>
  <CounterItems/>
  <ul>
    <template v-for="(teacherItem) in teacherList" v-bind:key="teacherItem.id" >
      <!-- teacherItem.classNOO === 1 && teacherItem.classOOO === 3 ||  -->
     <li> <!--v-if="teacherItem.classSOO === 2 -->
     <span v-show="ok">v-show="ok" 123</span>
      <span v-if="teacherItem.fio">
        ФИО: <strong>{{ teacherItem.fio }}</strong>
      </span>
      <span v-if="teacherItem.fio && teacherItem.fio.split(' ').length >= 1">
        <strong>Фамилия: </strong> {{ teacherItem.fio.split(" ")[0] }}
      </span>
      <span v-if="teacherItem.fio && teacherItem.fio.split(' ').length >= 2">
        <strong>Имя: </strong>{{ teacherItem.fio.split(" ")[1] }}
      </span>
      <span v-if="teacherItem.fio && teacherItem.fio.split(' ').length >= 3">
        <strong>Отчество: </strong>{{ teacherItem.fio.split(" ")[2] }}
      </span>
      <span v-if="teacherItem.dolzhnost">
        <strong>Занимаемая должность: </strong>{{ teacherItem.dolzhnost }}
      </span>
      <span v-if="teacherItem.levelStudy">
        <strong>Уровень образование: </strong>{{ teacherItem.levelStudy }}
      </span>
      <span v-if="teacherItem.qualification">
        <strong>Квалификация: </strong>{{ teacherItem.qualification }}
      </span>
      <span v-if="teacherItem.upQualification">
        <strong>Повышение: </strong>{{ teacherItem.upQualification }}
      </span>
      <span v-if="teacherItem.academicTitle">
        <strong>academicTitle: </strong>{{ teacherItem.academicTitle }}
      </span>
      <span v-if="teacherItem.directionStudy">
        <strong>Наименование направления подготовки и (или) специальности:</strong>{{ teacherItem.directionStudy }}
      </span>
      <span v-if="teacherItem.workExperienceInYearStart">
        <strong>Общий стаж работы: </strong
        >{{ new Date().getFullYear() - teacherItem.workExperienceInYearStart }}
      </span>
      <span v-if="teacherItem.workAsTeacherInYearStart">
        <strong>Стаж работы по специальности: </strong>{{ new Date().getFullYear() - teacherItem.workAsTeacherInYearStart }}
      </span>
      <span v-if="teacherItem.subjectsTaught">
        <strong>Преподоваемые учебные предметы: </strong>{{ teacherItem.subjectsTaught }}
      </span>

        <!-- <span v-if="teacherItem.academicTitle">
        <strong>Стаж работы по специальности:timeWork teacherItem  </strong>{{ timeWork(teacherItem) }}
        {{ timeWorkAsTeacher }}
        </span>
        timeWork: {{ timeWork }}
        test = {{ test }}
        newSovle = {{teacherItem.newSovle}} -->
      </li>
    </template>
  </ul>

</template>

<script>
import CounterItems from './counter.vue'
// import 'Vue' from 'vue'

export default {
  name: "FetchTeachers",
  components: {
    CounterItems
  },
  el: "#FetchTeachers",
  data: function () {
    return {
      title:'teacherList',
      teacherList: null,
      counter: this.counterIncrease(),
    }
  },
  // mounted: function(){
  //   console.log(this.$refs.icanvas);
  // },
  // setup (count) {
  //   // const count = ref(0)
  //   return {count}
  // },
  methods: {
    counterIncrease: function() {
      return this.counter++;
    },
    timeWork: function () { // Вычисляем общий стаж
      return (
        new Date().getFullYear() - this.item.workExperienceInYearStart
      );
    },
    timeWorkAsTeacher: function () { //вычисляем педагогический стаж
      return (
        new Date().getFullYear() - this.item.workAsTeacherInYearStart
      );
    },
    lastInterger: function (obj) {
      return parseInt(obj,10);
    },
    sortByFio: function (d1, d2) {  //функция для сортировани по фио
      if (d1.fio.toLowerCase() > d2.fio.toLowerCase()) {
        return 1 }
      if (d1.fio.toLowerCase() < d2.fio.toLowerCase()) {
        return -1 }
      if (d1.fio.toLowerCase() === d2.fio.toLowerCase()) {
        return 0 }
    }
  },
  computed: {
    test: function () {
      return new Date().getFullYear() - 1;
    }
    // ,
    // plusOne1: function () {
    //   const count = ref(1)
    //   const plusOne = count.value + 1
    //   return plusOne;
    // }
    // ,
    // sortByFioDo: function () {
    //   return this.teacherList.sort(this.sortByFio)
    // }
  },

    // sortByclassNOO: function () {
    //   return this.teacherList.sort(this.sortByclassNOO)
    // },
    //  sortByclassSOO: function () {
    //   return this.teacherList.sort(this.sortByclassSOO)
    // },
    // sortByclassOOO: function () {
    //   return this.teacherList.sort(this.sortByclassOOO);
    // },
    // sortDefault: function () {
    //   return this.teacherList;
    // }
  // },

  created() {

     const URL =
      "https://raw.githubusercontent.com/mifomen/vue-test/master/src/teachers.json";
    // async getData (URL)
    try {
      fetch(URL)
        .then((response) => response.json())
        .then((json) => (this.teacherList = json.sort(this.sortByFio)))
        // .then(this.teacherList = this.teacherList)
    } catch (errors) {
      console.error("errors ", errors);
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
    text-align: left;
    list-style: off;
    padding: 0;
    margin: 15px 0 15px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  li span {
    width: 100%;
  }

  /* li::marker {
    content: "";
  } */
</style>
