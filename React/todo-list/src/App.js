import React from "react";

import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [newToDoText, setNewToDoText] = React.useState("");

  const handleToDoClick = toDoItemIndex => {
    console.log("I clicked todo item at index " + toDoItemIndex);
    const newTodos = [...todos];
    const toDoItemToModify = { ...newTodos[toDoItemIndex] };
    toDoItemToModify.done = !todos[toDoItemIndex].done;
    newTodos[toDoItemIndex] = toDoItemToModify;
    setTodos(newTodos);
  };

  // submits new task on button click OR "Enter" key submit in input
  const handleInputSubmit = () => {
    if (newToDoText === "") {
      return;
    }
    const newTodos = [...todos];
    const newtoDoItem = {};
    newtoDoItem.text = newToDoText;
    newtoDoItem.done = false;
    newTodos.push(newtoDoItem);
    setTodos(newTodos);
    setNewToDoText("");
  };

  const todosReadList = [...todos];

  // create todo elements from Todo component
  const toDoList = todosReadList.map((toDoItem, index) => {
    return (
      <Todo
        key={index}
        text={todos[index].text}
        doneStatus={todos[index].done}
        handleToDoClick={() => handleToDoClick(index)}
      />
    );
  });

  return (
    <div className="container">
      <h1> To Do List</h1>

      <ul>{toDoList}</ul>

      {/* Submitting options */}

      <input
        value={newToDoText}
        placeholder="Type your todo here"
        onChange={event => {
          setNewToDoText(event.target.value);
        }}
        onKeyDown={event => {
          if (event.key === "Enter") {
            handleInputSubmit();
          }
        }}
      />

      <button
        onClick={() => {
          handleInputSubmit();
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default App;
