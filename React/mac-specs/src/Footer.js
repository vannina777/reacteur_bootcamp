import React from "react";

class Footer extends React.Component {
  render = () => {
    const formatter = new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return (
      <div className="Footer">
        <div className="Footer--elements container">
          <span> {formatter.format(this.props.totalPrice)} €</span>
          <button> Ajouter au Panier</button>
        </div>
      </div>
    );
  };
}

export default Footer;
