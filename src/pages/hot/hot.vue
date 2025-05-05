<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { getHotRecommendAPI } from '@/services/hot'
import { ref, watch } from 'vue'
import type { HotResult, SubTypeItem } from '@/types/hot'

import type { GoodsItem } from '@/types/global'
// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
//接受页面传参
const query = defineProps<{
  type: string
}>()
//版心图片
const bannerPic = ref()
//获取所有标签的列表数据
const subType = ref<SubTypeItem[]>([])
//选中标签的列表数据
const subList = ref<SubTypeItem>()
//数据没有更多
const noMore = ref(false)
//首页跳转携带的type参数决定向那个路由发起请求
const currentItem = hotMap.find((item) => item.type === query.type)
//默认选中0
const activeIdx = ref(0)
uni.setNavigationBarTitle({
  //感叹号!
  title: currentItem!.title,
})
//根据url获取总页面数据
const getHotData = async () => {
  let res = await getHotRecommendAPI(currentItem!.url)
  bannerPic.value = res.result.bannerPicture
  subType.value = res.result.subTypes
  subList.value = subType.value[0]
}
//滚动加载
const onScrolltolower = async () => {
  if (noMore.value) {
    return
  }

  if (subList.value!.goodsItems.page < subList.value!.goodsItems.pages) {
    // 当前页码累加
    subList.value!.goodsItems.page++
  } else {
    // 标记已结束
    noMore.value = true
    return uni.showToast({ icon: 'none', title: '没有更多了' })
  }
  let res = await getHotRecommendAPI(currentItem!.url, {
    subType: subList.value!.id,
    page: subList.value!.goodsItems.page,
    pageSize: subList.value!.goodsItems.pageSize,
  })
  const newSubList = res.result.subTypes[activeIdx.value]
  // 数组追加
  subList.value!.goodsItems.items.push(...newSubList.goodsItems.items)
}
//监听标签栏选中的变化,动态给scrollView赋值
watch(activeIdx, (newVal, oldVal) => {
  subList.value = subType.value[newVal]
})
onLoad(() => {
  getHotData()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPic"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        class="text"
        :class="{ active: index === activeIdx }"
        v-for="(item, index) in subType"
        :key="item.id"
        @tap="activeIdx = index"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view scroll-y class="scroll-view" @scrolltolower="onScrolltolower">
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in subList?.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.desc }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">正在加载...</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
