
import './index.styl'
import React from 'react'
import { connect } from 'react-redux'
import  { actionCreators }  from './store'
import { CSSTransition } from 'react-transition-group'
// import '../../common/iconfont/iconfont.styl'


// 改为无状态组件
const Header = (props) => {
  return (
    <div className="header-wrapper">
    {/* <a href="/"></a> */}
    <div className="nav">
      <div className="nav-item left active">首页</div>
      <div className="nav-item left">下载APP</div>
      <div className="nav-item right">登陆</div>
      <div className="nav-item right">
        <i className="iconfont icon-Aa"></i>
      </div>
      <div className="search-wrapper">
        <CSSTransition
          in={ props.focused }
          timeout={2000}
          classNames="slide"
        >
          <div className={ props.focused ?  'nav-search focused' : 'nav-search'}>
            <input
              placeholder="搜索" 
              onFocus={ props.handleInputFocus }
              onBlur={ props.handleInputBlur }
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
  </div>
  )
}

// class Header extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//   <div className="header-wrapper">
//   <a href="/"></a>
//   <div className="nav">
//     <div className="nav-item left active">首页</div>
//     <div className="nav-item left">下载APP</div>
//     <div className="nav-item right">登陆</div>
//     <div className="nav-item right">
//       <i className="iconfont icon-Aa"></i>
//     </div>
//     <div className="search-wrapper">
//       <CSSTransition
//         in={ props.focused }
//         timeout={2000}
//         classNames="slide"
//       >
//         <div className={ props.focused ?  'nav-search focused' : 'nav-search'}>
//           <input
//             placeholder="搜索" 
//             onFocus={ props.handleInputFocus }
//             onBlur={ props.handleInputBlur }
//           />
//           <i className="iconfont icon-fangdajing"></i>
//         </div>
//       </CSSTransition>
//     </div>
//   </div>
//   <div className="addtion">
//     <div className="button writting">
//     <i className="iconfont icon-qianbi"></i>
//       写文章</div>
//     <div className="button reg">注册</div>
//   </div>  
// </div>
//     )
//   }
// }
// 将store里面的数据映射到组件中
const mapStateToProps = (state) => {
  return {
    // focused: state.focused
    // focused: state.header.focused
    // 获取immutable对象
    focused: state.header.get('focused')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus()
      dispatch(action)
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    }
  }
}
// 将header和store中的数据连接起来
export default connect(mapStateToProps, mapDispathToProps)(Header)
