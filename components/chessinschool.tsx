"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  School, 
  Users, 
  BookOpenCheck, 
  Trophy, 
  ChevronRight, 
  CheckCircle2,
  Building2,
  Sparkles
} from "lucide-react"
import Link from "next/link"

export function ChessInSchools() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const benefits = [
    "Seamless Curriculum Integration",
    "FIDE Certified Training Staff",
    "Annual Inter-School Leagues",
    "Complete Equipment Support"
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Micro-Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(${brandBlue} 2px, transparent 2px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP ROW: TEXT & TRIPLE IMAGE CLUSTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full"
            >
              <Sparkles size={14} style={{ color: brandOrange }} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Institutional Excellence</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-tighter leading-[0.95] uppercase italic">
              Chess In <br /> 
              <span style={{ color: brandBlue }}>Every</span> <span style={{ color: brandOrange }}>School.</span>
            </h2>
            
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
              We transform educational campuses into strategic hubs. Our program integrates chess into the school timetable to foster cognitive growth and academic discipline.
            </p>

            <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                    <span className="text-3xl font-[1000] text-slate-900">15k+</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Active Students</span>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div className="flex flex-col">
                    <span className="text-3xl font-[1000] text-slate-900">25+</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Partner Schools</span>
                </div>
            </div>
          </div>

          {/* Right: The Cinematic Triple Cluster */}
          <div className="lg:col-span-6 relative h-[500px] md:h-[600px] mt-10 lg:mt-0">
            
            {/* Image 1: Background/Foundational (The Classroom) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              className="absolute top-0 left-0 w-[70%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img src="/12.jpg" className="w-full h-full object-cover" alt="School Chess" />
            </motion.div>

            {/* Image 2: Foreground Pop (The Focus) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-[20%] right-0 w-[60%] aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border-8 border-white z-20"
            >
              <img src="/v4.jpeg" className="w-full h-full object-cover" alt="Student Focus" />
            </motion.div>

            {/* Image 3: The Victory Shot (Bottom Offset) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-4 left-[10%] w-[50%] aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-30"
            >
              <img src="/g1.jpeg" className="w-full h-full object-cover" alt="Winning Moment" />
              <div className="absolute inset-0 bg-[#2B5292]/20" />
            </motion.div>

            {/* Floating Label */}
            <div className="absolute -bottom-6 right-10 z-40 bg-[#080c17] text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-orange-400">Institutional Trust</p>
                <p className="text-sm font-bold uppercase tracking-tight italic">Verified Curriculum</p>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: BENTO FEATURES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
             {[
               { icon: <BookOpenCheck />, title: "Campus Integration", desc: "Our syllabus is designed to sync with modern school academic calendars." },
               { icon: <Trophy />, title: "Annual Cups", desc: "We organize and manage annual inter-school chess championships." },
               { icon: <Users />, title: "Mass Training", desc: "Expert trainers capable of mentoring large groups of up to 100 students." },
               { icon: <Building2 />, title: "Infrastructure", desc: "Complete support for setting up professional chess zones on campus." }
             ].map((item, i) => (
               <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                 <div className="mb-4 transition-transform group-hover:scale-110" style={{ color: brandBlue }}>{item.icon}</div>
                 <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h4>
                 <p className="text-sm text-slate-500 font-medium leading-snug">{item.desc}</p>
               </div>
             ))}
          </div>

          {/* Proposal Callout */}
          <div className="bg-[#080c17] rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl">
             <div className="relative z-10">
                <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-8">Partner with <br /> The Academy</h4>
                <ul className="space-y-4">
                   {benefits.map((benefit, i) => (
                     <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-tight text-blue-100/60">
                        <CheckCircle2 size={16} style={{ color: brandOrange }} />
                        {benefit}
                     </li>
                   ))}
                </ul>
             </div>
             
             <Link href="/contact" className="relative z-10 pt-10">
                <Button 
                    className="w-full h-14 rounded-2xl font-black text-xs tracking-widest uppercase shadow-xl hover:scale-[1.02] border-none"
                    style={{ backgroundColor: brandOrange, color: 'white' }}
                >
                    Request a Proposal <ChevronRight size={16} className="ml-2" />
                </Button>
             </Link>

             {/* Background Decoration */}
             <div className="absolute -right-10 -bottom-10 opacity-5 rotate-12">
                <School size={250} />
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}