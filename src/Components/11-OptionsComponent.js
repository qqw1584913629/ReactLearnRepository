/*
 * @Author: YiHang Zheng
 * @Date: 2022-03-29 21:59:39
 * @LastEditors: YiHang Zheng
 * @LastEditTime: 2022-03-29 22:51:02
 * @FilePath: \react-learn-repository\src\Components\11-OptionsComponent.js
 * @Description: 
 * if you see my notes exist chinese don't worry, because my english is not good, you can translate
 */
import React, { Component } from 'react'
import "./css/11-OptionsCss.css"
import Movies from "./11-OptionsChilds/MoviesComponent"
import Cinema from "./11-OptionsChilds/CinemaComponent"
import User from "./11-OptionsChilds/UserComponent"
export default class App extends Component {
    state = {
        list:[
            {
                id : 1,
                text : "Movies"
            },
            {
                id : 2,
                text : "Cinema"
            },
            {
                id : 3,
                text : "User"
            }
        ],
        currentIndex : 0//default show Movies tab
    }
    render() {
        return (
        <div>
            {/* option info */}
            {
                this.OptionData()
            }

            {/* options tab */}
            <ul>
                {
                    //using map foreach data
                    this.state.list.map((item, index) =>
                        //if variable currentIndex equal to current mouse click option tab index, 
                        //then set this li tab className to active, give it a css.
                        //css file in line 11 using
                        <li key={item.id} className={this.state.currentIndex == index ? "active" : ""} onClick={() => {this.Click(index)}}>
                            {
                                item.text
                            }
                        </li>
                    )
                }
            </ul>
        </div>
        )
    }
    //this function use in set currentIndex to current mouse click li tab index
    Click = (index) =>{
        this.setState({
            currentIndex : index
        })
    }
    //this function use in show or hidden option info
    OptionData = () =>{
        switch (this.state.currentIndex) {
            case 0:
                return <Movies></Movies>//line 12 using
            case 1:
                return <Cinema></Cinema>//line 13 using
            case 2:
                return <User></User>//line 14 using
        }
    }
}
