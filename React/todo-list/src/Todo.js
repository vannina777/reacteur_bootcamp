import React from "react";

class Todo extends React.Component {
  render = () => {
    const { text, doneStatus, handleToDoClick } = this.props;
    let style = doneStatus === false ? "" : "isDone";

    return (
      <li className={style} onClick={() => handleToDoClick()}>
        {text}
      </li>
    );
  };
}

export default Todo;
