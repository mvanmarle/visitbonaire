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
          <div class="social-links d-flex justify-content-center">
            <a
              href="https://www.instagram.com/maureenvanmarle/"
              target="_blank"
              title="Instagram Profile"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/mvanmarle"
              target="_blank"
              title="GitHub Profile"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/maureenvanmarle/"
              target="_blank"
              title="Linked-in Profile"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <p class="text-center mt-5">
            <a
              href="https://github.com/mvanmarle/Portfolio-MaureenvanMarle"
              target="_blank"
              title="Github Project repository"
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
