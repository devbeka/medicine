<template>
  <h4>Тип инъекции</h4>
  <ul>
    <li v-for="type in store.typeInjection" :key="type.value">
      <button
        @click="store.choiceTypeInjection(type.name)"
        :class="{ 'active-button': store.activeTypeInjection === type.name }"
      >
        {{ type.name }}
      </button>
    </li>
  </ul>
  <Needles />
  <Catheter />
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '../../store/HemodialysisStore'
import Needles from './Needles.vue'
import Catheter from './Catheter.vue'

const store = useHemodialysisStore()
</script>

<style scoped lang="scss">
h4 {
  margin-top: 20px;
  font-weight: 400;
  margin-bottom: 10px;
}

ul {
  display: flex;
}

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
</style>
