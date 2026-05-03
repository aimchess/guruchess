"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Trophy, BrainCircuit, Users, Star, ChevronRight, Zap } from "lucide-react"

export function WhyDifferent() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const features = [
    {
      title: "The Mentor Difference",
      standard: "Local hobbyist players",
      guru: "FIDE-Rated Professional Mentors",
      icon: <Users size={22} />,
      position: "left",
      color: brandBlue,
    },
    {
      title: "The Tactical Edge",
      standard: "Generic puzzle solving",
      guru: "Scientific GM Calculation Frameworks",
      icon: <BrainCircuit size={22} />,
      position: "left",
      color: brandBlue,
    },
    {
      title: "The Mindset Shift",
      standard: "Focus on winning/losing",
      guru: "Building Emotional IQ & Resilience",
      icon: <ShieldCheck size={22} />,
      position: "right",
      color: brandOrange,
    },
    {
      title: "The Roadmap",
      standard: "Casual weekly sessions",
      guru: "Professional Tournament Success Plan",
      icon: <Trophy size={22} />,
      position: "right",
      color: brandOrange,
    }
  ]

  return (
    <section className="py-24 bg-[#fcfdff] overflow-hidden relative">
      {/* PREMIUM BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(${brandBlue} 2px, transparent 2px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 mb-6"
          >
            <Zap size={14} fill={brandOrange} className="text-[#C2410C]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">The Methodology</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter uppercase italic leading-none">
            How We Are <span style={{ color: brandBlue }}>Differently</span> <span style={{ color: brandOrange }}>Wired.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* LEFT CARDS */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3 order-2 lg:order-1">
            {features.filter(f => f.position === "left").map((item, idx) => (
              <FeatureCard key={idx} item={item} idx={idx} isRight={false} color={brandBlue} />
            ))}
          </div>

          {/* CENTER IMAGE WITH ANIMATED RINGS */}
          <div className="relative w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Rotating Dashed Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-25px] border-2 border-dashed border-slate-200 rounded-full"
                />
                
                {/* Main Image Container */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    <img 
                      src="/whydi.jpg" // Replace with your image
                      alt="The Guru Student"
                      className="w-full h-full object-cover"
                    />
                </div>

        
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-8 w-full lg:w-1/3 order-3">
            {features.filter(f => f.position === "right").map((item, idx) => (
              <FeatureCard key={idx} item={item} idx={idx} isRight={true} color={brandOrange} />
            ))}
          </div>

        </div>

      
      </div>
    </section>
  )
}

function FeatureCard({ item, idx, isRight, color }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.2 }}
      whileHover={{ y: -5 }}
      className={`
        relative bg-white p-7 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] 
        border border-slate-50 flex items-start gap-6 group transition-all duration-500
        ${isRight ? 'lg:flex-row-reverse text-right lg:text-left' : ''}
      `}
    >
      {/* Side Color bar */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 
        ${isRight ? '-right-0.5' : '-left-0.5'}`}
        style={{ backgroundColor: color }}
      />

      {/* Icon Container */}
      <div 
        className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
        style={{ backgroundColor: `${color}08`, color: color, border: `1px solid ${color}15` }}
      >
        {item.icon}
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="font-black uppercase tracking-tight text-slate-800 text-sm">
          {item.title}
        </h4>
        
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 opacity-40">
            <div className="w-1 h-1 rounded-full bg-slate-400" />
            <p className="text-[10px] font-bold line-through text-slate-500 uppercase tracking-wider italic">
              {item.standard}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
            <p className="text-[11px] font-extrabold text-slate-700 leading-relaxed uppercase tracking-tighter">
              {item.guru}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}