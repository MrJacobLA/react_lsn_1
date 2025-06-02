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

// import React from "react";

//Arrays mir 3 STudent*innen
// const students = [
//   {
//     id: 1,
//     firstName: "Testy",
//     lastName: "McTest",
//     age: 42,
//     course: "Web Development",
//     city: "Berlin",
//     picture: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: 2,
//     firstName: "Anna",
//     lastName: "Mustermann",
//     age: 29,
//     course: "UX Design",
//     city: "Hamburg",
//     picture: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     id: 3,
//     firstName: "John",
//     lastName: "Doe",
//     age: 35,
//     course: "Data Science",
//     city: "München",
//     picture: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
// ];
//

//---------------------------------------------------------------------------------------

// Erweiterung des students-Array mit GPA & Graduate:
// const students = [
//   {
//     id: 1,
//     firstName: "Testy",
//     lastName: "McTest",
//     age: 42,
//     course: "Web Development",
//     city: "Berlin",
//     picture: "https://randomuser.me/api/portraits/men/1.jpg",
//     gpa: 95,
//     graduate: true,
//   },
//   {
//     id: 2,
//     firstName: "Anna",
//     lastName: "Mustermann",
//     age: 29,
//     course: "UX Design",
//     city: "Hamburg",
//     picture: "https://randomuser.me/api/portraits/women/2.jpg",
//     gpa: 70,
//     graduate: false,
//   },
//   {
//     id: 3,
//     firstName: "John",
//     lastName: "Doe",
//     age: 35,
//     course: "Data Science",
//     city: "München",
//     picture: "https://randomuser.me/api/portraits/men/3.jpg",
//     gpa: 60,
//     graduate: true,
//   },
// ];

// //  Eine Funktion zur GPA-Bewertung:
// function getGrade(gpa) {
//   if (gpa >= 97) return "A+";
//   else if (gpa >= 93) return "A";
//   else if (gpa >= 90) return "A-";
//   else if (gpa >= 87) return "B+";
//   else if (gpa >= 83) return "B";
//   else if (gpa >= 80) return "B-";
//   else if (gpa >= 77) return "C+";
//   else if (gpa >= 73) return "C";
//   else if (gpa >= 70) return "C-";
//   else if (gpa >= 67) return "D+";
//   else if (gpa >= 63) return "D";
//   else if (gpa >= 60) return "D-";
//   else return "F";
// }

