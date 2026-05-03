"use client"

import { Achievements } from "@/components/ach"
import { AchievementsHero } from "@/components/achBanner"
import { AchievementCTA } from "@/components/achcta"
import { AutoGallery } from "@/components/calausel"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Trophy, Medal, Target, Star, ShieldCheck, Crown, ChevronRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AchievementsPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const featuredChampions = [
    {
      name: "Viha Jain",
      achievement: "State U-14 Champion",
      meta: "2nd Place in Team Competition",
      image: "https://images.unsplash.com/photo-1596495573105-d1465b77591c?q=80&w=400",
      color: brandBlue,
      bgColor: "#EBF1FF",
      icon: <Crown size={18} fill="currentColor" />
    },
    {
      name: "Aamir Yassar",
      achievement: "FIDE Rated: 1450",
      meta: "Official International Ranking",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=400",
      color: brandOrange,
      bgColor: "#FFF2EB",
      icon: <Target size={18} />
    },
    {
      name: "Aaryash",
      achievement: "Seigle Cup Gold",
      meta: "Tournament Winner 2024",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
      color: "#D97706",
      bgColor: "#FFF9E6",
      icon: <Trophy size={18} fill="currentColor" />
    }
  ]

  const recentWins = [
    { title: "Inter-School Chess", student: "Rohan Verma", rank: "1st Place" },
    { title: "District Girls Open", student: "Ishani Mehta", rank: "Gold Medal" },
    { title: "Rapid Chess Invite", student: "Kabir Singh", rank: "Runner Up" },
    { title: "Academy Masters", student: "Zoya Khan", rank: "Finalist" },
  ]

  return (
    <main className="bg-white">
      
      <Navbar/>
      <AchievementsHero/>
      <Achievements/>

     

      {/* 3. STRATEGIC IMPACT ( Bento Stats ) */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-4 bg-[#2B5292] p-10 rounded-[3rem] text-white flex flex-col justify-center">
              <Trophy size={40} style={{ color: brandOrange }} className="mb-6" />
              <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4 leading-none">Victory <br /> In Numbers.</h3>
              <p className="text-blue-100/60 text-sm font-medium">Our methodology is proven by the consistent podium finishes of our students year after year.</p>
           </div>

           <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Medals Won", value: "500+", icon: <Medal /> },
                { label: "Rated Players", value: "50+", icon: <Target /> },
                { label: "Success Rate", value: "92%", icon: <TrendingUp /> },
                { label: "Tournaments", value: "200+", icon: <ShieldCheck /> },
                { label: "Active Students", value: "2k+", icon: <Star /> },
                { label: "Awards", value: "120+", icon: <Trophy /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center shadow-sm">
                   <div style={{ color: brandOrange }} className="mb-2 opacity-80">{stat.icon}</div>
                   <p className="text-2xl font-black text-slate-800 leading-none">{stat.value}</p>
                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. RECENT TOURNAMENT WINS ( List View ) */}
      <section className="py-20 container mx-auto px-6 max-w-5xl">
        <div className="mb-12 border-l-4 pl-6" style={{ borderColor: brandOrange }}>
           <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Recent Tournament Board</h3>
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Monthly Wins Tracking 2024</p>
        </div>

        <div className="space-y-3">
          {recentWins.map((win, i) => (
            <div key={i} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl hover:border-[#2B5292]/30 transition-all group">
               <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#2B5292] group-hover:text-white transition-all">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-slate-800 uppercase tracking-tight">{win.title}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{win.student}</p>
                  </div>
               </div>
               <span className="text-xs font-black text-[#C2410C] uppercase tracking-widest px-4 py-1 bg-orange-50 rounded-full">{win.rank}</span>
            </div>
          ))}
        </div>
      </section>
      <AutoGallery/>
      

      <AchievementCTA/>
      <Footer/>

    </main>
  )
}