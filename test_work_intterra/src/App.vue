<template>
  <div id="app">
    <h2>Операции на поле 112</h2>
    <ButtonRow v-on:checkRadio="checkRadio" />
    <MainTable
      v-bind:operations="operations"
      v-bind:sortType="sortType"
      v-bind:sortField="sortField"
      v-on:sort="sortData"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainTable from "@/components/MainTable.vue";
import ButtonRow from "@/components/ButtonRow.vue";
import FieldService from "./FieldService";
import Operation, { OperationType, Assessment } from "./models/Operation";
import { OperationRow } from "./interfaces";
import Component from "vue-class-component";
import locales from "../locales/intterra-ru-RU.json";
import _ from "lodash";

const fieldService = new FieldService();
const Month = new Map<number, string>();
Month.set(0, "ЯНВ");
Month.set(1, "ФЕВ");
Month.set(2, "МАР");
Month.set(3, "АПР");
Month.set(4, "МАЯ");
Month.set(5, "ИЮН");
Month.set(6, "ИЮЛ");
Month.set(7, "АВГ");
Month.set(8, "СЕН");
Month.set(9, "ОКТ");
Month.set(10, "НОЯБ");
Month.set(11, "ДЕК");

@Component({
  components: { MainTable, ButtonRow }
})
export default class extends Vue {
  operations: Array<OperationRow> = [];
  operationsList: Array<OperationRow> = [];
  sortType = true;
  sortField = "rawDate";

  sortData(sortField: keyof OperationRow) {
    this.operations = _.orderBy(
      this.operations,
      sortField,
      this.sortType ? "asc" : "desc"
    );
    this.sortField = sortField;
    this.sortType = !this.sortType;
  }

  checkRadio(isCompleted: boolean) {
    this.operations = this.operationsList.filter(
      x => x.completed === isCompleted
    );
  }

  async loadOperations() {
    const local: { [key: string]: string } = locales;
    const operations = await fieldService.getOperations();
    this.operationsList = _.orderBy(
      operations.map(item => ({
        assessment: item.assessment,
        assessmentString:
          item.assessment !== null && item.assessment !== undefined
            ? local[Assessment[item.assessment]]
            : "Нет оценки",
        culture: "Пшеница озимая",
        completed: true,
        type: local[OperationType[item.type]],
        rawDate: new Date(item.date.year, item.date.month, item.date.day),
        stringDate: `${item.date.day} ${Month.get(item.date.month)} ${
          item.date.year
        }`
      })),
      this.sortField,
      this.sortType ? "asc" : "desc"
    );
    this.sortType = !this.sortType;
    this.operations = this.operationsList.filter(x => x.completed);
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
@font-face {
  font-family: ubuntu-medium;
  font-weight: 500;
  font-style: normal;
  src: url("../fonts/ubuntu/Ubuntu-Medium.ttf");
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
h2 {
  font-family: ubuntu-medium;
  text-align: left;
  font-size: 25px;
  line-height: 31px;
}
</style>
