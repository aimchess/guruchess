"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Globe, 
  Monitor, 
  Video, 
  ShieldCheck, 
  HelpCircle, 
  Layout, 
  ChevronDown, 
  Laptop, 
  Wifi, 
  MousePointer2, 
  Users, 
  Clock, 
  CheckCircle2,
  PlayCircle,
  MessageSquare,
  Zap,
  Star
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/review"

/**
 * REUSABLE SUB-COMPONENTS
 */

const SectionHeading = ({ badge, title, subtitle, light = false }: any) => (
  <div className="mb-16 text-center max-w-3xl mx-auto px-6">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-[10px] font-black uppercase tracking-[0.4em] ${light ? 'text-white/60' : 'text-[#C2410C]'} block mb-4`}
    >
      {badge}
    </motion.span>
    <h2 className={`text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter leading-tight mb-6 ${light ? 'text-white' : 'text-[#1a1a1a]'}`}>
      {title}
    </h2>
    <p className={`text-sm md:text-base font-bold uppercase tracking-widest ${light ? 'text-white/40' : 'text-gray-400'}`}>
      {subtitle}
    </p>
  </div>
)

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-black uppercase text-sm tracking-tight text-[#1a1a1a]">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C2410C]' : 'text-gray-300'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-500 text-sm font-medium leading-relaxed uppercase tracking-wider italic">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * MAIN PAGE COMPONENT
 */

export default function OnlineTrainingPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const digitalTools = [
    { 
      icon: <Monitor size={32}/>, 
      title: "Shared Boards", 
      desc: "Interactive digital boards where student and coach move pieces in real-time." 
    },
    { 
      icon: <Video size={32}/>, 
      title: "HD Video Calls", 
      desc: "Clear, face-to-face communication via secure, high-bandwidth dedicated servers." 
    },
    { 
      icon: <Layout size={32}/>, 
      title: "Cloud Analytics", 
      desc: "Every lesson is recorded and stored in your private dashboard for 24/7 review." 
    },
    { 
      icon: <MousePointer2 size={32}/>, 
      title: "Live Annotations", 
      desc: "Coaches use visual arrows and highlights to explain complex strategic patterns." 
    }
  ]

  const workflowSteps = [
    { title: "Digital Setup", desc: "One-click join. No complex software installations required. Works on any browser." },
    { title: "Live Interaction", desc: "Engage in dynamic puzzle solving and theory discussions with your mentor." },
    { title: "Post-Game Review", desc: "Upload your online games from Lichess/Chess.com for immediate expert analysis." },
    { title: "Progress Tracking", desc: "Watch your digital rating grow with our integrated performance metrics." }
  ]

  const testimonials = [
    { name: "David K.", location: "London, UK", text: "The online format is even better than in-person. I can review my coach's annotations whenever I want." },
    { name: "Srinivasan R.", location: "Chennai, India", text: "Flexible timings allowed my son to balance school and chess without any travel fatigue." },
    { name: "Elena M.", location: "New York, USA", text: "The quality of digital boards and the coach's attention to detail is world-class." }
  ]

  return (
    <div className="bg-white min-h-screen selection:bg-[#C2410C] selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#F0F4F8]">
        {/* Abstract Digital Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2B5292_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
              <Globe className="text-[#2B5292]" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 italic">Global Virtual Classroom</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-[1000] text-[#1a1a1a] uppercase italic tracking-tighter leading-tight mb-8">
              Master The Board <br /> From <span style={{ color: brandBlue }}>Anywhere</span> In The World
            </h1>
            <p className="text-gray-500 font-bold text-sm md:text-base uppercase tracking-[0.3em] max-w-xl mx-auto mb-12 leading-relaxed">
              World-class coaching delivered digitally. No travel, no boundaries—just elite training at the click of a button.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#2B5292] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl active:scale-95">
                Book Online Demo
              </button>
              <button className="bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#1a1a1a] hover:text-white transition-all active:scale-95">
                Our Technology
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="The Process"
            title="Convenience By Design"
            subtitle="How we've optimized online learning for maximum growth"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {workflowSteps.map((step, i) => (
               <div key={i} className="relative group text-center md:text-left">
                  <div className="text-4xl font-[1000] italic text-[#2B5292]/10 mb-4 group-hover:text-[#2B5292]/30 transition-colors">0{i+1}</div>
                  <h4 className="font-black uppercase italic text-lg text-[#1a1a1a] mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-loose">
                    {step.desc}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TOOLS & PLATFORM */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 order-2 md:order-1">
             <SectionHeading 
               light
               badge="The Tech Stack"
               title="Professional Digital Tools"
               subtitle="We use the same platforms used by World Champions"
             />
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {digitalTools.map((tool, i) => (
                  <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 hover:bg-[#C2410C] transition-all duration-500 group">
                     <div className="text-[#C2410C] group-hover:text-white mb-4 transition-colors">
                        {tool.icon}
                     </div>
                     <h5 className="font-black uppercase italic text-sm mb-2">{tool.title}</h5>
                     <p className="text-white/40 group-hover:text-white/80 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                        {tool.desc}
                     </p>
                  </div>
                ))}
             </div>
          </div>
          <div className="flex-1 order-1 md:order-2 w-full aspect-square bg-[#2B5292] rounded-[4rem] flex items-center justify-center p-12 relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
             <div className="relative z-10 text-center">
                <Laptop size={100} className="mx-auto text-white mb-6" />
                <div className="flex justify-center gap-3">
                   <Wifi className="text-white/40 animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em]">Encrypted Stream</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GLOBAL REACH & FLEXIBILITY */}
      <section className="py-24 px-6 bg-[#FFF7F2]">
        <div className="max-w-4xl mx-auto text-center">
           <SectionHeading 
             badge="Borderless Learning"
             title="Any Time Zone. Any Country."
             subtitle="Coordinating classes across 15+ countries monthly"
           />
           <div className="bg-white p-12 rounded-[4rem] shadow-sm border border-orange-100 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 <div>
                    <div className="text-3xl font-[1000] italic text-[#C2410C]">24/7</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-gray-400 mt-2">Support Access</div>
                 </div>
                 <div>
                    <div className="text-3xl font-[1000] italic text-[#2B5292]">15+</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-gray-400 mt-2">Nationalities</div>
                 </div>
                 <div>
                    <div className="text-3xl font-[1000] italic text-[#C2410C]">100%</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-gray-400 mt-2">Digital Content</div>
                 </div>
              </div>
           </div>
           <p className="text-gray-500 font-bold text-xs uppercase tracking-widest leading-loose italic max-w-2xl mx-auto">
             Whether you are in San Francisco or Singapore, our system automatically syncs your schedule to your local time. Never miss a lesson due to time-zone confusion again.
           </p>
        </div>
      </section>

      {/* SECTION 5: DEMO INFO */}
      <section className="py-24 px-6 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
             <div className="inline-block bg-[#F0F4F8] text-[#2B5292] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Experience It First</div>
             <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-6">The 30-Minute <span className="text-[#C2410C]">Demo Class</span></h3>
             <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-loose mb-8">
               Our online demo allows you to test your internet connection, meet a coach, and see our digital board tools in action before committing to a full program.
             </p>
             <ul className="space-y-4 mb-10">
                {["Connection Speed Test", "Personalized Skill Audit", "Curriculum Preview"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest text-[#1a1a1a]">
                    <CheckCircle2 className="text-[#C2410C]" size={16} /> {item}
                  </li>
                ))}
             </ul>
             <button className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform">
                Request Demo Session
             </button>
          </div>
          <div className="flex-1 bg-[#1a1a1a] aspect-video rounded-[3rem] overflow-hidden relative group">
             
             <img src="/6.webp" alt="Online Demo" className="w-full h-full object-cover opacity-100" />
          </div>
        </div>
      </section>

      <Testimonials/>

      {/* SECTION 7: FAQS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            badge="Technical Support"
            title="Online FAQ"
            subtitle="Solving your concerns about virtual learning"
          />
          <div className="mt-12">
            <FAQItem 
              question="What happens if my internet connection fails during a lesson?" 
              answer="Don't worry! We offer one 'Connection Grace' reschedule per month. Additionally, all lesson materials and key points are automatically sent to your dashboard." 
            />
            <FAQItem 
              question="Do I need to buy expensive software or apps?" 
              answer="No. All our training is conducted via standard web browsers. We use a combination of integrated board tools and secure video calls." 
            />
            <FAQItem 
              question="Can parents monitor their child's progress online?" 
              answer="Yes. Parents receive a separate 'Audit Login' to view recorded lessons, puzzle history, and coach feedback reports at any time." 
            />
            <FAQItem 
              question="Are the lessons recorded for privacy safety?" 
              answer="Every lesson is recorded on our secure servers for quality and safety audits. These are strictly accessible only to the student, coach, and parents." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-32 px-6 bg-[#2B5292] text-center relative overflow-hidden">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-8">
            <ShieldCheck className="text-white/20" size={64} />
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter mb-8 leading-none">
            Your Virtual Board <br /><span className="text-white/40">Is Waiting.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 mb-12">
             <div className="flex items-center justify-center gap-2 text-white/60 font-black uppercase text-[10px] tracking-widest">
                <Zap size={14}/> Instant Access Dashboard
             </div>
             <div className="flex items-center justify-center gap-2 text-white/60 font-black uppercase text-[10px] tracking-widest">
                <Users size={14}/> Active Batch Assignments
             </div>
          </div>
          <button className="bg-[#C2410C] text-white px-16 py-6 rounded-full font-[1000] uppercase italic tracking-[0.2em] hover:scale-110 transition-transform text-sm shadow-2xl">
            Inquire For Online Batch
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}