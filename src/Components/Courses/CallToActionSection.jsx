import React from 'react';
import { motion } from 'framer-motion';

const CallToActionSection = () => {
  // Animation configuration for scrolling into view
  const fadeInView = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/path-to-your-image.jpg')", // REPLACE THIS PATH
        }}
      >
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInView}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Online coaching lessons for remote learning.
          </h2>
          
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(56, 189, 248, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-500 text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-sky-400 transition-colors duration-300"
          >
            Start learning now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;