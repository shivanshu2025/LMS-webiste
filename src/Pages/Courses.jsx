import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import CardsSection from '../Components/Courses/CardsSection';
import Section2 from '../Components/Courses/Section2';
import RecommendedSection from '../Components/Courses/RecommendedSection';
import CallToActionSection from '../Components/Courses/CallToActionSection';
import YouCourse from '../Components/Courses/YourCourse';

const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX / window.innerWidth - 0.5);
    y.set(clientY / window.innerHeight - 0.5);
  };

  return (
    <>
    <div
      className="min-h-screen bg-[#5B8FB9] text-white flex items-center justify-center p-6 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* 1. THE ROUNDED BOTTOM SHAPE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] md:h-[150px] fill-white"
        >
          {/* This path creates the smooth "u" curve at the bottom */}
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10 pb-20">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-[#ff9c4b]">Studying</span> Online is now much easier
          </h1>
          <p className="text-xl opacity-90 max-w-md">
            TOTC is an interesting platform that will teach you in a more interactive way.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="bg-[#ff9c4b] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              Join for free
            </button>
            <button className="flex items-center gap-3 font-semibold group">
              <span className="bg-white p-4 rounded-full text-[#49c5b6] shadow-md group-hover:scale-110 transition-transform">▶</span>
              Watch how it works
            </button>
          </div>
        </motion.div>

        {/* Right Content - Visual Elements */}
        <div className="relative h-[600px] flex justify-center items-end">
          <motion.img
            src="https://www.vaishaliedutech.com/wp-content/uploads/2022/12/Untitled-design-15.png"
            alt="Student"
            className="h-[95%] object-contain z-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />

          {/* PARALLAX CARDS */}
          <ParallaxItem mouseX={mouseX} mouseY={mouseY} factor={30} className="top-20 -left-10 z-30">
            <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-white/20">
              <span className="text-2xl">📊</span>
              <div>
                <p className="text-gray-900 font-bold">250k</p>
                <p className="text-gray-500 text-xs">Assisted Student</p>
              </div>
            </div>
          </ParallaxItem>

          <ParallaxItem mouseX={mouseX} mouseY={mouseY} factor={-40} className="bottom-40 -left-16 z-30">
            <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-2xl flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-500">✉️</div>
              <p className="text-gray-800 font-medium text-sm">Congratulations! Admission completed</p>
            </div>
          </ParallaxItem>

          <ParallaxItem mouseX={mouseX} mouseY={mouseY} factor={50} className="bottom-20 -right-10 z-30">
            <div className="bg-white/90 backdrop-blur p-5 rounded-2xl shadow-2xl w-64 border border-white/20 text-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="avatar.jpg" alt="User" />
                </div>
                <div>
                  <p className="font-bold text-sm">User Experience Class</p>
                  <p className="text-gray-400 text-[10px]">Today at 12.00 PM</p>
                </div>
              </div>
              <button className="bg-[#f88c8d] text-white w-full py-2 rounded-full text-xs font-bold hover:bg-[#e77a7b] transition">
                Join Now
              </button>
            </div>
          </ParallaxItem>
        </div>
      </div>
    </div>
    <CardsSection />
    <Section2/>
    <RecommendedSection/>
    <YouCourse/>
    <CallToActionSection/>
    </>
  );
};

const ParallaxItem = ({ children, className, mouseX, mouseY, factor }) => {
  const moveX = useTransform(mouseX, [-0.5, 0.5], [-factor, factor]);
  const moveY = useTransform(mouseY, [-0.5, 0.5], [-factor, factor]);

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x: moveX, y: moveY }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  );
};


export default HeroSection;