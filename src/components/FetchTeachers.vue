<template>
  <h1>{{ title }}</h1>
  <ul>
    <li  v-for="(teacherItem, index) in teacherList" :key="teacherItem.id">
      <span v-if="teacherItem.fio">
        <strong> {{ ++index }}. </strong>{{ teacherItem.fio }}
      </span>
      <span v-if="teacherItem.fio && teacherItem.fio.split(' ').length >= 1">
        <strong>Фамилия: </strong> {{ teacherItem.fio.split(" ")[0] }}
      </span>
      <span v-if="teacherItem.fio && teacherItem.fio.split(' ').length >= 2">
        <strong>Имя: </strong>
        {{ teacherItem.fio.split(" ")[1] }}
      </span>
      <span v-if="teacherItem.fio && teacherItem.fio.split(' ').length >= 3">
        <strong>Отчество: </strong>
        {{ teacherItem.fio.split(" ")[2] }}
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
        <strong
          >Наименование направления подготовки и (или) специальности:</strong
        >
        {{ teacherItem.directionStudy }}
      </span>
      <span v-if="teacherItem.workExperienceInYearStart">
        <strong>Общий стаж работы: </strong
        >{{ new Date().getFullYear() - teacherItem.workExperienceInYearStart }}
      </span>
      <span v-if="teacherItem.workAsTeacherInYearStart">
        <strong>Стаж работы по специальности: </strong
        >{{ new Date().getFullYear() - teacherItem.workAsTeacherInYearStart }}
      </span>
      <span v-if="teacherItem.subjectsTaught">
        <strong>Преподоваемые учебные предметы: </strong
        >{{ teacherItem.subjectsTaught }}
      </span>
      <span v-if="teacherItem.academicTitle">
        <strong>Стаж работы по специальности: </strong>{{ timeWork }}
        {{ timeWorkAsTeacher }}
      </span>
      timeWork: {{ timeWork }}
      test = {{ test }}
  newSovle = {{teacherItem.newSovle}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "FetchTeachers",
  el: "#FetchTeachers",
  data: function () {
    return {
      title:'teacherList',
      teacherList: null,
      counter: 0,
    };
  },
  methods: {
    counterIncrease() {
      return this.counter++;
    },
    timeWork: function () {
      return (
        new Date().getFullYear() - this.teacherList.workExperienceInYearStart
      );
    },
    timeWorkAsTeacher: function () {
      return (
        new Date().getFullYear() - this.teacherList.workAsTeacherInYearStart
      );
    },
    lastInterger: function (obj) {
      return parseInt(obj,10);
    }
  },
  computed: {
    timeWorkC: function () {
      return (
        new Date().getFullYear() - this.teacherList.workExperienceInYearStart
      );
    },
    timeWorkAsTeacherC: function () {
      return (
        new Date().getFullYear() - this.teacherList.workAsTeacherInYearStart
      );
    },
    test: function () {
      return new Date().getFullYear() - 1;
    },
  },
  created() {
     const URL =
      "https://raw.githubusercontent.com/mifomen/vue-test/master/src/teachers.json";
    try {
      fetch(URL)
        .then((response) => response.json())
        .then((json) => (this.teacherList = json))
    //     .then(this.teacherList.forEach(item => {
    //   item.newSovle = timeWorkAsTeacherCC();
    //   }
    // ))
    } catch (errors) {
      console.error("errors ", errors);
    }


  },
};
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
li::marker {
  content: "";
}
</style>
