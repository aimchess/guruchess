"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, Star, ChevronRight, Target, Users, Medal, GraduationCap, Globe, Trophy } from "lucide-react"

export default function DeepakKatiyarProfile() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const coachingMilestones = [
    { label: "Grandmaster Trained", value: "GM V. Karthik", icon: <Award size={20} /> },
    { label: "Peak ELO Rating", value: "2262", icon: <Target size={20} /> },
    { label: "Coaching Exp.", value: "13+ Yrs", icon: <GraduationCap size={20} /> },
    { label: "Playing Exp.", value: "25+ Yrs", icon: <Trophy size={20} /> },
  ]

  const studentSuccess = [
    { name: "Kiyana Parihar", achievement: "Asian Youth Gold Medalist (U-8)" },
    { name: "Ojas Joshi", achievement: "Rajasthan State Champion (U-13)" },
    { name: "Aanya Agarwal", achievement: "Delhi State Women's Champion" },
    { name: "Vimarsha C Arjun", achievement: "SGFI Nationals Bronze" },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* TOP IDENTITY ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          
          {/* Left: Cinematic Image with Credential Overlay */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Image Frame */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl aspect-[4/5]">
                <img 
                  src="/deepak.jpg" // Place your image in public folder
                  alt="Coach Deepak Katiyar" 
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c17]/80 via-transparent to-transparent" />
              </div>

              {/* FIDE Credential Floating Card */}
              <div className="absolute -bottom-10 -right-4 md:-right-10 z-20 bg-white p-6 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 max-w-[280px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 text-[#2B5292]">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">FIDE Instructor</p>
                    <p className="text-base font-[1000] text-slate-900 leading-tight">Candidate Master</p>
                  </div>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-tight">
                    <span className="text-slate-400">AICF Trainer</span>
                    <span style={{ color: brandBlue }}>Certified</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-tight">
                    <span className="text-slate-400">CIS Certified</span>
                    <span style={{ color: brandOrange }}>Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Academic Story & Philosophy */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B5292]/10 text-[#2B5292]">
                <Star size={14} fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Senior Technical Mentor</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter text-slate-900 leading-none italic uppercase">
                Deepak {" "} <span style={{ color: brandOrange }}>Katiyar</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {coachingMilestones.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all">
                  <div className="mb-2 transition-transform group-hover:scale-110" style={{ color: brandBlue }}>{stat.icon}</div>
                  <p className="text-lg font-black text-slate-900 leading-tight">{stat.value}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-lg">
              <p>
                With over <span className="text-slate-900 font-bold">25 years of global tournament experience</span>, Deepak Katiyar specializes in game-theoretic SWOT analysis. His pedagogy ensures that tactical blunders are eliminated through a deep understanding of logical piece coordination.
              </p>
              <p className="text-base italic border-l-4 pl-6" style={{ borderColor: brandOrange }}>
                "The best way to improve is by analyzing your own games and ensuring the same set of mistakes are never repeated. My coaching is tailored for every phase—from Opening to Endgame."
              </p>
            </div>

            {/* Institution Roster */}
            <div className="pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-4">Professional Affiliations</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                    {["Cyber Chess", "Chess7.com", "Nurtr", "Chess Gaja"].map(brand => (
                        <span key={brand} className="text-sm font-black uppercase italic tracking-tighter">{brand}</span>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: STUDENT SUCCESS & METHODOLOGY (Bento Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Success List (7 Cols) */}
           <div className="lg:col-span-7 bg-[#080c17] rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: brandOrange }}><Medal size={20} /></div>
                    <h3 className="text-2xl font-black uppercase tracking-tight italic">Hall of Students</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {studentSuccess.map((student, i) => (
                        <div key={i} className="space-y-1 group">
                            <p className="text-sm font-black text-white group-hover:text-orange-400 transition-colors uppercase tracking-tight">{student.name}</p>
                            <p className="text-[11px] font-bold text-blue-200/50 uppercase tracking-widest">{student.achievement}</p>
                        </div>
                    ))}
                </div>
              </div>
              <div className="absolute right-[-5%] bottom-[-5%] opacity-5 rotate-12">
                 <Trophy size={300} />
              </div>
           </div>

           {/* Methodology Card (5 Cols) */}
           <div className="lg:col-span-5 bg-slate-50 rounded-[3rem] p-10 md:p-12 border border-slate-100 flex flex-col justify-center">
              <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-[0.4em]" style={{ color: brandBlue }}>The Approach</h4>
                <h3 className="text-3xl font-[1000] text-slate-900 leading-none uppercase italic">Tailored <br /> SWOT Analysis.</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  Deepak leverages recent tournament data to perform a quick SWOT analysis of every student. This results in a custom-tailored coaching roadmap focusing on your specific piece-movement psychology.
                </p>
                <div className="pt-4">
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all hover:gap-4" style={{ color: brandOrange }}>
                        Book Evaluation with Deepak <ChevronRight size={16} />
                    </button>
                </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  )
}