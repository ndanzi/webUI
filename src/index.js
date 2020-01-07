import React, { Component } from "react";
import ReactDOM from "react-dom";

import Rectangle from "./rectangle";
import Panel from "./panel";
import Label from "./label";
import Button from "./button";

class App extends Component {
  objectsMapping = {
    rectangle: <Rectangle />,
    panel: <Panel />,
    label: <Label />,
    button: <Button />
  };

  constructor(props) {
    super(props);

    this.state = {
      rectangle1: {
        type: "rectangle",
        leftMargin: 30,
        topMargin: 50,
        width: 100,
        height: 100,
        color: "red"
      },
      rectangle2: {
        type: "rectangle",
        leftMargin: 130,
        topMargin: 150,
        width: 100,
        height: 100,
        color: "blue"
      },
      panel1: {
        type: "panel",
        leftMargin: 230,
        topMargin: 250,
        width: 100,
        height: 100,
        borderColor: "black",
        borderWidth: 1,
        children: {
          rectangle3: {
            type: "rectangle",
            leftMargin: 20,
            topMargin: 10,
            width: 50,
            height: 50,
            color: "green",
            horizontalAlignment: "stretch",
            children: {
              label1: {
                type: "label",
                text: "this is a white label",
                color: "white",
                wrapWord: true
              }
            }
          }
        }
      },
      label1: {
        type: "label",
        text: "this is a label",
        topMargin: 200,
        leftMargin: 300
      },
      button1: {
        type: "button",
        text: "Button1",
        topMargin: 500,
        leftMargin: 200
      },
      button2: {
        type: "button",
        text: "Button1",
        horizontalAlignment: "center"
        //width: 100
      }
    };
  }

  renderObjects(rootObj) {
    if (rootObj == null) return null;

    return Object.keys(rootObj).map((key, id) => {
      console.log(JSON.stringify(rootObj[key]));
      const { type, children, ...itemProps } = rootObj[key];

      let uiObject = this.objectsMapping[type];

      return React.cloneElement(
        uiObject,
        itemProps,
        this.renderObjects(children)
      );
    });
  }

  render() {
    return this.renderObjects(this.state);
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
