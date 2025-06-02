import React from "react";
import Student from "./Student";

const studentsData = [
  {
    id: 1,
    firstName: "Testy",
    lastName: "McTest",
    age: 42,
    course: "Web Development",
    city: "Berlin",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    gpa: 91,
    graduate: true,
  },
  {
    id: 2,
    firstName: "Lina",
    lastName: "Codewell",
    age: 29,
    course: "UX Design",
    city: "Hamburg",
    picture: "https://randomuser.me/api/portraits/women/65.jpg",
    gpa: 85,
    graduate: false,
  },
];

function Students() {
  return (
    <section className="py-10 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-8">
        Unsere Studierenden
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {studentsData.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </section>
  );
}

export default Students;
