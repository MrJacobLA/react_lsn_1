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
const students = [
  {
    id: 1,
    firstName: "Testy",
    lastName: "McTest",
    age: 42,
    course: "Web Development",
    city: "Berlin",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    gpa: 95,
    graduate: true,
  },
  {
    id: 2,
    firstName: "Anna",
    lastName: "Mustermann",
    age: 29,
    course: "UX Design",
    city: "Hamburg",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
    gpa: 70,
    graduate: false,
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Doe",
    age: 35,
    course: "Data Science",
    city: "München",
    picture: "https://randomuser.me/api/portraits/men/3.jpg",
    gpa: 60,
    graduate: true,
  },
];

//  Eine Funktion zur GPA-Bewertung:
function getGrade(gpa) {
  if (gpa >= 97) return "A+";
  else if (gpa >= 93) return "A";
  else if (gpa >= 90) return "A-";
  else if (gpa >= 87) return "B+";
  else if (gpa >= 83) return "B";
  else if (gpa >= 80) return "B-";
  else if (gpa >= 77) return "C+";
  else if (gpa >= 73) return "C";
  else if (gpa >= 70) return "C-";
  else if (gpa >= 67) return "D+";
  else if (gpa >= 63) return "D";
  else if (gpa >= 60) return "D-";
  else return "F";
}

const Student = () => {
  return (
    <section className="bg-base-200 min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Unsere Studierenden
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
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

            {/* // Zeigt GPA-Note & Absolventen-Status in der Karte */}
            <p className="text-gray-700">
              GPA: {student.gpa} ({getGrade(student.gpa)})
            </p>

            <p
              className={`font-semibold mt-2 ${
                student.graduate ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {student.graduate ? "✅ Absolvent" : "📚 Studiert noch"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Student;
