import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, BookOpen, GraduationCap, School, Star, ArrowRight, Zap, Trophy, ShieldCheck } from "lucide-react";

// --- Data ---
const coursePlans = [
  {
    name: "Single Course",
    tagline: "Targeted Learning",
    icon: BookOpen,
    price: "499",
    courses: "1 Selected Course",
    description: "Perfect for mastering a specific tool or language without distractions.",
    features: [
      "Full Lifetime Access",
      "Course Certificate",
      "Exercise Files",
      "Direct Q&A"
    ],
    highlighted: false,
    cta: "Buy Now",
    color: "slate"
  },
  {
    name: "Skill Bundle",
    tagline: "Career Accelerator",
    icon: GraduationCap,
    price: "1,499",
    courses: "10 Expert Courses",
    description: "A curated roadmap designed to take you from beginner to job-ready.",
    features: [
      "10 Industry-Level Courses",
      "Professional Certification",
      "Resume Review Support",
      "Private Discord Access",
      "Priority Email Support"
    ],
    highlighted: true,
    cta: "Join the Career Path",
    color: "blue",
    savings: "Save 60%"
  },
  {
    name: "All-Access Pass",
    tagline: "Lifelong Mastery",
    icon: School,
    price: "3,999",
    courses: "50+ All Courses",
    description: "Complete access to every current and future course in our library.",
    features: [
      "All Future Courses Free",
      "Exclusive Masterclasses",
      "1-on-1 Mentorship",
      "Job Placement Assistance",
      "Offline Downloads"
    ],
    highlighted: false,
    cta: "Go Unlimited",
    color: "slate"
  }
];

const Pricing = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 px-6 font-sans antialiased text-slate-900">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-[#4682B4]/5 to-transparent blur-3xl -z-10" />

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-[#4682B4]/10 text-[#4682B4] px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-sm"
        >
          <Trophy size={14} className="fill-current" /> Future-Proof Your Career
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight"
        >
          Simple Plans for <br />
          <span className="text-[#4682B4] relative">
            Serious Learners
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none"><path d="M5 15C70 5 140 5 295 15" stroke="#4682B4" strokeWidth="4" strokeLinecap="round"/></svg>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Unlock industry-validated certificates and expert mentorship. No hidden fees, just pure growth.
        </motion.p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-stretch">
        {coursePlans.map((plan, index) => {
          const Icon = plan.icon;
          const isBlue = plan.highlighted;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative flex flex-col rounded-[3rem] p-10 transition-all duration-500 border-2 
                ${isBlue 
                  ? "bg-white border-[#4682B4] shadow-[0_20px_50px_-15px_rgba(70,130,180,0.3)] scale-105 z-20" 
                  : "bg-white border-slate-100 shadow-xl hover:border-[#4682B4]/40 z-10"
                } ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-40 blur-[2px] scale-95" : "opacity-100 blur-0"}`}
            >
              {/* Savings/Recommended Badge */}
              {plan.savings && (
                <div className="absolute -top-4 right-10 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg animate-bounce">
                  {plan.savings}
                </div>
              )}
              {isBlue && (
                <div className="absolute -top-5 left-10 bg-[#4682B4] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl flex items-center gap-2">
                  <Zap size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              {/* Plan Identity */}
              <div className="mb-10">
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 transition-transform group-hover:rotate-6 ${isBlue ? "bg-[#4682B4] text-white shadow-lg shadow-blue-200" : "bg-slate-50 text-[#4682B4]"}`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm font-bold text-[#4682B4] uppercase tracking-widest">{plan.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm mb-8 font-medium leading-relaxed h-12">
                {plan.description}
              </p>

              {/* Price Tag */}
              <div className="mb-10 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-[#4682B4]/20 transition-colors">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-slate-400">INR</span>
                  <span className="text-5xl font-black tracking-tighter text-slate-900">₹{plan.price}</span>
                </div>
                <div className="mt-2 text-xs font-bold text-[#4682B4] flex items-center gap-2">
                  <ShieldCheck size={14} /> One-time payment
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-bold text-slate-600">
                    <div className={`mt-1 p-0.5 rounded-full ${isBlue ? "bg-[#4682B4] text-white" : "bg-slate-100 text-[#4682B4]"}`}>
                        <Check size={14} strokeWidth={4} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-5 rounded-[2rem] text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-95
                  ${isBlue
                    ? "bg-[#4682B4] text-white shadow-2xl shadow-blue-300 hover:bg-[#36648B] hover:gap-5"
                    : "bg-slate-900 text-white hover:bg-black hover:gap-5 shadow-lg shadow-slate-200"
                  }`}
              >
                {plan.cta} <ArrowRight size={18} />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 max-w-2xl mx-auto p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm text-center"
      >
        <div className="flex justify-center gap-4 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber-400 fill-current" />)}
        </div>
        <p className="text-slate-600 font-bold italic mb-4">
          "The Skill Bundle helped me transition from a designer to a Full Stack Developer in just 4 months. Best investment of my career!"
        </p>
        <div className="text-xs font-black uppercase tracking-widest text-slate-400">
          — Join 15,000+ students globally
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;