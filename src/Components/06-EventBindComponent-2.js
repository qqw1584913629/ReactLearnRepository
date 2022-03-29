/*
 * @Author: YiHang Zheng
 * @Date: 2022-03-25 16:20:28
 * @LastEditors: YiHang Zheng
 * @LastEditTime: 2022-03-25 17:25:41
 * @FilePath: \react-learn-repository\src\Components\06-EventBindComponent-2.js
 * @Description: 
 * if you see my notes exist chinese don't worry, because my english is not good, you can translate
 */
import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    render() {
      return (
        <div>
              <input></input>
              {/* event bind type 1 */}
              <button onClick={()=>{
                console.log("click button1", this.a)
              }}>add1</button>
  
              {/* event bind type 2 */}

              {/* onClick parameter not add '()' otherwise program start will invoke that function */}
              {/* <button onClick={this.clickFunction}>add2</button> */}
              {/* can use .bind(this) */}
              {/* if use .call(this) or .apply(this) , program start will invoke that function */}
              <button onClick={this.clickFunction.bind(this)}>add2</button>
  



              {/* event bind type 3 */}
              <button onClick={this.clickButtonType3}>add3</button>
  
              {/* event bind type 4 */}
              {/* this is can input parameter */}
              <button onClick={() =>{
                // this.clickButtonType4()
                this.clickButtonType41()
              }}>add4</button>
        </div>
      )
    }
  
    clickFunction(){
        //if no use .bind(this) ,cureent 'this' not class 'App', so not find 'a'
        //if use use .bind(this), cureent 'this' equals class 'App', so can output 'a' value
        console.log("click button2", this.a)
    }
  
    
    clickButtonType3 = () => {
      console.log("click button3", this.a)
    }
    clickButtonType4 = () => {
      console.log("click button4", this.a)
    }
    clickButtonType41(){
        console.log("click button4", this.a)
      }
  }
  
