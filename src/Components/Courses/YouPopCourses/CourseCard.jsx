import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, LayoutGrid, Star, Zap } from "lucide-react";

const CourseCard = ({ course, onOpen, onClose }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onMouseEnter={() => onOpen(course)}
      onMouseLeave={onClose}
      className="bg-white rounded-[2rem] p-5 shadow-sm border border-slate-100 flex flex-col group relative overflow-hidden cursor-pointer"
    >
      {course.featured && (
        <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">
          <Zap size={14} /> Featured
        </div>
      )}

      <div className="relative overflow-hidden rounded-[1.5rem] mb-5 h-56">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={course.image}
          className="w-full h-full object-cover"
          alt={course.title}
        />
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#4682B4] transition-colors line-clamp-2 h-12">
        {course.title}
      </h3>

      <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
        <div className="flex items-center gap-1">
          <Star size={14} fill="currentColor" />
          <span className="font-bold">{course.rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <LayoutGrid size={14} />
          <span>{course.category}</span>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between pt-5 border-t">
        <span className="text-[#4682B4] font-black text-2xl">
          ${course.price}
        </span>
        <button className="bg-slate-900 text-white px-4 py-3 rounded-xl group-hover:bg-[#4682B4] transition">
          <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
