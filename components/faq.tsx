"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react"

export function FAQ() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const faqs = [
    {
      question: "What is the minimum age to join the academy?",
      answer: "We typically start training children from the age of 5. At this stage, we focus on 'Chess Interest Building' through gamified lessons and basic board vision."
    },
    {
      question: "Do you provide both online and offline classes?",
      answer: "Yes, we offer flexible learning modes. Our physical academy provides a social competitive environment, while our global online classes use interactive boards for remote students."
    },
    {
      question: "Do I need to own a chess set for online training?",
      answer: "While we use digital interactive boards, we highly recommend having a physical board at home to practice 'real-world' board vision and tactile memory."
    },
    {
      question: "How long does it take to get a FIDE Rating?",
      answer: "Progress varies, but with consistent training, most students are ready for rated tournaments within 6-12 months of reaching the Intermediate level."
    },
    {
      question: "Are the coaches FIDE certified?",
      answer: "Absolutely. All our senior coaches are FIDE-rated players or Titled Masters (IM/FM) with years of experience in professional tournament play."
    }
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: FAQ ACCORDION (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div 
                className="w-fit px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em]"
                style={{ borderColor: `${brandBlue}40`, color: brandBlue, backgroundColor: `${brandBlue}05` }}
              >
                Information Center
              </div>
              <h2 className="text-4xl md:text-5xl font-[1000] text-slate-900 leading-tight tracking-tighter uppercase italic">
                Got <span style={{ color: brandBlue }}>Questions?</span> <br /> 
                We Have <span style={{ color: brandOrange }}>Answers.</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index
                return (
                  <div 
                    key={index}
                    className="rounded-2xl transition-all duration-300 overflow-hidden border"
                    style={{ 
                        borderColor: isOpen ? `${brandBlue}20` : '#f1f5f9',
                        backgroundColor: isOpen ? `${brandBlue}05` : 'transparent'
                    }}
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left group"
                    >
                      <span 
                        className={`text-base md:text-lg font-black transition-colors uppercase tracking-tight ${isOpen ? 'text-[#2B5292]' : 'text-slate-700 group-hover:text-[#2B5292]'}`}
                        style={{ color: isOpen ? brandBlue : '' }}
                      >
                        {faq.question}
                      </span>
                      <div 
                        className={`shrink-0 ml-4 p-1 rounded-lg transition-all duration-300 ${isOpen ? 'bg-[#C2410C] text-white rotate-90 shadow-lg' : 'bg-slate-100 text-slate-400'}`}
                        style={{ backgroundColor: isOpen ? brandOrange : '' }}
                      >
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-sm md:text-base text-slate-500 font-semibold leading-relaxed max-w-[90%]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a 
                href="/contact" 
                className="flex items-center gap-2 text-[#2B5292] font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform underline underline-offset-8 decoration-2"
              >
                <HelpCircle size={18} />
                Visit Support Center
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: VISUAL SECTION (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
              <img 
                src="/faq2.png" 
                alt="Guru Chess Academy Session" 
                className="w-full h-[450px] md:h-[450px] object-cover"
              />
              
             
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-[#C2410C]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}