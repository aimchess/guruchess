"use client"

import { motion } from "framer-motion"
import { Award, Users, Trophy, GraduationCap, Quote, Star, CheckCircle } from "lucide-react"

export default function FounderSection() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const stats = [
    { label: "Playing", value: "30+ Yrs", icon: <Trophy size={18} /> },
    { label: "Coaching", value: "22+ Yrs", icon: <GraduationCap size={18} /> },
    { label: "Students", value: "5000+", icon: <Users size={18} /> },
  ]

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT: Balanced Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Frame */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-white shadow-xl aspect-square sm:aspect-[4/5] lg:aspect-square">
                <img 
                  src="/founder.jpeg" // Replace with your actual image path
                  alt="Coach Shailendra Bajpai" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Compact FIDE Card - Balanced Positioning */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-4 lg:-right-10 z-20 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#2B5292] flex items-center justify-center shrink-0">
                    <img src="/fide-logo.png" alt="FIDE" className="w-6 h-6 invert" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400">FIDE Instructor</p>
                    <p className="text-sm font-bold text-slate-900 leading-none">Candidate Master</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 border-t pt-3">
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-400">FIDE ID</p>
                    <p className="text-xs font-black text-[#2B5292]">5014670</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-400">Rating</p>
                    <p className="text-xs font-black text-[#C2410C]">2203</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Balanced Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B5292]/10 text-[#2B5292]">
                <Star size={14} className="fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.15em]">Founder</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-slate-900">
                Shailendra <span style={{ color: brandOrange }}>Bajpai</span>
              </h2>
              
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Recognized internationally as a <span className="font-bold text-slate-900">Candidate Master (CM)</span>, Shailendra brings over two decades of professional coaching expertise to the board. His methodology focuses on psychological resilience as much as tactical precision.
              </p>
            </div>

            {/* Balanced Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="text-[#2B5292] mb-2">{stat.icon}</div>
                  <div className="text-lg font-black text-slate-900">{stat.value}</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Philosophy / Quote Section */}
            <div className="border-l-4 border-[#C2410C] pl-6 py-2">
              <p className="text-xl font-serif italic text-slate-800 mb-2">
                "Improve your thinking. <br /> Improve your chess."
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                  <CheckCircle size={14} className="text-green-500" /> Opening Strategy
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                  <CheckCircle size={14} className="text-green-500" /> FIDE Prep
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}