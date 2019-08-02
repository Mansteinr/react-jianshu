/**
 * 定义常量 防止在书写的过程中出错 定位难的问题
 */
import { actionTypes } from './index'

 export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
 })

 export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
 })