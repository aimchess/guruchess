"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Brain, Users, Trophy } from "lucide-react"
import Link from "next/link"

export function AboutUsSection() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  // Placeholder images for the curved carousel
  const coaches = [
    { img: "/1.jpg" },
    { img: "/2.jpg" },
    { img: "/3.jpeg" },
    { img: "/6.webp" },
    { img: "/5.avif" },
    { img: "/4.jpg" },
    { img: "/7.jpg" },
  ]

  return (
    <section className="py-24 bg-[#FCFAF8] overflow-hidden">
      {/* 1. TOP TEXT SECTION */}
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-2xl md:text-4xl font-serif italic text-gray-800 tracking-tight">
            Learn the secrets of the mind game,
          </h2>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900 leading-[0.9]">
            Guru Chess <span style={{ color: brandBlue }}>Academy.</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Guru Chess Academy is the place for professional chess training. 
            The ideal space for young players to ease the burden of education 
            and develop creative elements through strategic play.
          </p>
          
          <div className="pt-4">
           <Link href="/contact">
  <Button 
    className="rounded-full px-8 py-6 text-sm font-black bg-black hover:bg-black/80 text-white flex items-center gap-2 mx-auto uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl"
  >
    Get started for Free <ChevronRight size={18} />
  </Button>
</Link>
          </div>
        </motion.div>
      </div>

      {/* 2. THE 3D PERSPECTIVE CAROUSEL */}
      <div className="relative flex justify-center items-center pb-24" style={{ perspective: "2000px" }}>
        <div className="flex gap-2 md:gap-4 px-10">
          {coaches.map((coach, i) => {
            // Calculated rotation for the 'concave' curve look
            const rotation = (i - 3) * -12; 
            const translationY = Math.abs(i - 3) * 15;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotateY: rotation, y: translationY }}
                whileInView={{ opacity: 1, rotateY: rotation, y: translationY }}
                viewport={{ once: true }}
                whileHover={{ 
                  rotateY: 0, 
                  y: translationY - 30, 
                  scale: 1.15,
                  zIndex: 100,
                  transition: { duration: 0.4, ease: "easeOut" } 
                }}
                className="relative w-28 sm:w-40 md:w-56 aspect-[3/4] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer bg-slate-200"
                style={{ 
                  transformStyle: "preserve-3d",
                  zIndex: 10 - Math.abs(i - 3) 
                }}
              >
                <img src={coach.img} alt="Coach" className="w-full h-full object-cover" />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* 3. BOTTOM PILLARS (Your 'About Us' data broken down) */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
          
          {/* Pillar 1: Mental Exercise */}
          <div className="text-center space-y-4">
            <h4 className="text-lg font-black uppercase tracking-tight text-gray-900">Mental Exercise</h4>
            <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest leading-relaxed px-4">
              Chess involves all dimensions: concentration, analysis, calculation, 
              assessment, and imagination power.
            </p>
            <div className="mx-auto w-10 h-1 rounded-full" style={{ backgroundColor: brandBlue }} />
          </div>

          {/* Pillar 2: Elite Mentorship */}
          <div className="text-center space-y-4 md:border-x border-gray-200">
            <h4 className="text-lg font-black uppercase tracking-tight text-gray-900">Honored Team</h4>
            <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest leading-relaxed px-4">
              Formulated with International Rated players and State/National Champions 
              to provide top-quality coaching.
            </p>
            <div className="mx-auto w-10 h-1 rounded-full" style={{ backgroundColor: brandOrange }} />
          </div>

          {/* Pillar 3: Structured Path */}
          <div className="text-center space-y-4">
            <h4 className="text-lg font-black uppercase tracking-tight text-gray-900">Proven Curriculum</h4>
            <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest leading-relaxed px-4">
              Designed courses for different age groups to make students 
              top-class players of the country.
            </p>
            <div className="mx-auto w-10 h-1 rounded-full" style={{ backgroundColor: brandBlue }} />
          </div>

        </div>
      </div>
    </section>
  )
}