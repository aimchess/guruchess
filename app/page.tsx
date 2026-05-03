"use client"

import { useState } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { Play, MessageCircle } from "lucide-react"

// Component Imports
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/service"
import { WhyChooseUs } from "@/components/why-us"
import { Courses } from "@/components/courses"
import { Achievements } from "@/components/ach"
import { Testimonials } from "@/components/review"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Brand Colors
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  // Structured Data for SEO (Updated for Guru Chess Academy)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Guru Chess Academy",
    "url": "https://www.guruchessacademy.com",
    "logo": "/guru-logo.jpeg",
    "description": "Professional chess training academy led by Mr. Pradeep Pathak and a team of International Rated players. Specializing in FIDE-standard coaching for kids and competitive players.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sunrise School, Shipra Sun City, Indirapuram",
      "addressLocality": "Ghaziabad",
      "addressRegion": "UP",
      "postalCode": "201014",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9911289767",
      "contactType": "Customer Service",
      "contactOption": "WhatsApp",
      "areaServed": "Global"
    },
    "sameAs": [
      "https://www.facebook.com/share/1CrebozWXz/",
      "https://www.instagram.com/guruchessacademy2025",
      "https://youtube.com/@guruchessacademy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "210"
    }
  }

  return (
    <>
      <Head>
        <title>Guru Chess Academy | Professional Chess Coaching in Indirapuram</title>
        <meta
          name="description"
          content="Master the mind game at Guru Chess Academy. Expert coaching by International Rated players for beginners, intermediate, and advanced students. Join our Indirapuram hub or online classes."
        />
        <meta
          name="keywords"
          content="chess academy Ghaziabad, chess coaching Indirapuram, Guru Chess Academy, Pradeep Pathak, learn chess online, FIDE rated coaches, chess for kids"
        />
        <meta name="author" content="Guru Chess Academy" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Guru Chess Academy | World-Class Strategic Training" />
        <meta property="og:description" content="Transform from a beginner to a tactical master with Guru Chess Academy. Specialized FIDE-aligned curriculum." />
        <meta property="og:image" content="/guru-logo.jpeg" />
        <meta property="og:url" content="https://www.guruchessacademy.com" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="min-h-screen bg-white">
        <header>
          <Navbar />
        </header>

        <main>
          {/* Main Content Sections */}
          <Hero />
          <Services />
          <WhyChooseUs />
          <Courses />
          <Achievements />
          <Testimonials />
          <FAQ />
          <CallToAction />

          {/* Floating WhatsApp Button - Custom Academy Style */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-[100]"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40" />
              
              <a
                href="https://wa.me/919911289767?text=Hello Guru Chess Academy! I would like to inquire about your chess courses."
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 border-2 border-white/20"
                aria-label="Chat with Guru Chess Academy"
              >
                <MessageCircle size={28} fill="currentColor" className="text-white" />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-4 bg-[#080c17] text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-xl">
                  Chat with a Master
                </div>
                
                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-[#C2410C] border-2 border-white rounded-full flex items-center justify-center shadow-lg">
                   <span className="text-[8px] font-black">1</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Video Modal - Logic Kept for future intro video */}
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-[#080c17]/95 backdrop-blur-md flex items-center justify-center z-[110] p-4"
              onClick={() => setIsVideoOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-[2.5rem] p-2 max-w-5xl w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video bg-slate-900 rounded-[2rem] flex items-center justify-center overflow-hidden relative">
                   <Play size={64} className="text-white opacity-20" />
                   <p className="absolute bottom-10 text-white/40 font-bold uppercase tracking-widest text-xs">
                     Academy Introduction Video Placeholder
                   </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}