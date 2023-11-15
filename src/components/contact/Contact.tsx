/* eslint-disable react-hooks/rules-of-hooks */
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";

const contact = () => {
  return (
    <section id="contact">
      <div className="section__title">
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          Contact
        </h1>
      </div>
      <div className="container contact__container section__title">
        <article className="contact__option">
          <FaPhoneAlt />
          <h2>Mobile/WhatsApp</h2>
          <h2>9830549985</h2>
        </article>
      </div>
    </section>
  );
};

export default contact;
