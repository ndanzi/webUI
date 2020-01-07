import createItem from "./item";

const Rectangle = ({ color, children, ...itemProps }) => {
  console.log("color", color);
  const style = {
    style: {
      backgroundColor: color
    }
  };
  return createItem(itemProps, style, children);
};

export default Rectangle;
