<template>
  <h3>Рекомендации</h3>
  <div class="rec">
    <input
      type="text"
      v-model="store.text"
      placeholder="Текст рекомендации пациенту"
    />
    <button @click="store.addText">
      <img :src="plus" alt="add" />
    </button>
  </div>
  <div class="rec__text">
    <p v-for="rec in store.textValues">{{ rec.text }}</p>
  </div>
  <div class="others">
    <input type="date" :value="currentDate" @input="updateDate" />
    <input type="time" :value="currentTime" @input="updateTime" />

    <input v-model="store.name" placeholder="ФИО лечащего врача" type="text" />
    <input v-model="store.position" placeholder="Должность" type="text" />
  </div>
  <button @click="store.save(currentDate, currentTime)" class="save">
    Сохранить назначения
  </button>
</template>

<script setup lang="ts">
import { UseRecommendationStore } from '../../store/RecommendationStore'
import plus from '../../assets/plus.svg'
import { ref, onMounted } from 'vue'

const store = UseRecommendationStore()

const currentDate = ref<string>('')
const currentTime = ref<string>('')

const updateDate = (event: Event) => {
  currentDate.value = (event.target as HTMLInputElement).value
}

const updateTime = (event: Event) => {
  currentTime.value = (event.target as HTMLInputElement).value
}

onMounted(() => {
  const now = new Date()
  currentDate.value = now.toISOString().split('T')[0]
  currentTime.value = now.toTimeString().split(' ')[0]
})
</script>

<style scoped lang="scss">
h3 {
  margin: 30px 0 20px 0;
}

.rec {
  display: flex;
  text-align: center;
  input {
    width: 560px;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__text {
    overflow-y: auto;
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
    max-width: 600px;
    height: 100px;
  }
}
.others {
  margin-top: 20px;
  input {
    height: 30px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
    padding-left: 5px;
  }
}
.save {
  margin-top: 30px;
  height: 35px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 30px;
  cursor: pointer;
}
</style>
