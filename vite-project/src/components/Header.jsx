import React from "react";
import Navigation from "./Navigation"; //Hier veschachteln wir die NAv hier in Header und es kommt nicht wie alle anderne in die App.jsx!

function Header() {
  return (
    <header className="bg-primary text-white p-6 text-center">
      <h1 className="text-5xl font-extrabold mb-6 w-screen">
        Meine React Aufgaben-Website
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;
