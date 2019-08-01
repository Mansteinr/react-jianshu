import React, { Component } from 'react'
import './index.styl'

export default class Header extends Component {
  render() {
    return (<div className="header-wrapper">
      <a href="/"></a>
      <div class="nav">
        <div className="nav-item left active">首页</div>
        <div className="nav-item left">下载APP</div>
        <div className="nav-item right">登陆</div>
        <div className="nav-item right">Aa</div>
        <div className="nav-search">
          <input placerholder="搜索"/>
        </div>
      </div>
    </div>)
  }
}
