import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, PlayCircle, ChevronDown, Star, Zap, Code2, 
  Database, Layout, ArrowRight, Layers, Cpu, 
  Cloud, Terminal, BookOpen, Lock, Info, Video,
  Clock, Award, BarChart3, Target, MousePointer2, X
} from 'lucide-react';

// --- UPDATED DATA STRUCTURE WITH DETAILED CONTENT ---
const syllabus = [
  { 
    title: "01. Python Core Fundamentals", 
    description: "Master the building blocks of programming, from basic syntax to object-oriented principles, ensuring a rock-solid logical foundation before moving to web technologies.",
    lessons: [
      { name: "Introduction to Python & Setup", id: "rfscVS0vtbw" },
      { name: "Variables, Data Types, & Memory", id: "HW29067qVWk" },
      { name: "Control Flow & Basic Algorithms", id: "mXW9R_W-N9U" },
      { name: "Functions & Modular Code", id: "Z1Yd7upQsXY" },
      { name: "Data Structures (Lists/Dicts)", id: "9m6f-7ZAn6U" }
    ] 
  },
  { 
    title: "02. String Mastery & Logic", 
    description: "Deep dive into data manipulation and algorithmic thinking, crucial for processing API responses and handling user input securely.",
    lessons: [
      { name: "Advanced Indexing & Slicing", id: "XpWkXN2Y8pE" },
      { name: "Regex & Escape Sequences", id: "c-I5S_zTwAc" },
      { name: "String Formatting & Templating", id: "vTX3D9Sxlm4" },
      { name: "Boolean Logic & Operators", id: "K9T9_IqVp6E" }
    ] 
  },
  { 
    title: "03. Frontend: React 19 & Tailwind", 
    description: "Build reactive, performant UIs using the latest React features. Focus on component architecture, state management, and utility-first styling.",
    lessons: [
      { name: "Virtual DOM & JSX Rendering", id: "7yA7YI9D-Ts" },
      { name: "Advanced Hooks (useState/useEffect)", id: "TNhaISOUy6Q" },
      { name: "Tailwind CSS Grid & Layouts", id: "pSd4_pG_uS0" },
      { name: "Component Composition Patterns", id: "SqcY0GlETPk" }
    ] 
  },
  { 
    title: "04. Backend: Node.js & Architecture", 
    description: "Create scalable server-side applications. Learn to architect REST APIs, manage authentication, and handle complex business logic.",
    lessons: [
      { name: "Express Server Configuration", id: "L72fhGm1tfE" },
      { name: "REST API Design Principles", id: "pKd0Rpw7O48" },
      { name: "Authentication Middleware", id: "H9M02of22z4" },
      { name: "JWT Tokens & Security", id: "mbsmsi7l3r4" }
    ] 
  },
  { 
    title: "05. Database & Cloud Deployment", 
    description: "Bridge the gap between code and production. Learn database schema design, data persistence, and modern DevOps deployment pipelines.",
    lessons: [
      { name: "MongoDB Document Schemas", id: "WDrU305J1yw" },
      { name: "SQL Queries & ORMs", id: "HXV3zeQKqGY" },
      { name: "Dockerizing Applications", id: "3c-iBn73dDE" },
      { name: "CI/CD & Cloud Deployment (AWS/Vercel)", id: "2279E_I241U" }
    ] 
  }
];

const CourseDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const handleEnroll = () => {
    alert("Redirecting to Checkout... 🚀");
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-200 pb-20">
      
      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                title="Course Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <div className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/20 blur-[120px] rounded-full -mr-32" 
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl space-y-6">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Star size={14} className="fill-blue-400" /> New for 2026
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
              Mastering Full-Stack <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                Web Development
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              The only curriculum that bridges the gap between basic syntax and professional architectural patterns.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Duration", val: "48 Hours", icon: <Clock size={18}/> },
            { label: "Level", val: "Beginner+", icon: <BarChart3 size={18}/> },
            { label: "Projects", val: "12 Real Apps", icon: <Target size={18}/> },
            { label: "Access", val: "Lifetime", icon: <Award size={18}/> },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group">
              <div className="text-blue-600 mb-3 bg-blue-50 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{stat.label}</span>
              <span className="text-base font-bold text-slate-900">{stat.val}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-slate-900">Module Overview</h2>
                <p className="text-slate-600 text-lg leading-relaxed italic">"Stop following tutorials. Start building systems."</p>
                <p className="text-slate-600 leading-relaxed">
                    In this intensive path, we strip away the fluff. You'll move through 5 core phases that mirror the 
                    <strong> Software Development Life Cycle (SDLC)</strong>. We focus on architectural patterns like 
                    MVC, state management workflows in React, and secure authentication flows, preparing you for real-world engineering challenges.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Git Workflow Mastery", "Atomic Design Systems", "API Scaling", "Edge Deployment"].map((benefit, i) => (
                  <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-3 group">
                    <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Check size={14} />
                    </div>
                    <span className="font-bold text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <Terminal className="absolute -right-4 -bottom-4 opacity-10" size={120} />
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2"><Code2 size={18} /> Tech Stack</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {["React 19", "Next.js", "Node", "TypeScript", "Redis", "Docker", "PostgreSQL"].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- CURRICULUM --- */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3"><BookOpen className="text-blue-600" /> Curriculum</h2>
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase">5 Modules • 20 Lessons</span>
          </div>
          
          <div className="space-y-4">
            {syllabus.map((section, idx) => (
              <motion.div key={idx} className={`bg-white rounded-2xl border transition-all duration-300 ${activeAccordion === idx ? 'border-blue-400 shadow-xl shadow-blue-50 ring-1 ring-blue-100' : 'border-slate-200'}`}>
                <button onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left">
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${activeAccordion === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <Layers size={20} />
                    </div>
                    <div>
                        <span className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${activeAccordion === idx ? 'text-blue-500' : 'text-slate-400'}`}>Module 0{idx + 1}</span>
                        <span className="font-bold text-lg text-slate-800 tracking-tight">{section.title}</span>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: activeAccordion === idx ? 180 : 0 }}>
                    <ChevronDown size={20} className={activeAccordion === idx ? 'text-blue-600' : 'text-slate-400'} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeAccordion === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                      <div className="px-6 pb-6 space-y-2">
                        <div className="h-px bg-slate-100 mb-4" />
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                            {section.description}
                        </p>
                        {section.lessons.map((lesson, i) => (
                          <motion.div 
                            key={i} 
                            whileHover={{ x: 5 }}
                            className="flex items-center justify-between p-4 rounded-xl hover:bg-blue-50/50 group cursor-pointer border border-transparent hover:border-blue-100"
                            onClick={() => setActiveVideo(lesson.id)}
                          >
                            <div className="flex items-center gap-4">
                              <PlayCircle size={20} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                              <span className="text-slate-700 font-semibold text-sm">{lesson.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold text-slate-400">12:00</span>
                                <Lock size={14} className="text-slate-200 group-hover:text-blue-300 transition-colors" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="sticky top-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
              <div className="relative group cursor-pointer overflow-hidden" onClick={() => setActiveVideo("dQw4w9WgXcQ")}>
                <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Preview" className="w-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-all">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 shadow-2xl">
                    <Video size={32} className="text-white fill-white" />
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-slate-900">$19.99</span>
                    <span className="text-slate-400 line-through font-bold">$94.99</span>
                  </div>
                  <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-black uppercase">80% OFF</div>
                </div>

                <div className="space-y-3">
                  <motion.button onClick={handleEnroll} whileHover={{ scale: 1.02 }} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-base shadow-xl flex items-center justify-center gap-2">
                    Enroll Now <ArrowRight size={18} />
                  </motion.button>
                  <button onClick={() => setActiveVideo("rfscVS0vtbw")} className="w-full border-2 border-slate-900 text-slate-900 py-4 rounded-2xl font-black text-base hover:bg-slate-900 hover:text-white transition-all">
                    Free Preview
                  </button>
                </div>
                
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enrollment</p>
                    <p className="text-sm font-bold text-slate-700">12,402</p>
                  </div>
                  <div className="text-center border-l border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rating</p>
                    <p className="text-sm font-bold text-slate-700 flex items-center justify-center gap-1">4.9 <Star size={12} className="fill-yellow-400 text-yellow-400" /></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;