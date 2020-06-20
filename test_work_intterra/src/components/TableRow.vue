<template>
  <tr>
    <td class="date">{{operation.stringDate}}</td>
    <td>{{operation.id}}</td>
    <td>{{operation.id}}</td>
    <td>{{operation.id}}</td>
  </tr>
</template>

<script lang="ts">
export default {
  name: "TableRow",
  props: ["operation"]
};
</script>

<style scoped>
.date{
  width:150px;
}
td {
  text-align: left;
}
</style>
