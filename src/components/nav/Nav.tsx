import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const Nav = () => {
  const [activeNav, setActiveNav] = useState<string>("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#story"
        onClick={() => setActiveNav("#story")}
        className={activeNav === "#story" ? "active" : ""}
      >
        <BiBookAlt />
      </a>
      <a
        href="#location"
        onClick={() => setActiveNav("#location")}
        className={activeNav === "#location" ? "active" : ""}
      >
        <ImLocation2 />
      </a>
      <a
        href="#images"
        onClick={() => setActiveNav("#images")}
        className={activeNav === "#images" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
