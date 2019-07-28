import React from "react";

class Header extends React.Component {
  render = () => {
    return (
      <div>
        <div className="Header--top" />
        <div className="Header--bottom">
          <h4 className="container"> MacBook Pro</h4>
        </div>
      </div>
    );
  };
}

export default Header;
