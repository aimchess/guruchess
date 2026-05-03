"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Trophy, Star } from "lucide-react"

export function MissionVision() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const data = [
    {
      id: "01",
      title: "MISSION",
      description: "To provide a creative and structured environment for professional chess training, helping students master concentration, tactical calculation, and the power of imagination to ease the burden of modern education.",
      icon: <Target size={32} />,
      color: brandOrange,
      // Internal card tint
      bgColor: "#FFF9F5", 
      borderColor: "#FFDCC9"
    },
    {
      id: "02",
      title: "VISION",
      description: "To become a global leader in chess pedagogy, building an international school that transforms young enthusiasts into top-class competitive players and strategic thinkers ready for life's challenges.",
      icon: <Lightbulb size={32} />,
      color: brandBlue,
      // Internal card tint
      bgColor: "#F5F8FF",
      borderColor: "#D1E0FF"
    }
  ]

  return (
    <section className="py-24 bg-[#fbfcfd] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-gray-400">Our Strategic Foundation</h2>
          <h3 className="text-4xl md:text-5xl font-[1000] text-slate-900 tracking-tighter uppercase italic">
            Mission <span style={{ color: brandBlue }}>&</span> <span style={{ color: brandOrange }}>Vision</span>
          </h3>
          <div className="flex justify-center gap-1">
             <div className="h-1.5 w-12 rounded-full" style={{ backgroundColor: brandOrange }} />
             <div className="h-1.5 w-6 rounded-full" style={{ backgroundColor: brandBlue }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center pt-10"
            >
              {/* THE U-SHAPED COLORED HOLDER */}
              <div 
                className="absolute inset-x-[-12px] bottom-[-12px] top-0 rounded-[2.5rem] -z-10 shadow-lg"
                style={{ backgroundColor: item.color }}
              />

              {/* THE INTERNAL COLORED CARD */}
              <div 
                className="w-full rounded-[2rem] p-10 md:p-12 shadow-xl flex flex-col items-center text-center relative z-10 border-2"
                style={{ 
                  backgroundColor: item.bgColor,
                  borderColor: item.borderColor 
                }}
              >
                
                {/* Icon Container */}
                <div 
                  className="mb-6 p-4 rounded-2xl shadow-sm border border-white bg-white"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>

                <h4 className="text-2xl font-black tracking-widest uppercase mb-6" style={{ color: "#1a1a1a" }}>
                  {item.title}
                </h4>

                <p className="text-slate-700 font-bold leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {/* The Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white p-2 rounded-lg shadow-md border border-gray-50 rotate-12">
                   {idx === 0 ? <Trophy size={18} color={brandOrange} /> : <Star size={18} color={brandBlue} />}
                </div>
              </div>

              {/* THE NUMBERED TRAPEZE TAB */}
              <div 
                className="mt-[-2px] px-12 py-3 shadow-xl relative z-20 flex items-center justify-center"
                style={{ 
                  backgroundColor: item.color,
                  clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0% 100%)" 
                }}
              >
                <span className="text-white font-black text-xl tracking-tighter italic">
                  {item.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Grid */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10" />
    </section>
  )
}