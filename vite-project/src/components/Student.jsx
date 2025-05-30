// import React from "react";

// const Student = ({ student }) => {
//   return (
//     <div>
//       <h2>
//         {student.firstName} {student.lastName}
//       </h2>
//       <p>Alter: {student.age}</p>
//       <p>Kurs: {student.course}</p>
//       <p>Stadt: {student.city}</p>
//       <img src={student.picture} alt="Profilbild" width={150} />
//     </div>
//   );
// };

// export default Student;

//

import React from "react";

//Arrays mir 3 STudent*innen
const students = [
  {
    id: 1,
    firstName: "Testy",
    lastName: "McTest",
    age: 42,
    course: "Web Development",
    city: "Berlin",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    firstName: "Anna",
    lastName: "Mustermann",
    age: 29,
    course: "UX Design",
    city: "Hamburg",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Doe",
    age: 35,
    course: "Data Science",
    city: "München",
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

//  definieren die Komponente "Student"
const Student = () => {
  return (
    // Der äußere Container (eine Sektion auf der Seite)
    <section className="bg-base-200 min-h-screen p-10">
      {/* Überschrift */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Unsere Studierenden
      </h1>

      {/* Grid-Layout: 1 Spalte auf kleinen Bildschirmen, bis zu 3 Spalten auf großen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*  Hier passiert die "Magie": Wir durchlaufen das Array mit .map() */}
        {students.map((student) => (
          // Für jeden Studierenden erzeugen wir eine Karte (div)
          <div
            key={student.id} // React braucht einen eindeutigen Schlüssel
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            {/* Profilbild */}
            <img
              src={student.picture}
              alt={`${student.firstName} ${student.lastName}`}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />

            {/* Name */}
            <h2 className="text-xl font-semibold mb-1">
              {student.firstName} {student.lastName}
            </h2>

            {/* Alter */}
            <p className="text-gray-700 mb-1">Alter: {student.age}</p>

            {/* Kurs */}
            <p className="text-gray-700 mb-1">Kurs: {student.course}</p>

            {/* Stadt */}
            <p className="text-gray-700">Stadt: {student.city}</p>
          </div>
        ))}
        {/* map() endet hier. Deshalb werden 3 Karten erzeugt: für 3 Einträge im Array. */}
      </div>
    </section>
  );
};

// Wir exportieren die Komponente, damit sie in App.jsx verwendet werden kann und dort importieren mit <STudnet />
export default Student;
