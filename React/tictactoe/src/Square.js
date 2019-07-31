import React from "react";
import { motion, useViewportScroll } from "framer-motion";

const Square = props => {
  const { content, clickHandler, cssStyle } = props;

  const svgCross = (
    <svg className="svg-icon" viewBox="0 0 20 20">
      <path
        fill="none"
        d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
      />
    </svg>
  );

  const svgZero = (
    <svg className="svg-icon" viewBox="0 0 20 20">
      <path
        fill="none"
        d="M10,0.562c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.406,4.774,15.195,0.562,10,0.562 M10,18.521c-4.723,0-8.551-3.829-8.551-8.552S5.277,1.418,10,1.418s8.552,3.828,8.552,8.551S14.723,18.521,10,18.521"
      />
    </svg>
  );

  let css = "Square" + cssStyle;

  return (
    <div className={css} onClick={clickHandler}>
      {content === ""
        ? null
        : content === "X"
        ? svgCross
        : content === "O"
        ? svgZero
        : null}
    </div>
  );
};

export default Square;
