/*
 * @Author: YiHang Zheng
 * @Date: 2022-03-25 17:29:38
 * @LastEditors: YiHang Zheng
 * @LastEditTime: 2022-03-25 17:49:02
 * @FilePath: \react-learn-repository\src\Components\08-StateComponent.js
 * @Description: 
 * if you see my notes exist chinese don't worry, because my english is not good, you can translate
 */
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    isClick : false
  }
  render() {
    return (
      <div>
          <h1>welcome to react</h1>
          <button onClick={() => {
            // ...you cannot use like this, can only use this.setState(obj)
            //  this.state.isClick = !this.state.isClick 
            this.setState({
              isClick : !this.state.isClick
            })
          }}>{this.state.isClick ? "like" : "not like"}</button>
      </div>
    )
  }
}
