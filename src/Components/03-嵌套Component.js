/*
 * @Author: YiHang Zheng
 * @Date: 2022-03-25 11:14:13
 * @LastEditors: YiHang Zheng
 * @LastEditTime: 2022-03-25 16:38:25
 * @FilePath: \react-learn-repository\src\Components\03-嵌套Component.js
 * @Description: 
 * if you see my notes exist chinese don't worry, because my english is not good, you can translate
 */
import React, { Component } from 'react'

class Childen extends Component{
    render() {
        return (
          <div>NavBarChilden</div>
        )
      }
}

class NavBar extends Component {
  render() {
    return (
      <div>NavBar
          <Childen>
              
          </Childen>
      </div>
    )
  }
}
class Swiper extends Component {
  render() {
    return (
      <div>Swiper</div>
    )
  }
}
class Tabber extends Component {
  render() {
    return (
      <div>Tabber</div>
    )
  }
}


export default class App extends Component {
  render() {
    return (
        <div>
            <NavBar></NavBar>
            <Swiper></Swiper>
            <Tabber></Tabber>
        </div>
    )

      // this is error
      // two cannot exist div tab, only one exist, only if two is one childent or one is two childent
  //   return (
  //     <div>
  //         <NavBar></NavBar>
  //         <Swiper></Swiper>
  //         <Tabber></Tabber>
  //     </div>
  //     <div>
  //     <NavBar></NavBar>
  //     <Swiper></Swiper>
  //     <Tabber></Tabber>
  //     </div>
  // )
  }
}
