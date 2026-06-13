"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, Star, ChevronRight, Target } from "lucide-react"

export function FounderSection() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  return (
    <section className="py-24 bg-[#FCFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* 1. IMAGE SIDE (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Elegant Background Glow */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#2B5292]/5 rounded-full blur-3xl -z-10" />
            
            {/* The Main Portrait */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white group">
              <img 
                src="/annu.png" // Replace with your uploaded image
                alt="Annu Bajpai - Founder" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Corner Badge */}
              <div className="absolute top-8 right-8 bg-[#C2410C] text-white p-4 rounded-2xl shadow-2xl rotate-12">
                <Award size={24} />
              </div>
            </div>

          
          </motion.div>

          {/* 2. TEXT SIDE (6 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="h-px w-12 bg-[#C2410C]" />
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-[#C2410C]">The Visionary</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#092044] tracking-tighter leading-none">
                Annu Bajpai
              </h2>
              <p className="text-lg font-bold uppercase tracking-[0.2em] text-slate-400">Founder & Chief Mentor</p>
            </div>

            {/* New Professional Description */}
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                As the cornerstone of Guru Chess Academy, Annu Bajpai has dedicated her career to 
                redefining how the "Mind Game" is taught to the next generation. Her approach 
                blends competitive rigor with a deep understanding of student psychology.
              </p>
              <p>
                Under her mentorship, the academy has evolved from a local hub into an 
                <span className="font-bold text-[#2B5292]"> International School of Chess</span>, 
                impacting over 2,000 students globally by bridging the gap between basic 
                piece movement and Grandmaster-level strategy.
              </p>
            </div>

            {/* THREE KEY PILLARS (The "Good Points") */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <Target size={20} style={{ color: brandBlue }} />
                <h4 className="font-black text-slate-800 text-xs uppercase tracking-widest">Pedagogy</h4>
                <p className="text-[11px] text-slate-400 font-bold leading-snug">Proprietary logic-based syllabus.</p>
              </div>
              <div className="space-y-2 border-l border-slate-200 pl-6">
                <Star size={20} style={{ color: brandBlue }} />
                <h4 className="font-black text-slate-800 text-xs uppercase tracking-widest">Excellence</h4>
                <p className="text-[11px] text-slate-400 font-bold leading-snug">Consistent State & National wins.</p>
              </div>
              <div className="space-y-2 border-l border-slate-200 pl-6">
                <ShieldCheck size={20} style={{ color: brandBlue }} />
                <h4 className="font-black text-slate-800 text-xs uppercase tracking-widest">Integrity</h4>
                <p className="text-[11px] text-slate-400 font-bold leading-snug">FIDE Standard training ethics.</p>
              </div>
            </div>

            <div className="pt-6">
               <button className="group flex items-center gap-3 bg-[#080c17] text-white px-8 py-5 rounded-2xl font-black text-xs tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-xl">
                  Connect with Annu <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}