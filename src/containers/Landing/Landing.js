import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Landing.scss";
/**
 * @author Vetrivel Kumaravelu
 * @function
 **/

const Landing = (props) => {
  const [display, setDisplay] = useState("login");

  const switchComponent = (val) => {
    setDisplay(val);
  };

  const showComponent = () => {
    switch (display) {
      case "login":
        return <Login switchComponent={switchComponent} />;
      case "register":
        return <Register switchComponent={switchComponent} />;
      default:
        return null;
    }
  };

  return (
    <div className="limiter">
      <div className="landingBg">{showComponent(display)}</div>
    </div>
  );
};

export default Landing;
