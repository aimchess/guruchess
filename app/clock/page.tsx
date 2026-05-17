"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Timer, 
  Zap, 
  ShieldCheck, 
  Settings, 
  Cpu, 
  Battery, 
  Eye, 
  ChevronDown, 
  Info, 
  ShoppingBag,
  Clock,
  CheckCircle2,
  AlertCircle,
  Truck,
  Box
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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

export default function ClockPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const mainFeatures = [
    { 
      icon: <Cpu size={32}/>, 
      title: "Smart Logic", 
      desc: "Advanced micro-processing ensures 0.001s accuracy in competitive play." 
    },
    { 
      icon: <Battery size={32}/>, 
      title: "Eco Endurance", 
      desc: "Up to 2 years of battery life on a single pair of standard AA batteries." 
    },
    { 
      icon: <Eye size={32}/>, 
      title: "High Contrast", 
      desc: "Large LCD display designed for visibility under harsh tournament lighting." 
    },
    { 
      icon: <Settings size={32}/>, 
      title: "Global Presets", 
      desc: "36 pre-programmed timing modes including FIDE, Fischer, and Bronstein." 
    }
  ]

  const technicalSpecs = [
    { label: "Material", value: "Impact Resistant ABS Plastic" },
    { label: "Certification", value: "FIDE Official Tournament Approved" },
    { label: "Timing Methods", value: "Bonus, Delay, Period, Byo-Yomi" },
    { label: "Power Source", value: "2x AA Batteries (Included)" },
    { label: "Dimensions", value: "190mm x 120mm x 60mm" },
    { label: "Weight", value: "0.45kg (Balanced for stability)" }
  ]

  const productLineup = [
    {
      name: "DGT 2010 Pro",
      badge: "Flagship",
      desc: "The world's most popular tournament clock. Used in World Championships.",
      features: ["FIDE Approved", "Soft-Touch Lever", "Robust Housing"],
      color: "#F0F4F8"
    },
    {
      name: "DGT 3000",
      badge: "Elite",
      desc: "Connects to electronic boards for live broadcasting and grandmaster play.",
      features: ["Broadcast Compatible", "Seconds Displayed", "Customizable Modes"],
      color: "#FFF7F2"
    },
    {
      name: "Academy Plus",
      badge: "Standard",
      desc: "Durable design tailored for chess clubs and school environments.",
      features: ["Impact Guard", "Simplified Settings", "Loud End-Buzzer"],
      color: "#F0F4F8"
    }
  ]

  return (
    <div className="bg-white min-h-screen selection:bg-[#C2410C] selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#1a1a1a]">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
           <div className="flex flex-wrap gap-2 rotate-12 -translate-y-20">
             {Array.from({length: 100}).map((_, i) => (
               <div key={i} className="w-16 h-16 border border-white/20" />
             ))}
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
              <Timer className="text-[#C2410C]" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Official Academy Equipment</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-tight mb-8">
              Timing Is The <br /> Second <span style={{ color: brandOrange }}>Opponent</span>
            </h1>
            <p className="text-white/40 font-bold text-sm md:text-base uppercase tracking-[0.3em] max-w-xl mx-auto mb-12 leading-relaxed">
              Master your clock management with professional-grade DGT timing equipment. Engineered for the 64-square battlefield.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#C2410C] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-all active:scale-95">
                Explore Equipment
              </button>
              <button className="bg-white/5 border border-white/20 text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#1a1a1a] transition-all active:scale-95">
                Bulk Orders
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PRODUCT OVERVIEW */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20">
             <div className="flex-1 order-2 md:order-1">
                <SectionHeading 
                  badge="The Industry Standard"
                  title="Official FIDE Approved"
                  subtitle="Professional hardware used in every World Championship"
                />
                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest leading-loose italic mb-10">
                  Precision is the soul of competitive chess. Our clocks are sourced directly from the official FIDE suppliers, ensuring that your home practice environment perfectly mirrors the tournament hall.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   {technicalSpecs.map((spec, i) => (
                     <div key={i} className="border-b border-gray-100 pb-4">
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#2B5292] mb-1">{spec.label}</div>
                        <div className="text-sm font-black uppercase italic text-[#1a1a1a]">{spec.value}</div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="flex-1 order-1 md:order-2 bg-[#F0F4F8] rounded-[4rem] aspect-square flex items-center justify-center p-12 relative">
                {/* Simulated product shadow */}
                <div className="absolute bottom-20 w-3/4 h-10 bg-black/10 blur-2xl rounded-full" />
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src="/clk.jpg" 
                  alt="Official Chess Clock" 
                  className="relative z-10 drop-shadow-2xl rounded-[3rem] object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE FEATURES */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            light
            badge="Engineering"
            title="Beyond The Seconds"
            subtitle="Advanced features built for modern competitive standards"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {mainFeatures.map((feature, i) => (
               <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/5 text-center group hover:bg-[#C2410C] transition-all duration-500">
                  <div className="text-[#C2410C] group-hover:text-white mb-6 flex justify-center transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="font-black uppercase italic text-sm mb-4">{feature.title}</h4>
                  <p className="text-white/40 group-hover:text-white/80 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    {feature.desc}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY USE A CLOCK */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FFF7F2] rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1">
                <SectionHeading 
                  badge="The Psychology"
                  title="Manage The Pressure"
                  subtitle="Why home training needs time controls"
                />
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="mt-1 text-[#2B5292]"><Zap size={24}/></div>
                      <div>
                        <h5 className="font-black uppercase text-sm italic">Conditioning The Mind</h5>
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2 leading-relaxed">
                          Without a clock, you have infinite time to think. In a tournament, you don't. Training with increments forces you to develop "Time Intuition."
                        </p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="mt-1 text-[#C2410C]"><ShieldCheck size={24}/></div>
                      <div>
                        <h5 className="font-black uppercase text-sm italic">Familiarity Breeds Confidence</h5>
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2 leading-relaxed">
                          By using the official hardware at home, the physical act of hitting the lever becomes a subconscious relief rather than a stressful distraction.
                        </p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="flex-1 w-full bg-white rounded-[3rem] p-8 border border-orange-100 relative shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-50">
                   <div className="text-center flex-1 border-r border-gray-50">
                      <div className="text-4xl font-[1000] italic text-[#1a1a1a]">05:00</div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-[#2B5292] mt-1">Player White</div>
                   </div>
                   <div className="text-center flex-1">
                      <div className="text-4xl font-[1000] italic text-[#C2410C]">03:42</div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-[#2B5292] mt-1">Player Black</div>
                   </div>
                </div>
                <div className="text-center">
                   <span className="inline-block bg-[#F0F4F8] text-[#2B5292] px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Blitz: 5+3 Increment Active</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VARIANTS */}
      <section className="py-24 px-6 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Product Lineup"
            title="The Academy Series"
            subtitle="Select the model that fits your level of competition"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {productLineup.map((clock, i) => (
              <div key={i} style={{ backgroundColor: "white" }} className="p-12 rounded-[4rem] border border-gray-100 group hover:shadow-2xl transition-all duration-500 flex flex-col">
                 <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-black uppercase italic tracking-tighter text-[#1a1a1a]">{clock.name}</h4>
                    <span className="bg-[#2B5292] text-white text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-widest">{clock.badge}</span>
                 </div>
                 <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-loose mb-10">{clock.desc}</p>
                 
                 <div className="space-y-4 mb-10 flex-grow">
                   {clock.features.map((f, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]">
                       <CheckCircle2 size={14} className="text-[#C2410C]" /> {f}
                     </div>
                   ))}
                 </div>

                 <button className="w-full py-4 bg-[#1a1a1a] text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#C2410C] transition-all shadow-lg active:scale-95">
                   Request Specification
                 </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICE INFO */}
      <section className="py-20 px-6 border-y border-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { icon: <Truck />, label: "Global Shipping" },
             { icon: <ShieldCheck />, label: "2 Year Warranty" },
             { icon: <CheckCircle2 />, label: "Tested & Calibrated" },
             { icon: <Box />, label: "Gift Packaging" }
           ].map((s, i) => (
             <div key={i} className="text-center">
                <div className="text-[#2B5292] mb-3 flex justify-center">{s.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{s.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            badge="Support"
            title="Technical FAQ"
            subtitle="Everything you need to know about setup and care"
          />
          <div className="mt-12">
            <FAQItem 
              question="How do I set a custom Fischer increment?" 
              answer="Most of our DGT clocks have a custom setting mode (usually Option 00 or 99). You can program the base time and the bonus seconds separately using the '+' and '-' buttons on the back." 
            />
            <FAQItem 
              question="Is the DGT 2010 approved for FIDE events?" 
              answer="Yes, the DGT 2010 is the official 'FIDE Clock.' It carries the FIDE seal of approval and is the standard for almost all sanctioned international tournaments." 
            />
            <FAQItem 
              question="What is the difference between Delay and Bonus?" 
              answer="Bonus (Fischer) adds time to your clock for every move you make. Delay (Bronstein) gives you a certain amount of free time per move before your main clock starts counting down." 
            />
            <FAQItem 
              question="Can these clocks be used for Blitz and Bullet?" 
              answer="Absolutely. They are designed for the high-impact nature of blitz chess. the levers are tested for hundreds of thousands of cycles." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-32 px-6 bg-[#C2410C] text-center relative overflow-hidden">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-8">
            <AlertCircle className="text-white animate-pulse" size={48} />
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter mb-8 leading-none">
            Ready To Upgrade <br /><span className="text-black/30">Your Training Gear?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 mb-12">
             <div className="flex items-center justify-center gap-2 text-white/80 font-black uppercase text-[10px] tracking-widest">
                <ShoppingBag size={14}/> Bulk Pricing Available
             </div>
             <div className="flex items-center justify-center gap-2 text-white/80 font-black uppercase text-[10px] tracking-widest">
                <Clock size={14}/> Limited Stock Remaining
             </div>
          </div>
          <button className="bg-white text-[#C2410C] px-16 py-6 rounded-full font-[1000] uppercase italic tracking-[0.2em] hover:scale-110 transition-transform text-sm shadow-2xl">
            Inquire For Availability
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}