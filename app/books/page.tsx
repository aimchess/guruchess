"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BookOpen, 
  Search, 
  Filter, 
  Bookmark, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Library, 
  Glasses, 
  PenTool, 
  Layers, 
  HelpCircle,
  CheckCircle2,
  BookMarked,
  Sparkles,
  Info
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

/**
 * REUSABLE COMPONENTS
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

export default function BooksPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const bookCategories = [
    { name: "Foundations", desc: "Essential reading for new players and children starting their journey." },
    { name: "Tactical Manuals", desc: "Deep dives into combinations, sacrifices, and calculated risks." },
    { name: "Positional Strategy", desc: "Understanding structures, piece harmony, and long-term planning." },
    { name: "Endgame Theory", desc: "Mastering the final phase of the game where precision is mandatory." }
  ]

  const featuredBooks = [
    {
      title: "Tactical Sprints",
      author: "GM Alexander Rivers",
      badge: "Best For Kids",
      elo: "500 - 1200",
      description: "A gamified approach to solving 500 essential checkmate patterns.",
      tags: ["Beginner", "Puzzles"]
    },
    {
      title: "The Positional Eye",
      author: "IM Sarah Chen",
      badge: "Tournament Choice",
      elo: "1400 - 1800",
      description: "Mastering pawn structures and the art of the prophylactic move.",
      tags: ["Intermediate", "Strategy"]
    },
    {
      title: "Endgame Silence",
      author: "GM David Thorne",
      badge: "Masterclass",
      elo: "1800+",
      description: "Theoretical endgames explained through the lens of modern engine analysis.",
      tags: ["Advanced", "Technique"]
    }
  ]

  const buyingGuide = [
    {
      icon: <Layers size={32}/>,
      title: "Elo Alignment",
      desc: "Always choose books within +200 of your current rating to ensure optimal growth."
    },
    {
      icon: <PenTool size={32}/>,
      title: "Notation Style",
      desc: "All our curated books use Algebraic Notation, the modern global standard."
    },
    {
      icon: <Glasses size={32}/>,
      title: "Active Reading",
      desc: "We recommend books that include test positions to verify your understanding."
    }
  ]

  return (
    <div className="bg-white min-h-screen selection:bg-[#C2410C] selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO (Tone: Curated Wisdom) */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#FFFBF7]">
        {/* Background Subtle Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <Library className="absolute -top-10 -left-10" size={500} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#2B5292]/5 border border-[#2B5292]/10 px-4 py-2 rounded-full mb-8">
              <BookMarked className="text-[#2B5292]" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2B5292]">The Academy Library</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-[1000] text-[#1a1a1a] uppercase italic tracking-tighter leading-tight mb-8">
              Learn Chess Through <br /> The <span style={{ color: brandOrange }}>Best Books</span>
            </h1>
            <p className="text-gray-400 font-bold text-sm md:text-base uppercase tracking-[0.3em] max-w-xl mx-auto mb-12 leading-relaxed">
              Curated by our grandmaster coaching staff. From foundational theory to elite tactical manuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#1a1a1a] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#2B5292] transition-all shadow-xl active:scale-95">
                Browse Collection
              </button>
              <button className="bg-white border border-gray-200 text-[#1a1a1a] px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all active:scale-95">
                Request Recommendation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CATEGORIES */}
      <section className="py-24 px-6 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="The Catalog"
            title="Syllabus Focused Categories"
            subtitle="Books categorized by the core pillars of chess mastery"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {bookCategories.map((cat, i) => (
               <div key={i} className="group p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="text-[#C2410C] mb-6">
                    <Bookmark size={24} className="group-hover:fill-current" />
                  </div>
                  <h4 className="font-black uppercase italic text-lg text-[#1a1a1a] mb-4">{cat.name}</h4>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-loose">
                    {cat.desc}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED BOOKS */}
      <section className="py-24 px-6 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-[#1a1a1a]">Master <span style={{ color: brandBlue }}>Recommendations</span></h2>
              <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-4">Top 3 essentials for your current level</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest"><Filter size={14}/> Sort by Elo</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredBooks.map((book, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[4rem] shadow-sm border border-gray-100 relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-8 right-8 text-[#C2410C]/20">
                   <Star size={40} fill="currentColor" />
                </div>
                <span className="bg-[#C2410C] text-white text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-[0.2em] w-fit mb-6">
                  {book.badge}
                </span>
                <h3 className="text-2xl font-black uppercase italic text-[#1a1a1a] mb-2 tracking-tighter">{book.title}</h3>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#2B5292] mb-6">By {book.author}</div>
                
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-loose mb-10 flex-grow">
                  {book.description}
                </p>

                <div className="space-y-4 mb-10 pt-6 border-t border-gray-50">
                   <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-gray-400">Recommended Elo</span>
                      <span className="text-[#1a1a1a] italic">{book.elo}</span>
                   </div>
                </div>

                <button className="w-full py-4 bg-[#1a1a1a] text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#C2410C] transition-all flex items-center justify-center gap-2">
                   Check Stock <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY BOOKS MATTER */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
             <SectionHeading 
               light
               badge="The Tactile Edge"
               title="Why Study From Paper?"
               subtitle="The science of unplugged chess improvement"
             />
             <p className="text-white/40 font-bold text-sm uppercase tracking-widest leading-loose italic mb-10">
               In an era of instant engine analysis and digital blitz, books offer the "Slow Growth" required for mastery. Physical study encourages deep calculation and prevents the habit of relying on a computer's instant evaluation.
             </p>
             <div className="grid grid-cols-2 gap-4">
               {['Zero Screen Fatigue', 'Better Visualization', 'Grandmaster Commentary', 'Permanent Reference'].map(benefit => (
                 <div key={benefit} className="flex items-center gap-3 text-[10px] font-black uppercase text-white/80 tracking-widest">
                    <CheckCircle2 size={16} className="text-[#C2410C]" /> {benefit}
                 </div>
               ))}
             </div>
          </div>
          <div className="flex-1 w-full bg-white/5 rounded-[4rem] aspect-square flex items-center justify-center p-12 border border-white/5 relative group">
             <BookOpen size={120} className="text-[#C2410C] opacity-20 absolute group-hover:scale-125 transition-transform duration-700" />
             <div className="relative z-10 text-center">
                <Sparkles className="mx-auto text-[#C2410C] mb-4" />
                <h3 className="text-2xl font-[1000] uppercase italic tracking-tight">Curated Depth</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-2">Hand-picked by the academy</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW TO CHOOSE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="The Guide"
            title="Choosing The Right Book"
            subtitle="Avoid buying books too complex or too simple for your level"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {buyingGuide.map((item, i) => (
              <div key={i} className="text-center group">
                 <div className="w-20 h-20 bg-[#F0F4F8] text-[#2B5292] rounded-[2rem] mx-auto mb-8 flex items-center justify-center group-hover:bg-[#2B5292] group-hover:text-white transition-all">
                    {item.icon}
                 </div>
                 <h4 className="text-xl font-black uppercase italic text-[#1a1a1a] mb-4">{item.title}</h4>
                 <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-loose px-8">
                   {item.desc}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            badge="Knowledge Support"
            title="Books & Reading FAQ"
            subtitle="Understanding how to get the most out of chess literature"
          />
          <div className="mt-12 bg-white p-8 md:p-12 rounded-[4rem] shadow-sm">
            <FAQItem 
              question="What is the difference between Algebraic and Descriptive notation?" 
              answer="Algebraic uses a grid system (e6, Nf3). Descriptive is an older format (P-K4). All modern books use Algebraic, which is easier to learn and standardized globally." 
            />
            <FAQItem 
              question="Should I use a physical board while reading?" 
              answer="Absolutely. Moving the pieces physically as you follow the book's variations significantly increases muscle memory and spatial awareness." 
            />
            <FAQItem 
              question="Are these books suitable for children?" 
              answer="We have a specific 'Foundations' section curated for junior players, featuring books with larger diagrams and simplified language." 
            />
            <FAQItem 
              question="Do you ship these books globally?" 
              answer="Yes. While our physical shop is at the Academy HQ, we offer global shipping for our entire curated collection." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA (Tone: Shop Engagement) */}
      <section className="py-32 px-6 bg-[#2B5292] text-center relative overflow-hidden">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-8">
            <Library className="text-white/20" size={64} />
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter mb-8 leading-none">
            Build Your <br /><span className="text-white/40">Personal Library.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 mb-12">
            <div className="flex items-center justify-center gap-2 text-white/80 font-black uppercase text-[10px] tracking-widest">
              <Search size={14}/> Personalized Recommendations
            </div>
            <div className="flex items-center justify-center gap-2 text-white/80 font-black uppercase text-[10px] tracking-widest">
              <HelpCircle size={14}/> Advice for every Elo level
            </div>
          </div>
          <button className="bg-[#C2410C] text-white px-16 py-6 rounded-full font-[1000] uppercase italic tracking-[0.2em] hover:scale-110 transition-transform text-sm shadow-2xl">
            Inquire For Availability
          </button>
        </motion.div>
        
        {/* Absolute branding tag */}
        <div className="absolute bottom-10 right-10 flex items-center gap-2 opacity-20">
           <Info size={16} className="text-white" />
           <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white">Academic Resource</span>
        </div>
      </section>

      <Footer />
    </div>
  )
}