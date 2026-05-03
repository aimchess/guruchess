"use client"

import { motion } from "framer-motion"
import { Trophy, Star, ShieldCheck, Crown, Medal, Target } from "lucide-react"

export function Achievements() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const achievements = [
    {
      name: "Viha Jain",
      title: "Inter-School Champion",
      status: "ELITE",
      desc: "Secured 2nd Place in Team Competition and 3rd Place individually on the First Board.",
      image: "https://images.unsplash.com/photo-1596495573105-d1465b77591c?q=80&w=400&h=400&fit=crop",
      flag: "🇮🇳",
      themeColor: brandBlue,
      bgColor: "#EBF1FF", // Very light blue tint
      borderColor: "#D1E0FF",
      icon: <Crown size={20} fill="currentColor" />
    },
    {
      name: "Aamir Yassar",
      title: "FIDE Rated: 1450",
      status: "GLOBAL",
      desc: "Earned official international recognition and a global chess ranking from FIDE.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=400&h=400&fit=crop",
      flag: "🇮🇳",
      themeColor: brandOrange,
      bgColor: "#FFF2EB", // Very light orange tint
      borderColor: "#FFDCC9",
      icon: <Target size={20} />
    },
    {
      name: "Aaryash",
      title: "Seigle Cup Gold",
      status: "CHAMPION",
      desc: "Demonstrated exceptional strategy to be crowned Winner in this prestigious tournament.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400&h=400&fit=crop",
      flag: "🇺🇸",
      themeColor: "#D97706",
      bgColor: "#FFF9E6", // Very light gold tint
      borderColor: "#FCE49F",
      icon: <Trophy size={20} fill="currentColor" />
    },
    {
      name: "Rohan V.",
      title: "National Merit",
      status: "PRODIGY",
      desc: "Placed in the top 10 at the National U-12 Championship with a perfect tactical score.",
      image: "https://images.unsplash.com/photo-1503919919749-61746da6197f?q=80&w=400&h=400&fit=crop",
      flag: "🇮🇳",
      themeColor: "#0D9488",
      bgColor: "#E6F7F5", // Very light teal tint
      borderColor: "#BEECE6",
      icon: <Medal size={20} fill="currentColor" />
    }
  ]

  const scrollItems = [...achievements, ...achievements]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter ">
            Academy <span style={{ color: brandBlue }}>Hall of Fame</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#C2410C] mx-auto rounded-full" />
          <p className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] pt-2">
            Celebrating Excellence in Strategic Warfare
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1640] }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Slightly slower for better readability
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {scrollItems.map((item, idx) => (
            <div key={idx} className="inline-block px-4 w-[360px] md:w-[400px]">
              <div 
                className="relative flex flex-col rounded-[3rem] p-8 border-2 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 whitespace-normal group"
                style={{ 
                  backgroundColor: item.bgColor, 
                  borderColor: item.borderColor 
                }}
              >
                
                {/* Header: Portrait & Identity */}
                <div className="flex items-start justify-between mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl overflow-hidden border-4 border-white shadow-lg relative z-10">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div 
                      className="absolute -top-3 -right-3 z-20 text-white p-2 rounded-xl shadow-lg rotate-12 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: item.themeColor }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <div className="text-right">
                    <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-1">
                      {item.name}
                    </h3>
                    <span 
                      className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full border border-white bg-white/50"
                      style={{ color: item.themeColor }}
                    >
                      {item.status}
                    </span>
                    <div className="mt-3 text-xl">{item.flag}</div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-8 rounded-full" style={{ backgroundColor: item.themeColor }} />
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Official Achievement</span>
                  </div>
                  
                  <h4 className="text-2xl font-[1000] uppercase tracking-tighter leading-[1.1] min-h-[3.5rem] break-words" style={{ color: item.themeColor }}>
                    {item.title}
                  </h4>
                  
                  <p className="text-[12px] text-slate-600 font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Verified Footer */}
                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-slate-400" />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                      Verified Academy Record
                    </span>
                  </div>
                  <Trophy size={16} className="text-slate-300 opacity-30 group-hover:opacity-100 transition-all duration-500" style={{ color: item.themeColor }} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}