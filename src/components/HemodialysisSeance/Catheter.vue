<template>
  <div class="сatheter">
    <div class="сatheter__sizes">
      <div class="wrap">
        <input
          type="text"
          v-model="store.activeCatheterSize"
          placeholder="Спр. 'Катетеры'"
          :disabled="store.activeTypeInjection !== 'Катетер'"
        />
        <button
          :disabled="store.activeTypeInjection !== 'Катетер'"
          @click="openModal"
        >
          <img :src="list" alt="list" />
        </button>
      </div>

      <Modal
        :show-modal="isModalCatheterSize"
        @close="closeModal"
        title="Размеры катетеров"
      >
        <div class="modal__inputs">
          <input
            v-model="searchCatheter"
            placeholder="Поиск позиции по первым символам"
          />
          <button @click="store.searchCatheterSize(searchCatheter)">
            <img :src="search" alt="search" />
          </button>
        </div>
        <div class="modal__inputs">
          <input v-model="newCatheter" placeholder="Добавить новую запись" />
          <button @click="addNewCatheter(newCatheter)">
            <img :src="plus" alt="plus" />
          </button>
        </div>
        <div v-if="store.catheterSizes.length === 0" class="no-message">
          Нет доступных элементов
        </div>
        <div
          v-else
          class="modal__content"
          v-for="catheter in store.catheterSizes"
          :key="catheter.id"
        >
          <div class="modal__content-items">
            <p
              @click="store.choiceCatheterSize(catheter.name)"
              :class="{ active: catheter.name === store.activeCatheterSize }"
            >
              {{ catheter.name }}
            </p>
            <button @click="store.deleteCatheterSize(catheter.id)">
              <img :src="trash" alt="trash" />
            </button>
          </div>
        </div>
      </Modal>
    </div>

    <div class="сatheter__types">
      <div class="wrap">
        <input
          type="text"
          v-model="store.activeCatheterType"
          placeholder="Спр. 'Типы катетеров'"
          :disabled="store.activeTypeInjection !== 'Катетер'"
        />
        <button
          :disabled="store.activeTypeInjection !== 'Катетер'"
          @click="openModalType"
        >
          <img :src="list" alt="list" />
        </button>
      </div>

      <Modal
        :show-modal="isModalCatheterType"
        @close="closeModal"
        title="Типы катетеров"
      >
        <div class="modal__inputs">
          <input
            v-model="searchCatheterType"
            placeholder="Поиск позиции по первым символам"
          />
          <button @click="store.searchCatheterType(searchCatheterType)">
            <img :src="search" alt="search" />
          </button>
        </div>
        <div class="modal__inputs">
          <input
            v-model="newCatheterType"
            placeholder="Добавить новую запись"
          />
          <button @click="addNewCatheterTypes(newCatheterType)">
            <img :src="plus" alt="plus" />
          </button>
        </div>
        <div v-if="store.catheterTypes.length === 0" class="no-message">
          Нет доступных элементов
        </div>
        <div
          v-else
          class="modal__content"
          v-for="catheter in store.catheterTypes"
          :key="catheter.id"
        >
          <div class="modal__content-items">
            <p
              @click="store.choiseCatheterType(catheter.name)"
              :class="{ active: catheter.name === store.activeCatheterType }"
            >
              {{ catheter.name }}
            </p>
            <button @click="store.deleteCathaterType(catheter.id)">
              <img :src="trash" alt="trash" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHemodialysisStore } from '../../store/HemodialysisStore'
import { ref } from '@vue/reactivity'

import Modal from '../../UI/Modal.vue'
import list from '../../assets/list.svg'
import search from '../../assets/search.svg'
import trash from '../../assets/trash.svg'
import plus from '../../assets/plus.svg'

const store = useHemodialysisStore()

const isModalCatheterSize = ref<boolean>(false)
const isModalCatheterType = ref<boolean>(false)

const newCatheter = ref<string>('')
const searchCatheter = ref<string>('')

const newCatheterType = ref<string>('')
const searchCatheterType = ref<string>('')

const addNewCatheter = (payload: string) => {
  store.catheterSizes.push({
    id: Date.now(),
    name: payload,
  })
  newCatheter.value = ''
}
const addNewCatheterTypes = (payload: string) => {
  store.catheterTypes.push({
    id: Date.now(),
    name: payload,
  })
  newCatheterType.value = ''
}

const openModal = () => {
  isModalCatheterSize.value = true
  isModalCatheterType.value = false
}
const openModalType = () => {
  isModalCatheterType.value = true
  isModalCatheterSize.value = false
}
const closeModal = () => {
  isModalCatheterSize.value = false
  isModalCatheterType.value = false
}
</script>

<style scoped lang="scss">
.сatheter {
  margin-top: 20px;
  display: flex;
  &__sizes {
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
