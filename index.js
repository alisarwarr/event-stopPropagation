import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "red" }}
        onClick={(event) => {
           console.log("div clicked!");
        }}
      >
         abc
        <button
          onClick={(e) => {
             if (!e) var e = window.event;
             e.cancelBubble = true;
             if (e.stopPropagation) e.stopPropagation();
             console.log("button clicked!");
          }}
        >
           click
        </button>
      </div>
    );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
