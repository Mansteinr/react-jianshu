import React, { Component } from 'react'
import './index.styl'
// import '../../common/iconfont/iconfont.styl'

export default class Header extends Component {
  render() {
    return (<div className="header-wrapper">
      <a href="/"></a>
      <div className="nav">
        <div className="nav-item left active">首页</div>
        <div className="nav-item left">下载APP</div>
        <div className="nav-item right">登陆</div>
        <div className="nav-item right">
          <i className="iconfont icon-Aa"></i>
        </div>
        <div className="search-wrapper">
          <div className="nav-search">
            <input placeholder="搜索"/>
            <i className="iconfont icon-fangdajing"></i>
          </div>
        </div>
      </div>
      <div className="addtion">
        <div className="button writting">
        <i className="iconfont icon-qianbi"></i>
          写文章</div>
        <div className="button reg">注册</div>
      </div>  
    </div>)
  }
}
