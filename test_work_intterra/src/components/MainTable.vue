<template>
  <table class="table">
    <tr class="header">
      <th v-on:click="$emit('sort', 'rawDate')">
        Дата
        <span
          class="sort"
          v-bind:class="[sortType ? sortAsc:sortDesc, sortField==='rawDate' ? sortActive : sortInactive ]"
        ></span>
      </th>
      <th v-on:click="$emit('sort', 'type')">
        Операция
        <span
          class="sort"
          v-bind:class="[sortType ? sortAsc:sortDesc, sortField==='type' ? sortActive : sortInactive ]"
        ></span>
      </th>
      <th v-on:click="$emit('sort', 'culture')">
        Культура
        <span
          class="sort"
          v-bind:class="[sortType ? sortAsc:sortDesc, sortField==='culture' ? sortActive : sortInactive ]"
        ></span>
      </th>
      <th v-on:click="$emit('sort', 'assessment')">
        Качество
        <span
          class="sort"
          v-bind:class="[sortType ? sortAsc:sortDesc, sortField==='assessment' ? sortActive : sortInactive ]"
        ></span>
      </th>
    </tr>
    <TableRow v-for="operation of operations" v-bind:operation="operation" :key="operation.id" />
  </table>
</template>

<script lang="ts">
import TableRow from "@/components/TableRow.vue";

export default {
  name: "MainTable",
  components: { TableRow },
  data: () => ({
    sortAsc: "sortAsc",
    sortDesc: "sortDesc",
    sortActive: "sortActive",
    sortInactive: "sortInactive"
  }),
  props: ["operations", "sortType", "sortField"]
};
</script>
<style scoped>
.sort {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-width: 0;
  margin-left: 5px;
  position: relative;
}
.sortAsc {
  border-bottom: 10px solid;
  border-left: 5px solid #edeeee;
  border-right: 5px solid #edeeee;
}
.sortDesc {
  top: 3px;
  border-top: 10px solid;
  border-left: 5px solid #edeeee;
  border-right: 5px solid #edeeee;
}
.sortActive {
  border-bottom-color: #3399ff;
  border-top-color: #3399ff;
}
.sortInactive {
  border-bottom-color: #a7a9ac;
  border-top-color: #a7a9ac;
}

.header {
  background-color: #edeeee;
}
.header > th {
  text-align: left;
  cursor: pointer;
}
</style>
