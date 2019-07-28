import React from "react";

import Header from "./Header";
import Description from "./Description";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    processor: 0,
    memory: 0,
    gpu: 0,
    storage: 0,
    keyboard: 0,
    finalCut: false,
    logicPro: false
  };

  onSelection = (stateVal, index) => {
    let newState = {};
    newState[stateVal] = index;
    this.setState(newState);
  };

  render = () => {
    const { options } = this.props;
    const basePrice = 2699;
    const finalCut = this.state.finalCut ? 329.99 : 0;
    const logicPro = this.state.logicPro ? 229.99 : 0;
    const totalPrice =
      options.processor[this.state.processor].price +
      options.memory[this.state.memory].price +
      options.gpu[this.state.gpu].price +
      options.storage[this.state.storage].price +
      finalCut +
      logicPro +
      basePrice;
    /* Object.keys(this.state).reduce((acc, curVal, currIndex, array) => {
    console.log(acc)
  }, basePrice) */

    return (
      <div>
        <Header />
        <div className="container">
          <Description
            options={options}
            state={this.state}
            onSelection={this.onSelection}
          />
        </div>
        <div className="filler"> </div>
        <Footer totalPrice={totalPrice} />
      </div>
    );
  };
}

export default App;
