import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Axios from "axios";
import MenuSection from "./MenuSection";
import RestaurantHeader from "./RestaurantHeader";

const API_URL = "https://deliveroo-api.now.sh/menu";

class App extends React.Component {
  /* const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false); */

  state = {
    data: null,
    isLoading: false
  };

  getData = async () => {
    this.setState({ isLoading: true });
    const response = await Axios.get("https://deliveroo-api.now.sh/menu");
    console.log(response.data);
    this.setState({ data: response.data, isLoading: false });
  };

  /*   React.useEffect(() => {
    if (isMounted === false) {
      getData();
      setIsMounted(true);
    }
  }, [isMounted]); */

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
        {this.state.data === null ? (
          <p> isLoading</p>
        ) : (
          <div>
            <RestaurantHeader css={{}} data={this.state.data.restaurant} />

            {Object.keys(this.state.data.menu).map((curr, index) => {
              return (
                <MenuSection
                  className={css({})}
                  name={curr}
                  data={this.state.data.menu[curr]}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  };
}

export default App;
