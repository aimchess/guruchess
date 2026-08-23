"use client"

import { motion } from "framer-motion"
import { Trophy, Target, Star, ChevronRight, MessageSquareQuote, ShieldCheck } from "lucide-react"
import Link from "next/link"

export function ReviewsHero() {
  const brandOrange = "#C2410C"
  const brandBlue = "#2B5292"

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#080c17]">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ach.jpg" 
          alt="Guru Chess Academy Student Reviews" 
          className="w-full h-full object-cover opacity-60 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c17] via-[#080c17]/85 to-transparent" />
      </div>

      {/* 2. CENTERED CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center space-y-6">
        
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span style={{ color: brandOrange }}>Reviews</span>
        </motion.div>

        {/* Main Headline */}
        <div className="space-y-2">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/60"
          >
            REAL STORIES OF TRIUMPH
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-serif tracking-tight leading-none text-white italic"
          >
            Student <br /> 
            <span>Reviews.</span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Discover how our personalized mentoring, advanced opening studies, and rigorous tactical training translate to FIDE ratings, national titles, and chess mastery.
        </motion.p>

        {/* Review Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="pt-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-2xl">
            <div className="p-2 rounded-lg bg-orange-500/20 text-[#C2410C]">
              <MessageSquareQuote size={20} fill="currentColor" className="text-[#C2410C]" />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-black text-white/40 uppercase tracking-widest leading-none">TRUSTED BY PARENTS & PROS</p>
              <p className="text-sm font-bold text-white uppercase tracking-tight">Genuine rating improvement reviews</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. VICTORY STATS BAR (Bottom Bar) */}
      <div className="absolute bottom-0 left-0 w-full z-10 border-t border-white/5 bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2 text-white">
                <Trophy size={20} style={{ color: brandOrange }} />
                <span className="text-2xl font-black tracking-tighter">300+ ELO</span>
              </div>
              <p className="text-[9px] text-white/30 font-black uppercase tracking-[0.2em]">Avg Rating Jump</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2 text-white">
                <Target size={20} style={{ color: brandOrange }} />
                <span className="text-2xl font-black tracking-tighter">7+ Years</span>
              </div>
              <p className="text-[9px] text-white/30 font-black uppercase tracking-[0.2em]">Mentorship Association</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck size={20} style={{ color: brandOrange }} />
                <span className="text-2xl font-black tracking-tighter">2370 FM</span>
              </div>
              <p className="text-[9px] text-white/30 font-black uppercase tracking-[0.2em]">Beaten in Classical</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2 text-white">
                <Star size={20} style={{ color: brandOrange }} />
                <span className="text-2xl font-black tracking-tighter">1700+ FIDE</span>
              </div>
              <p className="text-[9px] text-white/30 font-black uppercase tracking-[0.2em]">Average Student Rating</p>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-[#2B5292]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C2410C]/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  )
}
