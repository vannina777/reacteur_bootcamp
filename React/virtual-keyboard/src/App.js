import React from "react";

import Key from "./Key.js";

class App extends React.Component {
  state = {
    string: "",
    maj: false,
    cursor: true
  };

  render = () => {
    const keys = [
      "a",
      "z",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "<=",
      "q",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "maj",
      "w",
      "x",
      "space",
      "c",
      "v",
      "b",
      "n"
    ];

    //put var in generation through map
    const handleClick = key => {
      let stateString = this.state.string.slice(0);
      if (key === "<=") {
        stateString = stateString.slice(0, stateString.length - 1);
      } else if (key === "space") {
        stateString += " ";
      } else if (key === "maj") {
        this.setState({ maj: !this.state.maj });
      } else {
        if (this.state.maj) {
          stateString += key.toUpperCase();
        } else {
          stateString += key;
        }
      }
      this.setState({ string: stateString });
    };

    let cursor = <span>|</span>;

    let keyElements = keys.map((key, index) => {
      let style = {};

      if (index === 21 || index === 24) {
        style.width = "140px";
      }

      if (this.state.maj) {
        return (
          <Key
            key={index}
            keyValue={key.toUpperCase()}
            onClick={() => handleClick(key)}
            style={style}
          />
        );
      }

      return (
        <Key
          key={index}
          keyValue={key}
          style={style}
          onClick={() => handleClick(key)}
        />
      );
    });

   /*  setInterval(() => {
      this.setState({ cursor: !cursor });
      console.log();
    }, 1000); */

    return (
      <div className="container">
        <div className="type">
          <h1>
            {" "}
            {this.state.string}
            {cursor}
          </h1>
        </div>
        <div className="keys">{keyElements}</div>

      </div>
    );
  };
}

export default App;
