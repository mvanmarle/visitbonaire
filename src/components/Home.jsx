import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container-fluid p-0 homepagetitle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="emojis">🏝 🦩 🌵 🌸 🌅</div>
              <h1>
                <span className="title-1">Visit </span>
                <span className="title-2"> Bonaire </span>
              </h1>
              <h2>'Once a visitor, always a friend!'</h2>
            </div>
            <div className="col-6 p-3">
              <img
                src="images/Zoutpier.JPG"
                alt="Zoutpannen bonaire"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container menu">
        <div className="row">
          <div className="col-2">
            <h3>Natuur</h3>
          </div>
          <div className="col-2">
            <h3>Watersport</h3>
          </div>
          <div className="col-4">
            <img
              src="/images/logo-VB.png"
              alt="Visit Bonaire"
              className="img-fluid page-logo"
            />
          </div>
          <div className="col-2">
            <h3>Cultuur</h3>
          </div>
          <div className="col-2">
            <h3>Stad</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
