import React from "react";

import Header from "./Header";

import OffersPage from "./OffersPage";
import Axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import LogIn from "./LogIn";
import Cookies from "js-cookie";

class App extends React.Component {
  state = {
    data: [],
    count: 0,
    token: Cookies.get("token") || null
  };

  getPaginationUrl = index => {
    this.getData(index);
  };

  setTokenCookie = token => {
    Cookies.set("token", token);
    this.setState({ token: token });
  };

  getData = async skip => {
    const url = `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${skip *
      25}&limit=25`;
    const response = await Axios.get(url);
    console.log(response.data);
    this.setState({ data: response.data.offers, count: response.data.count });
  };

  componentDidMount = () => {
    this.getData(0);
  };
  render = () => {
    return (
      <div>
        <Header />
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route
                path="/"
                exact={true}
                render={() => (
                  <OffersPage
                    data={this.state.data}
                    count={this.state.count}
                    getPaginationUrl={this.getPaginationUrl}
                  />
                )}
              />
              <Route
                path="/signin"
                render={() =>
                  this.state.token ? (
                    <Redirect to="/" />
                  ) : (
                    <CreateAccount setTokenCookie={this.setTokenCookie} />
                  )
                }
              />
              <Route
                path="/login"
                render={() =>
                  this.state.token ? (
                    <Redirect to="/" />
                  ) : (
                    <LogIn setTokenCookie={this.setTokenCookie} />
                  )
                }
              />
            </Switch>
          </BrowserRouter>

          {/*  <Router>
            <Route
              path="/"
              render={() => {
                <Home
                  data={this.state.data}
                  count={this.state.count}
                  getPaginationUrl={this.getPaginationUrl}
                />;
              }}
            />
          </Router> */}
        </div>
      </div>
    );
  };
}

export default App;
