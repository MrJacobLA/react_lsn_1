import React from "react";

function Services() {
  return (
    <section id="services" className="p-10 text-center ">
      <h2 className="text-2xl font-semibold mb-8">Unsere Leistungen</h2>
      <ul className="flex flex-row justify-center  space-y-6 gap-3">
        <li className="badge bg-blue-100 text-blue-900 p-4 text-base rounded-xl translate-y-3">
          Webentwicklung
        </li>
        <li className="badge bg-blue-100 text-blue-900 p-4 text-base rounded-xl translate-y-3">
          SEO-Optimierung
        </li>
        <li className="badge bg-blue-100 text-blue-900 p-4 text-base rounded-xl translate-y-3">
          Online-Marketing
        </li>
      </ul>
    </section>
  );
}

export default Services;
