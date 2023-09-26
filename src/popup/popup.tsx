import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./popup.css";

const App: React.FC<{}> = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="logo">
          <div id="wifi-loader">
            <svg className="circle-outer" viewBox="0 0 86 86">
              <circle className="back" cx="43" cy="43" r="40"></circle>
              <circle className="front" cx="43" cy="43" r="40"></circle>
              <circle className="new" cx="43" cy="43" r="40"></circle>
            </svg>
            <svg className="circle-middle" viewBox="0 0 60 60">
              <circle className="back" cx="30" cy="30" r="27"></circle>
              <circle className="front" cx="30" cy="30" r="27"></circle>
            </svg>
            <svg className="circle-inner" viewBox="0 0 34 34">
              <circle className="back" cx="17" cy="17" r="14"></circle>
              <circle className="front" cx="17" cy="17" r="14"></circle>
            </svg>
          </div>
        </div>
        <div className="desc">
          <div className="text" data-text="Listening ads free music.."></div>
          <h1>Spotify Ad Blocker</h1>
          <p>
            Listen to your favorite music without any ads with spotify adblocker 
          </p>
        </div>
      </div>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
