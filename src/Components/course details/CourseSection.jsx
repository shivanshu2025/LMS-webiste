import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  ChevronDown, Video, BookOpen, ClipboardList, 
  ExternalLink, Star, CheckCircle2, PlayCircle, 
  Clock, Award, Sparkles, GraduationCap, Users,
  Search, Trash2
} from 'lucide-react';

const CourseSection = () => {
  // --- State & Persistence ---
  const [searchTerm, setSearchTerm] = useState("");
  const [openModuleId, setOpenModuleId] = useState(() => {
    return Number(localStorage.getItem('lastOpened')) || 1;
  });
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('completedModules');
    return saved ? JSON.parse(saved) : [1];
  });

  const steelBlue = "#4682B4"; // Your requested color code

  useEffect(() => {
    localStorage.setItem('lastOpened', openModuleId);
    localStorage.setItem('completedModules', JSON.stringify(completed));
  }, [openModuleId, completed]);

  // --- Mock Data ---
  const modules = [
    { id: 1, title: "Why We Program", duration: 120, content: "An introduction to the motivation behind programming and how computers work." },
    { id: 2, title: "Installing and Using Python", duration: 180, content: "Setting up your environment, using text editors, and running your first script." },
    { id: 3, title: "Variables and Expressions", duration: 120, content: "Understanding how Python stores data in memory and performs calculations." },
    { id: 4, title: "Conditional Code", duration: 240, content: "Using 'if', 'else', and 'elif' to build programs that can make logical decisions." },
    { id: 5, title: "Functions", duration: 180, content: "Learning how to define your own reusable blocks of code (DRY principle)." },
    { id: 6, title: "Loops and Iteration", duration: 240, content: "Mastering 'for' and 'while' loops to process large datasets." },
    { id: 7, title: "Final Capstone", duration: 300, content: "Combining all concepts to build a real-world data processing tool." }
  ];

  // --- Logic ---
  const filteredModules = useMemo(() => {
    return modules.filter(m => 
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, modules]);

  const toggleModule = (id) => setOpenModuleId(prevId => prevId === id ? null : id);
  
  const handleComplete = (id, e) => {
    e.stopPropagation();
    setCompleted(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const progress = Math.round((completed.length / modules.length) * 100);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto font-sans text-slate-900 bg-slate-50/30 min-h-screen">
      
      {/* Left Section - Content */}
      <div className="flex-[2]">
        <header className="mb-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 font-bold text-xs mb-3 uppercase tracking-[0.2em]" style={{ color: steelBlue }}>
            <Sparkles size={14} /> Professional Certification
          </motion.div>
          <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-800">There are 7 modules in this course</h2>
          
          {/* Search & Utility Bar */}
          <div className="flex flex-wrap items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search modules..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm outline-none transition-all focus:ring-2"
                style={{ "--tw-ring-color": steelBlue }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={() => {setCompleted([1]); setOpenModuleId(1); localStorage.clear();}}
              className="p-3 text-slate-300 hover:text-red-400 transition-colors"
              title="Reset Progress"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </header>

        <LayoutGroup>
          <motion.div className="space-y-4">
            <AnimatePresence mode='popLayout'>
              {filteredModules.map((mod) => {
                const isOpen = openModuleId === mod.id;
                const isFinished = completed.includes(mod.id);

                return (
                  <motion.div 
                    layout
                    key={mod.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className={`border rounded-2xl overflow-hidden transition-all duration-500 bg-white ${
                      isOpen ? 'shadow-2xl scale-[1.01]' : 'border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                    style={isOpen ? { borderLeft: `6px solid ${steelBlue}`, borderColor: steelBlue } : {}}
                  >
                    <div className="p-5 flex justify-between items-center cursor-pointer" onClick={() => toggleModule(mod.id)}>
                      <div className="flex items-center gap-4">
                        <motion.button 
                          whileTap={{ scale: 0.8 }}
                          onClick={(e) => handleComplete(mod.id, e)}
                          className={`p-2.5 rounded-xl transition-all ${isFinished ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}
                        >
                          <CheckCircle2 size={22} strokeWidth={2.5} />
                        </motion.button>
                        <div>
                          <h3 className={`font-bold text-lg transition-colors`} style={{ color: isOpen ? steelBlue : '#1e293b' }}>
                            {mod.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1 text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                             <span className="bg-slate-100 px-2 py-0.5 rounded">Module {mod.id}</span>
                             <span className="flex items-center gap-1"><Clock size={12} /> {mod.duration / 60}h</span>
                          </div>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} style={{ color: isOpen ? steelBlue : '#cbd5e1' }}>
                        <ChevronDown size={22} />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <div className="px-6 pb-6 pt-2">
                            <div className="h-px bg-slate-100 mb-5" />
                            <p className="text-slate-600 leading-relaxed mb-6 pl-4 border-l-2 border-slate-200">{mod.content}</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              <ModuleStat icon={<Video size={14}/>} label="Videos" steelBlue={steelBlue} />
                              <ModuleStat icon={<BookOpen size={14}/>} label="Reading" steelBlue={steelBlue} />
                              <ModuleStat icon={<ClipboardList size={14}/>} label="Quiz" steelBlue={steelBlue} />
                              <ModuleStat icon={<ExternalLink size={14}/>} label="Lab" steelBlue={steelBlue} />
                            </div>
                            <button 
                              className="mt-6 w-full py-4 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
                              style={{ backgroundColor: steelBlue, shadowColor: `${steelBlue}33` }}
                            >
                              <PlayCircle size={18} /> Continue Learning
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      {/* Right Sidebar */}
      <div className="flex-1 space-y-6">
        <aside className="sticky top-6 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            <div className="flex justify-between items-end mb-4">
              <h4 className="font-black text-slate-800 text-sm uppercase tracking-widest">Your Progress</h4>
              <span className="text-2xl font-black" style={{ color: steelBlue }}>{progress}%</span>
            </div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden p-1">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: `${progress}%` }} 
                className="h-full rounded-full"
                style={{ backgroundColor: steelBlue, boxShadow: `0 0 15px ${steelBlue}66` }}
              />
            </div>
            <p className="mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
              {completed.length} of {modules.length} Modules completed
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm text-center">
            <div className="relative inline-block mb-4">
              <img src="https://via.placeholder.com/100" className="w-20 h-20 rounded-full border-4 border-white shadow-xl" alt="Dr. Chuck" />
              <div className="absolute -bottom-1 -right-1 p-1 rounded-full border-2 border-white text-white" style={{ backgroundColor: steelBlue }}>
                <CheckCircle2 size={12} fill="currentColor"/>
              </div>
            </div>
            <h4 className="font-black text-xl text-slate-800">Dr. Chuck</h4>
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: steelBlue }}>University of Michigan</p>
            <div className="flex gap-4 justify-center mb-8 font-bold">
              <div className="text-center">
                <p className="text-slate-800 text-lg">4.9M</p>
                <p className="text-[9px] text-slate-400 uppercase">Learners</p>
              </div>
              <div className="w-px h-8 bg-slate-100" />
              <div className="text-center">
                <p className="text-slate-800 text-lg">4.8</p>
                <p className="text-[9px] text-slate-400 uppercase">Rating</p>
              </div>
            </div>
            <button className="w-full bg-slate-50 border border-slate-200 text-slate-800 font-black py-4 rounded-2xl hover:bg-slate-100 transition-all text-xs uppercase tracking-widest">
              View Profile
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

const ModuleStat = ({ icon, label, steelBlue }) => (
  <div className="flex flex-col items-center gap-1.5 p-3 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white transition-colors">
    <span style={{ color: steelBlue }}>{icon}</span>
    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{label}</span>
  </div>
);

export default CourseSection;