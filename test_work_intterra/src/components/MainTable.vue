<template>

  <table class="table">
    <tr  class="header">
      <th v-on:click="$emit('sort', 'rawDate')">Дата</th>
      <th v-on:click="$emit('sort', 'rawDate')">Операция</th>
      <th v-on:click="$emit('sort', 'rawDate')">Культура</th>
      <th v-on:click="$emit('sort', 'rawDate')">Качество</th>
    </tr>
    <TableRow v-for="operation of operations" v-bind:operation="operation" :key="operation.id" />
  </table>
</template>

<script lang="ts">
import TableRow from "@/components/TableRow.vue";
import { ExtendsOperation } from '@/interfaces';

export default {
  name: "MainTable",
  components: {TableRow },
  props: ["operations"]
};
</script>
<style scoped>
.header{
  background-color: #EDEEEE;
}
.header > th {
  text-align: left;
  cursor: pointer;
}
</style>
