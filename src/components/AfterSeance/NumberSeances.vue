<template>
  <div class="numbers">
    <p>Номера сеансов:</p>
    <ul>
      <li v-for="num in store.numSeances" :key="num.value">
        <button
          :class="{
            active: store.numbersSeanse.includes(num.value),
          }"
          @click="store.choiceNumSence(num.value)">
          {{ num.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useAfterSeanceStore } from '../../store/AfterSeanseStore'

const store = useAfterSeanceStore()
</script>

<style scoped lang="scss">
.numbers {
  margin-top: 30px;
  p {
    margin-bottom: 20px;
  }
  ul {
    display: flex;

    li {
      margin-right: 10px;

      button {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: 1px solid #ccc;
        font-size: 16px;
        cursor: pointer;
      }
      .active {
        background-color: #0077cc;
        color: white;
      }
    }
  }
}
</style>
