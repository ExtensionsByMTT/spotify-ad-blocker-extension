import React from "react";
import ReactDOM from "react-dom";
import "./contentScript.css";

const App: React.FC<{}> = () => {
  const divs = document.getElementsByTagName("div");
  for (const div of divs) {
    const classesToCheck = [
      "ad",
      "promo",
      "banner",
      "GoogleActiveViewElement",
      "desktopAd",
    ];
    if (classesToCheck.some((className) => div.classList.contains(className))) {
      div.style.display = "none";
    }
  }

  return <></>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
