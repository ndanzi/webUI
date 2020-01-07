import React from "react";

const leftLayout = (left, width) => {
  return { left, width };
};
const rightLayout = (right, width) => {
  return { right, width };
};
const hStretchLayout = (left, right) => {
  return { left, right };
};

const hCenterLayout = (left, right, width) => {
  return { width, margin: "0 auto" };
};

const topLayout = (top, height) => {
  return { top, height };
};
const bottomLayout = (bottom, height) => {
  return { bottom, height };
};
const vStretchLayout = (top, bottom) => {
  return { top, bottom };
};

const getHorizontalLayout = (horizontalAlignment, left, right, width) => {
  let ret = {
    left: leftLayout(left, width),
    right: rightLayout(right, width),
    stretch: hStretchLayout(left, right),
    center: hCenterLayout(left, right, width)
  };
  return ret[horizontalAlignment];
};

const getVerticalAlignment = (verticalAlignment, top, bottom, height) => {
  let ret = {
    top: topLayout(top, height),
    bottom: bottomLayout(bottom, height),
    stretch: vStretchLayout(top, bottom)
  };
  return ret[verticalAlignment];
};

const getLayout = (
  left,
  right,
  top,
  bottom,
  horizontalAlignment,
  verticalAlignment,
  width,
  height
) => {
  let hLayout = getHorizontalLayout(horizontalAlignment, left, right, width);
  let vLayout = getVerticalAlignment(verticalAlignment, top, bottom, height);
  return { ...vLayout, ...hLayout };
};

const Item = ({
  leftMargin = 0,
  topMargin = 0,
  rightMargin = 0,
  bottomMargin = 0,
  width,
  height,
  horizontalAlignment = "left",
  verticalAlignment = "top",
  children,
  style
}) => {
  const layout = getLayout(
    leftMargin,
    rightMargin,
    topMargin,
    bottomMargin,
    horizontalAlignment,
    verticalAlignment,
    width,
    height
  );
  const itemStyle = {
    ...style,
    position: "absolute",
    ...layout
  };
  return <div style={itemStyle}>{children}</div>;
};

const createItem = (itemProps, style, children) => {
  return React.createElement(Item, { ...itemProps, ...style }, children);
};

export default createItem;
