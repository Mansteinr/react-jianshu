/**
 * store的出口文件
 */

 import headerReducer from './reducer'
 import * as actionTypes from './constants'
 import  * as actionCreators  from './actionCreators'

 export { headerReducer,actionCreators, actionTypes  }