import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Mail,
  Lock,
  ArrowRight,
  Chrome,
  Eye,
  EyeOff,
} from 'lucide-react';

const Login = ({ open, onClose }) => {
  const modalRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [open]);

  const formVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[80]"
          />

          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-6">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[900px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[520px] md:h-[580px]"
            >
              {/* LEFT SIDE - ANIMATED ILLUSTRATION SECTION */}
              <div className="hidden md:flex md:w-5/12 bg-[#5284B5] relative overflow-hidden flex-col items-center justify-center px-10 text-center">
                
                {/* Background Fluid Animation */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                    x: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-10 -left-10 w-80 h-80 bg-white/20 rounded-full blur-3xl"
                />

                <div className="relative z-10 flex flex-col items-center gap-8">
                  {/* Floating Image/Logo Animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, -15, 0], // Floating loop
                    }}
                    transition={{
                      opacity: { duration: 0.8 },
                      y: { 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }
                    }}
                    className="relative"
                  >
                    {/* Inner Glow Pulse */}
                    <motion.div 
                        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-white/30 blur-2xl rounded-full"
                    />
                    <img
                      src="/img/Logo_White.png"
                      alt="Logo"
                      className="w-48 md:w-56 relative z-10 drop-shadow-2xl"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-white/90 text-sm leading-relaxed font-light">
                      AI Scholars is a leading software development company and technology training institute. 
                      We specialize in cutting-edge technology solutions and transformative digital services.
                    </p>
                  </motion.div>
                </div>

                {/* Bottom Decorative Element */}
                <motion.div
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/20 rounded-full blur-3xl"
                />
              </div>

              {/* RIGHT SIDE - FORM SECTION */}
              <div className="w-full md:w-7/12 bg-white px-8 md:px-14 py-10 flex flex-col relative">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-all active:scale-90"
                >
                  <X size={22} />
                </button>

                <div className="my-auto max-w-sm mx-auto w-full">
                  <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={formVariants}
                  >
                    <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                      Welcome back
                    </h2>
                    <p className="text-slate-500 text-sm mt-2 mb-6 font-medium">
                      Please enter your credentials to login.
                    </p>
                  </motion.div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <motion.div
                      custom={1}
                      initial="hidden"
                      animate="visible"
                      variants={formVariants}
                      className="relative group"
                    >
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#5284B5] transition-colors" size={18} />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#5284B5] focus:bg-white focus:ring-4 focus:ring-[#5284B5]/10 outline-none transition-all text-sm font-medium"
                      />
                    </motion.div>

                    <motion.div
                      custom={2}
                      initial="hidden"
                      animate="visible"
                      variants={formVariants}
                      className="relative group"
                    >
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#5284B5] transition-colors" size={18} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#5284B5] focus:bg-white focus:ring-4 focus:ring-[#5284B5]/10 outline-none transition-all text-sm font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </motion.div>

                    <motion.button
                      custom={3}
                      initial="hidden"
                      animate="visible"
                      variants={formVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "#70254b" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#832E59] text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-pink-900/20 flex items-center justify-center gap-2 mt-3 transition-colors"
                    >
                      Sign In <ArrowRight size={18} />
                    </motion.button>
                  </form>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center my-5 gap-3"
                  >
                    <div className="h-[1px] flex-1 bg-slate-100" />
                    <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                      OR
                    </span>
                    <div className="h-[1px] flex-1 bg-slate-100" />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <button className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl text-xs font-bold hover:bg-slate-50 active:scale-[0.97] transition-all">
                      <Chrome size={18} className="text-red-500" />
                      Continue with Google
                    </button>
                  </motion.div>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 text-center text-[13px] text-slate-500 font-medium"
                >
                  Don&apos;t have an account?
                  <button className="text-[#5284B5] font-bold ml-1 hover:underline">
                    Create account
                  </button>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Login;