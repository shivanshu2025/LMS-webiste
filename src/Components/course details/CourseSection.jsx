import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Video, BookOpen, ClipboardList, ExternalLink, Star, CheckCircle2 } from 'lucide-react';

const CourseSection = () => {
  const [openModules, setOpenModules] = useState({ 1: true });

  const toggleModule = (id) => {
    setOpenModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const modules = [
    { id: 1, title: "Why We Program", duration: "2 hours", content: "An introduction to the motivation behind programming and how computers work." },
    { id: 2, title: "Installing and Using Python", duration: "3 hours", content: "Setting up your environment, using the text editor, and running your first script." },
    { id: 3, title: "Variables and Expressions", duration: "2 hours", content: "Understanding how Python stores data and performs basic calculations." },
    { id: 4, title: "Conditional Code", duration: "4 hours", content: "Using 'if', 'else', and 'elif' to make your programs make decisions." },
    { id: 5, title: "Functions", duration: "3 hours", content: "Learning how to define your own reusable blocks of code." },
    { id: 6, title: "Loops and Iteration", duration: "4 hours", content: "Mastering 'for' and 'while' loops to process repeated tasks." },
    { id: 7, title: "Final Capstone", duration: "5 hours", content: "Combining all concepts to build a real-world data processing tool." }
  ];

  // Animation variants for the staggered list
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-6xl mx-auto font-sans text-gray-900 bg-white">
      
      {/* Left Section - Course Content */}
      <div className="flex-[2]">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">Course Syllabus</h2>
          <p className="text-md text-gray-600 max-w-2xl">
            This specialization introduces fundamental programming concepts including data structures, 
            networked application program interfaces, and databases using Python.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {modules.map((mod) => (
            <motion.div 
              key={mod.id}
              variants={itemVariants}
              whileHover={{ scale: 1.005 }}
              className={`border rounded-2xl p-5 transition-all duration-300 ${
                openModules[mod.id] ? 'border-blue-500 shadow-lg ring-1 ring-blue-500/10' : 'border-gray-200 shadow-sm'
              }`}
            >
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleModule(mod.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${openModules[mod.id] ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{mod.title}</h3>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Module {mod.id} • {mod.duration}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openModules[mod.id] ? 180 : 0 }}
                  className={`p-1 rounded-full ${openModules[mod.id] ? 'text-blue-600' : 'text-gray-400'}`}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openModules[mod.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed mb-6 pl-2 border-l-2 border-blue-500">
                        {mod.content}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50 p-3 rounded-xl">
                          <Video size={16} className="text-blue-500"/> 2 Videos
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50 p-3 rounded-xl">
                          <BookOpen size={16} className="text-green-500"/> 3 Readings
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50 p-3 rounded-xl">
                          <ClipboardList size={16} className="text-purple-500"/> 1 Quiz
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50 p-3 rounded-xl">
                          <ExternalLink size={16} className="text-orange-500"/> 1 Lab
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Sidebar - Instructor Info */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="flex-1 border border-gray-200 rounded-3xl p-8 self-start sticky top-6 bg-white shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-bold text-lg">Instructor</h4>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-yellow-700 font-bold text-xs">4.8</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-4">
            <img 
              src="https://via.placeholder.com/100" 
              alt="Charles Russell Severance" 
              className="rounded-full w-24 h-24 border-4 border-white shadow-xl"
            />
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
          </div>
          <p className="font-black text-xl text-gray-900">Charles Russell Severance</p>
          <p className="text-sm text-blue-600 font-bold">University of Michigan</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 text-center bg-gray-50 p-4 rounded-2xl">
          <div>
            <p className="text-xl font-black text-gray-800">60</p>
            <p className="text-[10px] uppercase font-bold text-gray-400">Courses</p>
          </div>
          <div>
            <p className="text-xl font-black text-gray-800">4.8M</p>
            <p className="text-[10px] uppercase font-bold text-gray-400">Learners</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-4">Offered by</h4>
          <div className="flex items-center gap-4 p-2 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group">
            <img 
              src="https://via.placeholder.com/40?text=M" 
              className="w-12 h-12 rounded-xl shadow-inner"
              alt="Logo"
            />
            <div>
              <span className="font-bold text-sm block group-hover:text-blue-600 transition-colors">University of Michigan</span>
              <span className="text-xs text-gray-500">Public Research University</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseSection;