import React from "react";

class Basket extends React.Component {
  render = () => {
    const { basket, addItem, removeItem } = this.props;

    let total = 0;

    // create displayed item names
    const basketElements = Object.keys(basket).map((curr, index) => {
      console.log(basket[curr]);
      total += Number(basket[curr].count * basket[curr].price);
      return (
        <div key={index} className="Basket--line">
          <div className="Basket--counter">
            <span
              onClick={() => {
                removeItem(curr);
              }}
              style={{ flex: 1 }}
            >
              -
            </span>

            <span style={{ flex: 2 }}>{basket[curr].count} </span>

            <span
              style={{ flex: 1 }}
              onClick={() => {
                addItem(curr);
              }}
            >
              +
            </span>
          </div>
          <span> {curr} </span>
          <span> {basket[curr].price} €</span>
        </div>
      );
    });

    console.log(total);

    return (
      <div className="Basket">
        <button> Valider mon panier</button>
        {basketElements}
        <hr />
        <div className="Basket--line">
          <span> Sous-total</span>
          <span> {total.toFixed(2)} €</span>
        </div>
        <div className="Basket--line">
          <span> Frais de livraison</span>
          <span> 2.50 €</span>
        </div>
        <hr />
        <div className="Basket--line ">
          <span className="total"> Total</span>
          <span className="total"> {(total + 2.5).toFixed(2)} €</span>
        </div>
      </div>
    );
  };
}

export default Basket;
