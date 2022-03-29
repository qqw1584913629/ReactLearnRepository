/*
 * @Author: YiHang Zheng
 * @Date: 2022-03-26 13:56:54
 * @LastEditors: YiHang Zheng
 * @LastEditTime: 2022-03-26 18:02:13
 * @FilePath: \react-learn-repository\src\Components\10-TodoListComponent.js
 * @Description: 
 * if you see my notes exist chinese don't worry, because my english is not good, you can translate
 */
import React, { Component } from 'react'
import "./css/10-TodoList.css"


// this a practice

export default class App extends Component {
    ref = React.createRef()
    state = {
        todoList : []
    }
    render() {
        return (
        <div className='todoList'>
            <h2>Todo List</h2>
            <input ref={this.ref}></input>
            <button onClick={() => {
                this.AddTodoListData()
            }}>添加</button>
            <hr></hr>
            <div className='list'>
                <li>
                    {
                        this.state.todoList.map((item, index) =>
                            <ul key={item.id}>{item.text}
                                <button onClick={() =>{
                                    this.RemoveTodoListData(index)
                                }}>
                                    删除该条日记
                                </button>
                            </ul>)
                    }
                </li>
                {
                    this.state.todoList.length === 0 ? <div>暂无待办事项</div> : null
                }
            </div>
        </div>
        )
    }
    //Declare a function, use in button(line 21) click
    AddTodoListData = () =>{

        // you don't use this way, maybe exist error

        // this.state.todoList.push({id : 1, text : this.ref.current.value})
        // this.setState({
        //     todoList : this.state.todoList
        // })

        // use it
        if (this.ref.current.value != "") {
            var temp = this.state.todoList.slice()//slicq = copy, direct use (var temp = this.state.todoList) is error
            temp.push({id : Math.random() * 10000000, text : this.ref.current.value})
            this.setState({
                todoList : temp
            })
            this.ref.current.value = ""
        }
        else
        {
            alert("输入不能为空");
        }
    }
    //Declare a function, use in button(line 29) click
    RemoveTodoListData = (index) =>{
        var temp = this.state.todoList.slice();
        //if not input two parameter, wiil from index start delete to end
        temp.splice(index, 1)
        this.setState({
            todoList : temp
        })
    }
}
