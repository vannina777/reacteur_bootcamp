import React from "react";
import { jsx, css } from "@emotion/core";

const RestaurantHeader = props => {
  const { data } = props;
  return (
    <div className="RestaurantHeader">
      <div className="container RestaurantHeader--content">
        <div>
          <h1> {data.name}</h1>
          <p>{data.description} </p>
        </div>

        <img src={data.picture} alt="restaurant prof" />
      </div>
    </div>
  );
};

export default RestaurantHeader;
