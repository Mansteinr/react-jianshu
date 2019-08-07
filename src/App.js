import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './components/header'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'


// 引入组件
import Home from './components/home'
import Detail from './components/detail'

export default class App extends Component{
  render() {
    return (
      // Provider把store里面存储的数据提供给他内部的组件
      <Provider store={store}>
        <div>
          <Header/>
          <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}