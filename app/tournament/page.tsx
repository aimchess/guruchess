"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Zap, 
  Info, 
  Award, 
  Users, 
  ChevronDown, 
  Search, 
  Filter, 
  Globe, 
  Flame, 
  Medal, 
  Swords, 
  Timer, 
  ListChecks,
  ChevronRight,
  ShieldAlert,
  Camera,
  Star
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AchievementShowcase } from "@/components/acheivement"
import { SuccessStories } from "@/components/ach"

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
const galleryImages = [
  {
    src: "/g1.jpeg",
    alt: "Kids Chess Coaching Class"
  },
  {
    src: "/v1.jpeg",
    alt: "Chess Tournament Competition"
  },
  {
    src: "/v2.jpeg",
    alt: "Online Chess Training Session"
  },
  {
    src: "/v5.jpeg",
    alt: "Chess Holiday Camp Activities"
  },
  {
    src: "/v4.jpeg",
    alt: "Professional Chess Clock Timer"
  },
  {
    src: "/v3.jpeg",
    alt: "Chess Learning Books Collection"
  }
]
/**
 * MAIN PAGE COMPONENT
 */

export default function TournamentPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const upcomingEvents = [
    { 
      title: "Grandmaster Open Rapid", 
      date: "24 OCT", 
      time: "10:00 AM", 
      location: "Main Academy Hall", 
      format: "Rapid (10+5)", 
      type: "FIDE Rated" 
    },
    { 
      title: "Junior Scholastic Cup", 
      date: "02 NOV", 
      time: "09:00 AM", 
      location: "East Wing Arena", 
      format: "Classical (60+30)", 
      type: "U-16 Only" 
    },
    { 
      title: "Elite Blitz Arena", 
      date: "15 NOV", 
      time: "06:00 PM", 
      location: "Rooftop Lounge", 
      format: "Blitz (3+2)", 
      type: "Open Category" 
    },
    { 
      title: "Winter Knockout Series", 
      date: "10 DEC", 
      time: "10:00 AM", 
      location: "Grand Ballroom", 
      format: "Elimination", 
      type: "Championship" 
    }
  ]

  const formats = [
    { 
      icon: <Globe size={32}/>, 
      title: "Swiss System", 
      desc: "Fair play for all skill levels. You play every round against opponents with similar scores." 
    },
    { 
      icon: <Flame size={32}/>, 
      title: "Knockout Blitz", 
      desc: "High intensity. One loss and you are out. Fast-paced action for the crowd." 
    },
    { 
      icon: <Timer size={32}/>, 
      title: "Rapid Arena", 
      desc: "Continuous pairing system. Play as many games as possible within the 2-hour window." 
    },
    { 
      icon: <Medal size={32}/>, 
      title: "Classical Rated", 
      desc: "Standard FIDE time controls for serious players looking to gain official ratings." 
    }
  ]

  const hallOfFame = [
    { name: "Rahul S.", event: "Rapid Open '23", achievement: "1st Place (9.0/9.0)", rating: "2145" },
    { name: "Sarah M.", event: "Junior Cup '24", achievement: "Gold Medalist", rating: "1890" },
    { name: "Vikram K.", event: "Blitz Night", achievement: "Arena Champion", rating: "2305" }
  ]

  const steps = [
    { title: "Select Event", desc: "Choose a tournament that fits your rating and time-control preference." },
    { title: "Verify FIDE ID", desc: "Provide your official ID or apply for a local Academy ranking." },
    { title: "Arrival & Check-in", desc: "Arrive 30 minutes before round 1 for the technical meeting." },
    { title: "Battle & Win", desc: "Compete through the rounds and climb the leaderboard." }
  ]

  return (
    <div className="bg-white min-h-screen selection:bg-[#C2410C] selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <Trophy className="mx-auto text-[#C2410C] mb-8" size={64} />
          <h1 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-tight mb-8">
            Compete. Improve. <br /> <span style={{ color: brandBlue }}>Win The Board.</span>
          </h1>
          <p className="text-white/40 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Official FIDE & Local Rated Professional Events
          </p>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
           <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C2410C]" />
        </div>
      </section>

      {/* SECTION 2: ABOUT TOURNAMENTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading 
            badge="The Crucible"
            title="Why Compete?"
            subtitle="Testing your limits under the pressure of the clock"
          />
          <p className="text-gray-500 font-medium text-sm md:text-lg leading-relaxed uppercase tracking-wide italic">
            "Nothing accelerates growth like tournament pressure. Our events provide a professional environment for players of all levels to earn ratings, win titles, and gain invaluable experience."
          </p>
          <div className="mt-12 flex justify-center gap-8">
             <div className="text-center">
                <div className="text-2xl font-black italic text-[#1a1a1a]">500+</div>
                <div className="text-[8px] font-black uppercase text-gray-400 tracking-widest">Active Competitors</div>
             </div>
             <div className="w-px h-10 bg-gray-100" />
             <div className="text-center">
                <div className="text-2xl font-black italic text-[#1a1a1a]">FIDE</div>
                <div className="text-[8px] font-black uppercase text-gray-400 tracking-widest">Standard Rules</div>
             </div>
          </div>
        </div>
      </section>

      

      {/* SECTION 4: FORMATS */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            light
            badge="The Rulebook"
            title="Tournament Formats"
            subtitle="Diverse structures for every strategic preference"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {formats.map((format, i) => (
               <div key={i} className="p-10 rounded-[3rem] border border-white/5 bg-white/5 text-center hover:bg-white hover:text-[#1a1a1a] transition-all duration-500 group">
                  <div className="text-[#C2410C] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                    {format.icon}
                  </div>
                  <h4 className="font-black uppercase italic text-sm mb-4 tracking-tight">{format.title}</h4>
                  <p className="text-white/40 group-hover:text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    {format.desc}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW TO PARTICIPATE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="The Process"
            title="How To Register"
            subtitle="A four-step guide to entering the competitive circuit"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
             {steps.map((step, i) => (
               <div key={i} className="relative text-center md:text-left group">
                  <div className="text-4xl font-[1000] italic text-[#C2410C]/10 mb-4 group-hover:text-[#C2410C]/30 transition-colors">0{i+1}</div>
                  <h4 className="font-black uppercase italic text-lg text-[#1a1a1a] mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-loose">
                    {step.desc}
                  </p>
                  {i < 3 && <div className="hidden md:block absolute top-10 -right-4 text-gray-100"><ChevronRight /></div>}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: RULES & GUIDELINES */}
      <section className="py-24 px-6 bg-[#FFF7F2]">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 rounded-[4rem] border border-orange-100 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 text-orange-50">
              <ShieldAlert size={120} />
           </div>
           <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <ShieldAlert className="text-[#C2410C]" size={32} />
                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">Integrity & Fair Play</h3>
              </div>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest leading-loose mb-10">
                To maintain the professional standards of our events, all participants must strictly adhere to FIDE fair-play guidelines. Violation of these rules results in immediate disqualification.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["No Electronic Devices", "Touch-Move Rule Strictly Enforced", "Mandatory Notation for Classical", "Silence in the Play Zone", "FIDE ID Verification Required", "Standard Draw Offer Rules"].map((rule, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase text-[#2B5292]">
                    <CheckCircle2 size={16} className="text-[#C2410C]" /> {rule}
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </section>

      {/* SECTION 7: PAST EVENTS GALLERY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
           <div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">Match <span className="text-[#2B5292]">Moments</span></h2>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">Relive the intensity of our previous championships</p>
           </div>
           <button className="flex items-center gap-2 text-[10px] font-black uppercase text-[#C2410C]"><Camera size={14}/> Full Gallery</button>
        </div>
        <div className="flex gap-6 animate-marquee px-6">
  {galleryImages.map((img, index) => (
    <div
      key={index}
      className="min-w-[350px] aspect-video bg-gray-100 rounded-[3rem] overflow-hidden hover:grayscale-0 transition-all duration-700"
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
      </section>

     <SuccessStories/>

      {/* SECTION 9: FAQS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            badge="Competitor Support"
            title="Tournament FAQ"
            subtitle="Everything you need to know before your first round"
          />
          <div className="mt-12">
            <FAQItem 
              question="What is the deadline for registration?" 
              answer="Online registration typically closes 48 hours before the event start time. We strictly do not allow on-site registrations to ensure accurate pairing." 
            />
            <FAQItem 
              question="Can I bring my own board and clock?" 
              answer="The Academy provides all official boards, pieces, and DGT 2010 clocks. You are welcome to bring a spare set, but Academy equipment is mandatory for play." 
            />
            <FAQItem 
              question="How are prize funds distributed?" 
              answer="Prize details are announced per event. They are typically awarded via secure digital transfer within 72 hours of the final standing confirmation." 
            />
            <FAQItem 
              question="Is notation mandatory for Rapid events?" 
              answer="Notation is not required for Blitz (3+2). For Rapid (10+5), it is optional but highly recommended for game analysis. For Classical (60+30), it is mandatory." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="py-32 px-6 bg-[#2B5292] text-center relative overflow-hidden">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-8">
            <Swords className="text-white/20" size={64} />
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter mb-8 leading-none">
            Ready To Claim <br /><span className="text-white/40">Your Throne?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 mb-12">
             <div className="flex items-center justify-center gap-2 text-white/60 font-black uppercase text-[10px] tracking-widest">
                <Star size={14}/> FIDE Rated Opportunities
             </div>
             <div className="flex items-center justify-center gap-2 text-white/60 font-black uppercase text-[10px] tracking-widest">
                <ListChecks size={14}/> Limited Spots Per Event
             </div>
          </div>
          <button className="bg-[#C2410C] text-white px-16 py-6 rounded-full font-[1000] uppercase italic tracking-[0.2em] hover:scale-110 transition-transform text-sm shadow-2xl">
            Inquire Next Tournament
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

function CheckCircle2({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  )
}