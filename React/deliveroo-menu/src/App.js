import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Axios from "axios";
import MenuSection from "./MenuSection";
import RestaurantHeader from "./RestaurantHeader";
import Header from "./Header";
import Basket from "./Basket";

const API_URL = "https://deliveroo-api.now.sh/menu";

class App extends React.Component {
  /* const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false); */

  state = {
    data: null,
    isLoading: false,
    basket: {}
  };

  getData = async () => {
    this.setState({ isLoading: true });
    const response = await Axios.get("https://deliveroo-api.now.sh/menu");
    console.log(response.data);
    this.setState({ data: response.data, isLoading: false });
  };

  removeItem = name => {
    const newBasket = { ...this.state.basket };
    let newItem;
    newItem = { ...newBasket[name] };
    newItem.count -= 1;
    if (newItem.count === 0) {
      delete newBasket[name];
    } else {
      newBasket[name] = newItem;
    }
    this.setState({ basket: newBasket });
  };

  addItem = name => {
    const newBasket = { ...this.state.basket };
    let newItem;
    newItem = { ...newBasket[name] };
    newItem.count += 1;
    newBasket[name] = newItem;
    this.setState({ basket: newBasket });
  };

  handleItemClick = (name, price) => {
    console.log("I want a " + name + " that is " + price);
    const newBasket = { ...this.state.basket };
    let newItem;

    // check if item already in state

    // establish count
    if (newBasket[name]) {
      this.addItem(name);
      /* newItem = { ...newBasket[name] };
      newItem.count += 1;
      newBasket[name] = newItem;
      this.setState({ basket: newBasket }); */
    } else {
      newItem = { price: price, count: 1 };
      newBasket[name] = newItem;
      this.setState({ basket: newBasket });
    }
  };

  componentDidMount = async () => {
    this.getData();
  };

  render = () => {
    return (
      <div
        css={css`
          background-color: #f3f5f5;
        `}
      >
        <Header />
        {this.state.data === null ? (
          <p> isLoading</p>
        ) : (
          <div>
            <RestaurantHeader css={{}} data={this.state.data.restaurant} />
            <div className="Display--main container">
              <div style={{ flex: 2 }}>
                {Object.keys(this.state.data.menu).map((curr, index) => {
                  return (
                    <MenuSection
                      key={index}
                      className={css({})}
                      name={curr}
                      data={this.state.data.menu[curr]}
                      handleItemClick={this.handleItemClick}
                    />
                  );
                })}
              </div>
              <Basket
                basket={this.state.basket}
                addItem={this.addItem}
                removeItem={this.removeItem}
              />
            </div>
          </div>
        )}
      </div>
    );
  };
}

export default App;
