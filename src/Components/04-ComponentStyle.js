/*
 * @Author: YiHang Zheng
 * @Date: 2022-03-25 11:27:59
 * @LastEditors: YiHang Zheng
 * @LastEditTime: 2022-03-25 16:21:21
 * @FilePath: \react-learn-repository\src\Components\04-ComponentStyle.js
 * @Description: 
 * if you see my notes exist chinese don't worry, because my english is not good, you can translate
 */
import React, { Component } from 'react'

// line 33 style
import "./css/04-ComponentStyleCss.css"



export default class App extends Component {
  render() {
    var name = "YiHang"

    // line 24 obj
    var divStyle = {
        background : "yellow",
        fontSize :"30px"
    }
    return (
      <div>
          {1+2}-{name}


          {/* oneType */}
          {/* style parameter need a obj */}
          <div style={divStyle}>
            component style
          </div>



          {/* twoType */}
          {/* link css */}
          {/* react class selector need from 'class' to 'className'  */}
          <div className='div2'>
            {1 > 2 ? "true" : "false"}
          </div>
          <div id='div2'>
              this is id selector div
          </div>

          {/* react label tab bind input tab need from 'for' to 'htmlFor'  */}
          {/* <label for='username'></label> */}
          <label htmlFor='username'>username:</label>
          <input type="text" id="username"></input>
      </div>
    )
  }
}
