import React, { useRef } from 'react';
import { CheckCircle2, ArrowRight, Users, GraduationCap } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const LearningSection = () => {
  const containerRef = useRef(null);

  // 1. Setup Scroll Progress tracking for the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 2. Create parallax offsets for different elements
  // The '60K' card moves up faster, the '4500' card moves slower
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const features = [
    {
      title: "Learn from Anywhere",
      desc: "Access your courses anytime, on any device—at home, at work, or on the go."
    },
    {
      title: "Teach with Confidence",
      desc: "All the tools you need to build, launch, and scale your courses—stress-free."
    },
    {
      title: "Earn Real Certificates",
      desc: "Complete courses and receive professional certificates to boost your career."
    }
  ];

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Layered Images & Parallax Stats */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Decorative Circles - Subtle movement */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -top-10 -left-10 w-32 h-32 border-2 border-blue-100 rounded-full opacity-50" 
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-50 rounded-full opacity-50 blur-3xl" />
            
            {/* Main Image Container with subtle tilt */}
            <motion.div 
              style={{ rotate: rotateImg }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop" 
                alt="Student learning" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Parallax Card 1: Learners (Moves Faster) */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute -top-12 -right-6 md:right-0 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-[160px]"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-500">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-800">60K+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Active Learners</p>
                </div>
              </div>
            </motion.div>

            {/* Parallax Card 2: Instructors (Moves Slower) */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-12 -left-6 bg-[#5B8FB9] p-6 rounded-2xl shadow-2xl z-20 text-white min-w-[180px]"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black">4500+</p>
                  <p className="text-xs font-medium text-white/80 uppercase">Expert Instructors</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">About</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                One Platform. Infinite <br />
                <span className="relative">
                  Learning Possibilities.
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-1 left-0 h-1 bg-orange-400 rounded-full" 
                  />
                </span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                At our platform, we believe quality education should be accessible, engaging, and 
                empowering—for everyone, everywhere.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="mt-1 text-blue-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{feature.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-[#5B8FB9] hover:bg-[#4A7DA6] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg active:scale-95">
              Learn More About Us <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;