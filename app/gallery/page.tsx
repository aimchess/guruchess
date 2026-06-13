"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Camera, Award, Users, Trophy, PlayCircle, Star, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { GalleryHero } from "@/components/galleryBanner"

// --- THE HERO COMPONENT (Integrated) --

export default function GalleryPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false) // Added state
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  // --- CLEAN DEMO DATA ---
  const images = [
    { id: 19, src: "/g1.jpeg", category: "tournaments", title: "National Open 2024", desc: "Advanced tactical battle in the final rounds." },
    { id: 1, src: "/pri1.jpg", category: "tournaments", title: "National Open 2024", desc: "Advanced tactical battle in the final rounds." },
    { id: 2, src: "/12.jpg", category: "achievements", title: "Grandmaster Workshop", desc: "Students learning from visiting International Masters." },
    { id: 3, src: "/v2.jpeg", category: "academy", title: "The Strategy Room", desc: "Our premium training center layout." },
    { id: 4, src: "/14.jpg", category: "students", title: "Future Grandmasters", desc: "Junior batch during a weekend blitz session." },
    { id: 5, src: "/v1.jpeg", category: "tournaments", title: "Regional Finals", desc: "U-14 state championship highlights." },
    { id: 6, src: "/16.jpg", category: "achievements", title: "Wall of Fame", desc: "Celebrating 200+ wins this calendar year." },
    { id: 7, src: "/v4.jpeg", category: "academy", title: "Digital Analysis", desc: "Using AI tools to analyze student games." },
    { id: 8, src: "/18.jpg", category: "students", title: "Summer Camp 2024", desc: "Annual gathering of the Guru Chess family." },
    { id: 9, src: "/19.jpg", category: "tournaments", title: "Blitz Marathon", desc: "Speed chess tournament under the lights." },
    { id: 10, src: "/20.jpg", category: "tournaments", title: "Regional Finals", desc: "U-14 state championship highlights." },
    { id: 11, src: "/21.jpg", category: "achievements", title: "Wall of Fame", desc: "Celebrating 200+ wins this calendar year." },
    { id: 12, src: "/11.jpg", category: "academy", title: "Digital Analysis", desc: "Using AI tools to analyze student games." },
    { id: 13, src: "/15.jpg", category: "students", title: "Summer Camp 2024", desc: "Annual gathering of the Guru Chess family." },
    { id: 14, src: "/13.jpg", category: "tournaments", title: "Blitz Marathon", desc: "Speed chess tournament under the lights." },
    { id: 15, src: "/v3.jpeg", category: "tournaments", title: "Regional Finals", desc: "U-14 state championship highlights." },
    { id: 16, src: "/v4.jpeg", category: "achievements", title: "Wall of Fame", desc: "Celebrating 200+ wins this calendar year." },
    { id: 17, src: "/17.jpg", category: "academy", title: "Digital Analysis", desc: "Using AI tools to analyze student games." },
    { id: 18, src: "/v5.jpeg", category: "students", title: "Summer Camp 2024", desc: "Annual gathering of the Guru Chess family." },
    { id: 20, src: "/pri2.jpg", category: "tournaments", title: "National Open 2024", desc: "Advanced tactical battle in the final rounds." },
    { id: 21, src: "/pri3.jpg", category: "tournaments", title: "National Open 2024", desc: "Advanced tactical battle in the final rounds." },
  ]

  const filters = [
    { id: "all", label: "All Moments", icon: Camera },
    { id: "tournaments", label: "Tournaments", icon: Trophy },
    { id: "achievements", label: "Victories", icon: Award },
    { id: "academy", label: "The Academy", icon: Search },
    { id: "students", label: "Student Life", icon: Users },
  ]

  const filteredImages = activeFilter === "all" ? images : images.filter((img) => img.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <GalleryHero/>
      {/* --- FILTER BAR --- */}
      <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant="ghost"
              className={`rounded-full px-6 font-black text-[10px] uppercase tracking-[0.2em] transition-all
                ${activeFilter === filter.id 
                  ? "bg-[#2B5292] text-white shadow-lg" 
                  : "text-slate-400 hover:bg-slate-50"}`}
            >
              <filter.icon size={14} className="mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>
      </section>

      {/* --- GALLERY GRID --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(image.src)}
                  className="group relative cursor-zoom-in"
                >
                  <Card className="overflow-hidden rounded-[2rem] border-0 shadow-sm transition-all duration-500 hover:shadow-2xl">
                    <div className="aspect-[6/5] relative">
                      <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      
                     
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative max-w-5xl w-full">
              <img src={selectedImage} alt="Large view" className="w-full h-auto max-h-[85vh] object-contain rounded-xl" />
              <button className="absolute -top-12 right-0 text-white flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
                <X size={24} /> Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-[#fcfdff] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <Star size={20} fill={brandOrange} className="text-orange-600" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Join the legacy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-tighter uppercase italic mb-8">
            BE THE NEXT <span style={{ color: brandBlue }}>STORY</span> IN OUR <span style={{ color: brandOrange }}>GALLERY.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Link href="/contact">
              <Button 
                className="h-16 px-12 rounded-full text-xs font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
                style={{ backgroundColor: brandOrange, color: 'white' }}
              >
                Start Your Journey
              </Button>
              </Link>
            <Link href="/achievements" className="mt-2 sm:mt-0">
              <Button variant="outline" className="h-16 px-12 rounded-full text-xs font-black uppercase tracking-widest border-slate-200">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}