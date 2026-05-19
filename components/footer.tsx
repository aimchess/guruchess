"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle, Clock, ChevronRight, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  // Background icons for the "Strategic" look
  const floatingIcons = [
    { icon: "♘", top: "20%", left: "10%", delay: 0 },
    { icon: "♔", top: "60%", left: "15%", delay: 2 },
    { icon: "♕", top: "30%", left: "80%", delay: 1 },
    { icon: "♙", top: "70%", left: "85%", delay: 3 },
    { icon: "♗", top: "15%", left: "45%", delay: 4 },
  ]

  return (
    <footer className="relative bg-[#080c17] text-white pt-32 pb-10 overflow-hidden">
      
      {/* 1. PERFECT SMOOTH WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[70px] md:h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      {/* 2. DYNAMIC BACKGROUND LAYER (Icons & Marks) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Chess Pieces */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, -20, 0], opacity: 0.05 }}
            transition={{ duration: 5, repeat: Infinity, delay: item.delay }}
            className="absolute text-6xl md:text-8xl font-serif select-none"
            style={{ top: item.top, left: item.left, color: 'white' }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Tactical Tactical Markers (+ and x) */}
        <div className="absolute top-1/4 left-1/3 opacity-[0.05] text-[#C2410C] font-black text-2xl">+</div>
        <div className="absolute bottom-1/4 right-1/4 opacity-[0.05] text-[#2B5292] font-black text-4xl">×</div>
        <Star className="absolute top-1/2 left-1/4 opacity-[0.03] text-white" size={100} />
        
        {/* Glowing Blobs */}
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#2B5292]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C2410C]/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* COLUMN 1: BRAND IDENTITY (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative p-1 bg-white rounded-2xl shadow-[0_0_40px_rgba(43,82,146,0.2)] group-hover:rotate-6 transition-transform duration-500">
                <img src="/guru-logo.jpeg" alt="Logo" className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-contain" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-black tracking-tighter leading-none uppercase italic">
                  GURU CHESS <br />
                  <span style={{ color: brandOrange }}>ACADEMY</span>
                </h3>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Empowering the next generation of strategic thinkers through international-standard coaching and tactical excellence.
            </p>

            <div className="flex gap-3">
              {[
                { icon: <Facebook size={18} />, href: "https://www.facebook.com/share/1CrebozWXz/" },
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/guruchessacademy2025" },
                { icon: <Youtube size={18} />, href: "https://youtube.com/@guruchessacademy" }
              ].map((social, idx) => (
                <Link key={idx} href={social.href} target="_blank">
                  <Button size="icon" className="w-11 h-11 rounded-xl bg-white/5 hover:bg-[#C2410C] text-white border border-white/10 transition-all duration-500">
                    {social.icon}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (2 Cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
                <div className="h-1 w-6 rounded-full" style={{ backgroundColor: brandOrange }} />
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Explore</h4>
            </div>
            <ul className="space-y-4">
              {["Home", "About Us", "Coaches", "Gallery", "Blogs"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-[13px] font-bold text-gray-400 hover:text-white flex items-center group transition-colors">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0 text-orange-500" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: ACADEMY (2 Cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
                <div className="h-1 w-6 rounded-full bg-blue-500" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white">Academy</h4>
            </div>
            <ul className="space-y-4">
              {["Courses", "Achievements", "Book a Demo", "Contact Us", "Terms"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-[13px] font-bold text-gray-400 hover:text-white flex items-center group transition-colors">
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0 text-blue-500" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: GLASS LOCATION CARD (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="bg-[#111827]/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 relative shadow-2xl overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-[#2B5292]/20 border border-[#2B5292]/30">
                    <MapPin size={22} style={{ color: brandBlue }} />
                  </div>
                  <h4 className="text-md font-black tracking-tight text-white uppercase">Headquarters</h4>
                </div>
                
                <div className="space-y-4">
                  
                  <div className="flex items-center gap-3">
                    <Phone size={16} style={{ color: brandOrange }} />
                    <span className="text-[14px] font-black tracking-tighter text-white">+91 99112 89767</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} style={{ color: brandOrange }} />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">10:00 AM - 07:00 PM</span>
                  </div>

                  <Button asChild className="w-full h-12 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-all bg-[#25D366] border-none mt-2">
                    <a href="https://wa.me/919911289767" target="_blank">
                      <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Internal Card Decor */}
              <div className="absolute -bottom-10 -right-10 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                 <img src="https://cdn-icons-png.flaticon.com/512/3522/3522034.png" className="w-32 invert" alt="bg-piece" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
              © 2026 GURU CHESS ACADEMY. Turning Interest into Passion.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span className="text-gray-600 text-[9px] font-black uppercase tracking-widest">Designed By</span>
            <a 
              href="https://wa.me/917851988964" 
              className="text-xs font-black tracking-tighter hover:scale-105 transition-transform"
              style={{ color: brandOrange }}
            >
              JINESH MEHTA
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}