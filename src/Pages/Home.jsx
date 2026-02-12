import React from 'react'
import { ArrowRight, Play, Trophy, ShieldCheck, Zap } from 'lucide-react'
import CategorySection from '../Components/Home/CategorySection'
import LearningSection from '../Components/Home/LearningSection'
// import CourseListing from '../Components/Home/Courselisting'
import CommunitySection from '../Components/Home/CommunitySection'
import HeroBridge from '../Components/Home/HeroBridge'
import Instructors from '../Components/Home/Instructors'
import TeacherBanner from '../Components/Home/TeacherBanner'
import BlogSection from '../Components/Home/BlogSection'
import WhatsAppFloat from '../Components/WhatsAppFloat/WhatsAppFloat'

const Home = () => {
  return (
    <div className="bg-white">

      <section className="relative overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-16">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-400/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-orange-400/10 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M20 18v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2zm0-16V0h-1v2h-2v1h2v2h1V3h2V2h-2zM4 18v-2H3v2H0v1h3v2h1v-2h2v-1H4zM4 2V0H3v2H0v1h3v2h1V3h2V2H4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-xl shadow-lg">
              <Zap size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Future of EdTech
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Master Any <br />
              <span className="text-blue-[#5B8FB9]">Skill Set.</span>
            </h1>

            <p className="text-slate-600 text-lg max-w-lg leading-relaxed border-l-4 border-blue-500 pl-4">
              Ai scholars AI transforms complex learning into bite-sized interactive
              journeys. Join 2 million+ students mastering the future today.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="group bg-[#4DC591] hover:bg-[#5B8FB9] text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-0.5 active:scale-95">
                <span className="flex items-center gap-2">
                  Start Your Journey <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">

            <div className="absolute -top-6 -right-2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">
                    Top Rated
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    #1 Tech School
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-2 bg-slate-900 text-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-blue-400 uppercase">
                    Accredited
                  </p>
                  <p className="text-sm font-bold text-white">
                    Global Certification
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-[#4A7DA6] rounded-[2.5rem] rotate-2 scale-105 opacity-5 group-hover:rotate-4 transition-transform duration-700" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop"
                  alt="Student Learning"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* TRUSTED BRANDS */}
        {/* TRUSTED BRANDS */}
        <section className="mt-12 border-y border-slate-100 py-8 overflow-hidden bg-slate-50/50">
          {/* Injection of the animation styles */}
          <style dangerouslySetInnerHTML={{
            __html: `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}} />

          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
            Trusted by Global Innovators
          </p>

          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee items-center whitespace-nowrap gap-12 lg:gap-20 opacity-50 grayscale">
              {/* Brand List */}
              {['Cognizant', 'HCL Technologies', 'Infosys', 'Tech Mahindra', 'L&T Infotech', 'Wipro', 'Oracle'].map((brand, index) => (
                <span
                  key={`brand-1-${index}`}
                  className="text-xl lg:text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}

              {/* Duplicate set for seamless looping */}
              {['Cognizant', 'HCL Technologies', 'Infosys', 'Tech Mahindra', 'L&T Infotech', 'Wipro', 'Oracle'].map((brand, index) => (
                <span
                  key={`brand-2-${index}`}
                  className="text-xl lg:text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>

      <CategorySection />
      <LearningSection />
      {/* <CourseListing/> */}
      <HeroBridge />
      <CommunitySection />
      <Instructors />
      <TeacherBanner />
      <BlogSection />
      <WhatsAppFloat />
    </div>
  )
}

export default Home
