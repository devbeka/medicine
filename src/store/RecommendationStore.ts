import { IRec } from '@/models/IRec'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const UseRecommendationStore = defineStore('RecommendationStore', () => {
  interface TextValue {
    text?: string
  }

  const textValues = ref<TextValue[]>([])
  const destinations = ref<IRec[]>([])

  const text = ref<string>('')
  const name = ref<string>('')
  const position = ref<string>('')

  const addText = () => {
    textValues.value.push({
      text: text.value,
    })
    text.value = ''
  }

  const save = (currentDate: string, currentTime: string) => {
    destinations.value.push({
      date: currentDate,
      time: currentTime,
      name: name.value,
      position: position.value,
      rec: textValues.value,
    })

    name.value = ''
    position.value = ''
    textValues.value = []
  }

  return {
    text,
    name,
    position,
    textValues,
    destinations,
    save,
    addText,
  }
})
