import React from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
  };

  submitLogin = async () => {};

  render = () => {
    const { onSubmit } = this.props;
    return (
      <div>
        {this.state.loggedIn ? (
          <Redirect to="/" />
        ) : (
          <div>
            {" "}
            <h1>This is the login page</h1>
            <input
              value={this.state.username}
              placeholder="username"
              onChange={event => {
                console.log(event.target.value);
                this.setState({
                  username: event.target.value
                });
              }}
            />
            <br />
            <input
              value={this.state.password}
              placeholder="password"
              type="password"
              onChange={event => {
                console.log(event.target.value);
                this.setState({
                  password: event.target.value
                });
              }}
            />
            <button
              onClick={async () => {
                const response = await Axios.post(
                  "https://livredor-api.herokuapp.com/login",
                  {
                    username: this.state.username,
                    password: this.state.password
                  }
                );
                console.log(response);
                if (response.status === 200) {
                  onSubmit(response.data.token);
                  this.setState({ loggedIn: true });
                }
              }}
            >
              {" "}
              Log In{" "}
            </button>{" "}
          </div>
        )}
      </div>
    );
  };
}

export default LoginPage;
