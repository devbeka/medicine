<template>
  <h3>Назначение сеанса гемодиализа</h3>
  <ApparatusProgram />
  <Dialyzer />
  <Concentrator />
  <TypeInjection />
  <Bicarbonate />

  <button :disabled="isFormIncomplete" @click="store.handleFormSession">
    Сформировать сеанс
  </button>

  <div class="block" v-if="store.hemodialysis.length > 0">
    <h4>Назначения сеанса гемодиализа</h4>
    <div class="block__content">
      <p v-for="(item, i) in store.hemodialysis" :key="i">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '../../store/HemodialysisStore'
import ApparatusProgram from './ApparatusProgram.vue'
import Dialyzer from './Dialyzer.vue'
import Concentrator from './Concentrator.vue'
import TypeInjection from './TypeInjection.vue'
import Bicarbonate from './Bicarbonate.vue'
import { computed } from 'vue'

const store = useHemodialysisStore()

const isFormIncomplete = computed(() => {
  return [
    store.activeApparat,
    store.activeDialyzer,
    store.activeConcentrator,
    store.activeVolumeL,
    store.activeTypeInjection,
    store.activeBicarbonate,
    store.dryWeight,
    store.activeAnticoagulation,
    store.activeVolumeEd,
  ].some((value) => value === '' || null)
})
</script>

<style scoped lang="scss">
button {
  margin-top: 20px;
  height: 35px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 30px;
  cursor: pointer;
}
.block {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 40px;
  max-width: 600px;

  &__content {
    display: flex;
    flex-wrap: wrap;
    p {
      margin-left: 20px;
      margin-top: 10px;
    }
  }
}
</style>
