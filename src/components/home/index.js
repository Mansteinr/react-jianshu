import React, { Component } from 'react'
import './index.styl'

import Topic from './componets/Topic'
import Writter from './componets/Writter'
import List from './componets/List'
import Recommend from './componets/Recommend'

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className='home-left'>
          <img src="https://upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          <Topic />
          <List />
        </div>
        <div className='home-right'>
          <Recommend/>
          <Writter/>
        </div>
      </div>
    )
  }
}

export default Home