import { actionTypes } from './index.js'
import { fromJS } from 'immutable'

// immutable可以将js对象转为immutable对象
// immutable对象不可更改 

// const defaultState = {
//   focused: false
// }

// js对象immutable化
const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data)
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