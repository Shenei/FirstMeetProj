<!--
此文件为开发者工具生成，生成时间: 2025/4/23下午6:22:30
使用方法：
在 D:\uni-app开发\rabbiter\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\uni-app开发\rabbiter\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <scroll-view :refresher-enabled="true" :scroll-y="true" class="scroll-view scroll-view">
      <view is="components/RabSwiper">
        <view class="carousel RabSwiper--carousel">
          <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <navigator class="navigator RabSwiper--navigator" hover-class="none">
                <image class="image RabSwiper--image sk-image" mode="aspectFill"></image>
              </navigator>
            </swiper-item>
          </swiper>
          <view class="indicator RabSwiper--indicator">
            <text class="dot RabSwiper--dot active RabSwiper--active"></text>
            <text class="dot RabSwiper--dot"></text>
            <text class="dot RabSwiper--dot"></text>
            <text class="dot RabSwiper--dot"></text>
            <text class="dot RabSwiper--dot"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/ColumnNav">
        <view class="category ColumnNav--category">
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-884 sk-text"
              >居家</text
            >
          </navigator>
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-533 sk-text"
              >锦鲤</text
            >
          </navigator>
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-260 sk-text"
              >服饰</text
            >
          </navigator>
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-999 sk-text"
              >母婴</text
            >
          </navigator>
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-177 sk-text"
              >个护</text
            >
          </navigator>
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-130 sk-text"
              >严选</text
            >
          </navigator>
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-805 sk-text"
              >数码</text
            >
          </navigator>
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-490 sk-text"
              >运动</text
            >
          </navigator>
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-120 sk-text"
              >杂项</text
            >
          </navigator>
          <navigator class="category-item ColumnNav--category-item" hover-class="none">
            <image class="icon ColumnNav--icon sk-image"></image>
            <text class="text ColumnNav--text sk-transparent sk-text-14-2857-530 sk-text"
              >品牌</text
            >
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/Recommend">
        <view class="panel Recommend--panel hot Recommend--hot">
          <view class="item Recommend--item">
            <view class="title Recommend--title">
              <text
                class="title-text Recommend--title-text sk-transparent sk-text-14-2857-709 sk-text"
                >特惠推荐</text
              >
              <text
                class="title-desc Recommend--title-desc sk-transparent sk-text-14-2857-721 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator class="cards Recommend--cards" hover-class="none">
              <image class="image Recommend--image sk-image" mode="aspectFit"></image>
              <image class="image Recommend--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item Recommend--item">
            <view class="title Recommend--title">
              <text
                class="title-text Recommend--title-text sk-transparent sk-text-14-2857-274 sk-text"
                >爆款推荐</text
              >
              <text
                class="title-desc Recommend--title-desc sk-transparent sk-text-14-2857-673 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator class="cards Recommend--cards" hover-class="none">
              <image class="image Recommend--image sk-image" mode="aspectFit"></image>
              <image class="image Recommend--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item Recommend--item">
            <view class="title Recommend--title">
              <text
                class="title-text Recommend--title-text sk-transparent sk-text-14-2857-299 sk-text"
                >一站买全</text
              >
              <text
                class="title-desc Recommend--title-desc sk-transparent sk-text-14-2857-737 sk-text"
                >精心优选</text
              >
            </view>
            <navigator class="cards Recommend--cards" hover-class="none">
              <image class="image Recommend--image sk-image" mode="aspectFit"></image>
              <image class="image Recommend--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item Recommend--item">
            <view class="title Recommend--title">
              <text
                class="title-text Recommend--title-text sk-transparent sk-text-14-2857-882 sk-text"
                >新鲜好物</text
              >
              <text
                class="title-desc Recommend--title-desc sk-transparent sk-text-14-2857-646 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator class="cards Recommend--cards" hover-class="none">
              <image class="image Recommend--image sk-image" mode="aspectFit"></image>
              <image class="image Recommend--image sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
        </view>
      </view>
      <view is="components/RabGuessLike" class="r r">
        <view class="caption RabGuessLike--caption">
          <text
            class="text RabGuessLike--text sk-transparent sk-text-0-0000-809 sk-text sk-pseudo sk-pseudo-circle"
            >猜你喜欢</text
          >
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2025/4/23下午6:22:30

在 D:\uni-app开发\rabbiter\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-978 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-397 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-884 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-533 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-260 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-999 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-177 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-130 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-805 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-490 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-120 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-530 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-709 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-721 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-274 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-673 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-299 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-737 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-882 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-646 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-809 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
