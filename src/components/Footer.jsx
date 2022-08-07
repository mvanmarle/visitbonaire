import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img
                src="/images/Logo-VB.png"
                alt="Visit Bonaire"
                className="img-fluid logo"
              />
            </div>
            <div className="col-sm-3">
              <ul>
                <li>
                  <h6>Snel naar</h6>
                </li>
                <li>
                  <a href="/">Tips voor jou</a>
                </li>
                <li>
                  <a href="/">Eten en drinken</a>
                </li>
                <li>
                  <a href="/">Watersporten</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>
                  <h6>Praktische info</h6>
                </li>
                <li>
                  <a href="/">Veelgestelde vragen</a>
                </li>
                <li>
                  <a href="/">Overnachten</a>
                </li>
                <li>
                  <a href="/">Auto huren</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-5">
            <a
              href="https://github.com/mvanmarle/Portfolio-MaureenvanMarle"
              target="_blank"
              title="Github Project repository"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by Maureen van Marle 🌸
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
