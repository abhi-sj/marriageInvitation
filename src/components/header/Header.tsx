import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="bg_theme">
      <div className="container header__container">
        <h1 style={{ color: "#333" }}>Abhijith & Ragna</h1>
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
