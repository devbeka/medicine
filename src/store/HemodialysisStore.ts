import { defineStore } from 'pinia'
import { ref, Ref } from '@vue/reactivity'
import { INames } from '../models/INames'
import { ITypes } from '../models/ITypes'

export const useHemodialysisStore = defineStore('HemodialysisStore', () => {
  // active
  const activeApparat = ref<string>('')
  const activeDialyzer = ref<string>('')
  const activeConcentrator = ref<string>('')
  const activeVolumeL = ref<number | null>()
  const activeTypeInjection = ref<string>('')
  const activeNeedleSize = ref<string>('')
  const activeNeedleType = ref<string>('')
  const activeCatheterSize = ref<string>('')
  const activeCatheterType = ref<string>('')
  const activeBicarbonate = ref<string>('')
  const dryWeight = ref<number | null>()
  const activeAnticoagulation = ref<string>('')
  const activeVolumeEd = ref<number | null>()

  const hemodialysis: Ref<(string | number | null | undefined)[]> = ref([])

  const handleFormSession = () => {
    hemodialysis.value.push(
      activeApparat.value,
      activeDialyzer.value,
      activeConcentrator.value,
      activeVolumeL.value,
      activeTypeInjection.value,
      activeNeedleSize.value,
      activeNeedleType.value,
      activeCatheterSize.value,
      activeCatheterType.value,
      activeBicarbonate.value,
      dryWeight.value,
      activeAnticoagulation.value,
      activeVolumeEd.value
    )
    activeApparat.value = ''
    activeDialyzer.value = ''
    activeConcentrator.value = ''
    activeVolumeL.value = null
    activeTypeInjection.value = ''
    activeNeedleSize.value = ''
    activeNeedleType.value = ''
    activeCatheterSize.value = ''
    activeCatheterType.value = ''
    activeBicarbonate.value = ''
    dryWeight.value = null
    activeAnticoagulation.value = ''
    activeVolumeEd.value = null
  }

  // data
  const apparats = <ITypes[]>[
    { name: 'HD', value: 'HD' },
    { name: 'HDF', value: 'HDF' },
    { name: 'UF', value: 'UF' },
  ]
  const dialyzers = ref<INames[]>([
    { id: 1, name: 'Диализатор 1' },
    { id: 2, name: 'Диализатор 2' },
    { id: 3, name: 'Диализатор 3' },
    { id: 4, name: 'Диализатор 4' },
  ])
  const concentrators = ref<INames[]>([
    { id: 1, name: 'Концентратор 1' },
    { id: 2, name: 'Концентратор 2' },
    { id: 3, name: 'Концентратор 3' },
  ])
  const typeInjection = <ITypes[]>[
    { name: 'Игла', value: 'Igla' },
    { name: 'Катетер', value: 'Katater' },
  ]
  const needleSizes = ref<INames[]>([
    { id: 1, name: 'Игла размер 1' },
    { id: 2, name: 'Игла размер 2' },
    { id: 3, name: 'Игла размер 3' },
    { id: 4, name: 'Игла размер 4' },
  ])
  const needleTypes = ref<INames[]>([
    { id: 1, name: 'Венозные' },
    { id: 2, name: 'Артериальные' },
  ])
  const catheterSizes = ref<INames[]>([
    { id: 1, name: 'катетер размер 1' },
    { id: 2, name: 'катетер размер 2' },
    { id: 3, name: 'катетер размер 3' },
  ])
  const catheterTypes = ref<INames[]>([
    { id: 1, name: 'Кататер Фолея' },
    { id: 2, name: 'Кататер Малеко' },
    { id: 3, name: 'Кататер Пеццера' },
    { id: 4, name: 'Кататер Тимана' },
    { id: 5, name: 'Кататер Нелатона' },
  ])
  const bicarbonates = <ITypes[]>[
    { name: 'Жидкий', value: 'л.' },
    { name: 'Твердый', value: 'гр.' },
  ]
  const anticoagulations = ref<INames[]>([
    { id: 1, name: 'Наименование 1' },
    { id: 3, name: 'Наименование 2' },
    { id: 2, name: 'Наименование 3' },
  ])

  // choice
  const choiceApparat = (payload: string) => {
    activeApparat.value = payload
  }
  const choiceDialyzer = (payload: string) => {
    activeDialyzer.value = payload
  }
  const choiceConcentrator = (payload: string) => {
    activeConcentrator.value = payload
  }
  const choiceTypeInjection = (payload: string) => {
    activeTypeInjection.value = payload
  }
  const choiceNeedleSize = (payload: string) => {
    activeNeedleSize.value = payload
  }
  const choiseNeedleType = (payload: string) => {
    activeNeedleType.value = payload
  }
  const choiceCatheterSize = (payload: string) => {
    activeCatheterSize.value = payload
  }
  const choiseCatheterType = (payload: string) => {
    activeCatheterType.value = payload
  }
  const choiseBicorbanate = (payload: string) => {
    if (!activeBicarbonate.value.includes(payload)) {
      activeBicarbonate.value = activeBicarbonate.value.concat(payload)
    }
  }
  const choiceAnticoagulation = (payload: string) => {
    activeAnticoagulation.value = payload
  }

  // search
  const searchDialyzer = (payload: string) => {
    const update = dialyzers.value.filter((el) => el.name.includes(payload))
    dialyzers.value = update
  }
  const searchConcentrator = (payload: string) => {
    const update = concentrators.value.filter((el) => el.name.includes(payload))
    concentrators.value = update
  }
  const serchNeedleSize = (payload: string) => {
    const update = needleSizes.value.filter((el) => el.name.includes(payload))
    needleSizes.value = update
  }
  const searchNeedleType = (payload: string) => {
    const update = needleTypes.value.filter((el) => el.name.includes(payload))
    needleTypes.value = update
  }
  const searchCatheterSize = (payload: string) => {
    const update = catheterSizes.value.filter((el) => el.name.includes(payload))
    catheterSizes.value = update
  }
  const searchCatheterType = (payload: string) => {
    const update = catheterTypes.value.filter((el) => el.name.includes(payload))
    catheterTypes.value = update
  }
  const serchAnticoagulation = (payload: string) => {
    const update = anticoagulations.value.filter((el) =>
      el.name.includes(payload)
    )
    anticoagulations.value = update
  }

  // delete
  const deleteDialyzer = (id: number) => {
    const update = dialyzers.value.filter((el) => el.id !== id)
    dialyzers.value = update
  }
  const deleteConcentrator = (id: number) => {
    const update = concentrators.value.filter((el) => el.id !== id)
    concentrators.value = update
  }
  const deleteNeedleSize = (id: number) => {
    const update = needleSizes.value.filter((el) => el.id !== id)
    needleSizes.value = update
  }
  const deleteNeedleType = (id: number) => {
    const update = needleTypes.value.filter((el) => el.id !== id)
    needleTypes.value = update
  }
  const deleteCatheterSize = (id: number) => {
    const update = catheterSizes.value.filter((el) => el.id !== id)
    catheterSizes.value = update
  }
  const deleteCathaterType = (id: number) => {
    const update = catheterTypes.value.filter((el) => el.id !== id)
    catheterTypes.value = update
  }
  const deleteAnticoagulation = (id: number) => {
    const update = anticoagulations.value.filter((el) => el.id !== id)
    anticoagulations.value = update
  }

  return {
    activeApparat,
    apparats,
    choiceApparat,
    dialyzers,
    activeDialyzer,
    choiceDialyzer,
    deleteDialyzer,
    searchDialyzer,
    activeConcentrator,
    choiceConcentrator,
    deleteConcentrator,
    searchConcentrator,
    concentrators,
    activeVolumeL,
    activeTypeInjection,
    typeInjection,
    choiceTypeInjection,
    activeNeedleSize,
    activeNeedleType,
    needleSizes,
    needleTypes,
    choiceNeedleSize,
    choiseNeedleType,
    deleteNeedleSize,
    deleteNeedleType,
    serchNeedleSize,
    searchNeedleType,
    activeCatheterSize,
    activeCatheterType,
    catheterSizes,
    catheterTypes,
    choiceCatheterSize,
    choiseCatheterType,
    deleteCatheterSize,
    deleteCathaterType,
    searchCatheterSize,
    searchCatheterType,
    bicarbonates,
    activeBicarbonate,
    choiseBicorbanate,
    dryWeight,
    activeAnticoagulation,
    anticoagulations,
    choiceAnticoagulation,
    deleteAnticoagulation,
    serchAnticoagulation,
    activeVolumeEd,
    hemodialysis,
    handleFormSession,
  }
})
