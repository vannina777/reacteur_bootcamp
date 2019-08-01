import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const MenuItem = props => {
  const { data, handleItemClick } = props;

  const displayText = data.description; //.slice(0, 80);
  return (
    <div
      className="MenuItem"
      onClick={() => {
        handleItemClick(data.title, data.price);
      }}
    >
      <div className="MenuItem--left">
        <h2> {data.title}</h2>
        {displayText ? <p> {displayText}</p> : null}
        <div>
          <span> {data.price} €</span>
          <span className="popular">{data.popular ? "Popular" : ""} </span>
        </div>
      </div>
      <div className="MenuItem--right">
        {" "}
        {data.picture ? <img src={data.picture} alt="food" /> : ""}
      </div>
    </div>
  );
};

export default MenuItem;
