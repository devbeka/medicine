<template>
  <div class="needle">
    <div class="needle__sizes">
      <div class="wrap">
        <input
          type="text"
          v-model="store.activeNeedleSize"
          placeholder="Спр. 'Иглы'"
          :disabled="store.activeTypeInjection !== 'Игла'"
        />
        <button
          :disabled="store.activeTypeInjection !== 'Игла'"
          @click="openModal"
        >
          <img :src="list" alt="list" />
        </button>
      </div>

      <Modal
        :show-modal="isModalNeedle"
        @close="closeModal"
        title="Размеры игл"
      >
        <div class="modal__inputs">
          <input
            v-model="searchNeedle"
            placeholder="Поиск позиции по первым символам"
          />
          <button @click="store.serchNeedleSize(searchNeedle)">
            <img :src="search" alt="search" />
          </button>
        </div>
        <div class="modal__inputs">
          <input v-model="newNeedle" placeholder="Добавить новую запись" />
          <button @click="addNewNeedle(newNeedle)">
            <img :src="plus" alt="plus" />
          </button>
        </div>
        <div v-if="store.needleSizes.length === 0" class="no-message">
          Нет доступных элементов
        </div>
        <div
          v-else
          class="modal__content"
          v-for="needle in store.needleSizes"
          :key="needle.id"
        >
          <div class="modal__content-items">
            <p
              @click="store.choiceNeedleSize(needle.name)"
              :class="{ active: needle.name === store.activeNeedleSize }"
            >
              {{ needle.name }}
            </p>
            <button @click="store.deleteNeedleSize(needle.id)">
              <img :src="trash" alt="trash" />
            </button>
          </div>
        </div>
      </Modal>
    </div>

    <div class="needle__types">
      <div class="wrap">
        <input
          type="text"
          v-model="store.activeNeedleType"
          placeholder="Спр. 'Типы игл'"
          :disabled="store.activeTypeInjection !== 'Игла'"
        />
        <button
          :disabled="store.activeTypeInjection !== 'Игла'"
          @click="openModalType"
        >
          <img :src="list" alt="list" />
        </button>
      </div>

      <Modal :show-modal="isModalType" @close="closeModal" title="Типы игл">
        <div class="modal__inputs">
          <input
            v-model="searchNeedleType"
            placeholder="Поиск позиции по первым символам"
          />
          <button @click="store.searchNeedleType(searchNeedleType)">
            <img :src="search" alt="search" />
          </button>
        </div>
        <div class="modal__inputs">
          <input v-model="newNeedleType" placeholder="Добавить новую запись" />
          <button @click="addNewNeedleTypes(newNeedleType)">
            <img :src="plus" alt="plus" />
          </button>
        </div>
        <div v-if="store.needleTypes.length === 0" class="no-message">
          Нет доступных элементов
        </div>
        <div
          v-else
          class="modal__content"
          v-for="needle in store.needleTypes"
          :key="needle.id"
        >
          <div class="modal__content-items">
            <p
              @click="store.choiseNeedleType(needle.name)"
              :class="{ active: needle.name === store.activeNeedleType }"
            >
              {{ needle.name }}
            </p>
            <button @click="store.deleteNeedleType(needle.id)">
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

const isModalNeedle = ref<boolean>(false)
const isModalType = ref<boolean>(false)

const newNeedle = ref<string>('')
const searchNeedle = ref<string>('')

const newNeedleType = ref<string>('')
const searchNeedleType = ref<string>('')

const addNewNeedle = (payload: string) => {
  store.needleSizes.push({
    id: Date.now(),
    name: payload,
  })
  newNeedle.value = ''
}
const addNewNeedleTypes = (payload: string) => {
  store.needleTypes.push({
    id: Date.now(),
    name: payload,
  })
  newNeedleType.value = ''
}

const openModal = () => {
  isModalNeedle.value = true
  isModalType.value = false
}
const openModalType = () => {
  isModalType.value = true
  isModalNeedle.value = false
}
const closeModal = () => {
  isModalNeedle.value = false
  isModalType.value = false
}
</script>

<style scoped lang="scss">
.needle {
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
