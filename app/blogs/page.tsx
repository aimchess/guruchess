"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Calendar, Clock, User, ArrowRight, BookOpen, Star, Filter } from "lucide-react"
import Link from "next/link"
import { BlogHero } from "@/components/blogBanner"

export default function BlogPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Tactics", "Parenting", "Psychology", "Academy News"]

  const blogs = [
    {
      id: 1,
      title: "How Chess Improves Academic Concentration",
      excerpt: "Discover the scientific link between regular chess practice and a child's ability to focus in the classroom.",
      category: "Parenting",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      author: "Coaches Team",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000",
      featured: true
    },
    {
      id: 2,
      title: "Top 5 Opening Mistakes Junior Players Make",
      excerpt: "Opening theory can be daunting. We break down the most common blunders and how to avoid them.",
      category: "Tactics",
      date: "Oct 10, 2024",
      readTime: "8 min read",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2000"
    },
    {
      id: 3,
      title: "Building Resilience: Handling Tournament Losses",
      excerpt: "Chess is 50% skill and 50% psychology. Learn how to turn a painful loss into a stepping stone for growth.",
      category: "Psychology",
      date: "Oct 05, 2024",
      readTime: "6 min read",
      author: "Academy Staff",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2000"
    },
    {
      id: 4,
      title: "The Rise of Women in Global Chess",
      excerpt: "An inspiring look at how our girl students are breaking records and dominating the state championships.",
      category: "Academy News",
      date: "Sep 28, 2024",
      readTime: "4 min read",
      author: "Manoj Rao",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000"
    },
    {
      id: 5,
      title: "Screen Time vs. Board Time: A Healthy Balance",
      excerpt: "How to use digital chess apps effectively without losing the tactile benefits of a physical chessboard.",
      category: "Parenting",
      date: "Sep 22, 2024",
      readTime: "7 min read",
      author: "Coaches Team",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000"
    },
    {
      id: 6,
      title: "Pattern Recognition: The Secret to Speed Chess",
      excerpt: "Grandmasters don't 'calculate' everything—they recognize patterns. Here is how to train your brain.",
      category: "Tactics",
      date: "Sep 15, 2024",
      readTime: "10 min read",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?q=80&w=2000"
    },
    {
      id: 7,
      title: "Pre-Tournament Routines of Champions",
      excerpt: "What should a student eat and do 24 hours before a major championship? Our gold-medalists share their secrets.",
      category: "Psychology",
      date: "Sep 10, 2024",
      readTime: "5 min read",
      author: "Academy Staff",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
    },
    {
      id: 8,
      title: "Guru Chess Academy Expands to New Centers",
      excerpt: "We are bringing our FIDE-rated training to three new cities. Check if we are coming to your neighborhood!",
      category: "Academy News",
      date: "Sep 01, 2024",
      readTime: "3 min read",
      author: "Founding Team",
      image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2000"
    }
  ]

  const filteredBlogs = activeCategory === "All" ? blogs : blogs.filter(b => b.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#fcfdff]">
      <Navbar />

     <BlogHero/>

      {/* --- CATEGORY FILTER --- */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 text-slate-400 mr-4">
                <Filter size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Filter:</span>
            </div>
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

      {/* --- BLOG CONTENT --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        
        {/* Featured Post (Only visible when "All" is selected) */}
        {activeCategory === "All" && (
            <div className="mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative group cursor-pointer overflow-hidden rounded-[3rem] bg-white shadow-2xl flex flex-col lg:flex-row border border-slate-50"
                >
                    <div className="lg:w-1/2 overflow-hidden aspect-video lg:aspect-auto">
                        <img src={blogs[0].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-orange-50 text-[#C2410C] text-[10px] font-black uppercase tracking-widest rounded-lg">{blogs[0].category}</span>
                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Clock size={12}/> {blogs[0].readTime}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif italic text-slate-900 mb-6 group-hover:text-[#2B5292] transition-colors">{blogs[0].title}</h2>
                        <p className="text-slate-500 mb-8 leading-relaxed text-lg">{blogs[0].excerpt}</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[#2B5292]">G</div>
                            <div>
                                <p className="text-sm font-black text-slate-900 uppercase">{blogs[0].author}</p>
                                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">{blogs[0].date}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.filter(b => !b.featured || activeCategory !== "All").map((blog) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:shadow-slate-200/50"
              >
                <div className="relative aspect-video overflow-hidden">
                    <img src={blog.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-sm">{blog.category}</span>
                    </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                            <Calendar size={12} style={{ color: brandOrange }} /> {blog.date}
                        </span>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                            <Clock size={12} style={{ color: brandBlue }} /> {blog.readTime}
                        </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#2B5292] transition-colors">{blog.title}</h3>
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">{blog.excerpt}</p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandOrange }} />
                            {blog.author}
                        </span>
                        <button className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#2B5292] group-hover:text-white transition-all">
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- NEWSLETTER CTA --- */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="relative p-12 md:p-20 rounded-[4rem] bg-[#2B5292] overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
                
                <div className="relative z-10 text-center text-white flex flex-col items-center">
                    <Star size={32} fill={brandOrange} className="text-[#C2410C] mb-8" />
                    <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Stay ahead of the game.</h2>
                    <p className="text-white/70 text-lg mb-10 max-w-xl">Get tactical tips and tournament updates delivered directly to your inbox every Sunday.</p>
                    
                    <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all"
                        />
                        <button className="bg-white text-[#2B5292] px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-orange-500 hover:text-white transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}