import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import MenuItem from "./MenuItem";
import { wrap } from "module";

const MenuSection = props => {
  const { name, data } = props;
  //need map for each item
  const menuItemsList = data.map((item, index) => {
    return <MenuItem data={item} />;
  });

  return (
    <div className="MenuSection">
      <h2> {name}</h2>
      <div className="MenuSection--list">{menuItemsList}</div>
    </div>
  );
};

export default MenuSection;
