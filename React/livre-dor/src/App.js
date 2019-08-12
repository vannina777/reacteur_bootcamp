import React from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookies";

import ListItem from "./ListItem";
import LoginPage from "./LoginPage";

class App extends React.Component {
  state = {
    data: [],
    token: Cookies.get("token") || null,
    newMessage: ""
  };

  setToken = token => {
    if (Cookies.get("token") === null) {
      Cookies.set("token", token);
    }

    this.setState({ token: token });
  };

  postMessage = () => {
    const config = {
      headers: { Authorization: "Bearer " + this.state.token }
    };

    const bodyParameters = {
      content: this.state.newMessage
    };

    Axios.post(
      "https://livredor-api.herokuapp.com/message",
      bodyParameters,
      config
    );
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
    //element for message submission
    const messageSubmission = (
      <div>
        <input
          value={this.setState.newMessage}
          onChange={event => {
            this.setState({ newMessage: event.target.value });
          }}
        />
        <button
          onClick={async () => {
            this.postMessage();
            this.setState({ newMessage: "" });
            this.getData();
          }}
        >
          submit
        </button>
      </div>
    );

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
              return <LoginPage onSubmit={this.setToken} />;
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
                  {this.state.token ? (
                    messageSubmission
                  ) : (
                    <p>
                      You need to <a href="/login">login</a> to add a message
                    </p>
                  )}
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
