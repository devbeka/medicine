<template>
  <h3>Назначения после сеанса</h3>
  <MedicinalProduct />
  <ReceptionPath />
  <NumberSeances />
  <StartEndReception />

  <button
    :disabled="isFormIncomplete"
    class="add"
    @click="store.formulateAfterSeance"
  >
    Сформировать
  </button>

  <div v-if="store.rows.length > 0">
    <h4>Список назначений после сеансов</h4>
    <table class="table">
      <thead class="table__head">
        <tr class="table__head-title">
          <th v-for="title in titles" :key="title">{{ title }}</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr
          class="table__body-content"
          v-for="row in store.rows"
          :key="row.name"
        >
          <td>{{ row.name }}</td>
          <td>{{ row.receptionPath }}</td>
          <td>{{ row.dosage }}</td>
          <td>{{ row.startReception }}</td>
          <td>{{ row.endReception }}</td>
          <td>{{ row.numSeance.join() }}</td>
          <td>{{ row.days }}</td>
          <td>
            <button @click="store.removeRow(row)">
              <img :src="trash" alt="delete" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useAfterSeanceStore } from '../../store/AfterSeanseStore'
import MedicinalProduct from './MedicinalProduct.vue'
import NumberSeances from './NumberSeances.vue'
import ReceptionPath from './ReceptionPath.vue'
import StartEndReception from './StartEndReception.vue'
import trash from '../../assets/trash.svg'
import { computed } from 'vue'

const store = useAfterSeanceStore()

const titles = <string[]>[
  'Лекарственный препарат',
  'Путь приема',
  'Дозировка',
  'Начало приема',
  'Конец приема',
  'Номер сеанса',
  'Дней',
  ' ',
]

const isFormIncomplete = computed(() => {
  return [
    store.startDate,
    store.endDate,
    store.medProd,
    store.receptionPath,
    store.dosage,
    store.numbersSeanse,
  ].some((value) => {
    if (typeof value === 'string') {
      return value.trim() === ''
    } else if (Array.isArray(value)) {
      return value.length === 0
    } else {
      return true
    }
  })
})
</script>

<style scoped lang="scss">
h3 {
  margin: 30px 0 20px 0;
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

h4 {
  margin-top: 20px;
  font-weight: normal;
}
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  &__body {
    &-content {
      text-align: center;
      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }

  th {
    text-align: left;
  }
  td,
  th {
    border: 1px solid #ddd;
    padding: 5px 3px;
  }

  th {
    font-weight: normal;
  }
}
</style>
