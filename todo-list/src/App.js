import React, { Component } from "react";
import './App.css';
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor(props) {
    super();
    this.todoItems = [
      "react",
      "redux",
      "react native"
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) => <TodoItem key={index} title={item} />)
        }
      </div>
    );
  }
}

export default App;
