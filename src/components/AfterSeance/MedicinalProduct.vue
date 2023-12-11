<template>
  <h4>Лекарственный препарат</h4>
  <div class="wrap">
    <input type="text" v-model="store.medProd" placeholder="Спр. 'Препараты'" />
    <button @click="openModal"><img :src="list" alt="list" /></button>
  </div>
  <Modal
    :show-modal="isModal"
    @close="closeModal"
    title="Лекарственные препараты"
  >
    <div class="modal__inputs">
      <input
        v-model="searchMedProd"
        placeholder="Поиск позиции по первым символам"
      />
      <button @click="store.searchMedProd(searchMedProd)">
        <img :src="search" alt="search" />
      </button>
    </div>
    <div class="modal__inputs">
      <input v-model="newMedprod" placeholder="Добавить новую запись" />
      <button @click="addNewMedprod(newMedprod)">
        <img :src="plus" alt="plus" />
      </button>
    </div>
    <div v-if="store.medProds.length === 0" class="no-message">
      Нет доступных элементов
    </div>
    <div
      v-else
      class="modal__content"
      v-for="medProd in store.medProds"
      :key="medProd.id"
    >
      <div class="modal__content-items">
        <p
          @click="store.choiceMedProd(medProd.name)"
          :class="{ active: medProd.name === store.medProd }"
        >
          {{ medProd.name }}
        </p>
        <button @click="store.deleteMedProd(medProd.id)">
          <img :src="trash" alt="trash" />
        </button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { useAfterSeanceStore } from '../../store/AfterSeanseStore'
import { ref } from '@vue/reactivity'

import Modal from '../../UI/Modal.vue'
import list from '../../assets/list.svg'
import search from '../../assets/search.svg'
import trash from '../../assets/trash.svg'
import plus from '../../assets/plus.svg'

const store = useAfterSeanceStore()

const isModal = ref<boolean>(false)
const newMedprod = ref<string>('')
const searchMedProd = ref<string>('')

const addNewMedprod = (payload: string) => {
  store.medProds.push({
    id: Date.now(),
    name: payload,
  })
  newMedprod.value = ''
}

const openModal = () => {
  isModal.value = true
}

const closeModal = () => {
  isModal.value = false
}
</script>

<style scoped lang="scss">
.modal__inputs {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  input {
    width: 100%;
  }
  button {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.modal__content {
  &-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;

    p {
      padding: 5px;
      cursor: pointer;
    }
    button {
      background-color: transparent;
      border: none;
    }
  }
}

.active {
  color: green;
}

h4 {
  margin-top: 20px;
  font-weight: 400;
  margin-bottom: 10px;
}
input {
  width: 350px;
  height: 30px;
  border: 1px solid #ccc;
  margin-right: 10px;
  padding-left: 5px;
}

button {
  background-color: transparent;
  border: 1px solid #ccc;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.wrap {
  display: flex;
  flex-wrap: nowrap;
}
</style>
