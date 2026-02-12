// import React, { useState } from 'react';
// import { Calendar, Users, ArrowRight, Star } from 'lucide-react';

// const CourseListing = () => {
//   const [activeTab, setActiveTab] = useState('Data Science');

//   const tabs = [
//     'Data Science', 'Tech & Development', 'Personal Growth', 
//     'Marketing & SEO', 'Science & Research', 'Design & Creativity'
//   ];

//   const courses = [
//     {
//       title: "Build a Data Science Website with PHP",
//       price: "$20.00",
//       date: "Oct 09, 2025",
//       learners: "1,240",
//       category: "Data Science",
//       rating: 4.8,
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
//     },
//     {
//       title: "Olan Mastering in Data Science",
//       price: "$19.00",
//       date: "Oct 09, 2025",
//       learners: "850",
//       category: "Data Science",
//       rating: 4.9,
//       image: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=1470&auto=format&fit=crop"
//     },
//     {
//       title: "Data Visualization with Tableau",
//       price: "$33.00",
//       date: "Jan 09, 2026",
//       learners: "2,100",
//       category: "Data Science",
//       rating: 4.7,
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
//     },
//     {
//       title: "Numpy Essentials for Data Science",
//       price: "$35.00",
//       date: "Jan 09, 2026",
//       learners: "1,120",
//       category: "Data Science",
//       rating: 5.0,
//       image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
//     }
//   ];

//   return (
//     <section className="py-20 bg-[#F9FAFB]">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* --- Header --- */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-200 pb-8">
//           <div className="text-center md:text-left mb-6 md:mb-0">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Start Your Journey</h2>
//             <p className="text-gray-500 max-w-md">Explore expert-led courses designed to advance your professional skills.</p>
//           </div>
//           <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
//             View All Courses <ArrowRight size={18} />
//           </button>
//         </div>

//         {/* --- Navigation Tabs --- */}
//         <div className="flex overflow-x-auto gap-4 mb-10 pb-2 no-scrollbar">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
//                 activeTab === tab 
//                 ? 'bg-blue-50 border-blue-600 text-blue-600' 
//                 : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* --- Course Grid --- */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {courses.map((course, index) => (
//             <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
//               {/* Image & Category Badge */}
//               <div className="relative h-44">
//                 <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
//                 <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-700 px-3 py-1 rounded text-xs font-bold shadow-sm uppercase">
//                   {course.category}
//                 </div>
//               </div>
              
//               <div className="p-5 flex flex-col h-full">
//                 {/* Rating & Title */}
//                 <div className="flex items-center gap-1 text-orange-500 mb-2">
//                   <Star size={14} fill="currentColor" />
//                   <span className="text-xs font-bold text-gray-700">{course.rating}</span>
//                 </div>
                
//                 <h3 className="font-bold text-gray-900 text-lg mb-4 line-clamp-2 leading-tight">
//                   {course.title}
//                 </h3>
                
//                 {/* Stats & Pricing */}
//                 <div className="mt-auto">
//                   <div className="flex items-center justify-between text-gray-400 text-xs font-semibold mb-4">
//                     <span className="flex items-center gap-1"><Calendar size={14} /> {course.date}</span>
//                     <span className="flex items-center gap-1"><Users size={14} /> {course.learners}</span>
//                   </div>
                  
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-50">
//                     <span className="text-2xl font-bold text-gray-900">{course.price}</span>
//                     <button className="text-blue-600 font-bold text-sm hover:underline">Enroll Now</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CourseListing;