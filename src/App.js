import React, {Component} from 'react';

import TodoListTemplate from "./components/TodoListTemplate";
import TodoForm from "./components/TodoForm";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  state = {
    input: "",
    todolist: [
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {

    const { input, todolist } = this.state;
    const id = todolist.length;

    if( input === "" ) {
      return;
    }

    this.setState({
      input: "",
      todolist: todolist.concat({id, text:input, checked:false})
    })
  }

  handleKeyPress = (e) => {
    if( e.key === "Enter" ) {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    // console.log(`handleCheck id : ${id}`);
    
    const { todolist } = this.state;
    const idx = todolist.findIndex((data)=>data.id === id);
    const target = todolist[ idx ];

    this.setState({
      todolist: [
        ...todolist.slice(0, idx),
        {
          ...target,
          checked: !target.checked
        },
        ...todolist.slice(idx+1, todolist.length)
      ]
    });

    
  }

  handleRemove = (id) => {
    const { todolist } = this.state;
    
    this.setState({
      todolist: todolist.filter((data)=>data.id !== id)
    })
  }

  render() {
    const { input, todolist } = this.state;
    return (
      <div>
          <TodoListTemplate
            form={
              <TodoForm value={input} 
                        onChange={this.handleChange} 
                        onKeyPress={this.handleKeyPress}
                        onCreate={this.handleCreate} />
            }
            children={
              <TodoItemList todolist={todolist} 
                            onToggle={this.handleToggle}
                            onRemove={this.handleRemove}/>
            }
           />
      </div>
    );
  }
}

export default App;
