import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const MenuItem = props => {
  const { data } = props;
  return (
    <div className="MenuItem">
      <h2> {data.title}</h2>
      <p> {data.description}</p>
      <p> {data.price}</p>
      <p>{data.popular ? "🌟" : ""} </p>
    </div>
  );
};

export default MenuItem;
