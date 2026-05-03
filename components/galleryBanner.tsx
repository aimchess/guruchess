"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, Camera, Trophy, MapPin, PlayCircle } from "lucide-react"

export function GalleryHero() {
  const brandOrange = "#C2410C"
  const brandBlue = "#2B5292"

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/gallery.jpg" // Replace with a high-res collage or tournament shot
          alt="Guru Chess Academy Gallery" 
          className="w-full h-full object-cover"
        />
        {/* Deep Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* 2. CENTERED CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-4"
        >
          <Camera size={14} className="text-orange-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">The Visual Legacy</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] max-w-5xl mx-auto italic"
        >
          Frames of Victory, <br /> 
          <span className="text-white/90 font-light">Moments of Mastery.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium"
        >
          Witness the focus, the celebrations, and the journey of our champions 
          captured across our global tournaments and training centers.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-6 flex flex-wrap justify-center gap-4"
        >
          <Button 
            className="h-14 px-10 rounded-full text-xs font-black tracking-widest uppercase shadow-2xl transition-all hover:scale-105 active:scale-95 group"
            style={{ backgroundColor: brandOrange, color: 'white' }}
          >
            Watch Highlights
            <PlayCircle className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
          
          <Button 
            variant="outline"
            className="h-14 px-10 rounded-full text-xs font-black tracking-widest uppercase border-white/20 text-black hover:bg-white hover:text-black transition-all"
          >
            Browse Albums
          </Button>
        </motion.div>
      </div>

      {/* 3. BOTTOM TRUST BAR (Gallery Specific Stats) */}
      <div className="absolute bottom-10 left-0 w-full z-10 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-12 text-white/70 uppercase text-[10px] font-black tracking-[0.2em]">
            
            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <Trophy size={18} style={{ color: brandOrange }} />
              <span>500+ Tournament Wins</span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <MapPin size={18} style={{ color: brandOrange }} />
              <span>10+ Training Centers</span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <Camera size={18} style={{ color: brandOrange }} />
              <span>50,000+ Memories</span>
            </div>

          </div>
        </div>
      </div>

      
    </section>
  )
}