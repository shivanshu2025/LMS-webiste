import React, { useRef } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const CommunitySection = () => {
  const containerRef = useRef(null);
  
  // 1. Mouse coordinates for the 3D Tilt effect (Left Card)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  // 2. Scroll tracking for Floating Bubbles (Right Card)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bubble1Y = useTransform(scrollYProgress, [0, 1], [50, -120]);
  const bubble2Y = useTransform(scrollYProgress, [0, 1], [30, -60]);
  const bubble3Y = useTransform(scrollYProgress, [0, 1], [80, -180]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // Entrance Animation Variants
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={containerRef} className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Side: Interactive 3D Card with Scroll Entrance */}
          <motion.div 
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
            className="bg-[#F8FAFF] rounded-[3rem] p-12 flex flex-col items-center justify-center text-center space-y-8 border border-slate-100 shadow-xl shadow-blue-900/5 group cursor-default"
          >
            <motion.div 
              variants={childVariants}
              style={{ transform: "translateZ(60px)" }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-blue-500"
            >
              <Quote className="fill-blue-500" size={32} />
            </motion.div>
            
            <motion.p 
              variants={childVariants}
              style={{ transform: "translateZ(40px)" }}
              className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed max-w-md"
            >
              "Thanks to this platform, I transitioned from a complete beginner to a confident data professional."
            </motion.p>

            <motion.div variants={childVariants} style={{ transform: "translateZ(50px)" }} className="space-y-4">
              <div className="flex justify-center -space-x-4">
                {[1, 2, 3].map((i) => (
                  <motion.img 
                    whileHover={{ y: -5, scale: 1.1 }}
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm relative z-10" 
                    src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                    alt="User" 
                  />
                ))}
              </div>
              <h4 className="font-black text-slate-900">James Smith</h4>
            </motion.div>
          </motion.div>

          {/* Right Side: Community Card with Scroll Entrance */}
          <motion.div 
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#F8FAFF] rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-center items-start space-y-6 border border-slate-100 shadow-xl shadow-blue-900/5"
          >
            <motion.h3 variants={childVariants} className="text-3xl lg:text-4xl font-black text-slate-900 max-w-xs relative z-10 leading-tight">
              Join a Global Community of <span className="text-blue-600">Learners</span>
            </motion.h3>
            
            <motion.p variants={childVariants} className="text-slate-500 font-medium max-w-sm relative z-10">
              Collaborate with learners from 120+ countries, share ideas, and grow with expert guidance.
            </motion.p>

            <motion.div variants={childVariants} className="relative z-10">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#4A7DA6" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#5B8FB9] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                Join Our Community <ArrowRight size={18} />
              </motion.button>
            </motion.div>

            {/* Parallax Floating Avatars */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
                <motion.img 
                  style={{ y: bubble3Y }}
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" 
                  className="absolute bottom-10 right-10 w-20 h-20 rounded-full border-4 border-white shadow-2xl" 
                />
                
                <motion.img 
                  style={{ y: bubble1Y }}
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" 
                  className="absolute bottom-40 right-32 w-14 h-14 rounded-full border-4 border-white shadow-xl" 
                />
                
                <motion.img 
                  style={{ y: bubble2Y }}
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop" 
                  className="absolute bottom-16 right-56 w-16 h-16 rounded-full border-4 border-white shadow-xl" 
                />
            </div>
            
            {/* Background Accent */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 blur-3xl rounded-full" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;