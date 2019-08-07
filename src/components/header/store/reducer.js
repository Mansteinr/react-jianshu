import { actionTypes } from './index.js'
import { fromJS } from 'immutable'

// immutable可以将js对象转为immutable对象
// immutable对象不可更改 

// const defaultState = {
//   focused: false
// }

// js对象immutable化
const defaultState = fromJS({
  list: [],
  page: 1,
  totalPage: 1,
  focused: false,
  mouseIn: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      // 下面的语法效果相同 merge再写多个的时候 比较方便
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      // return state.set('list', action.data).set('totalPage', action.totalPage)
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default: 
      return state
  }



  // if(action.type === actionTypes.SEARCH_FOCUS) {
  //   // immutable对象设置set方法，会结合之前的immutable对象的值
  //   // 和设置的值，返回一个全新的对象
  //   return state.set('focused', true) // 设置immutable对象
  //   // return { 设置js对象
  //   //   focused: true
  //   // }
  // }
  // if(action.type === actionTypes.SEARCH_BLUR) {
  //   return state.set('focused', false) // 设置immutable对象
  //   // return {
  //   //   focused: false
  //   // }
  // }
  // if(action.type === actionTypes.CHANGE_LIST) {
  //   return state.set('list', action.data) // 设置immutable对象
  // }
  return state
}