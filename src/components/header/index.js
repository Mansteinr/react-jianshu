import React, { Component } from 'react'
import './index.styl'
import { CSSTransition } from 'react-transition-group'
// import '../../common/iconfont/iconfont.styl'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
  }
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
          <CSSTransition
            in={this.state.focused}
            timeout={2000}
            classNames="slide"
          >
            <div className={this.state.focused ?  'nav-search focused' : 'nav-search'}>
              <input
                placeholder="搜索" 
                onFocus={this.handleInputFocus.bind(this)}
                onBlur={this.handleInputBlur.bind(this)}
              />
              <i className="iconfont icon-fangdajing"></i>
            </div>
          </CSSTransition>
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

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }

  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}
