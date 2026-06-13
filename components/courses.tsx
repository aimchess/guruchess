"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Trophy, ChevronRight, Target, Star } from "lucide-react"
import { useState } from "react"
import { BookDemoModal } from "./bookdemo"

export function Courses() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const courseData = [
    {
      title: "Beginner",
      level: "Pawn Level",
      description: "Start your journey with fundamental rules, movements, and basic checkmate patterns.",
      image: "/beg.jpg",
      rating: "Unrated - 800",
      features: ["Piece Values", "Board Notation", "Basic Mates"],
      accent: brandBlue
    },
    {
      title: "Intermediate",
      level: "Knight Level",
      description: "Master tactical motifs like forks and pins while learning basic opening principles.",
      image: "/inter.jpg",
      rating: "800 - 1300",
      features: ["Tactics Lab", "Opening Repertoire", "Game Analysis"],
      accent: brandOrange
    },
    {
      title: "Advanced",
      level: "Rook Level",
      description: "Focus on positional play, deep calculation, and complex endgame maneuvers.",
      image: "/adv.jpg",
      rating: "1300 - 1800",
      features: ["Positional Play", "Complex Endgames", "Calculation"],
      accent: brandBlue
    },
    {
      title: "Master Elite",
      level: "Exclusive 1-on-1",
      description: "We provide personalized one-on-one classes led by Titled ",
      highlight: "2200+ Rated Coaches",
      suffix: " for future masters.",
      image: "/mas.avif",
      rating: "2200+ Rated",
      features: ["Personalized 1-on-1", "Titled Master Mentors", "Tournament Prep"],
      accent: brandOrange,
      isElite: true // Added flag for special styling
    }
  ]

  return (
    <section className="relative py-20 md:py-28 bg-[#f8faff] overflow-hidden">
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(${brandBlue}20 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#2B5292]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#C2410C]/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-[1000] text-[#1a1a1a] tracking-tighter leading-none mb-6"
          >
            Structured <span style={{ color: brandBlue }}>Learning</span> <br className="hidden md:block" /> 
            Path to <span style={{ color: brandOrange }}>Mastery</span>
          </motion.h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
            From your first move to the international stage
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseData.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col bg-white rounded-[2.5rem] border ${course.isElite ? 'border-orange-200' : 'border-gray-100'} shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(43,82,146,0.15)] transition-all duration-500 group overflow-hidden`}
            >
              <div className="relative h-48 md:h-56 bg-gray-50 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur shadow-sm px-3 py-1 rounded-lg border border-gray-100 flex items-center gap-2">
                    {course.isElite ? <Star size={12} fill={brandOrange} className="text-orange-500" /> : <Target size={12} style={{ color: course.accent }} />}
                    <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">{course.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-6 flex flex-col flex-grow">
                <div className="mb-5">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 block ${course.isElite ? 'animate-pulse' : ''}`} style={{ color: course.accent }}>
                    {course.level}
                  </span>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    {course.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed mb-6">
                  {course.description}
                  {course.highlight && (
                    <span className="font-bold" style={{ color: brandOrange }}>{course.highlight}</span>
                  )}
                  {course.suffix}
                </p>

                <ul className="space-y-3 mb-8">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-700 uppercase">
                      <div className="p-1 rounded-full bg-gray-50 shadow-sm" style={{ color: course.accent }}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button onClick={() => setIsDemoModalOpen(true)}
                    className="w-full h-14 rounded-2xl font-black text-[11px] tracking-widest uppercase transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1"
                    style={{ backgroundColor: course.accent, color: 'white' }}
                >
                    Book Demo
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}