import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/story/Story";
import Experience from "./components/location/Location";
import Services from "./components/pictures/Pictures";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
