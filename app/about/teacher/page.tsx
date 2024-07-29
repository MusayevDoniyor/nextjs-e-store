import Link from "next/link";
import React from "react";

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 35,
      image: "https://via.placeholder.com/150?text=Alice+Johnson",
      description:
        "Alice has a passion for teaching mathematics and has over 10 years of experience.",
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 42,
      image: "https://via.placeholder.com/150?text=Bob+Smith",
      description:
        "Bob specializes in literature and is known for his engaging teaching style.",
    },
    {
      id: 3,
      name: "Carol Williams",
      age: 29,
      image: "https://via.placeholder.com/150?text=Carol+Williams",
      description:
        "Carol teaches science and loves to inspire curiosity in her students.",
    },
    {
      id: 4,
      name: "David Brown",
      age: 38,
      image: "https://via.placeholder.com/150?text=David+Brown",
      description:
        "David is an experienced history teacher with a knack for storytelling.",
    },
    {
      id: 5,
      name: "Emily Davis",
      age: 31,
      image: "https://via.placeholder.com/150?text=Emily+Davis",
      description:
        "Emily teaches art and is dedicated to helping students find their creative voice.",
    },
    {
      id: 6,
      name: "Frank Miller",
      age: 45,
      image: "https://via.placeholder.com/150?text=Frank+Miller",
      description:
        "Frank has a background in physical education and promotes a healthy lifestyle.",
    },
    {
      id: 7,
      name: "Grace Wilson",
      age: 28,
      image: "https://via.placeholder.com/150?text=Grace+Wilson",
      description:
        "Grace is passionate about teaching languages and enjoys cultural exchanges.",
    },
    {
      id: 8,
      name: "Henry Moore",
      age: 40,
      image: "https://via.placeholder.com/150?text=Henry+Moore",
      description:
        "Henry specializes in computer science and encourages students to explore technology.",
    },
    {
      id: 9,
      name: "Ivy Taylor",
      age: 33,
      image: "https://via.placeholder.com/150?text=Ivy+Taylor",
      description:
        "Ivy teaches music and helps students develop their musical talents.",
    },
    {
      id: 10,
      name: "Jack Anderson",
      age: 50,
      image: "https://via.placeholder.com/150?text=Jack+Anderson",
      description:
        "Jack is a veteran teacher with expertise in social studies and educational leadership.",
    },
  ];

  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 text-center">
        Meet Our Teachers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-slate-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-slate-800">
              {teacher.name}
            </h2>
            <p className="text-slate-600 mb-2">Age: {teacher.age}</p>
            <p className="text-slate-600">{teacher.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/about/student"
          className="bg-cyan-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-cyan-700 transition-colors"
        >
          Go to Student's Page
        </Link>
      </div>
    </div>
  );
};

export default Teachers;
