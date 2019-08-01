import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import MenuItem from "./MenuItem";

const MenuSection = props => {
  const { name, data, handleItemClick } = props;
  //need map for each item
  const menuItemsList = data.map((item, index) => {
    return (
      <MenuItem key={index} data={item} handleItemClick={handleItemClick} />
    );
  });

  return (
    <div className="MenuSection ">
      <h1> {name}</h1>
      <div className="MenuSection--list">{menuItemsList}</div>
    </div>
  );
};

export default MenuSection;
