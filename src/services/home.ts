import { http } from '@/utils/http'
//前面加 type 告诉 TypeScript 编译器只导入 BannerItem 类型的定义，而不是执行模块中的代码
import type { BannerItem, CategoryItem, GuessItem, HotItem, PageResult } from '@/types/home'
import type { PageParams } from '@/types/global'

//类型合并



export const getSwiperData = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
export const getCategoryItem = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
