/*
 * @Author: YiHang Zheng
 * @Date: 2022-03-25 15:26:02
 * @LastEditors: YiHang Zheng
 * @LastEditTime: 2022-03-25 17:00:46
 * @FilePath: \react-learn-repository\src\Components\05-EventBindComponent.js
 * @Description: 
 * if you see my notes exist chinese don't worry, because my english is not good, you can translate
 */

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
            <input></input>
            {/* event bind type 1 */}
            <button onClick={()=>{
              console.log("click button1")
            }}>add1</button>

            {/* event bind type 2 */}
            {/* onClick parameter not add '()' otherwise program start will invoke that function */}
            <button onClick={this.clickFunction}>add2</button>

            {/* event bind type 3 */}
            <button onClick={this.clickButtonType3}>add3</button>

            {/* event bind type 4 */}
            {/* this is can input parameter */}
            <button onClick={() =>{
              this.clickButtonType4()
            }}>add4</button>
      </div>
    )
  }

  clickFunction(){
      console.log("click button2")
  }

  clickButtonType3 = () => {
    console.log("click button3")
  }
  clickButtonType4 = () => {
    console.log("click button4")
  }
}
