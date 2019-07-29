import React from "react";

class Square extends React.Component {
  render = () => {
    let css = "Square" + this.props.xxx;
    return (
      <div className={css} onClick={this.props.clickHandler}>
        <h2> {this.props.content}</h2>
      </div>
    );
  };
}

export default Square;
