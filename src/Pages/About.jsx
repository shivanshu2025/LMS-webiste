import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Award, Users, Building2, Smartphone, CheckCircle2, ArrowRight, UserPlus } from 'lucide-react';
import AdditionalSections from '../Components/Aboutus/AdditionalSections';
import LearningSection from '../Components/Home/LearningSection';
import Card from '../Components/Aboutus/Card';

// --- COUNTER COMPONENT ---
const RollingNumber = ({ value }) => {
  const [display, setDisplay] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  // Clean the string (e.g., "8000+" -> 8000)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setDisplay(numericValue);
          clearInterval(timer);
        } else {
          setDisplay(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, numericValue]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const AboutUsPage = () => {
  const { scrollYProgress } = useScroll();
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Subtle Parallax (Reduced for "Normal" feel)
  const ySlow = useTransform(smoothY, [0, 1], [0, 60]);
  const yFast = useTransform(smoothY, [0, 1], [0, -80]);
  const parallaxScale = useTransform(smoothY, [0, 0.5], [0.98, 1]);

  const popIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 overflow-x-hidden">

      {/* --- HERO HEADER (Amazing 3D Background Version) --- */}
      <section className="relative h-[300px] flex flex-col items-center justify-center text-white overflow-hidden">

        {/* 1. Background Image with Parallax & Zoom */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 0.3], [0, 50]),
            scale: useTransform(scrollYProgress, [0, 0.3], [1.1, 1.2])
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600"
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          {/* Dark/Blue Tint Overlay to match your #5284B5 brand */}
          <div className="absolute inset-0 bg-[#5284B5]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5284B5]/40 to-white/10" />
        </motion.div>

        {/* 2. Floating Animated Glass Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[10%] w-32 h-32 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 z-1"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-[10%] w-24 h-24 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 z-1"
        />

        {/* 3. Dotted Animated Ring (From your UI) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] border-[2px] border-white/10 rounded-full border-dotted z-1"
        />

        {/* 4. Text Content */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tighter drop-shadow-2xl"
          >
            About Us 01
          </motion.h1>
        </div>

        {/* 5. Bottom White Curve Cutout */}
        <div className="absolute bottom-0 w-32 h-8 bg-white rounded-t-[30px] z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]" />
      </section>

      {/* --- STATS BAR (Grid 4) --- */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-50">
        {[
          { icon: <Award />, val: "8000+", label: "Courses Certified" },
          { icon: <Users />, val: "5000+", label: "Instructors Verified" },
          { icon: <Building2 />, val: "500+", label: "Companies Trained" },
          { icon: <Smartphone />, val: "100%", label: "Mobile Access" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            className="flex items-center gap-4 group"
          >
            <div className="p-3 bg-gray-50 rounded-xl text-[#5284B5] group-hover:bg-[#5284B5] group-hover:text-white transition-all duration-300">
              {React.cloneElement(stat.icon, { size: 20 })}
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800 tracking-tight">
                <RollingNumber value={stat.val} />
              </div>
              <p className="text-[11px] text-gray-400 font-bold uppercase">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- CONTENT SECTION (Balanced Size) --- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: 3D Image Composition */}
        <div className="relative">
          <motion.div
            style={{ scale: parallaxScale }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-[6px] border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"
              className="w-full h-[450px] object-cover"
              alt="Team"
            />
          </motion.div>

          {/* Floating Blue Card */}
          <motion.div
            style={{ y: yFast }}
            className="absolute -bottom-4 -left-6 bg-[#5284B5] p-6 rounded-2xl text-white shadow-lg z-20"
          >
            <UserPlus size={24} className="mb-2 opacity-70" />
            <div className="text-2xl font-bold leading-none">4500+</div>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-60">Instructors</p>
          </motion.div>

          {/* Floating White Card */}
          <motion.div
            style={{ y: ySlow }}
            className="absolute top-1/2 -right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl z-20 border border-gray-100 text-center"
          >
            <div className="bg-cyan-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-cyan-500">
              <Users size={18} />
            </div>
            <div className="text-xl font-bold text-gray-800"><RollingNumber value="60000+" /></div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Learners</p>
          </motion.div>
        </div>

        {/* Right Side: Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={popIn} className="text-[#5284B5] font-bold text-xs uppercase tracking-wider">About our mission</motion.span>
          <motion.h2 variants={popIn} className="text-4xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
            One Platform. Infinite <br />
            <span className="relative inline-block">
              Learning
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                className="absolute bottom-1.5 left-0 h-2 bg-orange-400/20 -z-10 rounded-full"
              />
            </span> Possibilities.
          </motion.h2>

          <motion.p variants={popIn} className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            We provide world-class education that is accessible to everyone, everywhere. Our tools are built for modern growth.
          </motion.p>

          <div className="space-y-4">
            {[
              { title: "Learn Anywhere", desc: "Access on any device, any time." },
              { title: "Expert Tutors", desc: "Certified professionals in every field." },
              { title: "Real Certificates", desc: "Industry recognized certifications." }
            ].map((item, i) => (
              <motion.div variants={popIn} key={i} className="flex gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#5284B5] shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            variants={popIn}
            whileHover={{ scale: 1.02 }}
            className="mt-10 bg-[#5284B5] text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase flex items-center gap-3 shadow-md"
          >
            Explore More <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </section>

      {/* --- FOOTER CARDS (Normal Size) --- */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { val: "6.8M+", label: "ACTIVE LEARNERS", bg: "bg-blue-50" },
          { val: "7.5K+", label: "COURSES", bg: "bg-cyan-50" },
          { val: "120+", label: "COUNTRIES", bg: "bg-orange-50" },
          { val: "4.9/5", label: "AVG RATING", bg: "bg-red-50" }
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className={`${card.bg} p-8 rounded-3xl text-center border border-white/50 shadow-sm`}
          >
            <div className="text-3xl font-black text-gray-800 mb-1">
              <RollingNumber value={card.val} />
            </div>
            <div className="text-[9px] font-black text-gray-400 tracking-widest uppercase">{card.label}</div>
          </motion.div>
        ))}
      </section>
      <LearningSection/>
      <AdditionalSections/>
      <Card/>
    </div>
  );
};

export default AboutUsPage;