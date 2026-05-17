"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Sparkles, 
  Clock, 
  Flame, 
  Smile, 
  CheckCircle2, 
  AlertTriangle, 
  PlayCircle, 
  Star, 
  Users, 
  Zap,
  Coffee, 
  Pizza, 
  Heart, 
  Award, 
  Calendar, 
  Timer,
  ChevronDown,
  ChevronRight,
  Target,
  Trophy
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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

export default function HolidayCampPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const campHighlights = [
    { icon: <Flame size={32}/>, title: "Blitz Sprints", desc: "Sharpening reflexes through high-speed tactical decision making." },
    { icon: <Pizza size={32}/>, title: "Social Socials", desc: "Building lifelong friendships over pizza and Bughouse chess." },
    { icon: <Star size={32}/>, title: "GM Simuls", desc: "Face off against Grandmasters in intensive simultaneous exhibitions." },
    { icon: <Coffee size={32}/>, title: "Power Fuel", desc: "All-day catering with focus-boosting meals and healthy snacks." }
  ]

  const dailySchedule = [
    { time: "09:00", activity: "Theory & Traps", desc: "Exploring modern opening traps and psychological warfare." },
    { time: "11:00", activity: "Tactical Sprint", desc: "Rapid-fire puzzle solving to condition the chess subconscious." },
    { time: "12:30", activity: "Nutrition Break", desc: "Chef-curated lunch followed by social chess variants." },
    { time: "14:00", activity: "Rated Tournament", desc: "Daily FIDE-standard training rounds with live analysis." },
    { time: "16:00", activity: "Masterclass", desc: "Deep dive into endgame technique and positional dominance." }
  ]

  const stats = [
    { label: "Total Training Hours", value: "40+" },
    { label: "Internal Rated Games", value: "15" },
    { label: "Master Lectures", value: "10" },
    { label: "Daily Puzzles Solved", value: "100+" }
  ]

  const campPhases = [
    { 
      title: "The Immersion", 
      desc: "Forgetting the outside world. Entering a state of total chess flow.",
      icon: <Target className="text-[#C2410C]" />
    },
    { 
      title: "The Grind", 
      desc: "Pushing through mental fatigue to develop high-level endurance.",
      icon: <Zap className="text-[#2B5292]" />
    },
    { 
      title: "The Victory", 
      desc: "Applying new knowledge in a high-stakes final camp championship.",
      icon: <Trophy className="text-[#C2410C]" />
    }
  ]

  return (
    <div className="bg-white min-h-screen selection:bg-[#C2410C] selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO (Tone: Intensity & Speed) */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#F0F4F8]">
        {/* Animated Background Element */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-64 -right-64 w-[500px] h-[500px] border-[40px] border-[#C2410C]/5 rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
              <Sparkles className="text-[#C2410C]" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Upcoming: Winter Intensive 2024</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-[1000] text-[#1a1a1a] uppercase italic tracking-tighter leading-none mb-8">
              Rapid Chess <br /> <span style={{ color: brandOrange }}>Growth</span> In 7 Days
            </h1>
            <p className="text-gray-500 font-bold text-sm md:text-base uppercase tracking-[0.3em] max-w-2xl mb-12 leading-relaxed">
              Join our deep-immersion holiday bootcamp. Designed to compress 6 months of coaching into a single, high-intensity week of chess.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-[#1a1a1a] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#C2410C] transition-all active:scale-95">
                Check Availability
              </button>
              <button className="bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#1a1a1a] hover:text-white transition-all active:scale-95">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE CONCEPT (Immersion) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <SectionHeading 
              badge="Total Immersion"
              title="The Bootcamp Philosophy"
              subtitle="Why our intensive format breaks plateaus"
            />
            <p className="text-gray-500 font-bold text-sm uppercase tracking-widest leading-loose italic mb-10">
              During the school break, we create an environment where chess is the only language spoken. By removing all daily distractions, students enter a state of 'Flow' that allows for deep tactical conditioning and permanent pattern retention.
            </p>
            <div className="space-y-6">
              {campPhases.map((phase, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="bg-gray-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    {phase.icon}
                  </div>
                  <div>
                    <h4 className="font-black uppercase italic text-lg text-[#1a1a1a] mb-1">{phase.title}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full bg-[#1a1a1a] rounded-[4rem] aspect-square overflow-hidden relative p-4 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img 
              src="/game.png" 
              alt="Camp Action" 
              className="w-full h-full object-cover rounded-[3.5rem] group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute bottom-12 left-12 right-12 z-20 text-white">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#C2410C]">Live Training</span>
              <h3 className="text-2xl font-black uppercase italic mt-2">Maximum Focus Zone</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HIGHLIGHTS */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            light
            badge="The Experience"
            title="Beyond The Board"
            subtitle="Intensive learning meets legendary fun"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {campHighlights.map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] border border-white/5 bg-white/5 text-center hover:bg-white hover:text-[#1a1a1a] transition-all duration-500 group">
                <div className="text-[#C2410C] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-black uppercase italic text-sm mb-4 tracking-tight">{item.title}</h4>
                <p className="text-white/40 group-hover:text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SCHEDULE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            badge="Timeline"
            title="Daily Schedule"
            subtitle="A rigorous 8-hour daily training program"
          />
          <div className="space-y-4">
            {dailySchedule.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 border border-gray-100 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="text-2xl font-[1000] italic text-[#C2410C] min-w-[100px] text-center">{item.time}</div>
                <div className="h-px w-full md:w-px md:h-12 bg-gray-200" />
                <div className="text-center md:text-left flex-1">
                  <h4 className="font-black uppercase italic text-lg group-hover:text-[#2B5292] transition-colors">{item.activity}</h4>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-1 leading-relaxed">{item.desc}</p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-[#C2410C]">
                  <ChevronRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: STATS */}
      <section className="py-20 px-6 border-y border-gray-50 bg-[#FFF7F2]">
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

      {/* SECTION 6: ACHIEVEMENTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Award className="text-[#2B5292]" size={80} />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 text-[#C2410C]"
              >
                <Star size={24} fill="currentColor" />
              </motion.div>
            </div>
          </div>
          <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-6">Earn Your Stripes</h3>
          <p className="text-gray-500 font-bold text-sm uppercase tracking-widest leading-loose max-w-2xl mx-auto mb-10">
            Every participant receives an official performance audit, a certificate of excellence, and an exclusive Academy Camp Jersey. This is more than a camp; it's an initiation into elite chess.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Official Badge', 'Rating Progress Report', 'Academy Merchandise'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-[#2B5292]">
                <CheckCircle2 size={16} className="text-[#C2410C]" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: URGENCY (Red Banner) */}
      <section className="py-12 px-6 bg-red-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-center md:text-left">
            <AlertTriangle className="text-white animate-pulse" size={40} />
            <div>
              <h3 className="text-white font-black uppercase italic text-xl leading-none">Registration Closing Soon</h3>
              <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mt-2 italic">Only 12 seats left for the competitive batch.</p>
            </div>
          </div>
          <button className="bg-white text-red-600 px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all shadow-xl">
            Inquire Admission
          </button>
        </div>
      </section>

      {/* SECTION 8: FAQS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            badge="Support"
            title="Camp FAQ"
            subtitle="Everything you need to know about the bootcamp experience"
          />
          <div className="mt-12 bg-white p-8 md:p-12 rounded-[4rem] shadow-sm">
            <FAQItem 
              question="What is the recommended age for the bootcamp?" 
              answer="We offer batches for Juniors (6-12) and Seniors (13-18). For adults, we have specialized Intensive Weekends." 
            />
            <FAQItem 
              question="Is accommodation provided for travelers?" 
              answer="While the camp is primarily day-based, we have partnered with local hotels to provide discounted rates for our visiting students." 
            />
            <FAQItem 
              question="What should my child bring to the camp?" 
              answer="Just a passion for chess! We provide all boards, clocks, notation sheets, and training materials. Lunch and snacks are also included." 
            />
            <FAQItem 
              question="Can absolute beginners join the holiday camp?" 
              answer="Yes, we dedicate a specific 'Foundation Batch' for beginners to help them learn the game rapidly in a fun environment." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-32 px-6 bg-[#2B5292] text-center relative overflow-hidden">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-8">
            <Calendar className="text-white/20" size={64} />
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter mb-8 leading-none">
            Ready To Claim <br /><span className="text-white/40">Your Place?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 mb-12">
            <div className="flex items-center justify-center gap-2 text-white/80 font-black uppercase text-[10px] tracking-widest">
              <Users size={14}/> Batches Limited to 15 Students
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80 font-black uppercase text-[10px] tracking-widest">
              <Smile size={14}/> 100% Satisfaction Rate
            </div>
          </div>
          <button className="bg-[#C2410C] text-white px-16 py-6 rounded-full font-[1000] uppercase italic tracking-[0.2em] hover:scale-110 transition-transform text-sm shadow-2xl">
            Inquire For Winter Dates
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}