import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Student from "./components/Student";

// const studentData = {
//   id: 1,
//   firstName: "Testy",
//   lastName: "McTest",
//   age: 42,
//   course: "Web Development",
//   city: "Berlin",
//   picture: "https://randomuser.me/api/portraits/men/1.jpg",
// };
function App() {
  return (
    <div className="min-h-screen bg-base-200 overflow-x-hidden min-h-screen flex flex-col bg-base-200">
      {/* min-h-screen flex flex-col bg-base-200 für den footer ganz unten  */}
      <Header />
      <Hero />

      <Services />
      {/* <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Studentenprofil</h1>
        <Student student={studentData} />
      </div> */}
      <Student />
      <div className="mt-auto"></div>
      {/* Sie fügt ein leeres <div>-Element ein.
Die Klasse mt-auto stammt meist aus Tailwind CSS und steht für "margin-top: auto".
In einem flexbox-Layout (flex flex-col auf dem Elternelement) sorgt mt-auto dafür, dass alle nachfolgenden Elemente (hier: <Student /> und <Footer />) ganz nach unten im Container geschoben werden.
Das ist ein gängiger Trick, um z.B. einen Footer immer am unteren Rand der Seite zu halten, auch wenn der Inhalt darüber wenig Platz einnimmt.
Zusammengefasst:
Die Zeile sorgt dafür, dass der Footer immer am unteren Rand der Seite bleibt, indem sie den verfügbaren Platz zwischen den oberen Komponenten und dem Footer ausfüllt.  */}

      <Footer />
    </div>
  );
}

export default App;
