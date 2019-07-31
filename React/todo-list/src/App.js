import React from "react";

import Todo from "./Todo";

const handleToDoClick = toDoItemIndex => {
  console.log("I clicked todo item at index " + toDoItemIndex);
  const todos = [...this.state.todos];

  todos[toDoItemIndex].done = !todos[toDoItemIndex].done;
  this.setState({ todos: todos });
};

const handleInputSubmit = () => {
  const todos = [...this.state.todos];
  const newtoDoItem = {};
  newtoDoItem.text = this.state.newToDoText;
  newtoDoItem.done = false;
  todos.push(newtoDoItem);
  this.setState({ todos: todos, newToDoText: "" });
};

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [newToDoText, setNewToDoText] = React.useState("");

  state = {
    todos: [
      { text: "I need to clean", done: false },
      { text: "Homework", done: true },
      { text: "Exercise", done: false }
    ],
    newToDoText: ""
  };

  render = () => {
    const todos = [...this.state.todos];

    const toDoList = todos.map((toDoItem, index) => {
      return (
        <li>
          <Todo
            text={this.state.todos[index].text}
            doneStatus={this.state.todos[index].done}
            handleToDoClick={() => this.handleToDoClick(index)}
          />
        </li>
      );
    });

    return (
      <div className="container">
        <h1> To Do List</h1>
        <ul>{toDoList}</ul>

        {/* needs to make input + button */}

        <input
          value={this.state.newToDoText}
          placeholder="Type your todo here"
          onChange={event => {
            this.setState({ newToDoText: event.target.value });
          }}
          onKeyDown={event => {
            if (event.key === "Enter") {
              this.handleInputSubmit();
            }
          }}
        />

        <button
          onClick={() => {
            this.handleInputSubmit();
          }}
        >
          {" "}
          Add Task{" "}
        </button>
      </div>
    );
  };
};

export default App;
