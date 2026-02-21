import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, LayoutGrid, Clock, Star, Zap } from 'lucide-react';

const courses = [
  { id: 1, title: "AWS Certified Solutions Architect", category: "Cloud", rating: 4.9, students: "1.2k", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop", author: "Lina Sofia", price: 80, featured: true },
  { id: 2, title: "Full-Stack Web Development 2024", category: "Web", rating: 4.8, students: "3.5k", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop", author: "Lina Sofia", price: 95, featured: false },
  { id: 3, title: "UI/UX Masterclass Professional", category: "Design", rating: 5.0, students: "800", image: "https://cdn.prod.website-files.com/67db22dd1e51de2e91403865/67db22dd1e51de2e9140409c_Whats-the-difference-between-UI-and-UX.png", author: "Lina Sofia", price: 60, featured: true },
  { id: 4, title: "Data Science & Machine Learning", category: "Data", rating: 4.7, students: "2.1k", image: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/06/how-to-become-data-scientist.jpg.optimal.jpg", author: "Lina Sofia", price: 110, featured: false },
];

const categories = ["All", "Cloud", "Web", "Design", "Data"];

const CourseCard = ({ course }) => {
  return (
    <motion.div
      layout // Enables smooth position animation when filtering
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10, transition: { duration: 0.2 }}}
      className="bg-white rounded-[2rem] p-5 shadow-sm border border-slate-100 flex flex-col group relative overflow-hidden"
    >
      {/* Featured Badge */}
      {course.featured && (
        <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          <Zap size={14} /> Featured
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-[1.5rem] mb-5 h-56">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={course.image} 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Title & Info */}
      <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#4682B4] transition-colors line-clamp-2 h-12">
        {course.title}
      </h3>
      
      <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
        <div className="flex items-center gap-1">
          <Star size={14} className="text-orange-400" fill="currentColor" />
          <span className="font-bold text-slate-700">{course.rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <LayoutGrid size={14} className="text-[#4682B4]" />
          <span>{course.category}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100">
        <span className="text-[#4682B4] font-black text-2xl">${course.price}</span>
      </div>
    </motion.div>
  );
};

const RecommendedSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-4xl font-black text-slate-900">Recommended for you</h2>
          
          {/* Filters */}
          <div className="flex bg-white p-1.5 rounded-full border border-slate-100 shadow-inner overflow-x-auto whitespace-nowrap">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat ? "text-white" : "text-slate-600 hover:text-[#4682B4]"}`}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#4682B4] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendedSection;