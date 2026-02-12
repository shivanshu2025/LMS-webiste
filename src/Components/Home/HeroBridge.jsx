import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroBridge = () => {
  // Animation variants for the text content
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-[#FFF8F6] rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-orange-50 relative"
        >
          {/* Decorative Background Blob */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-100/30 blur-3xl rounded-full" />
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              Kickstart Your Learning <br />
              Journey and Build the <br />
              <span className="relative inline-block">
                Career You
                {/* Animated Underline */}
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 h-1.5 bg-orange-400 rounded-full" 
                />
              </span> Deserve
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-slate-500 text-lg max-w-md font-medium">
              Explore expert-led courses that help you grow faster, smarter, and stronger.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <button className="group flex items-center gap-2 bg-[#5B8FB9] hover:bg-[#4A7DA6] text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl hover:shadow-[#5B8FB9]/30 active:scale-95">
                Get Started Now 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </button>
            </motion.div>
          </div>

          {/* Right Image with Floating Animation */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="https://png.pngtree.com/png-clipart/20230103/original/pngtree-business-growth-png-image_8862745.png" 
                alt="Career Success" 
                className="w-full h-auto object-contain scale-105 drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Subtle Floating Orbit Element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-orange-200/50 rounded-full scale-125 -z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBridge;