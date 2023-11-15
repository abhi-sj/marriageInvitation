import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="bg_theme" id="header">
      <div className="header__container">
        <div className="the_couples">
          <h1 style={{ color: "#333" }}>Abhijith </h1>
          <h3 style={{ color: "#333" }}> & </h3>
          <h1 style={{ color: "#333" }}>Ragna</h1>
        </div>
        <div className="specialFont" style={{ color: "#333" }}>
          WE ARE GETTING MARRIED!
        </div>
        <div className="specialFont specialFont_date" style={{ color: "#333" }}>
          NOV 29, 2023
        </div>
      </div>
    </header>
  );
};

export default Header;
