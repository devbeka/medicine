import { defineStore } from 'pinia'
import { INames } from '../models/INames'
import { ITypes } from '../models/ITypes'
import { ref } from '@vue/reactivity'
import { IRows } from '@/models/IRows'

export const useAfterSeanceStore = defineStore('AfterSeanceStore', () => {
  // active
  const medProd = ref<string>('')
  const receptionPath = ref<string>('')
  const dosage = ref<string>('')
  const numbersSeanse = ref<string[]>([])
  const startDate = ref<string>('')
  const endDate = ref<string>('')

  const rows = ref<IRows[]>([])

  const formulateAfterSeance = () => {
    rows.value.push({
      name: medProd.value,
      dosage: dosage.value,
      receptionPath: receptionPath.value,
      startReception: startDate.value,
      endReception: endDate.value,
      numSeance: numbersSeanse.value,
      days: numbersSeanse.value.length,
    })

    medProd.value = ''
    receptionPath.value = ''
    dosage.value = ''
    numbersSeanse.value = []
    startDate.value = ''
    endDate.value = ''
  }
  const removeRow = (row: any) => {
    const index = rows.value.indexOf(row);
    if (index !== -1) {
      rows.value.splice(index, 1);
    }
  };

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
  const numSeances = ref<ITypes[]>([
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5', value: '5' },
    { name: '6', value: '6' },
    { name: '7', value: '7' },
  ])

  // delete
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

  //search
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
  const choiceNumSence = (payload: string) => {
    if (numbersSeanse.value.includes(payload)) {
      const index = numbersSeanse.value.indexOf(payload)
      numbersSeanse.value.splice(index, 1)
    } else {
      numbersSeanse.value.push(payload)
    }
  }

  return {
    medProd,
    medProds,
    deleteMedProd,
    searchMedProd,
    choiceMedProd,
    receptionPath,
    dosage,
    receptionPaths,
    dosages,
    deleteReceptionPath,
    deleteDosa,
    searchPath,
    searchDosa,
    choicePath,
    choiceDosage,
    numSeances,
    choiceNumSence,
    numbersSeanse,
    startDate,
    endDate,
    rows,
    formulateAfterSeance,removeRow
  }
})
