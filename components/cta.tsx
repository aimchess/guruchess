"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play, Trophy, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { BookDemoModal } from "./bookdemo" // Ensure path is correct

export function CallToAction() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false) // Added state
  // Brand Colors Extracted
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  return (
    <section className="py-20 bg-white overflow-hidden">
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* The Brand Orange Offset Shadow (Matching your reference style) */}
        <div 
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] md:rounded-[3.5rem] -z-10" 
          style={{ backgroundColor: brandOrange }}
        />

        {/* Main Brand Blue Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden p-8 md:p-14 lg:p-20 shadow-2xl"
          style={{ backgroundColor: brandBlue }}
        >
          {/* Background Decorative Trophy (Subtle Brand Identity) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
            <Trophy size={400} strokeWidth={1} color="white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* LEFT CONTENT (7 Columns) */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Enrollment Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg shadow-lg rotate-[-1deg]"
                style={{ backgroundColor: brandOrange }}
              >
                <Star size={14} fill="white" className="text-white" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white">
                  Enrollment Open 2026
                </span>
              </div>

              {/* Main Headline - Italic & High Weight */}
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-[1000] text-white italic leading-[1.05] tracking-tighter uppercase">
                Ready to <span style={{ color: brandOrange }}>Win</span> <br />
                Every Game?
              </h2>

              {/* Action Row */}
              <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
                  <Button onClick={() => {
                    setIsDemoModalOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                    className="w-full md:w-auto h-16 px-10 rounded-xl text-lg font-[1000] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_8px_0_0_#8b3308]"
                    style={{ backgroundColor: brandOrange, color: 'white' }}
                  >
                    BOOK FREE DEMO
                    <Play size={20} fill="white" />
                  </Button>

                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-3xl font-black text-white leading-none">2,000+</p>
                  <p className="text-[10px] font-bold text-blue-200 uppercase tracking-[0.2em] mt-1">
                    Happy Students Globally
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE (5 Columns) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              
              {/* Floating Trophy Badge */}
              <motion.div 
                animate={{ rotate: [12, 15, 12] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 right-4 md:-right-4 p-4 rounded-2xl shadow-2xl z-20"
                style={{ backgroundColor: brandOrange }}
              >
                <Trophy size={32} className="text-white" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-[400px] lg:max-w-none"
              >
                {/* Clean Chess Image from Internet */}
                <img 
                  src="/board.png" 
                  alt="Professional Chess Set" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Branding Badge on Image */}
                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded border border-white/10">
                   <p className="text-[9px] font-black text-white tracking-widest uppercase italic">Guru Chess Academy</p>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}