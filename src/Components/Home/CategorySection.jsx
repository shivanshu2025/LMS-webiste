import React from 'react'
import { motion } from 'framer-motion'
import {
    Database,
    Laptop,
    Heart,
    GraduationCap,
    Languages,
    User,
    Search,
    PenTool,
    Megaphone,
} from 'lucide-react'

const CategorySection = () => {
    const categories = [
        { name: 'Data Science', icon: <Database />, color: 'bg-blue-50 text-blue-600' },
        { name: 'Tech & Development', icon: <Laptop />, color: 'bg-indigo-50 text-indigo-600' },
        { name: 'Health & Wellness', icon: <Heart />, color: 'bg-orange-50 text-orange-600' },
        { name: 'Academic Tutoring', icon: <GraduationCap />, color: 'bg-cyan-50 text-cyan-600' },
        { name: 'Language Learning', icon: <Languages />, color: 'bg-red-50 text-red-600' },
        { name: 'Personal Growth', icon: <User />, color: 'bg-purple-50 text-purple-600' },
        { name: 'Marketing & SEO', icon: <Megaphone />, color: 'bg-slate-50 text-slate-600' },
        { name: 'Science & Research', icon: <Search />, color: 'bg-yellow-50 text-yellow-600' },
        { name: 'Design & Creativity', icon: <PenTool />, color: 'bg-teal-50 text-teal-600' },
    ]

    // Animation Variants for the Container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Each card starts 0.1s after the previous one
            },
        },
    }

    // Animation Variants for individual cards
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    return (
        <section className=" bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header with Parallax Reveal */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-3"
                >
                    <h2 className="text-4xl font-black text-slate-900 relative inline-block">
                        Top Course Categories
                        <motion.span 
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 bg-orange-400 rounded-full" 
                        />
                    </h2>
                    <p className="text-slate-500 text-lg font-medium">
                        Choose from industry-relevant topics curated by experts.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -8, 
                                scale: 1.02,
                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" 
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-5 px-6 py-5 rounded-full border border-slate-100 bg-white cursor-pointer group relative z-10 transition-colors hover:border-orange-100"
                        >
                            {/* Icon Background with subtle rotation parallax */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className={`w-14 h-14 rounded-full flex items-center justify-center ${cat.color} shadow-inner`}
                            >
                                {React.cloneElement(cat.icon, { size: 24, strokeWidth: 2.5 })}
                            </motion.div>

                            <div className="flex flex-col">
                                <span className="font-bold text-slate-800 text-base group-hover:text-orange-500 transition-colors">
                                    {cat.name}
                                </span>
                                <span className="text-xs text-slate-400 font-medium">Explore Courses →</span>
                            </div>
                            
                            {/* Subtle background glow on hover */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default CategorySection