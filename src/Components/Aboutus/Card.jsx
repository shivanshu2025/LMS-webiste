import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Linkedin, Instagram, ArrowRight, Sparkles } from 'lucide-react';

const INSTRUCTORS = [
  { name: "Maria Jackson", role: "UX/UI Design Mentor", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400" },
  { name: "James Patel", role: "Senior Web Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400" },
  { name: "Hannah Kim", role: "Personal Productivity Coach", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400" },
  { name: "Liam Chen", role: "Lead Data Science Educator", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400" },
];

const InstructorCard = ({ instructor, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const contentX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = e.clientX - rect.left;
    const centerY = e.clientY - rect.top;
    x.set(centerX / width - 0.5);
    y.set(centerY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { 
          type: "spring", 
          stiffness: 100, 
          delay: index * 0.1 
        } 
      }}
      viewport={{ once: true }}
      style={{ 
        rotateX, 
        rotateY, 
        perspective: 1000,
        transformStyle: "preserve-3d" 
      }}
      className="group relative cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-5 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        
        <motion.img 
          src={instructor.image} 
          alt={instructor.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        
        <motion.div 
          style={{ x: contentX, y: contentY, translateZ: 40 }}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl flex gap-3 shadow-lg z-20"
        >
          <Linkedin size={16} className="text-slate-600 hover:text-[#5284B5] transition-colors" />
          <Instagram size={16} className="text-slate-600 hover:text-pink-500 transition-colors" />
        </motion.div>
      </div>
      
      <motion.div 
        style={{ x: contentX, y: contentY, translateZ: 20 }}
        className="px-1"
      >
        <h4 className="font-bold text-slate-900 text-lg mb-0.5 group-hover:text-[#5284B5] transition-colors">
          {instructor.name}
        </h4>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          {instructor.role}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Card = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const circle1Y = useTransform(smoothProgress, [0, 1], [-80, 80]);
  const circle2Y = useTransform(smoothProgress, [0, 1], [100, -100]);
  const textY = useTransform(smoothProgress, [0, 1], [20, -20]);

  return (
    <div className=" bg-slate-50/50 overflow-hidden" ref={containerRef}>
      
      {/* --- INSTRUCTORS GRID --- */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#5284B5] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} /> Meet Our Instructors
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Learning Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS.map((inst, i) => (
            <InstructorCard key={i} instructor={inst} index={i} />
          ))}
        </div>
      </div>

      {/* --- AMAZING CTA CALLOUT --- */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="relative bg-[#5284B5] rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-xl"
        >
          {/* Animated Background Elements */}
          <motion.div 
            style={{ y: circle1Y, rotate: 45 }}
            className="absolute -left-16 -top-16 w-72 h-72 border-[30px] border-white/5 rounded-[3rem]" 
          />
          <motion.div 
            style={{ y: circle2Y }}
            className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl" 
          />

          <motion.div 
            style={{ y: textY }}
            className="relative z-10 max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Future with <br /> 
              <span className="text-orange-300">Great Teachers</span>
            </h2>
            <p className="text-blue-50 text-base md:text-lg mb-10 font-medium opacity-80">
              Learn from the minds who make online education meaningful.
            </p>
            
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#ffffff"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#5284B5] px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-3 mx-auto shadow-lg"
            >
              Get Started Now 
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;