import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  Palette, Terminal, Database, Briefcase, 
  Megaphone, Camera, Film, BarChart 
} from 'lucide-react';

const categories = [
  { title: "Design", icon: <Palette />, color: "text-teal-600", bg: "bg-teal-50" },
  { title: "Development", icon: <Terminal />, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Development", icon: <Database />, color: "text-indigo-600", bg: "bg-indigo-50" },
  { title: "Business", icon: <Briefcase />, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "Marketing", icon: <Megaphone />, color: "text-orange-600", bg: "bg-orange-50" },
  { title: "Photography", icon: <Camera />, color: "text-red-600", bg: "bg-red-50" },
  { title: "Acting", icon: <Film />, color: "text-slate-600", bg: "bg-slate-200" },
  { title: "Business", icon: <BarChart />, color: "text-cyan-600", bg: "bg-cyan-50" },
];

const ParallaxCard = ({ cat }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform mouse position into rotation (Max 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full bg-white p-8 rounded-3xl flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 cursor-pointer group"
    >
      {/* 3D Layered Icon */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`w-16 h-16 ${cat.bg} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white group-hover:shadow-lg`}
      >
        {React.cloneElement(cat.icon, { 
          size: 30, 
          className: `${cat.color} transition-transform duration-300 group-hover:scale-110` 
        })}
      </div>

      {/* 3D Layered Text */}
      <h3 
        style={{ transform: "translateZ(30px)" }}
        className="text-xl font-bold text-gray-800 mb-3"
      >
        {cat.title}
      </h3>
      <p 
        style={{ transform: "translateZ(20px)" }}
        className="text-gray-500 text-sm leading-relaxed"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const Section2 = () => {
  return (
    <section className="relative py-24 px-4 bg-[#fdfdff] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm"
          >
            Explore Categories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2"
          >
            Choice favourite course <br className="hidden md:block" /> from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">top category</span>
          </motion.h2>
        </header>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000"
        >
          {categories.map((cat, index) => (
            <ParallaxCard key={index} cat={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;