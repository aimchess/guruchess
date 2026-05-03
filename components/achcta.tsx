"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Trophy, ChevronRight, Star, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { BookDemoModal } from "./bookdemo" // Ensure path is correct

export function AchievementCTA() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false) // Added state
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  return (
    <section className="py-12 md:py-20 bg-white">
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-white"
          style={{ backgroundColor: brandBlue }}
        >
          {/* Background Decorative Element */}
          <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12 pointer-events-none">
            <Trophy size={240} color="white" />
          </div>

          {/* Left Content */}
          <div className="relative z-10 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <Star size={12} className="text-amber-400 fill-amber-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-100">Future Grandmaster</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-[1000] text-white leading-tight uppercase italic tracking-tighter">
              Ready to <br /> 
              <span style={{ color: brandOrange }}>Make History?</span>
            </h2>
            
            <p className="text-blue-100/70 text-sm font-medium max-w-sm">
              Don't just watch the champions. Become one. Start your journey toward a FIDE rating today.
            </p>
          </div>

          {/* Right Action */}
          <div className="shrink-0 relative z-10 w-full md:w-auto flex flex-col items-center gap-4">
              <Button onClick={() => {
                    setIsDemoModalOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                className="w-full md:w-auto h-16 px-10 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95 group flex items-center gap-3"
                style={{ backgroundColor: brandOrange, color: 'white' }}
              >
                JOIN THE ACADEMY
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            <Link href="/courses" className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-1">
                Explore Curriculum <ChevronRight size={12} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}