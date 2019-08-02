
/**
 * 如果将所有的reducer放在一个文件夹中， 会造成reducer文件夹过大
 * 
 * 可以将reducer拆分至各个组件中 即在各个组件下面分别新建store文件加
 * 
 * 然后在通过combineReducers将各个小的reducer聚合成大的reducer
 * 
 * 
 * 
 */

import { combineReducers } from 'redux'

// 引入各个小的reducer
import { headerReducer} from '../components/header/store'

// 将各个小的reducer聚合
// 在header组件中 以前通过state.focused来取数据 现在要通过state.header.focused来取数据
const reducer =  combineReducers({
  header: headerReducer
})

export default reducer
