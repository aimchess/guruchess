"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Quote, Calendar, ShieldCheck, Award } from "lucide-react"

export function SuccessStories() {
  const stories = [
    {
      id: "vihaan",
      name: "Vihaan",
      duration: "7 Years with Academy",
      rating: "1700+ FIDE RATED",
      bgColor: "#2B5292", // Navy
      accentColor: "#60A5FA", // Lighter blue for tags
      images: [
        "/v4.jpeg",
        "/v1.jpeg",
        "/v2.jpeg",
        "/v5.jpeg"
      ],
      highlights: ["Delhi State Champ", "UP State Gold", "CBSE Zonals Winner"],
      testimonial: "Shailendra Sir has been teaching Vihaan since he was 5. In 7 years, we've seen him grow from a total beginner to a 1700+ FIDE rated player. Sir has been his biggest motivator in tough times and always pushed him."
    },
    {
      id: "irish-champ",
      name: "Irish National Champ",
      duration: "3 Years with Academy",
      rating: "1600+ NATIONAL",
      bgColor: "#C2410C", // Orange
      accentColor: "#FDBA74", // Lighter orange for tags
      images: [
        "/g1.jpeg",
      ],
      highlights: ["U16 Irish Gold", "World Youth Selected", "Women's Challenger Champ"],
      testimonial: "In 3 years, I went from 1400 online to 1700, and 1300 National to 1600. I won the women's challenger section and got selected for World Youth Championship. Sir has helped in many ways."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-[1000] tracking-tighter text-slate-900 mb-2 uppercase italic">
            Academy <span className="text-[#2B5292]">Hall of Fame</span>
          </h2>
          <div className="h-1 w-16 bg-[#C2410C] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % story.images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [story.images.length])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl h-full max-h-[640px]"
      style={{ backgroundColor: story.bgColor }}
    >
      {/* IMAGE AREA */}
      <div className="relative h-90 w-full overflow-hidden bg-black/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg}
            src={story.images[currentImg]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover brightness-90"
          />
        </AnimatePresence>
        
        {/* Progress Indicators */}
        <div className="absolute top-4 left-8 right-8 flex gap-1.5 z-20">
          {story.images.map((_: any, i: number) => (
            <div key={i} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
              {i === currentImg && (
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "100%" }} 
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-white" 
                />
              )}
            </div>
          ))}
        </div>

        {/* Rating Overlay */}
        <div className="absolute bottom-4 left-8">
           <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 flex items-center gap-2">
              <Trophy size={12} className="text-white" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">{story.rating}</span>
           </div>
        </div>
      </div>

      {/* TEXT AREA */}
      <div className="p-8 md:p-10 flex flex-col flex-grow text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1 opacity-70">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Verified Success</span>
            </div>
            <h3 className="text-2xl font-black tracking-tight uppercase">
              {story.name}
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-widest mt-1 flex items-center gap-1 opacity-60">
              <Calendar size={10} /> {story.duration}
            </p>
          </div>
          <Quote size={40} className="opacity-10 absolute right-8 top-[55%]" />
        </div>

        <div className="relative mb-6">
          <p className="text-white/90 font-medium leading-relaxed italic text-[15px] line-clamp-4">
            "{story.testimonial}"
          </p>
        </div>

        {/* Highlight Tags */}
        <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-2">
          {story.highlights.map((tag: string) => (
            <div 
              key={tag} 
              className="px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest bg-white/10 border border-white/10 flex items-center gap-2"
            >
              <Award size={12} style={{ color: story.accentColor }} />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}