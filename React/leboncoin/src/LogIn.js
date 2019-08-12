import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class LogIn extends React.Component {
  state = {
    email: "theau@sciencespo.fr",
    password: "lereacteurio"
  };
  render = () => {
    const { setTokenCookie } = this.props;
    return (
      <div className="LogIn">
        <h1 style={{ textAlign: "center" }}>Créer un compte</h1>
        <hr style={{ backgroundColor: "orange" }} />
        <form
          className="LogIn--form"
          onSubmit={async e => {
            e.preventDefault();
            const response = await Axios.post(
              "https://leboncoin-api.herokuapp.com/api/user/log_in",
              {
                email: this.state.email,
                password: this.state.password
              }
            );
            setTokenCookie(response.data.token);
          }}
        >
          <h3> Adresse email</h3>
          <input
            type="text"
            required
            value={this.state.email}
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <br />

          <h3> Mot de Passe</h3>
          <input
            type="password"
            required
            value={this.state.password}
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />

          <br />

          <input type="submit" value="Créer mon Compte Personnel" />
        </form>

        <hr style={{ width: 1000, margin: "auto", border: "1px solid grey" }} />
        <div className="LogIn--form">
          {" "}
          <Link to="/signin">
            {" "}
            <button>Créer un Compte </button>
          </Link>
        </div>
      </div>
    );
  };
}

export default LogIn;
