<template>
  <div class="buttonRow">
    <input type="radio" name="type" id="scheduledOperations" v-on:click="$emit('checkRadio', false)"/>
    <label for="scheduledOperations" class="operationsLabel">Запланированные операции</label>

    <input type="radio" name="type" id="completedOperations" checked v-on:click="$emit('checkRadio', true)"/>
    <label for="completedOperations" class="operationsLabel">Выполненные операции</label>
  </div>
</template>

<script lang="ts">
export default {
  name: "ButtonRow"
};
</script>

<style scope>
input[type="radio"] {
  display: none;
}
.operationsLabel{
  text-transform: uppercase;
  letter-spacing: -0.517647px;
  margin:24px 18px 24px 0;
  cursor: pointer;
}
.operationsLabel:hover{
  opacity: .7;
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
