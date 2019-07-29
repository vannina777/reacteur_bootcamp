import React from "react";

class App extends React.Component {
  state = {
    fast: true,
    good: true,
    cheap: false
  };

  checkAllTrue = state => {
    let allTrue = true;
    const states = Object.keys(this.state);
    states.forEach(curr => {
      if (this.state[curr] === false) {
        allTrue = false;
      }
    });

    let stateToDelete;

    if (allTrue) {
      if (states[states.indexOf(state) - 1] === undefined) {
        stateToDelete = states[states.indexOf(state) + 2];
      } else {
        stateToDelete = states[states.indexOf(state) - 1];
      }
      let newObj = {};
      newObj[stateToDelete] = false;
      this.setState(newObj);
    }
  };

  onSelection = state => {
    const newObj = {};
    newObj[state] = !this.state[state];
    this.setState(newObj, () => {
      this.checkAllTrue(state);
    });
  };

  render = () => {
    const stateList = Object.keys(this.state);
    const buttonList = stateList.map((state, index) => {
      return (
        <div className="flex">
          <label className="switch">
            <input
              type="checkbox"
              checked={this.state.fast ? "yes" : ""}
              onChange={() => this.onSelection("fast")}
            />{" "}
            <span className="slider slider-1" />{" "}
          </label>
          <span> Fast </span>
        </div>
      );
    });

    return (
      <div className="container">
        <form>
          <div className="flex">
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.fast ? "yes" : ""}
                onChange={() => this.onSelection("fast")}
              />{" "}
              <span className="slider slider-1" />{" "}
            </label>
            <span> Fast </span>
          </div>
          <br />
          <div className="flex">
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.good ? "yes" : ""}
                onChange={() => this.onSelection("good")}
              />{" "}
              <span className="slider slider-2" /> <br />
            </label>
            <span> Good</span>
          </div>
          <br />
          <div className="flex">
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.cheap ? "yes" : ""}
                onChange={() => this.onSelection("cheap")}
              />{" "}
              <span className="slider slider-3" />
            </label>
            <span> Cheap </span>
          </div>
        </form>
      </div>
    );
  };
}

export default App;
