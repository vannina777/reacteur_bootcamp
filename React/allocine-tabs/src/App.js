import React from "react";

import Popular from "./Popular";
import Upcoming from "./Upcoming";
import Top from "./Top";
import Header from "./Header";

class App extends React.Component {
  state = {
    tab: 1
  };

  mountNew = tabIndex => {
    let state = {};
    state["tab"] = tabIndex;
    this.setState(state);
  };

  render = () => {
    return (
      <div div style={{ backgroundColor: "#F4F4F4" }}>
        <Header />
        <div className="Tabs">
          <h4
            onClick={() => {
              this.mountNew(1);
            }}
            className={this.state.tab === 1 ? "mounted" : ""}
          >
            Popular Movies
          </h4>
          <h4
            onClick={() => {
              this.mountNew(2);
            }}
            className={this.state.tab === 2 ? "mounted" : ""}
          >
            Upcoming Movies
          </h4>
          <h4
            onClick={() => {
              this.mountNew(3);
            }}
            className={this.state.tab === 3 ? "mounted" : ""}
          >
            Top Rated Movies
          </h4>
        </div>
        <div style={{ backgroundColor: "#F4F4F4" }}>
          {this.state.tab === 1 && <Popular />}
          {this.state.tab === 2 && <Upcoming />}
          {this.state.tab === 3 && <Top />}
        </div>
      </div>
    );
  };
}

export default App;
