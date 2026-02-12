import React from "react";
import { motion } from "framer-motion";
import { X, Star, CheckCircle } from "lucide-react";

const CoursePopup = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2.5rem] overflow-hidden max-w-xl w-full shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full"
        >
          <X size={20} />
        </button>

        <img
          src={course.image}
          className="w-full h-64 object-cover"
          alt={course.title}
        />

        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#4682B4]/10 text-[#4682B4] px-3 py-1 rounded-full text-xs font-bold uppercase">
              {course.category}
            </span>

            <div className="flex items-center gap-1 text-orange-400">
              <Star size={14} fill="currentColor" />
              <span className="font-bold text-sm">{course.rating}</span>
            </div>
          </div>

          <h2 className="text-3xl font-black text-slate-900 mb-4">
            {course.title}
          </h2>

          <p className="text-slate-600 mb-8">{course.description}</p>

          <div className="flex items-center justify-between pt-6 border-t">
            <span className="text-3xl font-black text-[#4682B4]">
              ${course.price}
            </span>

            <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#4682B4] transition">
              <CheckCircle size={20} /> Checkout Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CoursePopup;