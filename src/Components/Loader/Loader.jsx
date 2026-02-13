import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1. Mouse Tracking for Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // 2. Parallax Transforms for Text
  const textX = useTransform(springX, [-0.5, 0.5], [15, -15]);
  const textY = useTransform(springY, [-0.5, 0.5], [10, -10]);

  useEffect(() => {
    // Artificial progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // Faster load for better UX

    // Mouse tracker
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX / window.innerWidth - 0.5);
      mouseY.set(clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-[9999] overflow-hidden"
        >
          {/* --- Background Ambient Layer --- */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" />
          </div>

          <div className="relative flex items-center justify-center">
            {/* Glow Aura */}
            <div className="absolute w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

            {/* 3D Spinner */}
            <div className="uiverse-loader"></div>

            {/* --- Interactive Parallax Text --- */}
            <motion.div
              style={{ x: textX, y: textY }}
              className="absolute flex flex-col items-center z-10 text-center"
            >
              <motion.h1
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.5em", opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-white text-2xl md:text-3xl font-black tracking-[0.5em] ml-[0.5em]"
              >

                <div>
                  <img src="/img/Logo_Animation.png" alt="Logo" className="w-24 h-24 mx-auto" />
                </div>
                <h1 className="text-white text-2xl md:text-3xl font-black tracking-[0.3em]">
                  AI SCHOLARS
                </h1>
              </motion.h1>

              {/* Progress Counter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-cyan-400 font-mono text-sm font-bold opacity-80"
              >,
                {progress}%
              </motion.div>
            </motion.div>
          </div>

          {/* --- Status Footer --- */}
          <div className="absolute bottom-16 flex flex-col items-center gap-3">
            <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-cyan-500/40 font-mono text-[10px] tracking-[0.4em] uppercase animate-pulse">
              {progress < 40 ? "Establishing Neural Link" :
                progress < 80 ? "Syncing Knowledge Base" :
                  "Granting Access"}
            </p>
          </div>

          {/* --- Spinner CSS --- */}
          <style>{`
            .uiverse-loader {
              position: relative;
              width: 320px;
              height: 320px;
              border-radius: 50%;
              border: 2px solid rgba(255, 255, 255, 0.03);
              transform: perspective(800px) rotateX(70deg);
              transform-origin: center center;
              -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%);
              mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%);
            }

            .uiverse-loader:before,
            .uiverse-loader:after {
              content: "";
              position: absolute;
              inset: -4px;
              border-radius: 50%;
              border: 6px solid transparent;
              animation: spinner-spin 2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
                         spinner-fade 2s linear infinite;
            }

            .uiverse-loader:before {
              border-top-color: #66e6ff;
              filter: drop-shadow(0 0 12px #22d3ee);
            }

            .uiverse-loader:after {
              border-top-color: #f0db75;
              animation-delay: 0.5s;
              filter: drop-shadow(0 0 12px #f0db75);
            }

            @keyframes spinner-spin {
              100% { transform: rotate(360deg); }
            }

            @keyframes spinner-fade {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;