

import React, { Component } from 'react';
import "./TodoListTemplate.css";

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                TO-DO
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="form-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;
