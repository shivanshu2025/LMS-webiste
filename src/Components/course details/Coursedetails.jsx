import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, PlayCircle, ChevronDown, Star, Zap, Code2, 
  Database, Layout, ArrowRight, Layers, Cpu, 
  Cloud, Terminal, BookOpen, Lock, Info, Video
} from 'lucide-react';

const syllabus = [
  { 
    title: "01. Python Core Fundamentals", 
    lessons: [
      "Introduction to Python & Community",
      "Jupyter Notebook Environment",
      "Writing Your First Program",
      "Integers, Floats, and Booleans",
      "Variables & Basic Expressions"
    ] 
  },
  { 
    title: "02. String Mastery & Logic", 
    lessons: [
      "String Indexing & Slicing",
      "Escape Sequences",
      "Advanced String Formatting",
      "Coding Lab: Text Parser"
    ] 
  },
  { 
    title: "03. Frontend: React 19 & Tailwind", 
    lessons: [
      "The Virtual DOM Explained",
      "Modern Hooks (useState, useEffect)",
      "Dynamic Tailwind Layouts",
      "Responsive Design Principles"
    ] 
  },
  { 
    title: "04. Backend: Node.js & Architecture", 
    lessons: [
      "Express Server Setup",
      "RESTful API Routing",
      "Middleware & Error Handling",
      "JWT Authentication Flow"
    ] 
  },
  { 
    title: "05. Database & Cloud Deployment", 
    lessons: [
      "MongoDB Schema Design",
      "PostgreSQL vs NoSQL",
      "Dockerizing Your App",
      "Deploying to AWS/Vercel"
    ] 
  }
];

const CourseDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 pb-12">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px] rounded-full -mr-20" />
        <motion.div 
          initial="hidden" animate="visible" variants={containerVariants}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="max-w-3xl space-y-4">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Mastering Full-Stack <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Web Development
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-slate-400 leading-relaxed">
              Build production-ready applications with our updated 2026 curriculum.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* --- THEORY SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-xs font-bold uppercase tracking-wider">
                <Info size={14} /> Module Theory
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Python Programming Fundamentals</h2>
              <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                <p>
                  In this module, you will explore the <strong>Python community</strong> and its core benefits. Learn to navigate the <strong>Jupyter Notebook</strong> environment, from managing cells to executing your first Python program.
                </p>
                <p>
                  Master data types like <strong>integers, floats, and strings</strong>, and apply advanced manipulation techniques including <strong>string indexing and escape sequences</strong> through interactive labs.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-xl p-6 text-white h-full relative overflow-hidden group">
                <Terminal className="absolute -right-2 -bottom-2 opacity-10 group-hover:scale-105 transition-transform" size={100} />
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-blue-400 uppercase tracking-widest">
                  <Zap size={16} /> Outcomes
                </h3>
                <ul className="space-y-3 relative z-10 text-sm">
                  {["Jupyter Proficiency", "Data Type Mastery", "String Indexing", "Community Values"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <Check size={16} className="text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- CURRICULUM & SIDEBAR --- */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        
        {/* MAIN CONTENT: ACCORDIONS */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-2">
            <BookOpen size={20} className="text-blue-600" /> Course Content
          </h2>
          
          <div className="space-y-3">
            {syllabus.map((section, idx) => (
              <div key={idx} className={`bg-white rounded-xl border transition-all ${activeAccordion === idx ? 'border-blue-200 ring-1 ring-blue-50 shadow-sm' : 'border-slate-200'}`}>
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeAccordion === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <Layers size={18} />
                    </div>
                    <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Module {idx + 1}</span>
                        <span className="font-bold text-base text-slate-800">{section.title}</span>
                    </div>
                  </div>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </button>

                <AnimatePresence>
                  {activeAccordion === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 space-y-1">
                        <div className="h-px bg-slate-100 mb-4 mx-2" />
                        {section.lessons.map((lesson, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 group cursor-pointer transition-all">
                            <div className="flex items-center gap-3">
                              <PlayCircle size={16} className="text-slate-300 group-hover:text-blue-600" />
                              <span className="text-slate-700 text-sm font-medium">{lesson}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold text-slate-400 uppercase">12m</span>
                                <Lock size={12} className="text-slate-200" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <div className="relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Preview" className="w-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Video size={24} className="text-white fill-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-slate-900">$19.99</span>
                  <span className="text-slate-400 line-through text-sm">$94.99</span>
                </div>
                <div className="space-y-2">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-100">
                    Add to Cart
                  </button>
                  <button className="w-full border border-slate-900 text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white transition-all">
                    Buy Now
                  </button>
                </div>
                <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em]">30-Day Money-Back Guarantee</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;