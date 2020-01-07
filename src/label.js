import React from "react";
import createItem from "./item";

const Label = ({ text, color, wrapWord, ...itemProps }) => {
  console.log("color", color);
  const style = {
    style: {
      color: color,
      whiteSpace: wrapWord ? "normal" : "nowrap"
    }
  };
  return createItem(itemProps, style, <React.Fragment>{text}</React.Fragment>);
};

export default Label;