// const Student = () => {
//   return (
//     <section className="bg-base-200 min-h-screen p-10">
//       <h1 className="text-3xl font-bold text-center mb-10">
//         Unsere Studierenden
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {students.map((student) => (
//           <div
//             key={student.id}
//             className="bg-white shadow-lg rounded-xl p-6 text-center"
//           >
//             <img
//               src={student.picture}
//               alt={`${student.firstName} ${student.lastName}`}
//               className="w-24 h-24 mx-auto rounded-full mb-4"
//             />
//             <h2 className="text-xl font-semibold mb-1">
//               {student.firstName} {student.lastName}
//             </h2>
//             <p className="text-gray-700 mb-1">Alter: {student.age}</p>
//             <p className="text-gray-700 mb-1">Kurs: {student.course}</p>
//             <p className="text-gray-700 mb-1">Stadt: {student.city}</p>

//             {/* // Zeigt GPA-Note & Absolventen-Status in der Karte */}
//             <p className="text-gray-700">
//               GPA: {student.gpa} ({getGrade(student.gpa)})
//             </p>

//             <p
//               className={`font-semibold mt-2 ${
//                 student.graduate ? "text-green-600" : "text-yellow-600"
//               }`}
//             >
//               {student.graduate ? "✅ Absolvent" : "📚 Studiert noch"}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Student;

//-------------------------------------------------------------------Rendering Listen

// Student.jsx
import React from "react";

// 📦 Das Array mit allen Student:innen
const students = [
  {
    id: 1,
    firstName: "Testy",
    lastName: "McTest",
    age: 42,
    course: "Web Development",
    city: "Berlin",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    gpa: 50,
    graduate: false,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    course: "Data Science",
    city: "New York",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
    gpa: 95,
    graduate: true,
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Smith",
    age: 28,
    course: "Web Development",
    city: "Los Angeles",
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    gpa: 85,
    graduate: false,
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Johnson",
    age: 25,
    course: "Data Science",
    city: "San Francisco",
    picture: "https://randomuser.me/api/portraits/women/4.jpg",
    gpa: 78,
    graduate: true,
  },
  {
    id: 5,
    firstName: "Bob",
    lastName: "Brown",
    age: 30,
    course: "Web Development",
    city: "Chicago",
    picture: "https://randomuser.me/api/portraits/men/5.jpg",
    gpa: 67,
    graduate: false,
  },
  {
    id: 6,
    firstName: "Charlie",
    lastName: "Davis",
    age: 23,
    course: "Data Science",
    city: "Austin",
    picture: "https://randomuser.me/api/portraits/men/6.jpg",
    gpa: 92,
    graduate: true,
  },
  {
    id: 7,
    firstName: "Emily",
    lastName: "Wilson",
    age: 27,
    course: "Web Development",
    city: "Seattle",
    picture: "https://randomuser.me/api/portraits/women/7.jpg",
    gpa: 88,
    graduate: true,
  },
  {
    id: 8,
    firstName: "David",
    lastName: "Martinez",
    age: 29,
    course: "Data Science",
    city: "Miami",
    picture: "https://randomuser.me/api/portraits/men/8.jpg",
    gpa: 73,
    graduate: false,
  },
  {
    id: 9,
    firstName: "Fiona",
    lastName: "Clark",
    age: 26,
    course: "Web Development",
    city: "Denver",
    picture: "https://randomuser.me/api/portraits/women/9.jpg",
    gpa: 81,
    graduate: false,
  },
  {
    id: 10,
    firstName: "George",
    lastName: "Miller",
    age: 32,
    course: "Data Science",
    city: "Boston",
    picture: "https://randomuser.me/api/portraits/men/10.jpg",
    gpa: 90,
    graduate: true,
  },
];

// 📘 Hilfsfunktion: wandelt gpa (z.B. 95) in eine Note um (z.B. A)
const getLetterGrade = (gpa) => {
  if (gpa >= 97) return "A+";
  if (gpa >= 93) return "A";
  if (gpa >= 90) return "A-";
  if (gpa >= 87) return "B+";
  if (gpa >= 83) return "B";
  if (gpa >= 80) return "B-";
  if (gpa >= 77) return "C+";
  if (gpa >= 73) return "C";
  if (gpa >= 70) return "C-";
  if (gpa >= 67) return "D+";
  if (gpa >= 63) return "D";
  if (gpa >= 60) return "D-";
  return "F";
};

// 🧠 Haupt-Komponente
const Student = () => {
  return (
    <section className="bg-base-200 min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Unsere Studierenden
      </h1>

      {/* 📚 Grid für Karten-Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id} // wichtig für React zur Wiedererkennung
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <img
              src={student.picture}
              alt={`${student.firstName} ${student.lastName}`}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />

            <h2 className="text-xl font-semibold mb-1">
              {student.firstName} {student.lastName}
            </h2>

            <p className="text-gray-700 mb-1">Alter: {student.age}</p>
            <p className="text-gray-700 mb-1">Kurs: {student.course}</p>
            <p className="text-gray-700 mb-1">Stadt: {student.city}</p>

            {/* 🏆 GPA als Note */}
            <p className="text-blue-700 font-medium mt-3">
              Note: {getLetterGrade(student.gpa)} ({student.gpa})
            </p>

            {/* 🎓 Bedingte Anzeige ob Absolvent oder nicht */}
            <p
              className={`mt-2 font-semibold ${
                student.graduate ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {student.graduate ? "✅ Absolvent" : "🎓 Noch im Studium"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Student;

// ✅ Die Komponente Student zeigt eine Liste von Studierenden an.
// Sie nutzt das students-Array (muss vorher importiert oder im gleichen File deklariert sein).

// const Student = () => {
//   return (
//     // ⬇️ Äußere Section: Hintergrundfarbe, Mindesthöhe für den Bildschirm, Padding rundherum
//     <section className="bg-base-200 min-h-screen p-10">

//       {/* ⬇️ Überschrift der Seite */}
//       <h1 className="text-3xl font-bold text-center mb-10">
//         Unsere Studierenden
//       </h1>

//       {/* 📚 Container für das Karten-Layout:
//           - 1 Spalte auf kleinen Bildschirmen
//           - 2 Spalten auf mittelgroßen Bildschirmen
//           - 3 Spalten auf großen Bildschirmen
//           - Lücken (gap-6) zwischen den Karten
//       */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {/* 🔁 Iteration durch das students-Array – für jeden Eintrag wird eine Karte erzeugt */}
//         {students.map((student) => (

//           // 🔑 key ist Pflicht in Listen – hier mit der eindeutigen ID des Studenten
//           <div
//             key={student.id}
//             className="bg-white shadow-lg rounded-xl p-6 text-center"
//           >
//             {/* 🖼️ Bild des Studenten */}
//             <img
//               src={student.picture} // Bild-URL
//               alt={`${student.firstName} ${student.lastName}`} // Alternativtext für Barrierefreiheit
//               className="w-24 h-24 mx-auto rounded-full mb-4" // Größe, zentriert, rund, Abstand unten
//             />

//             {/* 🧑‍🎓 Name */}
//             <h2 className="text-xl font-semibold mb-1">
//               {student.firstName} {student.lastName}
//             </h2>

//             {/* 📋 Weitere Informationen */}
//             <p className="text-gray-700 mb-1">Alter: {student.age}</p>
//             <p className="text-gray-700 mb-1">Kurs: {student.course}</p>
//             <p className="text-gray-700 mb-1">Stadt: {student.city}</p>

//             {/* 🎓 GPA in Schulnote umgerechnet (z.B. 85 → B) */}
//             <p className="text-blue-700 font-medium mt-3">
//               Note: {getLetterGrade(student.gpa)} ({student.gpa})
//               {/* getLetterGrade ist eine Hilfsfunktion, die den GPA in eine Schulnote übersetzt */}
//             </p>

//             {/* 🎓 Zeigt an, ob die Person bereits absolviert hat oder noch im Studium ist.
//                 - Farbe ist grün, wenn graduate = true
//                 - Farbe ist gelb, wenn graduate = false
//             */}
//             <p
//               className={`mt-2 font-semibold ${
//                 student.graduate ? "text-green-600" : "text-yellow-600"
//               }`}
//             >
//               {student.graduate ? "✅ Absolvent" : "🎓 Noch im Studium"}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Student;
// students.map(...)	Für jeden Studenten wird eine Karte erstellt
// key={student.id}	Wichtig für Reacts Performance und Wiedererkennung
// className="..."	TailwindCSS-Klassen zur Gestaltung
// student.graduate ? ...	Bedingte Anzeige – ternärer Operator
// getLetterGrade(gpa)	Wandelt z. B. 88 in B+ um (Hilfsfunktion – außerhalb der Komponente)
