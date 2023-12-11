<template>
  <h3>Лечение на дому</h3>
  <MedicinalProduct />
  <ReceptionPath />
  <ReceivingFrequency />

  <button :disabled="isFormIncomplete" @click="store.add" class="add">
    Добавить
  </button>
  
  <ul v-if="store.atHome.length > 0" class="block">
    <h4>Лечение на дому</h4>
    <li class="block__content" v-for="(home, i) in store.atHome" :key="i">
      <span>{{ home.med }}</span>
      <span>{{ home.path }}</span>
      <span>{{ home.dosage }}</span>
      <span>{{ home.time }}</span>
      <span>c {{ home.start }} по {{ home.end }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useHomeTreatmentStore } from '../../store/HomeTreatmentStore'
import MedicinalProduct from './MedicinalProduct.vue'
import ReceptionPath from './ReceptionPath.vue'
import ReceivingFrequency from './ReceivingFrequency.vue'
import { computed } from 'vue'

const store = useHomeTreatmentStore()

const isFormIncomplete = computed(() => {
  return [
    store.startDate,
    store.endDate,
    store.medProd,
    store.receptionPath,
    store.dosage,
    store.time,
  ].some((value) => value === '')
})
</script>

<style scoped lang="scss">
h3 {
  margin: 30px 0 20px 0;
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
    span {
      margin-left: 20px;
      margin-top: 10px;
    }
  }
}

.add {
  margin-top: 20px;
  height: 35px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 30px;
  cursor: pointer;
}
</style>
