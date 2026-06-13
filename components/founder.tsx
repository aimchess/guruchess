"use client"

import { motion } from "framer-motion"
import { Award, Users, Trophy, GraduationCap, Star, CheckCircle, ShieldCheck } from "lucide-react"

export default function ShailendraSection() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const stats = [
    { label: "Playing", value: "30+ Yrs", icon: <Trophy size={18} /> },
    { label: "Coaching", value: "22+ Yrs", icon: <GraduationCap size={18} /> },
    { label: "Students", value: "5000+", icon: <Users size={18} /> },
  ]

  return (
    <section className="py-24 bg-[#FCFAF8] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT: Cinematic Portrait Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Accent Background */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] -z-10 opacity-10" style={{ backgroundColor: brandBlue }} />
              
              {/* Main Image Frame */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl aspect-[4/5] lg:aspect-square">
                <img 
                  src="/founder.jpeg" 
                  alt="Shailendra Bajpai" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Verified FIDE Credential Card */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-4 lg:-right-8 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[260px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2B5292] flex items-center justify-center shrink-0 shadow-lg">
                    <img src="/fide-logo.png" alt="FIDE" className="w-8 h-8 invert opacity-90" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400">FIDE Instructor</p>
                    <p className="text-base font-black text-slate-900 leading-none">Candidate Master</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-4">
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-400 mb-1">FIDE ID</p>
                    <p className="text-sm font-black" style={{ color: brandBlue }}>5014670</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-400 mb-1">Peak Rating</p>
                    <p className="text-sm font-black" style={{ color: brandOrange }}>2203</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: High-End Content Side */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              {/* Multi-Role Badge */}
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B5292] text-white shadow-lg shadow-blue-900/20">
                  <Star size={12} fill="white" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Chief Patron</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-slate-200 text-slate-500 bg-white">
                  <ShieldCheck size={12} />
                  <span className="text-[10px] font-black uppercase tracking-[0.1em]">Honorary Advisor</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-none tracking-tight">
                  Shailendra <span style={{ color: brandOrange }}>Bajpai</span>
                </h2>
                <p className="text-sm font-black uppercase tracking-[0.4em] text-slate-400 pl-1">Coach & Mentor</p>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                With a legacy spanning over <span className="font-bold text-slate-900">30 years on the professional circuit</span>, Shailendra Bajpai serves as the Chief Patron and Honorary Advisor of Guru Chess Academy. A recognized <span className="font-bold text-[#2B5292]">Candidate Master (CM)</span>, his leadership ensures that the academy's pedagogy remains at the global frontier of chess excellence.
              </p>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500">
                  <div className="mb-3 transition-transform group-hover:scale-110" style={{ color: brandBlue }}>{stat.icon}</div>
                  <div className="text-xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Strategic Pillars */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center" style={{ color: brandOrange }}>
                      <CheckCircle size={20} />
                   </div>
                   <div>
                      <p className="text-xs font-black uppercase tracking-tight text-slate-900">Curriculum Design</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">FIDE Standards</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center" style={{ color: brandBlue }}>
                      <Award size={20} />
                   </div>
                   <div>
                      <p className="text-xs font-black uppercase tracking-tight text-slate-900">National Impact</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">State Champions</p>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}