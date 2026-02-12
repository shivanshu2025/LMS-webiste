import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Maria Jackson",
    role: "UX/UI Designer",
    text: "Olan made it incredibly easy to fit learning into my busy schedule. The platform's structure, high-quality instructors, and relevant course material helped me gain the skills I needed confidently.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&w=800",
    avatar: "https://i.pravatar.cc/150?u=maria"
  },
  {
    name: "Marcus Holloway",
    role: "Full Stack Developer",
    text: "The community support here is unmatched. I went from knowing basic HTML to deploying full-scale React applications in just six months. Highly recommended!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

const LOGOS = [
  { name: "Academy", url: "https://cdn-icons-png.flaticon.com/512/5968/5968204.png" },
  { name: "University", url: "https://cdn-icons-png.flaticon.com/512/5968/5968218.png" },
  { name: "Institute", url: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
  { name: "College", url: "https://cdn-icons-png.flaticon.com/512/5968/5968263.png" },
  { name: "School", url: "https://cdn-icons-png.flaticon.com/512/5968/5968291.png" },
  { name: "Learning", url: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png" },
];

const ParallaxLogo = ({ logo, index, scrollY }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse tilt spring physics
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Mouse tilt transforms
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  // Scroll parallax: Odds go up, evens go down
  const scrollOffset = useTransform(scrollY, [0, 1], [0, index % 2 === 0 ? 40 : -40]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ 
        y: scrollOffset, 
        rotateX, 
        rotateY, 
        perspective: 800,
        transformStyle: "preserve-3d" 
      }}
      className="h-28 bg-white border border-slate-100 rounded-3xl flex items-center justify-center p-8 transition-shadow duration-300 group cursor-pointer relative hover:shadow-2xl hover:border-[#5284B5]/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
      
      <motion.img 
        src={logo.url} 
        alt={logo.name} 
        style={{ translateZ: 40 }} // Visual depth
        className="max-h-12 w-auto grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-500 z-10" 
      />
    </motion.div>
  );
};

const AdditionalSections = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imgY = useTransform(smoothY, [0.3, 0.8], [-30, 30]);

  const paginate = (newDirection) => {
    setCurrent((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="bg-white" ref={sectionRef}>
      
      {/* --- ENHANCED PARTNERS LOGO SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="max-w-lg">
            <span className="text-[#5284B5] font-bold text-[11px] uppercase tracking-[0.2em] mb-3 block">Our Partners</span>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Trusted by Leading <br/>Organizations Worldwide
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            Our platform supports organizations of all sizes in upskilling their workforce.
          </p>
        </div>

        {/* Logo Grid with Mixed Parallax */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {LOGOS.map((logo, i) => (
            <ParallaxLogo key={i} logo={logo} index={i} scrollY={smoothY} />
          ))}
        </div>
      </section>

      {/* --- TESTIMONIAL SLIDER --- */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm border border-slate-100">
          <div className="grid lg:grid-cols-12 items-stretch min-h-[500px]">
            {/* Left: Image */}
            <div className="lg:col-span-4 relative overflow-hidden bg-slate-200 min-h-[300px] lg:min-h-full">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={current}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  style={{ y: imgY }}
                  src={TESTIMONIALS[current].image} 
                  className="absolute inset-0 w-full h-[130%] object-cover"
                  alt="Student"
                />
              </AnimatePresence>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8 p-10 md:p-20 flex flex-col justify-center bg-white relative">
              <Quote className="absolute top-10 right-10 text-slate-100/40" size={140} strokeWidth={1} />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 text-xl md:text-2xl leading-relaxed font-medium mb-10 relative z-10 italic">
                    "{TESTIMONIALS[current].text}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-10">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 overflow-hidden shadow-inner">
                        <img src={TESTIMONIALS[current].avatar} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-lg">{TESTIMONIALS[current].name}</h4>
                        <p className="text-[10px] text-[#5284B5] uppercase tracking-[0.2em] font-black">
                          {TESTIMONIALS[current].role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button onClick={() => paginate(-1)} className="w-14 h-14 rounded-2xl border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-[#5284B5] hover:text-white transition-all active:scale-95 shadow-sm hover:shadow-blue-200">
                        <ArrowLeft size={24} />
                      </button>
                      <button onClick={() => paginate(1)} className="w-14 h-14 rounded-2xl border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-[#5284B5] hover:text-white transition-all active:scale-95 shadow-sm hover:shadow-blue-200">
                        <ArrowRight size={24} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="bg-[#5284B5] p-8 px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-6">
                <div className="h-1 w-16 bg-white/40 rounded-full hidden sm:block" />
                <h3 className="text-3xl font-black text-white tracking-tight">Students Feedback</h3>
             </div>
             <motion.button 
               whileHover={{ scale: 1.05, x: 5 }} 
               whileTap={{ scale: 0.95 }}
               className="bg-white text-[#5284B5] px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center gap-4 shadow-2xl"
             >
                View All Feedback <ArrowRight size={16} />
             </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalSections;