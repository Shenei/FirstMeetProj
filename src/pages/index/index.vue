<script setup lang="ts">
import { ref } from 'vue'
import CustomNavBar from './components/CustomNavBar.vue'
import ColumnNav from './components/ColumnNav.vue'
import Recommend from './components/Recommend.vue'
import HomeSkeleton from './components/HomeSkeleton.vue'
import { getSwiperData, getCategoryItem, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { CategoryItem, BannerItem, HotItem } from '@/types/home'
import { useGuessList } from '@/composables'

//赋值的时候告诉我是什么类型的哟,你知道的,我没有安全感...
const swiperData = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const isRefresh = ref(false)
const isLoading = ref()

const getSwiperPic = async () => {
  let res = await getSwiperData()
  swiperData.value = res.result
}
const getCategory = async () => {
  let res = await getCategoryItem()
  categoryList.value = res.result
}
const getHotList = async () => {
  let res = await getHomeHotAPI()
  hotList.value = res.result
}
const { guessRef, onScrolltolower } = useGuessList()

const pullRefresh = async () => {
  isRefresh.value = true
  guessRef.value?.cleanData()
  await Promise.all([getSwiperPic(), getCategory(), getHotList()])
  isRefresh.value = false
  // console.log('shuaxin')
}
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getSwiperPic(), getCategory(), getHotList()])

  isLoading.value = false
})
</script>

<template>
  <CustomNavBar />
  <!-- 滚动容器需要设置高度,如果没有高度,就没有效果,flex 1 自动分配高度 -->

  <scroll-view
    scroll-y
    refresher-enabled
    @scrolltolower="onScrolltolower"
    @refresherrefresh="pullRefresh"
    :refresher-triggered="isRefresh"
    class="scroll-view"
  >
    <HomeSkeleton v-if="isLoading" />
    <template v-else>
      <RabSwiper :list="swiperData" />
      <ColumnNav :list="categoryList" />
      <Recommend :list="hotList" />
      <RabGuessLike ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
