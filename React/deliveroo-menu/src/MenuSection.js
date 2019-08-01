import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import MenuItem from "./MenuItem";

const MenuSection = props => {
  const { name, data } = props;
  //need map for each item
  const menuItemsList = data.map((item, index) => {
    return <MenuItem key={index} data={item} />;
  });

  return (
    <div className="MenuSection container">
      <h1> {name}</h1>
      <div className="MenuSection--list">{menuItemsList}</div>
    </div>
  );
};

export default MenuSection;
