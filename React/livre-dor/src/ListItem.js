import React from "react";

class ListItem extends React.Component {
  render = () => {
    const { content } = this.props;
    return (
      <div>
        <li>{content}</li>
      </div>
    );
  };
}

export default ListItem;
