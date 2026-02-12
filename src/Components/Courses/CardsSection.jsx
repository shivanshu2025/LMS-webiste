import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Calendar, Users, GraduationCap, ChevronRight } from "lucide-react";

const courses = [
  {
    category: "Data Science",
    title: "Mastering Python for Data Science and Real-World Analytics",
    instructor: "Jeku Smit",
    date: "4/09/25",
    learners: 1,
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    category: "Digital Marketing",
    title: "Complete Digital Marketing Strategy: From Fundamentals to Funnels",
    instructor: "Jeku Smit",
    date: "4/09/25",
    learners: 1,
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    category: "Design Bootcamp",
    title: "UI/UX Bootcamp: Create Stunning Interfaces and User Experiences",
    instructor: "Jeku Smit",
    date: "4/09/25",
    learners: 1,
    img: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=600&h=400&auto=format&fit=crop",
  },
];

const CourseCard = ({ course, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [40, -40] : [60, -60]
  );

  const smoothY = useSpring(y, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={course.img}
          alt={course.title}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-3 left-3 flex gap-2">
          <Badge icon={<Calendar size={12} />} text={course.date} />
          <Badge icon={<Users size={12} />} text={course.learners} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1.5 mb-2">
          <GraduationCap size={14} className="text-[#4682B4]" />
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#4682B4]">
            {course.category}
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-4 min-h-[56px] line-clamp-2 group-hover:text-[#4682B4] transition-colors">
          {course.title}
        </h3>

        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          <div>
            <p className="text-[10px] uppercase text-slate-400 font-bold">
              Instructor
            </p>
            <p className="text-sm font-semibold text-slate-800">
              {course.instructor}
            </p>
          </div>

          <motion.button
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-2 rounded-full bg-slate-100 group-hover:bg-[#4682B4] group-hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Badge = ({ icon, text }) => (
  <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm text-slate-700 text-[10px] px-2.5 py-1.5 rounded-lg font-bold shadow-sm">
    <span className="text-[#4682B4]">{icon}</span>
    {text}
  </div>
);

const CardsSection = () => {
  return (
    <section className="bg-slate-50 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-7"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Affordable Learning.
            <br className="hidden md:block" />
            <span className="text-[#4682B4]"> Real Skills.</span>
          </h2>

          <p className="text-slate-500 max-w-xl font-medium">
            Expert-led courses designed for your career growth using the power of
            Steel Blue.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
