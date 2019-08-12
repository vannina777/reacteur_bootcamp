import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBell, faEye } from "@fortawesome/free-regular-svg-icons";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class CreateAccount extends React.Component {
  state = {
    pseudo: "theau2",
    email: "theau@sciencespo.fr",
    password: "lereacteurio",
    passwordRetry: "lereacteurio"
  };

  render = () => {
    const { setTokenCookie } = this.props;
    return (
      <div className="CreateAccount">
        <div className="CreateAccount--info">
          <h1> Pourquoi créer un compte ?</h1>
          <br />
          <br />
          <div className="CreateAccount--infoCard">
            <FontAwesomeIcon icon={faClock} size="4x" color="blue" />
            <div>
              <h2> Gagner du temps </h2>
              <p>
                {" "}
                Publiez vos annonces rapidement, avec vos informations
                pré-remplies chaque fois que vous souhaitez déposer une nouvelle
                annonce.
              </p>
            </div>
          </div>
          <div className="CreateAccount--infoCard">
            <FontAwesomeIcon icon={faBell} size="4x" color="blue" />
            <div>
              <h2> Soyez les premiers informés </h2>
              <p>
                {" "}
                Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce
                qui vous intéresse.
              </p>
            </div>
          </div>
          <div className="CreateAccount--infoCard">
            <FontAwesomeIcon icon={faEye} size="3x" color="blue" fixedWidth />
            <div>
              <h2>Visibilité </h2>
              <p>
                {" "}
                Suivez les statistiques de vos annonces (nombre de fois où votre
                annonce a été vue, nombre de contacts reçus).
              </p>
            </div>
          </div>
        </div>
        <div className="CreateAccount--form">
          <h1 style={{ textAlign: "center" }}>Créer un compte</h1>
          <hr style={{ backgroundColor: "orange" }} />
          <form
            onSubmit={async e => {
              e.preventDefault();
              if (this.state.email.indexOf("@")) {
                console.log("the email is ok");

                if (this.state.password === this.state.passwordRetry) {
                  console.log("the âssword is ok");
                  const response = await Axios.post(
                    "https://leboncoin-api.herokuapp.com/api/user/sign_up",
                    {
                      email: this.state.email,
                      username: this.state.pseudo,
                      password: this.state.password
                    }
                  );
                  console.log(response);
                  if (response.data.token) {
                    setTokenCookie(response.data.token);
                  }
                }
              }
            }}
          >
            <h3> Pseudo</h3>
            <input
              type="text"
              value={this.state.pseudo}
              className="CreateAccount--textInput"
              required
              onChange={e => {
                this.setState({ pseudo: e.target.value });
              }}
            />
            <br />
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
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div style={{ flex: 1 }}>
                <h3> Mot de Passe</h3>
                <input
                  type="password"
                  required
                  value={this.state.password}
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                  className="CreateAccount--textInput"
                />
              </div>
              <div style={{ flex: 1 }}>
                <h3> Confirmer mot de passe</h3>
                <input
                  type="password"
                  required
                  value={this.state.passwordRetry}
                  onChange={e => {
                    this.setState({ passwordRetry: e.target.value });
                  }}
                  className="CreateAccount--textInput"
                />{" "}
                <br />
              </div>
            </div>
            <br />
            <input type="checkbox" />
            <span>
              {" "}
              Je souhaite recevoire des offres des partenaires du site leboncoin
              susceptibles de m'intéresser
            </span>{" "}
            <br />
            <br />
            <input type="checkbox" />
            <span> "J'accepte les Conditions générales de Vente"</span> <br />
            <input type="submit" value="Créer mon Compte Personnel" />
          </form>
        </div>
      </div>
    );
  };
}

export default CreateAccount;
