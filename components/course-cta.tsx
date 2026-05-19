"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, Sparkles, Target } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { BookDemoModal } from "./bookdemo" // Ensure path is correct

export function DottedCTA() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false) // Added state

  return (
    <section className="py-12 md:py-20 bg-white">
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 shadow-2xl"
          style={{ backgroundColor: brandBlue }}
        >
          {/* 1. THE STRATEGIC DOT PATTERN */}
          <div 
            className="absolute inset-0 opacity-[0.15] pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1px)`, 
              backgroundSize: '24px 24px' 
            }} 
          />

          {/* 2. GLOW ACCENTS */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C2410C]/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="space-y-4 max-w-xl">
              {/* Micro Tag */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-lg">
                <Target size={14} className="text-orange-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                  Join the next batch
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl font-[1000] text-white leading-tight tracking-tighter uppercase italic">
                Your Path to <br className="hidden md:block" />
                <span style={{ color: brandOrange }}>Mastery</span> Starts Here.
              </h2>
              
              <p className="text-blue-100/70 text-sm font-medium">
                Not sure where to start? Take a free assessment with our senior coaches.
              </p>
            </div>

            {/* 3. COMPACT CTA BUTTON */}
            <div className="shrink-0">
                <Button onClick={() => {
                    setIsDemoModalOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                  className="h-16 px-10 rounded-2xl text-lg font-black shadow-2xl transition-all hover:scale-105 active:scale-95 group flex items-center gap-3 border-b-4 border-[#8B3308]"
                  style={{ backgroundColor: brandOrange, color: 'white' }}
                >
                  BOOK DEMO
                  <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                </Button>
            </div>

          </div>

          {/* Background Decorative Knight Icon */}
          <div className="absolute right-10 bottom-[-20px] opacity-[0.03] pointer-events-none rotate-12">
             <span className="text-[200px] font-serif leading-none text-white">♘</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}