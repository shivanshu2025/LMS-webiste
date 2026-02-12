import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CoursePopup from "./YouPopCourses/CoursePopup";
import CourseCard from "./YouPopCourses/CourseCard";

const courses = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    category: "Cloud",
    rating: 4.9,
    students: "1.2k",
    image:
      "https://c8.alamy.com/comp/2CWDGH1/seo-optimization-scheme-with-web-icons-white-office-table-background-2CWDGH1.jpg",
    price: 80,
    featured: true,
    description:
      "Master the AWS Cloud infrastructure. This course covers EC2, S3, Route53, and more to prepare you for the Architect Associate exam.",
  },
    {
    id: 1,
    title: "AWS Certified Solutions Architect",
    category: "Cloud",
    rating: 4.9,
    students: "1.2k",
    image:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVsbCUyMHN0YWNrJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    price: 80,
    featured: true,
    description:
      "Master the AWS Cloud infrastructure. This course covers EC2, S3, Route53, and more to prepare you for the Architect Associate exam.",
  },
    {
    id: 1,
    title: "AWS Certified Solutions Architect",
    category: "Cloud",
    rating: 4.9,
    students: "1.2k",
    image:
      "https://allnextver.com.bd/wp-content/uploads/2024/06/UI-UX-design-amico.png",
    price: 80,
    featured: true,
    description:
      "Master the AWS Cloud infrastructure. This course covers EC2, S3, Route53, and more to prepare you for the Architect Associate exam.",
  },
    {
    id: 1,
    title: "AWS Certified Solutions Architect",
    category: "Cloud",
    rating: 4.9,
    students: "1.2k",
    image:
      "https://media.licdn.com/dms/image/v2/C4E12AQEy_MVQYz2qJw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520152758537?e=2147483647&v=beta&t=QGOUmh5GDYw-11BlyotACegNGbl3d1LTH_EvB-FG4zY",
    price: 80,
    featured: true,
    description:
      "Master the AWS Cloud infrastructure. This course covers EC2, S3, Route53, and more to prepare you for the Architect Associate exam.",
  },
    {
    id: 1,
    title: "AWS Certified Solutions Architect",
    category: "Cloud",
    rating: 4.9,
    students: "1.2k",
    image:
      "https://www.shutterstock.com/image-vector/vector-illustration-showing-artificial-intelligence-600nw-2634880983.jpg",
    price: 80,
    featured: true,
    description:
      "Master the AWS Cloud infrastructure. This course covers EC2, S3, Route53, and more to prepare you for the Architect Associate exam.",
  },
    {
    id: 1,
    title: "AWS Certified Solutions Architect",
    category: "Cloud",
    rating: 4.9,
    students: "1.2k",
    image:
      "https://i0.wp.com/gradientflow.com/wp-content/uploads/2024/11/%E2%80%8EAI-Engineer-art.png?fit=1568%2C943&ssl=1",
    price: 80,
    featured: true,
    description:
      "Master the AWS Cloud infrastructure. This course covers EC2, S3, Route53, and more to prepare you for the Architect Associate exam.",
  },
    {
    id: 1,
    title: "AWS Certified Solutions Architect",
    category: "Cloud",
    rating: 4.9,
    students: "1.2k",
    image:
      "https://img.freepik.com/free-vector/devops-engineer-flat-design-concept-with-big-infinity-symbol-centre-little-icons-working-employees-vector-illustration_1284-74955.jpg",
    price: 80,
    featured: true,
    description:
      "Master the AWS Cloud infrastructure. This course covers EC2, S3, Route53, and more to prepare you for the Architect Associate exam.",
  },
    {
    id: 1,
    title: "AWS Certified Solutions Architect",
    category: "Cloud",
    rating: 4.9,
    students: "1.2k",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/642/017/non_2x/smm-big-text-tiny-people-work-social-media-managers-digital-marketing-online-advertising-smm-course-or-school-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
    price: 80,
    featured: true,
    description:
      "Master the AWS Cloud infrastructure. This course covers EC2, S3, Route53, and more to prepare you for the Architect Associate exam.",
  },
  
];

const YourCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="py-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 mb-12">
          Get choice of your course
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onOpen={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <CoursePopup
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default YourCourse;
