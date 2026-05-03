"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, GraduationCap, BookOpen, Trophy } from "lucide-react"
import Link from "next/link"

export function CoursesBanner() {
  const brandOrange = "#C2410C"
  const brandBlue = "#2B5292"

  return (
    <section className="relative w-full h-[85vh] md:h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/course.webp" 
          alt="Guru Chess Academy Curriculum" 
          className="w-full h-full object-cover"
        />
        {/* Deep Overlay for high-end cinematic legibility */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 2. CENTERED CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-6">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-white/70"
        >
          Professional Chess Training • FIDE Standards
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] max-w-5xl mx-auto italic"
        >
          The path to <br /> 
          <span >Strategic Mastery.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium"
        >
          Explore our structured roadmap designed to transform beginners into 
          International Rated players through world-class pedagogy.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-4"
        >
          <Link href="#all-courses">
            <Button 
              className="h-14 px-10 rounded-full text-sm font-black tracking-widest uppercase shadow-2xl transition-all hover:scale-105 active:scale-95 group"
              style={{ backgroundColor: brandBlue, color: 'white' }}
            >
              View All Programs
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* 3. BOTTOM TRUST BAR (Curriculum Focused) */}
      <div className="absolute bottom-10 left-0 w-full z-10 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-12 text-white/70 uppercase text-[10px] font-black tracking-[0.2em]">
            
            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <GraduationCap size={18} style={{ color: brandOrange }} />
              <span>International Syllabus</span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <BookOpen size={18} style={{ color: brandOrange }} />
              <span>Structured Modules</span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <Trophy size={18} style={{ color: brandOrange }} />
              <span>Tournament Preparation</span>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Bottom Vignette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </section>
  )
}