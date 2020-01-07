import React from "react";
import createItem from "./item";

const Button = ({ text, ...itemProps }) => {
  const style = {
    style: {
      borderRadius: "5px",
      border: "1px solid #3f3f3f",
      padding: "5px",
      background: "rgb(228,228,228)",
      background:
        "linear-gradient(0deg, rgba(228,228,228,1) 0%, rgba(205,205,205,1) 100%)",
      cursor: "default",
      textAlign: "center"
      //width: "fit-content"
    }
  };
  return createItem(itemProps, style, <React.Fragment>{text}</React.Fragment>);
};

export default Button;
