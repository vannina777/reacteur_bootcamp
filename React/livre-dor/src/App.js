import React from "react";

import ListItem from "./ListItem";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";

class App extends React.Component {
  state = {
    data: [],
    token: ""
  };

  setToken = token => {
    this.setState({ token: token });
  };

  getData = async () => {
    const url = "https://livredor-api.herokuapp.com/messages";
    const response = await Axios.get(url);
    this.setState({ data: response.data });
    console.log(response.data);
  };

  componentDidMount = () => {
    this.getData();
  };

  render = () => {
    // creating list elements render
    const itemListElements = this.state.data.map((curr, index) => {
      return <ListItem key={index} content={curr.content} />;
    });
    return (
      <div>
        <h1>Livre d'or</h1>

        <Router>
          <Route
            path="/login"
            render={props => {
              return <LoginPage />;
            }}
          />
          <Route
            path="/"
            exact={true}
            render={props => {
              return (
                <div>
                  <h2
                    onClick={() => {
                      this.getData();
                    }}
                  >
                    Refresh
                  </h2>
                  <ul>{itemListElements}</ul>
                  <p>
                    You need to <a href="/login">login</a> to add a message
                  </p>
                </div>
              );
            }}
          />
        </Router>
      </div>
    );
  };
}

export default App;
