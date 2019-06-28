import React, { Component } from 'react';
import "./TodoItemList.css";

import TodoItem from "./TodoItem";

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todolist !== nextProps.todolist;
    }

    render() {
        const { todolist, onToggle, onRemove } = this.props;

        return (
            <div className="todo-itemlist-template">
                {
                    todolist.map((data)=>{
                        return (
                            <TodoItem key={data.id} 
                                      id={data.id}
                                      text={data.text} 
                                      checked={data.checked} 
                                      onToggle={onToggle}
                                      onRemove={onRemove}/>
                        );
                    })
                }
            </div>
        )
    }
}

export default TodoItemList;
