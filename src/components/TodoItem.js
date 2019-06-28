import React, { Component } from 'react';
import "./TodoItem.css";

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    handleToggle = (e) => {
        e.stopPropagation();
        this.props.onToggle( this.props.id );
    }

    handleRemove = (e) => {
        e.stopPropagation();
        this.props.onRemove( this.props.id );
    }

    render() {
        const { text, checked } = this.props;
        console.log(`${text} / ${checked.toString()}`)
        return (
            <div className="todo-item-template"
                onClick={this.handleToggle}>
                <div className={`todo-item__checkmark ${checked?'':'checked'}`}>
                    <i className={`far fa-check-square`}></i>
                </div>
                <div className={`todo-item__text ${checked?'checked':''}`}>
                    {text}
                </div>
                
                <div className="todo-item__remove"
                    onClick={this.handleRemove}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        )
    }
}

export default TodoItem;
