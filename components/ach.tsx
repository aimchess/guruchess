"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Quote, Calendar, ShieldCheck, Award, Star } from "lucide-react"

export function SuccessStories() {
  const stories = [
    {
      id: "vihaan",
      name: "Vihaan",
      duration: "7 Years with Academy",
      rating: "1700+ FIDE RATED",
      bgColor: "#2B5292",
      accentColor: "#60A5FA", 
      images: ["/v4.jpeg", "/v1.jpeg", "/v2.jpeg", "/v5.jpeg"],
      highlights: ["Delhi State Champ", "UP State Gold"],
      testimonial: "Shailendra Sir has been teaching Vihaan since he was 5. We've seen him grow from a total beginner to a 1700+ FIDE rated player."
    },
    {
      id: "priyansh",
      name: "Priyansh Arora",
      duration: "Academy Champion",
      rating: "UP STATE CHAMPION",
      bgColor: "#C2410C",
      accentColor: "#FDBA74", 
      images: ["/pri1.jpg","/pri2.jpg","/pri3.jpg"], 
      highlights: ["UP U-13 Gold 2024", "Bijnor District Lead"],
      testimonial: "Priyansh secured first place in the Uttar Pradesh Under-13 Chess Championship 2024 in Bijnor. We are proud of his strategic brilliance."
    },
    {
      id: "irish-champ",
      name: "National Champ",
      duration: "3 Years with Academy",
      rating: "1600+ NATIONAL",
      bgColor: "#2B5292",
      accentColor: "#60A5FA", 
      images: ["/g1.jpeg"],
      highlights: ["Irish Gold", "World Youth Selected"],
      testimonial: "In 3 years, I went from 1400 online to 1700. Sir has helped me win the women's challenger section and World Youth selection."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full border border-slate-100"
          >
            <Star size={12} fill="#C2410C" className="text-[#C2410C]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Hall of Fame</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter text-slate-900 uppercase italic">
            Victory <span className="text-[#2B5292]">Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StoryCard({ story }: { story: any }) {
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    if (story.images.length <= 1) return
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % story.images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [story.images.length])

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-[2.5rem] overflow-hidden shadow-xl h-full border-2 border-slate-50"
      style={{ backgroundColor: story.bgColor }}
    >
      {/* COMPACT IMAGE AREA */}
      <div className="relative h-64 w-full overflow-hidden bg-black/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg}
            src={story.images[currentImg]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Progress Bar (Only for multi-image) */}
        {story.images.length > 1 && (
          <div className="absolute top-4 left-6 right-6 flex gap-1.5 z-20">
            {story.images.map((_: any, i: number) => (
              <div key={i} className="h-0.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                {i === currentImg && (
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 4, ease: "linear" }} className="h-full bg-white" />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute bottom-4 left-6">
           <div className="bg-[#080c17]/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 flex items-center gap-2">
              <Trophy size={10} className="text-orange-400 fill-current" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white">{story.rating}</span>
           </div>
        </div>
      </div>

      {/* COMPACT TEXT AREA */}
      <div className="p-6 md:p-8 flex flex-col flex-grow text-white">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1 opacity-60">
            <ShieldCheck size={12} />
            <span className="text-[8px] font-black uppercase tracking-[0.2em]">Verified</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black uppercase leading-tight">
            {story.name}
          </h3>
          <p className="text-[9px] font-bold uppercase tracking-widest mt-1 flex items-center gap-1 opacity-50">
            <Calendar size={10} /> {story.duration}
          </p>
        </div>

        <p className="text-white/80 font-medium leading-relaxed italic text-xs md:text-sm mb-6">
          "{story.testimonial}"
        </p>

        {/* Highlight Tags */}
        <div className="mt-auto pt-5 border-t border-white/10 flex flex-wrap gap-2">
          {story.highlights.map((tag: string) => (
            <div 
              key={tag} 
              className="px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-tighter bg-white/10 border border-white/5 flex items-center gap-1.5"
            >
              <Award size={10} style={{ color: story.accentColor }} />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}