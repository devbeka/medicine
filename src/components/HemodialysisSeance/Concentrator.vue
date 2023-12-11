<template>
  <h4>Концентратор</h4>
  <div class="consentrator">
    <input
      type="text"
      v-model="store.activeConcentrator"
      placeholder="Спр. 'Концентратор'"
    />
    <button @click="openModal"><img :src="list" alt="list" /></button>

    <div class="consentrator__volume">
      <p>Объем л.</p>
      <input v-model="store.activeVolumeL" placeholder="10 л." type="number" />
    </div>
  </div>

  <Modal :show-modal="isModal" @close="closeModal" title="Концентраторы">
    <div class="modal__inputs">
      <input
        v-model="searchConcentrator"
        placeholder="Поиск позиции по первым символам"
      />
      <button @click="store.searchConcentrator(searchConcentrator)">
        <img :src="search" alt="search" />
      </button>
    </div>
    <div class="modal__inputs">
      <input v-model="newConcentrator" placeholder="Добавить новую запись" />
      <button @click="addNewConcentrator(newConcentrator)">
        <img :src="plus" alt="plus" />
      </button>
    </div>
    <div v-if="store.concentrators.length === 0" class="no-message">
      Нет доступных элементов
    </div>
    <div
      v-else
      class="modal__content"
      v-for="concentrator in store.concentrators"
      :key="concentrator.id"
    >
      <div class="modal__content-items">
        <p
          @click="store.choiceConcentrator(concentrator.name)"
          :class="{ active: concentrator.name === store.activeConcentrator }"
        >
          {{ concentrator.name }}
        </p>
        <button @click="store.deleteConcentrator(concentrator.id)">
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
const newConcentrator = ref<string>('')
const searchConcentrator = ref<string>('')

const addNewConcentrator = (payload: string) => {
  store.concentrators.push({
    id: Date.now(),
    name: payload,
  })
  newConcentrator.value = ''
}

const openModal = () => {
  isModal.value = true
}
const closeModal = () => {
  isModal.value = false
}
</script>

<style scoped lang="scss">
.consentrator {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  &__volume {
    margin-left: 30px;
    p {
      margin-top: -21px;
      font-size: 13px;
    }
    input {
      width: 50px;
    }
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
</style>
