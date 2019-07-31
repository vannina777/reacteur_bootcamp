import React from "react";

class Todo extends React.Component {
  render = () => {
    const { text, doneStatus, handleToDoClick } = this.props;
    let style = doneStatus === false ? "" : "isDone";

    return (
      <div className="Todo--main">
        <h2 className={style} onClick={() => handleToDoClick()}>
          {text}
        </h2>
      </div>
    );
  };
}

export default Todo;
