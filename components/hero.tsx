"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ShieldCheck, Zap, Play, ChevronRight, BarChart3 } from "lucide-react"
import Image from "next/image" // Using Next.js Image for optimization
import { useState } from "react"
import { BookDemoModal } from "./bookdemo"

export function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  
  const brand = {
    blue: "#2B5292",
    orange: "#C2410C",
    bg: "#fdfdfd"
  }

  const openModal = () => setIsDemoModalOpen(true)

  return (
    <section className={`relative w-full bg-[${brand.bg}] pt-20 pb-12 lg:pt-12 lg:pb-32 overflow-hidden`}>
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      
      {/* Background Decorative Shapes */}
      <div className="hidden sm:block absolute top-0 right-0 w-1/3 h-full bg-[#2B5292]/5 -skew-x-12 translate-x-20 z-0" />
      <div className="absolute top-1/2 left-[-5%] w-24 h-24 border-[16px] border-[#C2410C]/5 rounded-full z-0 opacity-50 lg:opacity-100" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: BRAND STORY & ACTION */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-10">
            
            {/* Live Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-white shadow-sm border border-gray-100 w-fit px-4 py-2 rounded-lg"
            >
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-green-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">
                 <span style={{ color: brand.blue }}>Top Professional Academy</span>
              </span>
            </motion.div>

            {/* Typography Section */}
            <div className="space-y-4 md:space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-[1000] leading-[1.1] text-gray-900 tracking-tight"
              >
                Dominating the <br /> 
                <span style={{ color: brand.blue }}>64 Squares.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl font-medium leading-relaxed"
              >
                Go beyond basic moves. Join <span className="font-bold" style={{ color: brand.orange }}>Guru Chess Academy</span> to master tactical patterns and endgame precision under Titled Coaches.
              </motion.p>
            </div>

            {/* Action Zone */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto"
            >
              <Button 
                onClick={openModal}
                className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 rounded-xl text-base md:text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{ backgroundColor: brand.blue, color: 'white' }}
              >
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <button 
                onClick={openModal}
                className="flex items-center gap-3 group px-4 py-2 transition-opacity hover:opacity-80"
              >
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 flex items-center justify-center transition-all group-hover:bg-[#C2410C]/10 group-active:scale-90" style={{ borderColor: brand.orange }}>
                  <Play fill={brand.orange} size={18} className="ml-1 text-[#C2410C]" />
                </div>
                <span className="font-bold text-gray-700 tracking-tight text-sm md:text-base">Book Demo Class</span>
              </button>
            </motion.div>

            {/* Feature Bento Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-8 lg:pt-10 border-t border-gray-100 w-full">
              {[
                { icon: ShieldCheck, title: "FIDE Certified", desc: "Expert instruction.", color: brand.blue, bg: "bg-blue-50" },
                { icon: Zap, title: "Tactical IQ", desc: "Logic-building.", color: brand.orange, bg: "bg-orange-50" },
                { icon: BarChart3, title: "ELO Tracking", desc: "Rating analysis.", color: brand.blue, bg: "bg-blue-50" }
              ].map((feature, i) => (
                <div key={i} className="flex lg:flex-col lg:items-start items-center gap-4">
                  <div style={{ color: feature.color }} className={`p-2 ${feature.bg} rounded-lg`}>
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{feature.title}</h4>
                    <p className="text-[11px] md:text-xs text-gray-500 leading-tight">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: THE VISUAL ENGINE */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="hidden lg:block absolute -top-10 -right-10 w-32 h-32 opacity-10 pointer-events-none -z-10">
              <div className="grid grid-cols-4 gap-2 w-full h-full">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="bg-[#2B5292] rounded-sm" />
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-[2rem] md:rounded-[3rem] bg-white p-3 md:p-5 shadow-2xl lg:shadow-[0_50px_100px_-20px_rgba(43,82,146,0.15)] border border-gray-100 mx-auto max-w-[500px] lg:max-w-none"
            >
              {/* Main Visual Image Container */}
              <div className="aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-slate-100 relative">
                 <Image 
                  src="/main.png" 
                  alt="Chess Master" 
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Badge */}
              <div 
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl font-black text-[10px] md:text-xs tracking-widest shadow-xl rotate-3"
                style={{ backgroundColor: brand.orange }}
              >
                SINCE 2010
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}