import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './components/header'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'

export default class App extends Component{
  render() {
    return (
      // Provider把store里面存储的数据提供给他内部的组件
      <Provider store={store}>
        <div>
          <Header/>
          <BrowserRouter>
          <div>
            <Route path='/' exact render={ () => <div>home</div> }></Route>
            <Route path='/detail' exact render={ () => <div>detail</div> }></Route>
          </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}