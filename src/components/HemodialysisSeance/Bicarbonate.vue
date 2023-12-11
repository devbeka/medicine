<template>
  <div class="content">
    <div class="content__bicarbonate">
      <p class="content__bicarbonate-title">Бикарбонат</p>
      <div class="wrap">
        <input
          class="content__bicarbonate-input"
          type="text"
          v-model="store.activeBicarbonate"
          placeholder="XXX гр/мл"
        />
        <button @click="openModalB">
          <img :src="list" alt="list" />
        </button>
      </div>

      <Modal
        :show-modal="isModalB"
        @close="closeModal"
        title="Справочник бикарбонат"
      >
        <div
          class="modal__content"
          v-for="bicarbonate in store.bicarbonates"
          :key="bicarbonate.value"
        >
          <div class="modal__content-items">
            <p
              @click="store.choiseBicorbanate(bicarbonate.value)"
              :class="{ active: bicarbonate.name === store.activeBicarbonate }"
            >
              {{ bicarbonate.name }}
            </p>
          </div>
        </div>
      </Modal>
    </div>
    <div class="content__weigth">
      <p class="content__weigth-title">Сухой вес пациента</p>
      <input
        v-model="store.dryWeight"
        class="content__weigth-input"
        placeholder="XXX кг."
        type="number"
      />
    </div>
    <div class="content__anti">
      <p>Антикоагуляция</p>
      <div class="wrap">
        <input
          class="content__anti-input"
          type="text"
          v-model="store.activeAnticoagulation"
          placeholder="Наименование"
        />
        <button @click="openModalA">
          <img :src="list" alt="list" />
        </button>
      </div>

      <Modal
        :show-modal="isModalA"
        @close="closeModal"
        title="Наименование антикоагуляций"
      >
        <div class="modal__inputs">
          <input
            v-model="searchAnti"
            placeholder="Поиск позиции по первым символам"
          />
          <button @click="store.serchAnticoagulation(searchAnti)">
            <img :src="search" alt="search" />
          </button>
        </div>
        <div class="modal__inputs">
          <input v-model="newAnti" placeholder="Добавить новую запись" />
          <button @click="addNewAnti(newAnti)">
            <img :src="plus" alt="plus" />
          </button>
        </div>
        <div v-if="store.anticoagulations.length === 0" class="no-message">
          Нет доступных элементов
        </div>
        <div
          v-else
          class="modal__content"
          v-for="anticoagulation in store.anticoagulations"
          :key="anticoagulation.id"
        >
          <div class="modal__content-items">
            <p
              @click="store.choiceAnticoagulation(anticoagulation.name)"
              :class="{
                active: anticoagulation.name === store.activeAnticoagulation,
              }"
            >
              {{ anticoagulation.name }}
            </p>
            <button @click="store.deleteAnticoagulation(anticoagulation.id)">
              <img :src="trash" alt="trash" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
    <div class="content__volume">
      <p class="content__volume-title">Объем</p>
      <input
        v-model="store.activeVolumeEd"
        class="content__volume-input"
        placeholder="XXX ед."
        type="number"
      />
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

const isModalB = ref<boolean>(false)
const isModalA = ref<boolean>(false)

const newAnti = ref<string>('')

const searchAnti = ref<string>('')

const addNewAnti = (payload: string) => {
  store.anticoagulations.push({
    id: Date.now(),
    name: payload,
  })
  newAnti.value = ''
}
const openModalB = () => {
  isModalA.value = false
  isModalB.value = true
}
const openModalA = () => {
  isModalB.value = false
  isModalA.value = true
}
const closeModal = () => {
  isModalB.value = false
  isModalA.value = false
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 30px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  &__bicarbonate {
    &-input {
      width: 145px;
    }
  }
  &__weigth {
    margin-left: 20px;
    margin-top: -20px;
    &-input {
      width: 80px;
    }
    &-title {
      width: 80px;
    }
  }
  &__anti {
    margin-left: 10px;
  }
  &__volume {
    margin-left: 20px;
    &-input {
      width: 70px;
    }
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

.active {
  color: green;
}
input {
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
