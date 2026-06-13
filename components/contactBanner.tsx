"use client"

import { motion } from "framer-motion"
import { ChevronRight, MessageCircle, Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function ContactHero() {
  const brandOrange = "#C2410C"
  const brandBlue = "#2B5292"

  return (
    <section className="relative w-full h-[85vh] md:h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/contact.avif" 
          alt="Contact Guru Chess Academy" 
          className="w-full h-full object-cover opacity-80 "
        />
        {/* Deep Overlay for a professional, focused atmosphere */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 2. CENTERED CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-6">
        
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span style={{ color: brandOrange }}>Connect With Us</span>
        </motion.div>

        {/* Main Headline */}
        <div className="space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/60"
          >
            Always Open For Strategic Minds
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-serif tracking-tight leading-[1.1] max-w-5xl mx-auto italic"
          >
            Start your <br /> 
            <span >Strategic Journey.</span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Have questions about enrollment, batches, or a evaluation? 
          Our expert counselors are ready to guide you.
        </motion.p>

        {/* Support Trigger Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="pt-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-2xl">
            <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366]">
              <MessageCircle size={20} fill="currentColor" />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-black text-white/40 uppercase tracking-widest leading-none">Instant Help</p>
              <p className="text-sm font-bold text-white uppercase tracking-tight">Active WhatsApp Support</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. CONTACT TRUST BAR (Action Oriented) */}
      <div className="absolute bottom-10 left-0 w-full z-10 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-12 text-white/70 uppercase text-[10px] font-black tracking-[0.2em]">
            
            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <Phone size={18} style={{ color: brandOrange }} />
              <span>+91 99112 89767</span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <Clock size={18} style={{ color: brandOrange }} />
              <span>10:00 AM - 07:00 PM</span>
            </div>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-3 group hover:text-white transition-colors cursor-default">
              <MapPin size={18} style={{ color: brandOrange }} />
              <span>Indirapuram Hub</span>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Bottom Vignette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  )
}