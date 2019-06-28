import React from 'react';
import './TodoForm.css';

const TodoForm = ({value, onChange, onCreate, onKeyPress}) => {
    // const { onChange } = this.props;
    return (
        <div className="todo-form-template">
            <input type="text"
                   value={value}
                   onChange={onChange}
                   onKeyPress={onKeyPress} />
            <div className="todo-form-button"
                onClick={onCreate}>
                <i className="fas fa-plus"></i>
            </div>
        </div>
    )
}

export default TodoForm;
