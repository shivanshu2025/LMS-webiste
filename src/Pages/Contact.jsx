import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Twitter, Instagram, Disc } from 'lucide-react';

const Contact = () => {
  // Entrance animation for the whole card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 md:p-12 overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale-[20%]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')`, // You can replace this URL
        }}
      >
        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardVariants}
        className="relative z-10 max-w-6xl w-full bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
        
        {/* Left Side: Contact Information (Using #4682B4) */}
        <div className="md:w-2/5 bg-[#4682B4] p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute top-20 -left-10 w-32 h-32 bg-black/10 rounded-full blur-xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Contact Information</h2>
            <p className="text-blue-50/80 mb-12">Say something to start a live chat!</p>

            <div className="space-y-10">
              <motion.div whileHover={{ x: 8 }} className="flex items-center gap-6 group cursor-pointer">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone size={22} />
                </div>
                <span className="text-lg">+1012 3456 789</span>
              </motion.div>

              <motion.div whileHover={{ x: 8 }} className="flex items-center gap-6 group cursor-pointer">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail size={22} />
                </div>
                <span className="text-lg">demo@gmail.com</span>
              </motion.div>

              <motion.div whileHover={{ x: 8 }} className="flex items-center gap-6 group cursor-pointer">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <MapPin size={22} />
                </div>
                <span className="text-lg leading-relaxed">
                  132 Dartmouth Street Boston,<br/>
                  Massachusetts 02156 United States
                </span>
              </motion.div>
            </div>
          </div>

          {/* Social Icons with Animation */}
          <div className="flex gap-5 mt-16 relative z-10">
            {[Twitter, Instagram, Disc].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -5, backgroundColor: "#ffffff", color: "#4682B4" }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-3/5 p-8 md:p-14 bg-white">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-1.5 group">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 group-focus-within:text-[#4682B4]">First Name</label>
              <input type="text" placeholder="John" className="border-b border-gray-300 focus:border-[#4682B4] outline-none py-2 transition-all" />
            </div>

            <div className="flex flex-col gap-1.5 group">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 group-focus-within:text-[#4682B4]">Last Name</label>
              <input type="text" placeholder="Doe" className="border-b border-gray-300 focus:border-[#4682B4] outline-none py-2 transition-all" />
            </div>

            <div className="flex flex-col gap-1.5 group">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 group-focus-within:text-[#4682B4]">Email</label>
              <input type="email" placeholder="demo@gmail.com" className="border-b border-gray-300 focus:border-[#4682B4] outline-none py-2 transition-all" />
            </div>

            <div className="flex flex-col gap-1.5 group">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 group-focus-within:text-[#4682B4]">Phone Number</label>
              <input type="text" placeholder="+1 012 3456 789" className="border-b border-gray-300 focus:border-[#4682B4] outline-none py-2 transition-all" />
            </div>

            <div className="md:col-span-2 mt-2">
              <p className="text-sm font-bold text-gray-800 mb-5">Select Subject?</p>
              <div className="flex flex-wrap gap-6">
                {['General Inquiry', 'Support', 'Billing', 'Other'].map((item, idx) => (
                  <label key={item} className="flex items-center gap-2.5 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="subject" 
                      defaultChecked={idx === 0}
                      className="w-4 h-4 accent-[#4682B4] cursor-pointer" 
                    />
                    <span className="text-sm text-gray-600 group-hover:text-black transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-1.5 group">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 group-focus-within:text-[#4682B4]">Message</label>
              <textarea placeholder="Write your message.." className="border-b border-gray-300 focus:border-[#4682B4] outline-none py-2 transition-all resize-none h-20" />
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#36648B" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#4682B4] text-white px-12 py-4 rounded-md shadow-lg shadow-blue-200 font-bold transition-all"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;