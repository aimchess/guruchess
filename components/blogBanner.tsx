"use client"

import { motion } from "framer-motion"
import { BookOpen, ChevronDown, PenTool, Lightbulb, GraduationCap } from "lucide-react"

export function BlogHero() {
  const brandOrange = "#C2410C"
  const brandBlue = "#2B5292"

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/blog.jpeg" // A high-quality strategy/chess focus shot
          alt="Guru Chess Blog" 
          className="w-full h-full object-cover"
        />
        {/* Deep Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]" />
      </div>

      {/* 2. CENTERED CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-4"
        >
          <BookOpen size={14} style={{ color: brandOrange }} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">The Knowledge Base</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] max-w-5xl mx-auto italic"
        >
          Strategic <span style={{ color: brandOrange }}>Insights,</span> <br /> 
          <span className="text-white/90 font-light">Tactical Mastery.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium"
        >
          Expert coaching tips, parenting guides, and grandmaster level 
          analysis to help you stay ahead of the game.
        </motion.p>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="pt-10 flex justify-center"
        >
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40">
                <ChevronDown size={20} />
            </div>
        </motion.div>
      </div>

      {/* 3. BOTTOM TRUST BAR (Blog Specific) */}
      <div className="absolute bottom-10 left-0 w-full z-10 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-12 text-white/70 uppercase text-[10px] font-black tracking-[0.2em]">
            
            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <PenTool size={18} style={{ color: brandOrange }} />
              <span>Expert Analysis</span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <Lightbulb size={18} style={{ color: brandOrange }} />
              <span>Tactical Tips</span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <GraduationCap size={18} style={{ color: brandOrange }} />
              <span>Parenting Guides</span>
            </div>

          </div>
        </div>
      </div>

     
    </section>
  )
}