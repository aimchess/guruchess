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

      {/* 2. FOUNDER SECTION - Balanced Mr. Pradeep Pathak */}
      <section className="py-20 container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
             <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] -z-10" style={{ backgroundColor: brandBlue }} />
             <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-xl aspect-[4/5] max-w-[400px] mx-auto">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" className="w-full h-full object-cover" alt="Mr. Pradeep Pathak" />
             </div>
          </motion.div>

          <div className="space-y-6">
             <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: brandOrange }}>Founder & Chief Mentor</span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Mr. Pradeep Pathak</h3>
             </div>
             <p className="text-base text-slate-500 font-medium leading-relaxed">
               With a vision to institutionalize professional chess coaching, Mr. Pathak established Guru Chess Academy to bridge the gap between hobby play and competitive mastery. Under his leadership, the academy has mentored over 2,000 students globally.
             </p>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                   <ShieldCheck size={20} style={{ color: brandBlue }} />
                   <span className="text-xs font-bold text-slate-700 uppercase">FIDE Standards</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                   <TrendingUp size={20} style={{ color: brandBlue }} />
                   <span className="text-xs font-bold text-slate-700 uppercase">Growth Focus</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. COMPACT ROSTER GRID */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase italic">The Coaching <span style={{ color: brandBlue }}>Roster.</span></h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">Expert mentors for every level</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coaches.map((coach, idx) => (
              <motion.div 
                key={idx}
                className="group bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img src={coach.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={coach.name} />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-slate-100">
                    <span className="text-[#2B5292] font-black text-[9px] tracking-tighter uppercase">{coach.elo} ELO</span>
                  </div>
                </div>

                <div className="px-2 pb-2">
                  <h4 className="text-sm font-black text-slate-900 leading-tight uppercase mb-1">{coach.name}</h4>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-3">{coach.role}</p>
                  <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                     <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Specialist</span>
                     <span className="text-[9px] font-bold text-slate-500 uppercase">{coach.specialty}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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