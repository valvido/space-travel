import React from "react";
import { Link } from "react-router-dom";
import Button, { ButtonType } from "../components/Button";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div>
        <h1 className="LandingPage__header">
          The Perfect Space Travel for you
        </h1>
        <h2 className="LandingPage__content">
          A space travel with minimum time and with all ease.
        </h2>
      </div>
      <div className="LandingPage__button-wrLandingPageer">
        <Link to="/main">
          <Button type={ButtonType.Circle}></Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
