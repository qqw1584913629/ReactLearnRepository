/*
 * @Author: YiHang Zheng
 * @Date: 2022-03-25 17:12:11
 * @LastEditors: YiHang Zheng
 * @LastEditTime: 2022-03-25 17:34:00
 * @FilePath: \react-learn-repository\src\Components\07-ref.js
 * @Description: 
 * if you see my notes exist chinese don't worry, because my english is not good, you can translate
 */
import React, { Component } from 'react'

export default class App extends Component {
    ref_1 = React.createRef()
    render() {
      return (
        <div>
              <input ref={ this.ref_1 }></input>
              <button onClick={()=>{
                console.log("click button1", this.ref_1.current.value)//use this.ref_1.current get is a tab.... now such example 'input' tab
              }}>add1</button> 
        </div>
      )
    }
}
