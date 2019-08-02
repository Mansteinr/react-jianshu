import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './components/header'
import store from './store'

export default class App extends Component{
  render() {
    return (
      // Provider把store里面存储的数据提供给他内部的组件
      <Provider store={store}>
        <Header/>
      </Provider>
    )
  }
}