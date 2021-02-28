import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Navbar() {
  return (
    <div className="navbar navbar-dark bg-info">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="https://fulltimeforce.com" target="_blank" rel="noreferrer">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <div className="navbar-brand ml-5 ">
              <h2>Fulltime - Take Home Test</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
