/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="specialFont">
      <a href="#" className="footer__logo">
        Abhi
      </a>

      <div className="footer__copyright specialFont" style={{ color: "#333" }}>
        <small>&copy; Abhijith. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
