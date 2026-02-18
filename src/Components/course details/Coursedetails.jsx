import React, { useState } from 'react';
import { 
  Check, 
  PlayCircle, 
  ChevronDown, 
  Star, 
  Users, 
  Globe, 
  Award, 
  Clock, 
  FileText 
} from 'lucide-react';

const CourseDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const syllabus = [
    { title: "Introduction to Full Stack", lessons: ["Environment Setup", "Web Architecture 101", "The Modern Stack"] },
    { title: "Frontend Mastery", lessons: ["Advanced React Hooks", "State Management with Redux", "Tailwind CSS Layouts"] },
    { title: "Backend Architecture", lessons: ["Node.js & Express", "MongoDB Schema Design", "JWT Authentication"] },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* --- HERO SECTION --- */}
      <div className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <nav className="text-sm text-blue-400 font-medium">Development &gt; Web Development &gt; Full Stack</nav>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Mastering Full-Stack Web Development: The 2026 Bootcamp
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Build production-ready applications. Learn React, Node, and System Design from industry experts who have built systems for millions.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <span className="font-bold text-white text-base">4.9</span>
                <span className="text-slate-400">(12,450 ratings)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>45,000 students enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={18} />
                <span>English, Spanish [CC]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-10">
        {/* --- MAIN CONTENT --- */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Learning Outcomes */}
          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Build 10+ real-world projects",
                "Master React Server Components",
                "Deploy apps to AWS and Vercel",
                "Advanced SQL & NoSQL techniques",
                "Clean Architecture & Design Patterns",
                "Unit Testing with Vitest"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Accordion */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>
            <div className="border rounded-xl overflow-hidden bg-white">
              {syllabus.map((section, idx) => (
                <div key={idx} className="border-b last:border-b-0">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <span className="font-bold text-gray-800">{section.title}</span>
                    <ChevronDown className={`transition-transform ${activeAccordion === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === idx && (
                    <div className="p-4 space-y-3 bg-white">
                      {section.lessons.map((lesson, i) => (
                        <div key={i} className="flex items-center justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <PlayCircle size={16} />
                            <span>{lesson}</span>
                          </div>
                          <span className="text-xs text-gray-400 font-mono">12:45</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Your Instructor</h2>
            <div className="flex items-start gap-6">
              <img 
                src="https://i.pravatar.cc/150?u=instructor" 
                alt="Instructor" 
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-600 underline">Alex Rivers</h3>
                <p className="text-gray-500 mb-2">Senior Architect at Google</p>
                <div className="flex gap-4 mb-3 text-sm font-semibold">
                  <div className="flex items-center gap-1"><Star size={14} className="text-orange-400" /> 4.9 Instructor Rating</div>
                  <div className="flex items-center gap-1"><Users size={14} /> 120k Students</div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Alex has over 15 years of experience in distributed systems and UI design. 
                  He specializes in teaching complex topics through visual metaphors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SIDEBAR FLOATING CARD --- */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-white rounded-2xl shadow-2xl overflow-hidden border">
            <div className="relative group">
               <img 
                src="https://www.mavencluster.com/assets/img/learning-management/top-img.png" 
                alt="Preview" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <PlayCircle size={60} className="text-white" />
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-gray-900">$199.99</span>
                <span className="text-gray-400 line-through text-lg">$499.99</span>
                <span className="text-green-600 font-bold">60% OFF</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Enroll Now
              </button>

              <div className="space-y-4">
                <p className="font-bold text-gray-800">This course includes:</p>
                <div className="space-y-2 text-gray-600 text-sm">
                  <div className="flex items-center gap-3"><Clock size={16}/> 45 hours on-demand video</div>
                  <div className="flex items-center gap-3"><FileText size={16}/> 12 articles & 25 resources</div>
                  <div className="flex items-center gap-3"><Award size={16}/> Certificate of completion</div>
                </div>
              </div>

              <div className="flex justify-between border-t pt-4">
                <button className="text-sm font-bold text-slate-800 hover:text-blue-600">Share</button>
                <button className="text-sm font-bold text-slate-800 hover:text-blue-600">Gift this course</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;