import React from "react";
import Pagination from "./Pagination";
import Link from "react-router";

class Home extends React.Component {
  render = () => {
    const { data, count, getPaginationUrl } = this.props;
    const offerCards = data.map((curr, index) => {
      return (
        <div className="Offer" key={index}>
          <div className="Offer-imagePlaceholder" />
          <div className="Offer-textContent">
            <h1 className="Offer-title"> {curr.title} </h1>
            <h2 className="Offer-price"> {curr.price} €</h2>
          </div>
        </div>
      );
    });
    return (
      <div>
        {offerCards}
        <Pagination count={count} getPaginationUrl={getPaginationUrl} />
      </div>
    );
  };
}

export default Home;
