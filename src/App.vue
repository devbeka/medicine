<script setup lang="ts">
import HemodialysisSeance from './components/HemodialysisSeance/index.vue'
import AfterSeanse from './components/AfterSeance/index.vue'
import HomeTreatment from './components/HomeTreatment/index.vue'
import Recommendations from './components/Recommendations/index.vue'
</script>

<template>
  <div class="title">
    <h1 class="title__text">Сеанс гемодиализа</h1>
    <p class="title__month">№ месяца: <span>4</span></p>
  </div>

  <HemodialysisSeance />
  <AfterSeanse />
  <HomeTreatment />
  <Recommendations />
</template>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin-bottom: 30px;
}
.title__text {
  font-size: 20px;
}
span {
  color: blue;
}
</style>
