<template>
  <div class="date">
    <div class="date__start">
      <p>Начало приёма</p>
      <input v-model="store.startDate" type="date" />
    </div>

    <div class="date__end">
      <p>Конец приёма</p>
      <input v-model="store.endDate" type="date" />
    </div>

    <p class="date__day">
      Количество сеансов: <span>{{ store.numbersSeanse.length }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useAfterSeanceStore } from '../../store/AfterSeanseStore'

const store = useAfterSeanceStore()
</script>

<style scoped lang="scss">
.date {
  margin-top: 20px;
  display: flex;
  align-items: center;
  div {
    margin-right: 15px;
    input {
      cursor: pointer;
      height: 30px;
      width: 140px;
      padding: 4px;
      border: 1px solid #ccc;
    }
  }
  &__day {
    margin-bottom: -20px;
    span {
      color: #0077cc;
    }
  }
}
</style>
