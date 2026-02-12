import React, { useRef } from 'react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const BlogCard = ({ post, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // Entrance animation for the card
  const cardEntrance = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] } 
    }
  };

  return (
    <motion.div 
      variants={cardEntrance}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-6 shadow-xl"
      >
        <img 
          src={post.img} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white p-4 rounded-2xl text-blue-600 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="space-y-4 px-2">
        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-tight">
          {post.tag}
        </span>
        <h3 className="text-2xl font-black text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>
        <div className="flex gap-6 text-slate-400 text-xs font-bold pt-2">
          <span className="flex items-center gap-2 group-hover:text-slate-600 transition-colors">
            <Calendar size={16} className="text-blue-500" /> {post.date}
          </span>
          <span className="flex items-center gap-2 group-hover:text-slate-600 transition-colors">
            <Clock size={16} className="text-blue-500" /> {post.read}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const BlogSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Entrance animation for text container
  const textReveal = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, staggerChildren: 0.1, ease: "easeOut" } 
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const posts = [
    {
      tag: "Success Stories",
      title: "Real Stories from Olan Students",
      date: "September 9, 2025",
      read: "2 min read",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop"
    },
    {
      tag: "Learning Tips",
      title: "How to Stay Motivated While Learning Online",
      date: "September 9, 2025",
      read: "2 min read",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={containerRef} className="py-30 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Column: Revealed on Scroll */}
          <motion.div 
            style={{ y: leftY }} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textReveal}
            className="space-y-8 lg:sticky lg:top-32"
          >
            <motion.p variants={itemFade} className="text-blue-600 font-bold text-sm uppercase tracking-wider">Our Blog</motion.p>
            <motion.h2 variants={itemFade} className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Insights & Ideas From <span className="text-orange-400">The World</span> Of Learning
            </motion.h2>
            <motion.p variants={itemFade} className="text-slate-500 font-medium leading-relaxed">
              Stay informed, inspired, and ahead of the curve with expert articles and real success stories.
            </motion.p>
            <motion.button variants={itemFade} className="group flex items-center gap-2 bg-[#5B8FB9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4A7DA6] transition-all hover:shadow-lg hover:shadow-blue-200">
              View All Insights 
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Column: Cards Reveal on Scroll */}
          <motion.div 
            style={{ y: rightY }} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 grid md:grid-cols-2 gap-12"
          >
            {posts.map((post, i) => (
              <BlogCard key={i} post={post} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;