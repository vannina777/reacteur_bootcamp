import React from "react";
import Axios from "axios";

class LoginPage extends React.Component {
  state = {
    username: "user",
    password: "pass"
  };

  submitLogin = async () => {
    const response = await Axios.post(
      "https://livredor-api.herokuapp.com/login",
      {
        username: this.state.username,
        password: this.state.password
      }
    );
    console.log(response.data);
  };

  render = () => {
    return (
      <div>
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
          onClick={() => {
            this.submitLogin();
          }}
        >
          {" "}
          Log In{" "}
        </button>
      </div>
    );
  };
}

export default LoginPage;
