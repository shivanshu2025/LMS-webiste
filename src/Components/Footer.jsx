import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  GraduationCap,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white pt-5 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Top Section: Brand & Newsletter --- */}
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-6">

            <img
              src="/img/Ai_Scholars_png.png"  
              alt="Ai Scholars"
              className="h-10 w-auto object-contain"
            />

            <p className="text-slate-500 font-medium leading-relaxed">
              Empowering learners and educators worldwide through flexible,
              expert-led online courses. Learn anytime, anywhere — with tools
              that help you grow.
            </p>

            <div className="flex flex-col gap-4">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, GraduationCap].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    >
                      <Icon size={18} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-2 bg-[#F8FAFF] rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-50">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900">
                Subscribe Our Newsletter
              </h3>
              <p className="text-slate-500 font-medium">
                Get the latest courses, tips & stories delivered to your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-64 bg-white font-medium"
              />
              <button className="bg-[#5B8FB9] hover:bg-[#4A7DA6] text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200">
                Subscribe <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Site Map & Contact --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-100">
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-black text-slate-900 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              {[
                'About Us',
                'All Courses',
                'Become An Instructor',
                'Our Blog',
                'Contact Us',
                'Help Center',
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-blue-600 cursor-pointer transition-colors w-fit"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Top Categories */}
          <div className="space-y-6">
            <h4 className="font-black text-slate-900 text-lg">
              Top Categories
            </h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              {[
                'Data Science',
                'Web Development',
                'Graphic Design',
                'Business & Marketing',
                'Personal Growth',
                'Science & Research',
              ].map((cat) => (
                <li
                  key={cat}
                  className="hover:text-blue-600 cursor-pointer transition-colors w-fit"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="font-black text-slate-900 text-lg">Legal</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              {[
                'Terms of Service',
                'Privacy Policy',
                'Instructors',
                'Success Story',
              ].map((legal) => (
                <li
                  key={legal}
                  className="hover:text-blue-600 cursor-pointer transition-colors w-fit"
                >
                  {legal}
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="space-y-6">
            <h4 className="font-black text-slate-900 text-lg">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm font-bold">
              <div className="flex gap-3 items-start">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <span className="text-slate-500">
                  support@olan.com
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <span className="text-slate-500">
                  +1 (800) 123-4567
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="text-blue-500 shrink-0" size={18} />
                <span className="text-slate-500 leading-relaxed">
                  123 Learning Lane,
                  <br />
                  Online City, World
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-50 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © 2026 Ai Scholars Learning Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
