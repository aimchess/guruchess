"use client"

import { motion } from "framer-motion"
import { Sparkles, Puzzle, Trophy, Gamepad2 } from "lucide-react"

export function LearningIsFun() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const features = [
    {
      title: "Interactive Classes",
      desc: "Beyond the textbooks. We use digital interactive boards and live storytelling to bring every piece to life.",
      image: "/class.png",
      icon: <Sparkles size={24} />,
      color: brandBlue
    },
    {
      title: "Puzzles & Mini-Games",
      desc: "Solving tactical mysteries! Our 'Knight's Tour' and 'King of the Hill' games make learning tactics an absolute blast.",
      image: "/puzzle.png",
      icon: <Puzzle size={24} />,
      color: brandOrange
    },
    {
      title: "Friendly Competitions",
      desc: "Small-scale academy tournaments designed to build confidence, sportsmanship, and lasting friendships.",
      image: "/game.png",
      icon: <Trophy size={24} />,
      color: brandBlue
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-[0.3em]"
              style={{ borderColor: `${brandOrange}40`, color: brandOrange, backgroundColor: `${brandOrange}05` }}
            >
              <Gamepad2 size={14} />
              The Kid's Corner
            </div>
            <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 leading-tight tracking-tighter uppercase italic">
              Learning <span style={{ color: brandBlue }}>=</span> <span style={{ color: brandOrange }}>Fun Here.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-lg">
              We bridge the gap between serious strategy and playful engagement, 
              ensuring every child falls in love with the game first.
            </p>
          </div>
          
          <div className="hidden lg:block">
             <div className="h-24 w-24 rounded-full border-4 border-dashed border-slate-100 flex items-center justify-center animate-spin-slow">
                <div className="h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center" style={{ color: brandOrange }}>
                    ♘
                </div>
             </div>
          </div>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* Image Container with Organic Radius (Kid Friendly) */}
              <div className="relative h-[300px] mb-8">
                <div 
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-[3rem] -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"
                  style={{ backgroundColor: `${item.color}15` }}
                />
                <div className="h-full w-full rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                        <div className="p-3 bg-white/90 backdrop-blur shadow-lg rounded-2xl" style={{ color: item.color }}>
                            {item.icon}
                        </div>
                    </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2 space-y-3">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-[#2B5292] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-2 flex items-center gap-2">
                    <div className="h-1 w-8 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Strategy through play</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}