/*
 * @Author: YiHang Zheng
 * @Date: 2022-03-25 22:12:11
 * @LastEditors: YiHang Zheng
 * @LastEditTime: 2022-03-25 23:08:40
 * @FilePath: \react-learn-repository\src\Components\09-ArrayComponent.js
 * @Description: 
 * if you see my notes exist chinese don't worry, because my english is not good, you can translate
 */


import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list : [
            {
                id : 1,
                text : "1111"
            },
            {
                id : 2,
                text : "2222"
            },
            {
                id : 3,
                text : "3333"
            }
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        //use map show data
                        this.state.list.map(item =>
                            //li need a key and must only...
                            //so (this.state.list) is a object array, not a string array
                            //key cannot use array index, because index will change
                            //Unless you don't change array, for example add data and delete data
                            <li key={item.id}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
