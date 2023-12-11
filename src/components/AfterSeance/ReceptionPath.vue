<template>
  <div class="content">
    <div class="content__path">
      <p>Путь приема</p>
      <div class="wrap">
        <input
          type="text"
          v-model="store.receptionPath"
          placeholder="Спр. 'Приема'"
        />
        <button @click="openModalPath">
          <img :src="list" alt="list" />
        </button>
      </div>

      <Modal
        :show-modal="isModalPath"
        @close="closeModal"
        title="Справочник 'Путь приема'"
      >
        <div class="modal__inputs">
          <input
            v-model="searchPath"
            placeholder="Поиск позиции по первым символам"
          />
          <button @click="store.searchPath(searchPath)">
            <img :src="search" alt="search" />
          </button>
        </div>
        <div class="modal__inputs">
          <input v-model="newPath" placeholder="Добавить новую запись" />
          <button @click="addNewPath(newPath)">
            <img :src="plus" alt="plus" />
          </button>
        </div>
        <div v-if="store.receptionPaths.length === 0" class="no-message">
          Нет доступных элементов
        </div>
        <div
          v-else
          class="modal__content"
          v-for="reception in store.receptionPaths"
          :key="reception.id"
        >
          <div class="modal__content-items">
            <p
              @click="store.choicePath(reception.name)"
              :class="{ active: reception.name === store.receptionPath }"
            >
              {{ reception.name }}
            </p>
            <button @click="store.deleteReceptionPath(reception.id)">
              <img :src="trash" alt="trash" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
    <div class="content__dosage">
      <p>Дозировка</p>
      <div class="wrap">
        <input
          type="text"
          v-model="store.dosage"
          placeholder="Спр. 'Дозы препоратов'"
        />
        <button @click="openModalDosage">
          <img :src="list" alt="list" />
        </button>
      </div>

      <Modal
        :show-modal="isModalDosage"
        @close="closeModal"
        title="Справочник 'Дозы препоратов'"
      >
        <div class="modal__inputs">
          <input
            v-model="searchDosa"
            placeholder="Поиск позиции по первым символам"
          />
          <button @click="store.searchDosa(searchDosa)">
            <img :src="search" alt="search" />
          </button>
        </div>
        <div class="modal__inputs">
          <input v-model="newDosage" placeholder="Добавить новую запись" />
          <button @click="addNewDosage(newDosage)">
            <img :src="plus" alt="plus" />
          </button>
        </div>
        <div v-if="store.dosages.length === 0" class="no-message">
          Нет доступных элементов
        </div>
        <div
          v-else
          class="modal__content"
          v-for="dosage in store.dosages"
          :key="dosage.id"
        >
          <div class="modal__content-items">
            <p
              @click="store.choiceDosage(dosage.name)"
              :class="{ active: dosage.name === store.dosage }"
            >
              {{ dosage.name }}
            </p>
            <button @click="store.deleteDosa(dosage.id)">
              <img :src="trash" alt="trash" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  </div>
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
const isModalPath = ref<boolean>(false)
const isModalDosage = ref<boolean>(false)

const newPath = ref<string>('')
const searchPath = ref<string>('')

const newDosage = ref<string>('')
const searchDosa = ref<string>('')

const addNewPath = (payload: string) => {
  store.receptionPaths.push({
    id: Date.now(),
    name: payload,
  })
  newPath.value = ''
}
const addNewDosage = (payload: string) => {
  store.dosages.push({
    id: Date.now(),
    name: payload,
  })
  newDosage.value = ''
}

const openModalPath = () => {
  isModalPath.value = true
  isModalDosage.value = false
}

const openModalDosage = () => {
  isModalDosage.value = true
  isModalPath.value = false
}

const closeModal = () => {
  isModalPath.value = false
  isModalDosage.value = false
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 20px;
  display: flex;
  &__path {
    margin-right: 20px;
  }
}
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
input {
  width: 145px;
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
