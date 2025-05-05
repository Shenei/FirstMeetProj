/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
/**
 * 定义全局组件的类型
 */
import 'vue'
import RabSwiper from '@/components/RabSwiper.vue'
import RabGuessLike from '@/components/RabGuessLike.vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    RabSwiper: typeof RabSwiper
    RabGuessLike: typeof RabGuessLike
  }
}
export type GuessLikeInstance = InstanceType<typeof RabGuessLike>
