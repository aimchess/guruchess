"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  Zap, 
  BrainCircuit, 
  Trophy, 
  Users, 
  Rocket,
  ChevronRight
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { BookDemoModal } from "./bookdemo" // Ensure path is correct

export function WhyChooseUs() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false) // Added state
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const features = [
    {
      title: "Tactical Quest",
      desc: "We turn complex chess theory into an epic gamified journey.",
      icon: <Zap size={20} />,
      iconBg: "#FFF7F2",
      iconColor: brandOrange
    },
    {
      title: "IQ Level Up",
      desc: "Sharpen memory, logic, and extreme concentration.",
      icon: <BrainCircuit size={20} />,
      iconBg: "#F0F4F8",
      iconColor: brandBlue
    },
    {
      title: "Elite Mentors",
      desc: "Learn from FIDE-rated experts who build real champions.",
      icon: <Trophy size={20} />,
      iconBg: "#F0F4F8",
      iconColor: brandBlue
    },
    {
      title: "Small Batches",
      desc: "Personalized attention to ensure your progress never stalls.",
      icon: <Users size={20} />,
      iconBg: "#FFF7F2",
      iconColor: brandOrange
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: IMAGE SECTION */}
          <div className="relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="/why.jpg" 
                alt="Academy Experience" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                THE ACADEMY EXPERIENCE <Zap size={14} fill={brandOrange} className="text-[#C2410C]" />
              </div>
            </motion.div>

            {/* Floating Results Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-2 md:-right-6 bg-white p-3 md:p-4 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-3 z-20"
            >
              <div className="bg-[#C2410C] p-2.5 rounded-xl text-white">
                <Rocket size={20} />
              </div>
              <div>
                <p className="text-lg font-black leading-none" style={{ color: brandBlue }}>10x Faster</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Growth Results</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: COMPACT CONTENT SECTION */}
          <div className="flex flex-col justify-center space-y-5 order-1 lg:order-2">
            
            <div 
              className="w-fit px-3 py-1 rounded-md border text-[9px] font-black uppercase tracking-[0.2em]"
              style={{ borderColor: `${brandBlue}30`, color: brandBlue, backgroundColor: `${brandBlue}05` }}
            >
              Why Guru Chess Academy?
            </div>

            <h2 className="text-3xl md:text-5xl font-[1000] leading-tight tracking-tighter text-[#1a1a1a]">
              Not Just a Class. <br />
              It's a <span style={{ color: brandBlue }}>Superpower.</span>
            </h2>

            {/* Tighter Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-md font-black mb-1 text-gray-800">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 font-semibold leading-snug">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Compact CTA */}
            <div className="pt-4">
                <Button onClick={() => {
                    setIsDemoModalOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                  className="h-14 px-8 rounded-xl text-md font-black transition-all hover:translate-y-[-2px] active:scale-95 shadow-xl shadow-blue-900/10"
                  style={{ backgroundColor: brandBlue, color: 'white' }}
                >
                  JOIN THE ACADEMY
                  <ChevronRight size={18} className="ml-2" />
                </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}