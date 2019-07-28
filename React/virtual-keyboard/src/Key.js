import React from "react";

class Key extends React.Component {
  render = () => {
    return (
      <div>
        <button onClick={this.props.onClick} style={this.props.style}>
          {this.props.keyValue}
        </button>
      </div>
    );
  };
}

export default Key;
