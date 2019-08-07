/**
 * 定义常量 防止在书写的过程中出错 定位难的问题
 * 
 * 要修改state里面的数据 首先要先创建action
 * 
 */
import { actionTypes } from './index'
import axios from 'axios'
import baseUrl from '../../../common/js/config'
import { fromJS } from 'immutable'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
 })

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
 })
// 返回一个对象
 export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
 })

// 返回一个方法
 export const getList = () => {
  return (dispatch) => {
    axios.get(baseUrl + '/trending_search').then(res => {
      const action = changeList(res.data)
      // 将action派发给store
      dispatch(action)
    }).catch( err => {
      console.log(err)
    })
  }
 }

 export const mouseEnter = () => ({
   type: actionTypes.MOUSE_ENTER
 })
 export const mouseLeave = () => ({
   type: actionTypes.MOUSE_LEAVE
 })
 export const changePage = (page) => ({
   type: actionTypes.CHANGE_PAGE,
   page
 })