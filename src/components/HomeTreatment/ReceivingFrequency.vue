<template>
  <div class="content">
    <div class="content__time">
      <p>Кратность приема</p>
      <div class="wrap">
        <input
          type="text"
          v-model="store.time"
          placeholder="Спр. 'Кр-ть приема'"
        />
        <button @click="openModalPath">
          <img :src="list" alt="list" />
        </button>
      </div>

      <Modal
        :show-modal="isModalPath"
        @close="closeModal"
        title="Справочник 'Кратность приемa'"
      >
        <div class="modal__inputs">
          <input
            v-model="searchTime"
            placeholder="Поиск позиции по первым символам"
          />
          <button @click="store.searchTime(searchTime)">
            <img :src="search" alt="search" />
          </button>
        </div>
        <div class="modal__inputs">
          <input v-model="newTime" placeholder="Добавить новую запись" />
          <button @click="addNewTime(newTime)">
            <img :src="plus" alt="plus" />
          </button>
        </div>
        <div v-if="store.times.length === 0" class="no-message">
          Нет доступных элементов
        </div>
        <div
          v-else
          class="modal__content"
          v-for="time in store.times"
          :key="time.id"
        >
          <div class="modal__content-items">
            <p
              @click="store.choiceTime(time.name)"
              :class="{ active: time.name === store.time }"
            >
              {{ time.name }}
            </p>
            <button @click="store.deleteTime(time.id)">
              <img :src="trash" alt="trash" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
    <div class="content__date">
      <div class="date__start">
        <p>Начало приёма</p>
        <input v-model="store.startDate" type="date" />
      </div>

      <div class="date__end">
        <p>Конец приёма</p>
        <input v-model="store.endDate" type="date" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeTreatmentStore } from '../../store/HomeTreatmentStore'
import { ref } from '@vue/reactivity'

import Modal from '../../UI/Modal.vue'
import list from '../../assets/list.svg'
import search from '../../assets/search.svg'
import trash from '../../assets/trash.svg'
import plus from '../../assets/plus.svg'



const store = useHomeTreatmentStore()
const isModalPath = ref<boolean>(false)

const newTime = ref<string>('')
const searchTime = ref<string>('')

// const aaaa = () => {
//   const timeDifference = store.endDate.getTime() - store.startDate.getTime()
//   const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24))

//   console.log(`Разница в днях: ${daysDifference}`)
// }

const addNewTime = (payload: string) => {
  store.times.push({
    id: Date.now(),
    name: payload,
  })
  newTime.value = ''
}

const openModalPath = () => {
  isModalPath.value = true
}

const closeModal = () => {
  isModalPath.value = false
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 30px;
  display: flex;
  align-items: center;
  &__time {
    margin-right: 20px;
  }
  &__date {
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
