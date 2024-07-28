import Link from "next/link";
import React from "react";

const Students = () => {
  const students = [
    {
      id: 1,
      name: "Sophia Martinez",
      age: 16,
      image: "https://via.placeholder.com/150?text=Sophia+Martinez",
      grade: "10th Grade",
      description:
        "Sophia is an avid learner with a keen interest in robotics and technology.",
    },
    {
      id: 2,
      name: "Liam Johnson",
      age: 17,
      image: "https://via.placeholder.com/150?text=Liam+Johnson",
      grade: "11th Grade",
      description:
        "Liam excels in mathematics and is a member of the school debate team.",
    },
    {
      id: 3,
      name: "Olivia Brown",
      age: 15,
      image: "https://via.placeholder.com/150?text=Olivia+Brown",
      grade: "9th Grade",
      description:
        "Olivia loves literature and participates in the school's drama club.",
    },
    {
      id: 4,
      name: "Noah Davis",
      age: 16,
      image: "https://via.placeholder.com/150?text=Noah+Davis",
      grade: "10th Grade",
      description:
        "Noah is passionate about environmental science and volunteers with local green initiatives.",
    },
    {
      id: 5,
      name: "Emma Wilson",
      age: 17,
      image: "https://via.placeholder.com/150?text=Emma+Wilson",
      grade: "11th Grade",
      description:
        "Emma is a talented artist who also helps manage the school art gallery.",
    },
    {
      id: 6,
      name: "Aiden Martinez",
      age: 15,
      image: "https://via.placeholder.com/150?text=Aiden+Martinez",
      grade: "9th Grade",
      description:
        "Aiden enjoys sports and is a member of the school's soccer team.",
    },
    {
      id: 7,
      name: "Isabella Taylor",
      age: 16,
      image: "https://via.placeholder.com/150?text=Isabella+Taylor",
      grade: "10th Grade",
      description:
        "Isabella is passionate about coding and participates in the school's programming club.",
    },
    {
      id: 8,
      name: "James Anderson",
      age: 18,
      image: "https://via.placeholder.com/150?text=James+Anderson",
      grade: "12th Grade",
      description:
        "James is preparing for college and excels in both academics and sports.",
    },
    {
      id: 9,
      name: "Mia Harris",
      age: 17,
      image: "https://via.placeholder.com/150?text=Mia+Harris",
      grade: "11th Grade",
      description:
        "Mia is an enthusiastic volunteer and participates in various community service activities.",
    },
    {
      id: 10,
      name: "Ethan White",
      age: 16,
      image: "https://via.placeholder.com/150?text=Ethan+White",
      grade: "10th Grade",
      description:
        "Ethan is an aspiring writer and contributes to the school newspaper.",
    },
    {
      id: 11,
      name: "Ava Johnson",
      age: 15,
      image: "https://via.placeholder.com/150?text=Ava+Johnson",
      grade: "9th Grade",
      description:
        "Ava has a passion for science and participates in the school's science fair.",
    },
    {
      id: 12,
      name: "Mason Lee",
      age: 17,
      image: "https://via.placeholder.com/150?text=Mason+Lee",
      grade: "11th Grade",
      description:
        "Mason is a dedicated musician and plays in the school band.",
    },
    {
      id: 13,
      name: "Charlotte Davis",
      age: 16,
      image: "https://via.placeholder.com/150?text=Charlotte+Davis",
      grade: "10th Grade",
      description:
        "Charlotte is an avid reader and leads the school's book club.",
    },
    {
      id: 14,
      name: "Ethan Robinson",
      age: 15,
      image: "https://via.placeholder.com/150?text=Ethan+Robinson",
      grade: "9th Grade",
      description:
        "Ethan enjoys painting and has exhibited his work at local art shows.",
    },
    {
      id: 15,
      name: "Amelia Brown",
      age: 18,
      image: "https://via.placeholder.com/150?text=Amelia+Brown",
      grade: "12th Grade",
      description:
        "Amelia is a top student and is involved in various leadership roles in school.",
    },
  ];

  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 text-center">
        Meet Our Students
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-slate-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-slate-800">
              {student.name}
            </h2>
            <p className="text-slate-600 mb-2">Age: {student.age}</p>
            <p className="text-slate-600 mb-2">Grade: {student.grade}</p>
            <p className="text-slate-600">{student.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/about/teacher"
          className="bg-cyan-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-cyan-700 transition-colors"
        >
          Go to Teacher's Page
        </Link>
      </div>
    </div>
  );
};

export default Students;
