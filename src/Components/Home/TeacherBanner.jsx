import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TeacherBanner = () => {
  return (
    <section className="px-6 py-10">
      <motion.div 
        // Scroll Animation Logic
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        
        className="max-w-7xl mx-auto bg-[#5B8FB9] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden"
      >
        {/* Animated Decorative Circle Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -left-20 top-1/4 w-64 h-64 border-[30px] border-white/10 rounded-full" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 top-1/2 w-80 h-80 border-[40px] border-white/5 rounded-full" 
        />
        
        <div className="relative z-10 space-y-8">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl lg:text-5xl font-black text-white leading-tight"
          >
            Your Future with Great Teachers <br />
            Meet Them on <span className="relative inline-block">
              Ai Scholars
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-1 left-0 h-1 bg-orange-400"
              />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-blue-50 font-medium text-lg max-w-2xl mx-auto"
          >
            Learn from the minds who make online education meaningful.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#FF4D1C] hover:bg-[#E33D0E] text-white px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-orange-900/20"
          >
            Get Started Now <ArrowRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default TeacherBanner;