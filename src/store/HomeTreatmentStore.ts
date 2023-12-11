import { IHome } from '@/models/IHome'
import { INames } from '@/models/INames'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeTreatmentStore = defineStore('HomeTreatmentStore', () => {
  const medProd = ref<string>('')
  const receptionPath = ref<string>('')
  const dosage = ref<string>('')
  const time = ref<string>('')
  const startDate = ref<string>('')
  const endDate = ref<string>('')

  const atHome = ref<IHome[]>([])
  const add = () => {
    atHome.value.push({
      med: medProd.value,
      path: receptionPath.value,
      dosage: dosage.value,
      time: time.value,
      end: startDate.value,
      start: endDate.value,
    })

    medProd.value = ''
    receptionPath.value = ''
    dosage.value = ''
    time.value = ''
    endDate.value = ''
    startDate.value = ''
  }

  //data
  const medProds = ref<INames[]>([
    { id: 1, name: 'Лекарственный препарат 1' },
    { id: 2, name: 'Лекарственный препарат 2' },
    { id: 3, name: 'Лекарственный препарат 3' },
    { id: 4, name: 'Лекарственный препарат 4' },
  ])
  const receptionPaths = ref<INames[]>([
    { id: 1, name: 'Перорально' },
    { id: 2, name: 'Подкожно' },
    { id: 3, name: 'Апрериально' },
  ])
  const dosages = ref<INames[]>([
    { id: 1, name: '20 мг' },
    { id: 2, name: '10 мл' },
    { id: 3, name: '30 мкг' },
  ])
  const times = ref<INames[]>([
    { id: 1, name: '1 раза в день' },
    { id: 2, name: '2 раза в день' },
    { id: 3, name: '3 раза в день' },
  ])

  //delete
  const deleteMedProd = (id: number) => {
    const update = medProds.value.filter((el) => el.id !== id)
    medProds.value = update
  }
  const deleteReceptionPath = (id: number) => {
    const update = receptionPaths.value.filter((el) => el.id !== id)
    receptionPaths.value = update
  }
  const deleteDosa = (id: number) => {
    const update = dosages.value.filter((el) => el.id !== id)
    dosages.value = update
  }
  const deleteTime = (id: number) => {
    const update = times.value.filter((el) => el.id !== id)
    times.value = update
  }

  // search
  const searchMedProd = (payload: string) => {
    const update = medProds.value.filter((el) => el.name.includes(payload))
    medProds.value = update
  }
  const searchPath = (payload: string) => {
    const update = receptionPaths.value.filter((el) =>
      el.name.includes(payload)
    )
    receptionPaths.value = update
  }
  const searchDosa = (payload: string) => {
    const update = dosages.value.filter((el) => el.name.includes(payload))
    dosages.value = update
  }
  const searchTime = (payload: string) => {
    const update = times.value.filter((el) => el.name.includes(payload))
    times.value = update
  }

  // choise
  const choiceMedProd = (payload: string) => {
    medProd.value = payload
  }
  const choicePath = (payload: string) => {
    receptionPath.value = payload
  }
  const choiceDosage = (payload: string) => {
    dosage.value = payload
  }
  const choiceTime = (payload: string) => {
    time.value = payload
  }

  return {
    medProd,
    receptionPath,
    dosage,
    time,
    startDate,
    endDate,
    medProds,
    receptionPaths,
    dosages,
    deleteMedProd,
    deleteReceptionPath,
    deleteDosa,
    searchMedProd,
    searchPath,
    searchDosa,
    choiceMedProd,
    choicePath,
    choiceDosage,
    choiceTime,
    times,
    deleteTime,
    searchTime,add,atHome
  }
})
