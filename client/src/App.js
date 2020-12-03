import React from "react";
import "./sass/App.scss";
import {
  Accueil,
  Profil,
  Projects,
  Contact,
  Header,
} from "../src/components/index";

function App() {
  return (
    <>
      <Header />
      <Accueil />
      <Profil />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
