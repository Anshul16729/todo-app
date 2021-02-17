import React, { useState, useEffect } from 'react';

let Todo = () => {
    const [state, setState] = useState({
        item: "",
        todoItems: []
    });


    let onChangeHandler = (event) => {
        var inputValue = event.target.value;
        setState({
            ...state,
            item: inputValue
        })
    }

    let addData = () => {
        var inputValue = state.item;
        var itemInstance = state.todoItems;
        itemInstance.push(inputValue);
        setState({
            ...state,
            todoItems: itemInstance,
            item: ''
        })
        console.log(state.todoItems)
    }

    let removeData = () => {
        var inputValue = state.item;
        var itemInstance = state.todoItems;
        itemInstance.pop(inputValue);
        setState({
            ...state,
            todoItems: itemInstance
        })
        console.log(state.todoItems)
    }

    let editTodo = () => {

    }


    return (
        <>
            <div>
                <div className="header">TODO APP</div>
                <div className="body">
                    <input type="text" value={state.item} onChange={onChangeHandler} />
                    {
                        <div>
                            {state.todoItems.map((val, index) => {
                                return (
                                    <div className="row container">
                                        <div className="col-6">
                                            <ul>
                                                <li>{val} </li>
                                            </ul>
                                        </div>
                                        <div id="edit" className="col-3"><i class="fas fa-pencil-alt"></i>
                                        </div> <nbsp></nbsp>
                                        <div onClick={removeData} id={index} className="col-3"><i class="fas fa-trash-alt"></i></div></div>
                                )
                            })}
                        </div>
                    }

                    <button><i class="fas fa-plus-circle" id="add" onClick={addData}></i></button>
                    {/* <button onClick={addData}><i class="fas fa-plus-circle"></i>Add Items</button> */}
                    {/* <button onClick={removeData}>Remove Items</button>  */}
                </div>
                <div className="footer">
                </div>
            </div>
        </>
    )
}


export default Todo;