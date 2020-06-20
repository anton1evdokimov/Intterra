<template>
  <div id="app">
    <h2>Операции на поле 112</h2>
    <MainTable v-bind:operations="operations" v-on:sort="sortData" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainTable from "@/components/MainTable.vue";
import FieldService from "./FieldService";
import Operation from "./models/Operation";
import { ExtendsOperation } from "./interfaces";
import Component from "vue-class-component";

const fieldService = new FieldService();
const Month = new Map<number, string>();
Month.set(1, "ЯНВ");
Month.set(2, "ФЕВ");
Month.set(3, "МАР");
Month.set(4, "АПР");
Month.set(5, "МАЯ");
Month.set(6, "ИЮН");
Month.set(7, "ИЮЛ");
Month.set(8, "АВГ");
Month.set(9, "СЕН");
Month.set(10, "ОКТ");
Month.set(11, "НОЯБ");
Month.set(12, "ДЕК");

@Component({
  components: { MainTable }
})
export default class extends Vue {
  operations: ExtendsOperation[] = [];
  sortType = 'asc';
  sortData(sortFiled:keyof ExtendsOperation) {
    const sortType = '';
    debugger;
    console.log(sortFiled);
  }

  async loadOperations() {
    const operations = await fieldService.getOperations();
    this.operations = operations.map(item => ({
      ...item,
      rawDate: new Date(item.date.year, item.date.month, item.date.day),
      stringDate: `${item.date.day} ${Month.get(item.date.month)} ${
        item.date.year
      }`
    }));
  }

  async mounted() {
    await this.loadOperations();
  }
}
</script>

<style scoped>
@font-face {
  font-family: Ubuntu;
  font-weight: 400;
  font-style: normal;
  src: url("../fonts/ubuntu/Ubuntu-Regular.ttf");
}
#app {
  font-family: Ubuntu, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 100%;
  max-width: 839px;
}
</style>
