"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { UserCheck, ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { BookDemoModal } from "./bookdemo" // Ensure path is correct
import { useState } from "react"

export function CoachesCTA() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false) // Added state
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  return (
    <section className="py-12 md:py-20 bg-white">
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border-2 p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ borderColor: `${brandBlue}20`, backgroundColor: "#f8faff" }}
        >
          {/* Subtle Background Icon */}
          <div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12 pointer-events-none">
            <UserCheck size={160} />
          </div>

          <div className="space-y-4 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 shadow-sm">
              <Sparkles size={12} style={{ color: brandOrange }} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Assessment</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-[1000] text-slate-900 leading-tight uppercase italic tracking-tighter">
              Get Evaluated <br /> 
              By A <span style={{ color: brandBlue }}>Master.</span>
            </h2>
            
            <p className="text-slate-500 text-sm font-medium max-w-sm">
              Book a 1-on-1 session to determine your current ELO level and get a custom learning roadmap.
            </p>
          </div>

          <div className="shrink-0 relative z-10 w-full md:w-auto">
              <Button onClick={() => {
                    setIsDemoModalOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                className="w-full md:w-auto h-14 px-10 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg transition-all hover:scale-105 active:scale-95 group"
                style={{ backgroundColor: brandOrange, color: 'white' }}
              >
                Schedule Assessment
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}