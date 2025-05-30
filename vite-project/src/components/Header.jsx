import React from "react";
import Navigation from "./Navigation"; //Hier veschachteln wir die NAv hier in Header und es kommt nicht wie alle anderne in die App.jsx!

function Header() {
  return (
    <header>
      <h1>Meine Website</h1>
      <Navigation />
    </header>
  );
}

export default Header;
