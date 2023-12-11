<template>
  <h4>Долизатор</h4>
  <div class="wrap">
    <input
      type="text"
      v-model="store.activeDialyzer"
      placeholder="Спр. 'Диализаторы'"
    />
    <button @click="openModal"><img :src="list" alt="list" /></button>
  </div>

  <Modal :show-modal="isModal" @close="closeModal" title="Диализаторы">
    <div class="modal__inputs">
      <input
        v-model="searchDialyzer"
        placeholder="Поиск позиции по первым символам"
      />
      <button @click="store.searchDialyzer(searchDialyzer)">
        <img :src="search" alt="search" />
      </button>
    </div>
    <div class="modal__inputs">
      <input v-model="newDialyzer" placeholder="Добавить новую запись" />
      <button @click="addNewDialyzer(newDialyzer)">
        <img :src="plus" alt="plus" />
      </button>
    </div>
    <div v-if="store.dialyzers.length === 0" class="no-message">
      Нет доступных элементов
    </div>
    <div
      v-else
      class="modal__content"
      v-for="dialyzer in store.dialyzers"
      :key="dialyzer.id"
    >
      <div class="modal__content-items">
        <p
          @click="store.choiceDialyzer(dialyzer.name)"
          :class="{ active: dialyzer.name === store.activeDialyzer }"
        >
          {{ dialyzer.name }}
        </p>
        <button @click="store.deleteDialyzer(dialyzer.id)">
          <img :src="trash" alt="trash" />
        </button>
      </div>
    </div>
  </Modal>
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

const isModal = ref<boolean>(false)
const newDialyzer = ref<string>('')
const searchDialyzer = ref<string>('')

const addNewDialyzer = (payload: string) => {
  store.dialyzers.push({
    id: Date.now(),
    name: payload,
  })
  newDialyzer.value = ''
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
  width: 170px;
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
