"use client"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, ArrowRight, Filter } from "lucide-react"
import Link from "next/link"
import { BlogHero } from "@/components/blogBanner"
import { blogs } from "./blog-data"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", "Tactics", "Parenting", "Psychology", "Academy News"]
  const filteredBlogs = activeCategory === "All" ? blogs : blogs.filter(b => b.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#fcfdff]">
      <Navbar />
      <BlogHero />

      {/* --- CATEGORY FILTER --- */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative py-2
                ${activeCategory === cat ? "text-[#2B5292]" : "text-slate-400 hover:text-slate-600"}`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2B5292]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all"
              >
                <Link href={`/blog/${blog.slug}`} className="cursor-pointer">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2B5292] transition-colors">{blog.title}</h3>
                    <p className="text-slate-500 text-sm mb-8 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                         <Clock size={14} /> {blog.readTime}
                       </span>
                       <div className="p-2 rounded-full bg-slate-50 group-hover:bg-[#2B5292] group-hover:text-white transition-all">
                          <ArrowRight size={18} />
                       </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </div>
  )
}