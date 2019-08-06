
import './index.styl'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { actionCreators }  from './store'
import { CSSTransition } from 'react-transition-group'


class Header extends Component{
  getListArea() {
    const { list, focused } =  this.props
    if(focused) {
      return(
        <div className="search-info">
        <div className="search-info-title">热门搜索
          <span className="search-info-switch">换一批</span>
        </div>
        <div className="search-info-list">
          {
            // this.props.list此时是个immutable对象 immutable对象
            // 也提供map方法
            list.map((v) => {
              return (
                <a href="/" className="search-item-info" key={v}>{ v }</a>
              )
            })
          }
        </div>
      </div>
      )
    } else {
      return ''
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props
    return (
      <div className="header-wrapper">
      <a  className="logo" href="/">e</a>
      <div className="nav">
        <div className="nav-item left active">首页</div>
        <div className="nav-item left">下载APP</div>
        <div className="nav-item right">登陆</div>
        <div className="nav-item right">
          <i className="iconfont icon-Aa"></i>
        </div>
        <div className="search-wrapper">
          <CSSTransition
            in={ focused }
            timeout={2000}
            classNames="slide"
          >
            <div className={ focused ?  'nav-search focused' : 'nav-search'}>
              <input
                placeholder="搜索" 
                onFocus={ handleInputFocus }
                onBlur={ handleInputBlur }
              />
              <i className="iconfont icon-fangdajing"></i>
              { this.getListArea(focused) }
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
    </div>
    )
  }
}

// 将store里面的数据映射到组件中
const mapStateToProps = (state) => {
  return {
    // focused: state.focused
    // focused: state.header.focused
    // 获取immutable对象的两种写法
    focused: state.header.get('focused'),
    list: state.header.get('list'),
    // focused: state.getIn(['header', 'focused']),
    // list: state.getIn(['header', 'list'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus()
      dispatch(action)
      dispatch(actionCreators.getList())
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    }
  }
}
// 将header和store中的数据连接起来
export default connect(mapStateToProps, mapDispathToProps)(Header)
