import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Clock3, BarChart3, ThumbsUp, 
  ChevronDown, BookOpen, Users, CheckCircle2, 
  ArrowRight, Globe, ShieldCheck, Zap
} from 'lucide-react';
import Detail from './CourseSection';
import CourseSection from './CourseSection';

const CourseDetails = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <div className="relative bg-[#f8fafc] overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 transition-transform hover:scale-105 cursor-pointer">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/University_of_Michigan_logo.svg/2560px-University_of_Michigan_logo.svg.png" 
                    alt="University of Michigan" 
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>
                <div className="h-6 w-px bg-slate-300 hidden md:block" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest hidden md:block">Top Rated Program</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight tracking-tight">
                Programming for <span className="text-blue-600">Everybody</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Unlock the world of data and automation. This masterclass takes you from <span className="font-bold text-slate-900">zero code</span> to building complex Python applications.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center">
                {/* BUTTON HOVER: Glow effect + Slight lift */}
                <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-bold text-base transition-all duration-300 flex items-center gap-3 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 active:translate-y-0">
                  Enroll for Free
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
                <div className="flex flex-col px-4 border-l border-slate-200 group cursor-default">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-blue-400 transition-colors">Next Cohort</span>
                  <span className="text-slate-900 font-bold text-sm">Starts Feb 19, 2026</span>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-5 pt-4 border-t border-slate-200">
                <div className="flex -space-x-2.5">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm transition-transform hover:scale-110 hover:z-30 cursor-pointer" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="student" />
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm transition-colors hover:bg-blue-100 cursor-pointer">+3M</div>
                </div>
                <p className="text-sm font-medium text-slate-500">
                  Join <span className="text-slate-900 font-bold hover:text-blue-600 transition-colors cursor-default">3,513,425 learners</span> already mastering Python
                </p>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              className="lg:col-span-5 hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-[340px] aspect-square group">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[1px] border-blue-200 rounded-full border-dashed group-hover:border-blue-400 transition-colors" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-8 border-[1px] border-blue-100 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-inner flex items-center justify-center border border-slate-100 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-xl">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity" alt="Python" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- FLOATING STATS GRID --- */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-1.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1.5">
          <StatCard icon={<BookOpen className="text-blue-600" />} title="7 Modules" desc="Structured Learning" color="bg-blue-50" />
          <StatCard icon={<Globe className="text-emerald-600" />} title="100% Online" desc="Global Access" color="bg-emerald-50" />
          <StatCard icon={<BarChart3 className="text-purple-600" />} title="Beginner" desc="Start from scratch" color="bg-purple-50" />
          <StatCard icon={<Clock3 className="text-orange-600" />} title="20 Hours" desc="Flexible schedule" color="bg-orange-50" />
        </div>
      </div>

      {/* --- SECTION: SUBJECT MATTER EXPERTISE --- */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-950">
                  Build your subject-matter expertise
                </h2>
                <div className="space-y-2">
                  <p className="text-slate-600">
                    This course is part of the <span className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-all cursor-pointer decoration-2 underline-offset-4">Python for Everybody Specialization</span>
                  </p>
                  <p className="text-slate-500 text-sm">
                    When you enroll in this course, you'll also be enrolled in this Specialization.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Learn new concepts from industry experts",
                  "Gain a foundational understanding of a subject or tool",
                  "Develop job-relevant skills with hands-on projects",
                  "Earn a shareable career certificate"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 group cursor-default"
                  >
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                      <CheckCircle2 size={14} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-950 transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image Content with Floating Card Hover */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                alt="Learning Environment" 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Floating Card Overlay with Hover */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg flex items-center gap-4 transition-all duration-500 group-hover:bottom-8 group-hover:bg-white/95">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Hands-on practice</p>
                  <p className="text-slate-900 font-bold text-lg">15+ Coding Exercises Included</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

     <CourseSection/>
    </div>
  );
};

// Extracted StatCard with enhanced hover logic
const StatCard = ({ icon, title, desc, color }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group cursor-pointer border border-transparent hover:bg-white hover:shadow-md hover:border-slate-100">
    <div className={`w-11 h-11 ${color} rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
      {React.cloneElement(icon, { size: 22 })}
    </div>
    <div>
      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight group-hover:text-slate-500 transition-colors">{desc}</p>
    </div>
  </div>
);

export default CourseDetails;