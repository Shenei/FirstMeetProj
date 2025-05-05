import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddress = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()
  const changeSelected = (val: AddressItem) => {
    selectedAddress.value = val
  }
  return {
    selectedAddress,
    changeSelected,
  }
})
