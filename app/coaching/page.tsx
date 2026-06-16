"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Target, Users, TrendingUp, CheckCircle, Award, Star, 
  ChevronDown, Brain, Zap, Trophy, ShieldCheck, 
  Clock, Lightbulb, PlayCircle, GraduationCap,
  Sparkles, Coffee, Microscope, MessageSquare,
  ChevronRight, Calendar, MapPin
} from "lucide-react"
import Seo from "@/components/Seo";
import { Footer } from "@/components/footer"
import FounderSection from "@/components/founder"

/**
 * REUSABLE COMPONENTS
 */

const SectionHeading = ({ badge, title, subtitle, light = false }: any) => (
  <div className="mb-16 text-center max-w-3xl mx-auto">
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

export default function CoachingPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const features = [
    { icon: <Brain size={32}/>, title: "Tactical Vision", desc: "Develop the ability to spot winning combinations and sacrifices instantly." },
    { icon: <Zap size={32}/>, title: "Opening Mastery", desc: "Build a robust repertoire tailored to your specific player style." },
    { icon: <Trophy size={32}/>, title: "Endgame Prep", desc: "Convert slight advantages into clinical wins with precise technique." },
    { icon: <ShieldCheck size={32}/>, title: "Psychology", desc: "Stay calm under extreme time pressure and handle tournament nerves." }
  ]

  const levels = [
    { 
      level: "Pawn Foundation", 
      audience: "Absolute Beginners",
      topics: ["Piece Movement", "Basic Mates", "Opening Principles", "Value of Pieces"],
      color: "#F0F4F8"
    },
    { 
      level: "Knight Intermediate", 
      audience: "Rated 1000 - 1500",
      topics: ["Pawn Structures", "Minor Piece Battles", "Attacking the King", "Rook Endgames"],
      color: "#FFF7F2"
    },
    { 
      level: "Elite Grandmaster", 
      audience: "Rated 1500+",
      topics: ["Prophylaxis", "Exchange Sacrifices", "Theoretical Endgames", "Deep Calculation"],
      color: "#F0F4F8"
    }
  ]

  const coaches = [
    { name: "Vikram Mehta", title: "International Master", bio: "Over 15 years of professional tournament play and youth mentorship." },
    { name: "Elena Rossi", title: "FIDE Trainer", bio: "Specializes in endgame theory and psychological preparation for juniors." },
    { name: "Marcus Thorne", title: "National Master", bio: "Expert in hyper-modern openings and aggressive attacking systems." }
  ]

  const processSteps = [
    { title: "Skill Assessment", desc: "We analyze your previous games to find your specific tactical weaknesses." },
    { title: "Personalized Roadmap", desc: "A custom 6-month curriculum is built focusing on your improvement goals." },
    { title: "Weekly Training", desc: "Engage in live sessions, puzzle sprints, and internal academy matches." },
    { title: "Progress Audit", desc: "Monthly rating checks and feedback sessions to refine your training plan." }
  ]

  const stats = [
    { label: "Total Students", value: "2,500+" },
    { label: "FIDE Rated Players", value: "480+" },
    { label: "Trophy Wins", value: "112" },
    { label: "Avg Rating Gain", value: "+350" }
  ]

  return (
    <>
      <Seo
        title="Coaching Programs | Guru Chess Academy"
        description="Professional chess coaching for kids, adults, and international students. Join our tailored programs."
        keywords="online chess coaching, kids chess coaching, adult chess training, international chess coaching, FIDE instructor"
        structuredData={coachingStructuredData}
      />
      <div className="bg-white min-h-screen selection:bg-[#C2410C] selection:text-white">

    
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#F0F4F8]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <div className="grid grid-cols-8 gap-1">
             {Array.from({length: 64}).map((_, i) => (
               <div key={i} className={`aspect-square ${i % 2 === 0 ? 'bg-black' : 'bg-transparent'}`} />
             ))}
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-[1000] text-[#1a1a1a] uppercase italic tracking-tighter leading-[1.1] mb-8">
              The Path To <br /> Strategic <span style={{ color: brandBlue }}>Mastery</span> Starts Here
            </h1>
            <p className="text-gray-500 font-bold text-sm md:text-base uppercase tracking-[0.3em] max-w-xl mb-12">
              From the first move to the final checkmate, we cultivate the grandmaster mindset through rigorous training.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#C2410C] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl active:scale-95">
                Join The Academy
              </button>
              <button className="bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#1a1a1a] hover:text-white transition-all active:scale-95">
                View Curriculum
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRANSFORMATION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="The Evolution"
            title="Beginner To Champion"
            subtitle="A transformation of mind and discipline"
          />
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <div className="border-l-4 border-[#2B5292] pl-6 py-2">
                   <h4 className="text-xl font-black uppercase italic mb-2">Phase 01: Awareness</h4>
                   <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Mastering board geometry and piece coordination basics.</p>
                </div>
                <div className="border-l-4 border-[#C2410C] pl-6 py-2">
                   <h4 className="text-xl font-black uppercase italic mb-2">Phase 02: Calculation</h4>
                   <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Analyzing variations 3-5 moves deep with total clarity.</p>
                </div>
                <div className="border-l-4 border-[#2B5292] pl-6 py-2">
                   <h4 className="text-xl font-black uppercase italic mb-2">Phase 03: Dominance</h4>
                   <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Applying grandmaster-level positional strategy to win events.</p>
                </div>
             </div>
             <div className="relative aspect-video bg-gray-900 rounded-[2.5rem] overflow-hidden flex items-center justify-center text-white p-12">
                <img src="/phil.webp" alt="Training" className="absolute inset-0 w-full h-full object-cover opacity-100" />
                
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO THIS IS FOR */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            light
            badge="For Every Ambition"
            title="Who We Train"
            subtitle="Tailored coaching for different walks of life"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Young Prodigies", age: "Ages 5-12", icon: <Star />, desc: "Focus on logic, sportsmanship, and foundational passion." },
               { title: "Competitive Juniors", age: "Ages 13-18", icon: <Zap />, desc: "High-intensity prep for state and national championships." },
               { title: "Adult Enthusiasts", age: "Ages 18+", icon: <Coffee />, desc: "Strategic depth and mental agility for casual or club play." }
             ].map((card, i) => (
               <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/5 hover:bg-white/10 transition-all">
                  <div className="text-[#C2410C] mb-6">{card.icon}</div>
                  <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">{card.title}</h3>
                  <div className="text-[#2B5292] text-[10px] font-black uppercase tracking-widest mb-6">{card.age}</div>
                  <p className="text-white/40 text-xs font-bold uppercase leading-relaxed tracking-widest">{card.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CURRICULUM */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="The Syllabus"
            title="Master The 64 Squares"
            subtitle="A comprehensive look at what you will learn"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {features.map((f, i) => (
               <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#2B5292] rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#2B5292] group-hover:text-white transition-all">
                    {f.icon}
                  </div>
                  <h4 className="font-black uppercase italic text-sm mb-3">{f.title}</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{f.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: METHODOLOGY */}
      <section className="py-24 px-6 bg-[#FFF7F2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
           <div className="flex-1">
             <SectionHeading 
               badge="Our Method"
               title="Puzzle-Based Learning"
               subtitle="Why our students improve faster"
             />
             <p className="text-gray-500 font-bold text-sm uppercase tracking-widest leading-loose italic mb-8">
               We don't just lecture. We immerse. By combining real-time game analysis with GM-curated tactical puzzles, our students develop instinctive pattern recognition that traditional books can't offer.
             </p>
             <ul className="space-y-4">
                {["Live GM Game Reviews", "Interactive Theory Modules", "Blindfold Training Drills", "Internal League Play"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-black uppercase text-[10px] tracking-[0.2em] text-[#1a1a1a]">
                    <CheckCircle className="text-[#C2410C]" size={16} /> {item}
                  </li>
                ))}
             </ul>
           </div>
           <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <div className="aspect-square bg-[#2B5292] rounded-[3rem] p-8 text-white flex flex-col justify-end">
                 <Microscope size={40} className="mb-4" />
                 <span className="font-black uppercase italic text-lg leading-tight">Game <br/> Analysis</span>
              </div>
              <div className="aspect-square bg-white rounded-[3rem] p-8 border border-orange-100 flex flex-col justify-end">
                 <MessageSquare size={40} className="mb-4 text-[#C2410C]" />
                 <span className="font-black uppercase italic text-lg leading-tight text-[#1a1a1a]">Personal <br/> Feedback</span>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 6: LEVELS / PROGRAMS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Academy Tiers"
            title="Choose Your Path"
            subtitle="Structured training levels for focused growth"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {levels.map((tier, i) => (
              <div key={i} style={{ backgroundColor: tier.color }} className="p-12 rounded-[4rem] border border-gray-100 group hover:-translate-y-2 transition-transform">
                 <h4 className="text-2xl font-black uppercase italic mb-2 tracking-tighter text-[#1a1a1a]">{tier.level}</h4>
                 <div className="text-[10px] font-black uppercase tracking-widest text-[#C2410C] mb-8">{tier.audience}</div>
                 <ul className="space-y-4 mb-10">
                   {tier.topics.map((t, idx) => (
                     <li key={idx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                       <div className="w-1.5 h-1.5 bg-[#2B5292] rounded-full" /> {t}
                     </li>
                   ))}
                 </ul>
                 <button className="w-full py-4 bg-white border border-gray-200 text-[#1a1a1a] rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all">
                   Explore Program
                 </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS */}
      <section className="py-24 px-6 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="The Process"
            title="How We Guide You"
            subtitle="A four-step approach to excellence"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {processSteps.map((step, i) => (
               <div key={i} className="relative group text-center md:text-left">
                  <div className="text-4xl font-[1000] italic text-[#2B5292]/20 mb-4">0{i+1}</div>
                  <h5 className="font-black uppercase italic text-lg mb-3">{step.title}</h5>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{step.desc}</p>
                  {i < 3 && <div className="hidden md:block absolute top-10 -right-4 text-[#C2410C]"><ChevronRight /></div>}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: RESULTS */}
      <section className="py-24 px-6 border-y border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-5xl font-[1000] text-[#1a1a1a] italic tracking-tighter mb-2">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C2410C]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderSection/>

      {/* SECTION 10: FAQS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            badge="Support"
            title="Coaching FAQs"
            subtitle="Everything you need to know about joining"
          />
          <div className="mt-12">
            <FAQItem question="Do I need a FIDE rating to join?" answer="Absolutely not. We have specialized tracks starting from absolute zero, as well as elite tracks for titled players." />
            <FAQItem question="Are the sessions 1-on-1 or group-based?" answer="We offer both! Our Foundation track is typically small-group focused, while Elite Mastery offers dedicated 1-on-1 mentor sessions." />
            <FAQItem question="How long is each coaching session?" answer="Standard sessions last 60 to 90 minutes, depending on the complexity of the topic being covered." />
            <FAQItem question="What platforms do you use for training?" answer="We utilize proprietary board software alongside Zoom for communication and Lichess for practical drill execution." />
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-32 px-6 bg-[#2B5292] text-center relative overflow-hidden">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter mb-8 leading-none">
            Ready To Make Your <br /><span className="text-white/40">Winning Move?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
             <div className="flex items-center justify-center gap-2 text-white/60 font-black uppercase text-[10px] tracking-widest">
                <Calendar size={14}/> Batches Starting Monday
             </div>
             <div className="flex items-center justify-center gap-2 text-white/60 font-black uppercase text-[10px] tracking-widest">
                <MapPin size={14}/> HQ: Chess City Center
             </div>
          </div>
          <button className="mt-12 bg-white text-[#2B5292] px-16 py-6 rounded-full font-[1000] uppercase italic tracking-[0.2em] hover:scale-110 transition-transform text-sm shadow-2xl">
            Inquire For Admission
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}