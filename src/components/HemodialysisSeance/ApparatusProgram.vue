<template>
  <h4>Программа аппарата</h4>
  <ul>
    <li v-for="item in store.apparats" :key="item.value">
      <button
        @click="store.choiceApparat(item.value)"
        :class="{ 'active-button': store.activeApparat === item.value }">
        {{ item.name }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '../../store/HemodialysisStore'

const store = useHemodialysisStore()
</script>

<style scoped lang="scss">
h4 {
  margin-top: 15px;
  font-weight: 400;
  margin-bottom: 10px;
}
ul {
  display: flex;

  button {
    margin-right: 15px;
    width: 95px;
    height: 30px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
  }

  .active-button {
    border: solid green;
    color: green;
  }
}
</style>
