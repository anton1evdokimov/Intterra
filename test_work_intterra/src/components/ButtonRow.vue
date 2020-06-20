<template>
  <div class="buttonRow">
    <input type="radio" name="type" id="scheduledOperations" />
    <label for="scheduledOperations" class="operationsLabel">Запланированные операции</label>

    <input type="radio" name="type" id="completedOperations" checked/>
    <label for="completedOperations" class="operationsLabel">Выполненные операции</label>
  </div>
</template>

<script lang="ts">
export default {
  name: "ButtonRow",
  props: ["operation"]
};
</script>

<style scope>
input[type="radio"] {
  display: none;
}
.operationsLabel{
  text-transform: uppercase;
  margin:24px 18px 24px 0;
  cursor: pointer;
}
input[type="radio"]:checked + .operationsLabel{
  color: #3399FF;
}
.buttonRow {
  display: flex;
  width: 100%;
  min-height: 55px;
}
</style>
