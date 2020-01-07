import createItem from "./item";

const Panel = ({ borderWidth, borderColor, children, ...itemProps }) => {
  console.log("children", children);
  const style = {
    style: {
      borderWidth: borderWidth + "px",
      borderColor: borderColor,
      borderStyle: "solid"
    }
  };
  return createItem(itemProps, style, children);
};

export default Panel;
