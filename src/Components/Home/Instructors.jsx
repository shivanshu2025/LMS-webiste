import React from 'react';
import { Share2 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const InstructorCard = ({ t, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Softer spring settings for a "velvet" feel
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Staggered Slide + Fade Reveal
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 1, 0.5, 1] 
      } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group cursor-pointer relative"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[#5B8FB9]/0 group-hover:bg-[#5B8FB9]/5 blur-3xl transition-colors duration-700 rounded-full -z-10" />

      <div 
        style={{ transform: "translateZ(60px)" }} 
        className="relative rounded-[2.5rem] overflow-hidden mb-6 aspect-[4/5] shadow-lg group-hover:shadow-[0_20px_50px_rgba(91,143,185,0.2)] transition-all duration-500"
      >
        <img 
          src={t.img} 
          alt={t.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        
        {/* Share Button with subtle float */}
        <motion.button 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(40px)" }}
          className="absolute bottom-5 right-5 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg text-[#5B8FB9] group-hover:bg-[#5B8FB9] group-hover:text-white transition-colors duration-300 z-10"
        >
          <Share2 size={18} />
        </motion.button>
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="px-1">
        <h4 className="font-black text-slate-900 text-xl mb-1 group-hover:translate-x-1 transition-transform duration-300">
          {t.name}
        </h4>
        <p className="text-[#5B8FB9] text-[10px] font-extrabold uppercase tracking-[0.15em] opacity-80 group-hover:opacity-100 transition-opacity">
          {t.role}
        </p>
      </div>
    </motion.div>
  );
};

const Instructors = () => {
  const teachers = [
    { name: "Maria Jackson", role: "UX/UI Design Mentor", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
    { name: "James Patel", role: "Senior Web Developer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
    { name: "Hannah Kim", role: "Personal Productivity Coach", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
    { name: "Liam Chen", role: "Lead Data Science Educator", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-[#5B8FB9] font-black text-[11px] uppercase tracking-[0.3em] block mb-4">Our Experts</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Meet Your <span className="relative inline-block px-1">
              Learning
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 w-full h-2 bg-orange-400/80 rounded-full origin-left -z-10" 
              />
            </span> Guides
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {teachers.map((t, i) => (
            <InstructorCard key={i} t={t} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;