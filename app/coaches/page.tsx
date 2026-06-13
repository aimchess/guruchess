"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Award, 
  ShieldCheck, 
  Star, 
  ChevronRight, 
  Zap,
  Target,
  MessageCircle,
  TrendingUp
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { CoachesHero } from "@/components/coachBanner"
import { CoachesCTA } from "@/components/coachcta"
import { useState } from "react"
import { BookDemoModal } from "@/components/bookdemo"
import { FounderSection } from "@/components/anu"
import DeepakKatiyarProfile from "@/components/deepak"

export default function CoachesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false) // Added state
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const coaches = [
    {
      name: "IM Rajesh Khanna",
      role: "Senior Mentor",
      elo: "2410",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      specialty: "Opening Theory"
    },
    {
      name: "WGM Anjali Sharma",
      role: "Strategy Lead",
      elo: "2350",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      specialty: "Positional Play"
    },
    {
      name: "FM David Miller",
      role: "Tactics Specialist",
      elo: "2290",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
      specialty: "Calculation"
    },
    {
      name: "CM Rohan Verma",
      role: "Junior Mentor",
      elo: "2150",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      specialty: "Game Logic"
    }
  ]

  return (
    <main className="bg-white">
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
     <Navbar/>
     <CoachesHero/>

      <FounderSection/>
      <DeepakKatiyarProfile/>

      

      {/* 4. COMPACT VALUES BENTO */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#080c17] rounded-[3rem] p-8 md:p-12 text-white">
           <div className="space-y-6">
              <Zap size={32} style={{ color: brandOrange }} />
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">Professional <br /> Standards.</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">We only onboard coaches who have a documented history of competitive success and pedagogical excellence.</p>
              
                <Button onClick={() => {
                    setIsDemoModalOpen(false);
                    setIsDemoModalOpen(true);
                  }} className="rounded-full bg-white text-black hover:bg-slate-200 font-bold px-8">
                  Get Evaluated <ChevronRight size={16} />
                </Button>
           </div>
           
           <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Tactical Depth", icon: <Target size={18} /> },
                { title: "Elo Tracking", icon: <Star size={18} /> },
                { title: "Pro Analysis", icon: <TrendingUp size={18} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                   <div style={{ color: brandOrange }}>{item.icon}</div>
                   <span className="text-xs font-black uppercase tracking-widest">{item.title}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
      <CoachesCTA/>
      <Footer/>

    </main>
  )
}