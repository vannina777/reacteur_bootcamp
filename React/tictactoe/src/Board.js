import React from "react";

import Square from "./Square.js";

const Board = props => {
  const { positions, clickHandler } = props;

  const square = positions.map((curr, index) => {
    let style = "";
    if (index === 0 || index === 1 || index === 2) {
      style += " removeBorderTop";
    }

    if (index === 6 || index === 7 || index === 8) {
      style += " removeBorderBottom";
    }

    if (index === 0 || index === 3 || index === 6) {
      style += " removeBorderLeft";
    }

    if (index === 2 || index === 5 || index === 8) {
      style += " removeBorderRight";
    }

    return (
      <Square
        key={index}
        content={positions[index]}
        clickHandler={() => clickHandler(index)}
        cssStyle={style}
      />
    );
  });

  return (
    <div>
      <div className="Board">{square}</div>
    </div>
  );
};

export default Board;
