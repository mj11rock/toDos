import React, { Component } from "react";
import Todos from "./todos";
import AddTodo from "./AddForm";
import "./index.css";
class App extends Component {
  state = {
    todos: []
  };
  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };
  addToDo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];

    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="App wrapper">
        <h1 className="center blue-text">Todo's</h1>
        <div className="todos-list">
          <Todos
            todos={this.state.todos}
            deleteToDo={this.deleteToDo}
            className=""
          />
          <button className="btn-floating btn-large waves-effect waves-light green">
            {" "}
            +{" "}
          </button>
        </div>
        <AddTodo AddTodo={this.addToDo} />
      </div>
    );
  }
}

export default App;
