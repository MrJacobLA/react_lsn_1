import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-base-200 overflow-x-hidden min-h-screen flex flex-col bg-base-200">
      {/* min-h-screen flex flex-col bg-base-200 für den footer ganz unten  */}
      <Header />
      <Hero />
      <Services />
      <div className="mt-auto"></div>
      <Footer />
    </div>
  );
}

export default App;
