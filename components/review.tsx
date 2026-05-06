"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const reviews = [
    
    {
      name: "Ramesh Palankar",
      role: "Parent",
      text: "They trained my son for his upcoming interstate chess competition and he won. I am very happy with their coaching.",
      rating: 5,
    },
    {
      name: "Aditi Mayekar",
      role: "Parent",
      text: "I enrolled my daughter in their chess class to increase her concentration level. My daughter loves chess a lot. I would recommend to other parents as well.",
      rating: 5,
    },
    {
      name: "Manoj Rao",
      role: "Parent",
      text: "Really great place. After enrolling in this academy my son has started loving chess. Would recommend others.",
      rating: 5,
    }
  ]

  return (
    <section className="py-24 bg-[#fcfdff] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER - Inspired by the reference layout */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-serif italic text-2xl mb-2"
            style={{ color: brandOrange }}
          >
            our clients
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter uppercase italic leading-none"
          >
            TESTIMONIALS
          </motion.h2>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full" style={{ backgroundColor: brandBlue }} />
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* The "Bubble" Card */}
              <div 
                className="relative z-10 bg-[#C2410C] p-8 rounded-[2.5rem] min-h-[280px] flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-2 shadow-2xl"
                style={{ backgroundColor: brandOrange }}
              >
                {/* Speech Bubble Tail */}
                <div 
                  className="absolute -bottom-4 right-12 w-8 h-8 rotate-45 z-[-1]"
                  style={{ backgroundColor: brandOrange }}
                />

                {/* Content */}
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="white" className="text-white opacity-90" />
                    ))}
                  </div>
                  
                  <Quote size={40} className="absolute top-6 right-8 text-white opacity-10" />
                  
                  <p className="text-white text-lg font-bold leading-relaxed italic tracking-tight">
                    "{item.text}"
                  </p>
                </div>

                {/* Identity */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="text-white font-black uppercase tracking-widest text-sm leading-none">
                    {item.name}
                  </h4>
                  <p className="text-white/60 text-[10px] font-bold uppercase mt-1 tracking-[0.2em]">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Offset Decorative Shadow (The Dark Blue Layer from reference) */}
              <div 
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.5rem] z-0"
                style={{ backgroundColor: brandBlue }}
              />
            </motion.div>
          ))}
        </div>

        {/* TRUST BADGE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="user" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
               </div>
             ))}
             <div className="w-10 h-10 rounded-full border-4 border-white bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
               +50
             </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            Trusted by over 200+ Chess families
          </p>
        </motion.div>
      </div>
    </section>
  )
}