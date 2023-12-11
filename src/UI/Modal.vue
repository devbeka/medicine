<template>
  <div @click="closeModal" v-if="showModal" class="modal">
    <div @click.stop class="modal__content">
      <h5 class="modal__title">{{ title }}</h5>
      <button class="modal__close" @click="closeModal">Закрыть</button>
      <div class="modal__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface ModalProps {
  showModal: boolean
  title: string
}

const { showModal, title } = defineProps(['showModal', 'title']) as ModalProps
const emit = defineEmits()

const closeModal = () => {
  emit('close')
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    background: white;
    padding: 25px 20px;
    border-radius: 5px;
    width: 500px;
  }

  &__close {
    width: 100px;
    height: 30px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin: 15px 0 20px 0;
  }
}
</style>
