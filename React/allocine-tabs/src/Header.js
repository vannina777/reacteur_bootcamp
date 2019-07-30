import React from "react";

class Header extends React.Component {
  state = {
    tabs: [true, false, false]
  };

  render = () => {
    return (
      <div style={{ backgroundColor: "#FBCC33", height: "80px" }}>
        <div className="container">Allocine logo</div>
      </div>
    );
  };
}

export default Header;
