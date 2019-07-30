import React from "react";

import Header from "./Header";
import GenericPage from "./GenericPage";

class App extends React.Component {
  state = {
    tab: "popular"
  };

  mountNew = tabName => {
    let state = {};
    state["tab"] = tabName;
    this.setState(state);
  };

  render = () => {
    return (
      <div div style={{ backgroundColor: "#F4F4F4" }}>
        <Header />
        <div className="Tabs">
          <h4
            onClick={() => {
              this.mountNew("popular");
            }}
            className={this.state.tab === "popular" ? "mounted" : ""}
          >
            Popular Movies
          </h4>
          <h4
            onClick={() => {
              this.mountNew("upcoming");
            }}
            className={this.state.tab === "upcoming" ? "mounted" : ""}
          >
            Upcoming Movies
          </h4>
          <h4
            onClick={() => {
              this.mountNew("top_rated");
            }}
            className={this.state.tab === "top_rated" ? "mounted" : ""}
          >
            Top Rated Movies
          </h4>
        </div>
        <div style={{ backgroundColor: "#F4F4F4" }}>
          <GenericPage key={this.state.tab} pageName={this.state.tab} />
        </div>
      </div>
    );
  };
}

export default App;
