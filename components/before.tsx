"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, XCircle, CheckCircle2, Zap, Target, Brain } from "lucide-react"

export function PlayerTransformation() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-gray-400">The Evolution of a Player</h2>
          <h3 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter uppercase italic">
            The <span style={{ color: brandBlue }}>Academy</span> <span style={{ color: brandOrange }}>Impact.</span>
          </h3>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            Witness the transformation from tactical confusion to strategic dominance. 
            We don't just teach moves; we build mindsets.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* THE "VS" DIVIDER (Desktop Only) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-white shadow-2xl border-4 border-slate-50 items-center justify-center font-black italic text-slate-300">
            VS
          </div>

          {/* 1. BEFORE JOINING (Muted Style) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-200" />
            
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-slate-50 text-slate-400">
                <TrendingDown size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-800 uppercase tracking-tight">Before Joining</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Initial State</p>
              </div>
            </div>

            <ul className="space-y-6 flex-grow">
              {[
                { text: "Random Moves", sub: "Playing without a concrete plan or logic." },
                { text: "Confused in Openings", sub: "Getting trapped in the first 10 moves." },
                { text: "Losing Quickly", sub: "Missing simple tactics and blundering pieces." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start grayscale">
                  <XCircle size={20} className="text-red-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-base font-bold text-slate-600 tracking-tight">{item.text}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Decorative Icon */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.02] rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                <Brain size={200} />
            </div>
          </motion.div>

          {/* 2. AFTER JOINING (Brand Highlight Style) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] p-10 border-4 border-white shadow-2xl flex flex-col group overflow-hidden text-white"
            style={{ backgroundColor: brandBlue }}
          >
            {/* Bright Orange Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: brandOrange }} />
            
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div className="p-3 rounded-2xl bg-white/10 text-white shadow-inner">
                <TrendingUp size={28} />
              </div>
              <div>
                <h4 className="text-xl font-black uppercase tracking-tight">After Academy</h4>
                <p className="text-[10px] font-bold text-blue-200/60 uppercase tracking-widest">The Transformation</p>
              </div>
            </div>

            <ul className="space-y-6 flex-grow relative z-10">
              {[
                { text: "Planned Strategies", sub: "Every move has a purpose and a deep goal.", icon: <Target /> },
                { text: "Strong Openings", sub: "Dominating the board from the very first move.", icon: <Zap /> },
                { text: "Confident Gameplay 💪", sub: "Handling pressure with ease and precision.", icon: <CheckCircle2 /> }
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex gap-4 items-start"
                >
                  <div style={{ color: brandOrange }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-base font-bold text-white tracking-tight uppercase">{item.text}</p>
                    <p className="text-xs text-blue-100/60 font-medium leading-relaxed">{item.sub}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Glowing Accent */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full" />
            
            {/* Decorative Knight Piece */}
            <div className="absolute bottom-6 right-6 opacity-10 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700">
               <span className="text-8xl">♘</span>
            </div>
          </motion.div>

        </div>

        {/* Action Suggestion */}
        <div className="mt-12 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
                Are you ready to level up?
            </p>
        </div>
      </div>
    </section>
  )
}