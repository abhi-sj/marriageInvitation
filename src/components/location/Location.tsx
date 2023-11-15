import React from "react";
import "./location.css";

import { GiDiamondRing } from "react-icons/gi";
import { CgCalendarDates } from "react-icons/cg";

import { IoIosTime } from "react-icons/io";
import { FaGlassCheers } from "react-icons/fa";

const Location = () => {
  return (
    <section id="location">
      <div className="section__title">
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          Location
        </h1>
      </div>
      <div className="location_cards_container">
        <div className="location_card">
          <div className="card_occasion">
            <h2
              style={{
                color: "#333",
              }}
            >
              Wedding
            </h2>
            <span>
              <GiDiamondRing />
            </span>
          </div>
          <div className="card_details">
            <div className="card_entry">
              <CgCalendarDates />
              <h3 className="title_location" style={{ color: "#333" }}>
                29 Nov, 2023
              </h3>
            </div>
            <div className="card_entry">
              <IoIosTime />
              <h3 className="title_location" style={{ color: "#333" }}>
                10:30 AM
              </h3>
            </div>
          </div>

          <div className="mapContainer">
            <iframe
              title="Marriage location place "
              className="mapCard"
              src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=Mattannur%20College%20Post,%20Velliyamparamba,%20Mattannur,%20Kerala%20670702+(Green%20Planet%20Hotel%20&amp;%20Restaurent)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Find Population on Map
              </a>
            </iframe>
          </div>
        </div>
        <div className="location_card">
          <div className="card_occasion">
            <h2
              style={{
                color: "#333",
              }}
            >
              Reception
            </h2>
            <span>
              <FaGlassCheers />
            </span>
          </div>
          <div className="card_details">
            <div className="card_entry">
              <CgCalendarDates />
              <h3 className="title_location" style={{ color: "#333" }}>
                01 Dec, 2023
              </h3>
            </div>
            <div className="card_entry">
              <IoIosTime />
              <h3 className="title_location" style={{ color: "#333" }}>
                5:00 PM - 8:00 PM
              </h3>
            </div>
          </div>

          <div className="mapContainer">
            <iframe
              title="Reception Location"
              className="mapCard"
              src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=Sri%20Kalidas%20Conventon%20Center%20Thoongampara,%20695572+(SKM%20Convention%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Find Population on Map
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
