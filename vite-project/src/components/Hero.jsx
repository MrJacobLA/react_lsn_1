import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="p-10 bg-base-100 text-center shadow-xl"
      style={{ backgroundColor: "#e0f7fa" }} //Inline-Stil: überschreibt bg-base-100 mit hellblau
    >
      <h2 className="text-3xl font-semibold mb-4">
        Willkommen auf unserer Seite!
      </h2>
      <p className="text-lg">Wir bieten Ihnen die besten digitalen Lösungen.</p>
    </section>
  );
}

export default Hero;
