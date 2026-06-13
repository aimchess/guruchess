"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Camera, Star } from "lucide-react"

export function AutoGallery() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const row1 = [
    { type: "Tournament", label: "State Open", img: "/pri1.jpg" },
    { type: "Certificate", label: "FIDE Certified", img: "/g1.jpeg" },
    { type: "Medal", label: "Victory Moment", img: "/11.jpg" },
    { type: "Tournament", label: "Blitz Masters", img: "/12.jpg" },
    { type: "Medal", label: "National Gold", img: "/13.jpg" },
  ]

  const row2 = [
    { type: "Medal", label: "Junior Cup", img: "/v3.jpeg" },
    { type: "Certificate", label: "Elo Achievement", img: "/v4.jpeg" },
    { type: "Tournament", label: "District Open", img: "/14.jpg" },
    { type: "Medal", label: "Bronze Finish", img: "/15.jpg" },
    { type: "Certificate", label: "Academy Merit", img: "/16.jpg" },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex justify-center items-center gap-3">
             <div className="h-px w-12 bg-[#2B5292]" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Academy Highlights</span>
             <div className="h-px w-12 bg-[#2B5292]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 tracking-tighter uppercase italic leading-none">
            Moments of <span style={{ color: brandOrange }}>Excellence.</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto pt-4">
            A visual chronicle of strategic growth, tournament victories, and 
            national recognitions at Guru Chess Academy.
          </p>
        </motion.div>
      </div>

      {/* INFINITE CAROUSEL - ROW 1 (Moves Left) */}
      <div className="relative flex overflow-hidden group mb-8">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...row1, ...row1].map((item, idx) => (
            <GalleryCard key={idx} item={item} brandBlue={brandBlue} />
          ))}
        </motion.div>
      </div>

      {/* INFINITE CAROUSEL - ROW 2 (Moves Right) */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [-1920, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...row2, ...row2].map((item, idx) => (
            <GalleryCard key={idx} item={item} brandBlue={brandBlue} />
          ))}
        </motion.div>
      </div>

      {/* Gradient Fades for Side Edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </section>
  )
}

function GalleryCard({ item, brandBlue }: any) {
  return (
    <div className="relative w-[300px] md:w-[400px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-slate-50 group/card">
      <img 
        src={item.img} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
        alt="Gallery" 
      />
      

    </div>
  )
}