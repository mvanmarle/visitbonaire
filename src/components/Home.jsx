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
          <div className="col-3">
            <h3>Watersport</h3>
          </div>
          <div className="col-3">
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
      <div className="container">
        <h4>Visit Bonaire</h4>
        <h5>Bezoek het paradijs</h5>
        <p>
          Een bezoek aan Bonaire staat voor bijzondere herinneringen en
          hartverwarmende momenten. Maar wat mag je nou echt niet missen? Wij
          wijzen je de weg naar de leukste plekjes en verborgen parels. Ontdek
          meer en haal alles uit je visit aan bonaire.
        </p>
        <div className="row images">
          <div className="col-sm-4 p-1">
            <img
              src="images/Zoutpier.JPG"
              alt="Bonaire"
              className="img-fluid rounded"
            />
            <h5 className="p-2">Overnachten op bonaire</h5>
          </div>
          <div className="col-sm-4 p-1">
            <img
              src="images/Zoutpier.JPG"
              alt="Bonaire"
              className="img-fluid rounded"
            />
            <h5 className="p-2">Veelgestelde vragen</h5>
          </div>
          <div className="col-sm-4 p-1">
            <img
              src="images/Zoutpier.JPG"
              alt="Bonaire"
              className="img-fluid rounded"
            />
            <h5 className="p-2">Eten en drinken</h5>
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-sm-4 p-1">
            <img
              src="images/Zoutpier.JPG"
              alt="Bonaire"
              className="img-fluid rounded"
            />
            <h5 className="p-2">Uitagenda</h5>
          </div>
          <div className="col-sm-4 p-1">
            <img
              src="images/Zoutpier.JPG"
              alt="Bonaire"
              className="img-fluid rounded"
            />
            <h5 className="p-2">Tips voor jou</h5>
          </div>
          <div className="col-sm-4 p-1">
            <img
              src="images/Zoutpier.JPG"
              alt="Bonaire"
              className="img-fluid rounded"
            />
            <h5 className="p-2">Sporten op bonaire</h5>
          </div>
        </div>
        <button className="primary mb-5">Ontdek meer</button>
      </div>
      <div className="container-fluid email pt-5 pb-5 mb-5">
        <div className="row">
          <div className="col-md-7 ps-5 pe-0">
            <h4>
              Schrijf je in voor de nieuwsbrief en blijf op de hoogte van alles
              wat er te doen is
            </h4>
          </div>
          <div className="col-md-2 mb-2">
            <button className="primary">inschrijven</button>
          </div>
          <div className="col-md-3">
            <button className="outline">Tips voor jou</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4>Visit bonaire</h4>
            <p>
              Wil je ook graag het gevoel ervaren van volledige ontspanning op
              je vakantie? Zemmen in de blauwste zee die je je kunt voorstellen,
              gezellig shoppen in leuke boutiques of genieten van de prachtige
              onderwater wereld? Of wil je liever helemaal losgaan met cocktails
              tijdens een evenement op het strand? Bonaire heeft alles. Hippe
              beachclubs, prachtige onderwater wereld, authentieke cultuur en
              spannende activiteiten.{" "}
            </p>
            <button className="primary">Ontdek meer</button>
          </div>
          <div className="col-sm-6">
            <img
              src="images/Zoutpier.JPG"
              alt="Bezoek Bonaire"
              className="img-fluid rounded mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
