"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ReviewsHero } from "@/components/reviewsBanner"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Seo from "@/components/Seo"
import { 
  Trophy, 
  TrendingUp, 
  Calendar, 
  Award, 
  Target, 
  Star, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Quote,
  Sparkles,
  BookOpenCheck
} from "lucide-react"

// Simple Custom Carousel Component for Student Reviews
function ReviewCarousel({ images, altText }: { images: string[]; altText: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) return null

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] bg-slate-900 overflow-hidden flex items-center justify-center group">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`${altText} - slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* Navigation arrows (only if multiple images) */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(idx)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-white w-4" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function ReviewsPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const seoData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Guru Chess Academy Coaching Reviews",
    "description": "Reviews and feedback from chess students mentored by CM Shailendra Bajpai. Watch rating improvements from 1400 to 2000 FIDE.",
    "brand": {
      "@type": "Brand",
      "name": "Guru Chess Academy"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25"
    }
  }

  const [activeTab, setActiveTab] = useState("all")

  const fullReviews = [
    {
      id: "preeyansh",
      name: "Preeyansh Roul",
      country: "New Zealand",
      flag: "🇳🇿",
      type: "international",
      ratingBefore: "1700 FIDE",
      ratingAfter: "2000 FIDE",
      ratingJump: "+300 FIDE ELO",
      coach: "CM Shailendra Bajpai",
      duration: "Ongoing Mentorship",
      achievements: [
        "Beat a 2370 FIDE Master (FM) twice in classical chess 🏆",
        "Refined deep positional understanding",
        "Formed robust White repertoire with consistent opening edges"
      ],
      studyMaterial: [
        "The Woodpecker Method",
        "Developing Chess Intuition",
        "Timed classroom puzzles",
        "High-quality complex endgame analyses"
      ],
      quote: "That combination of a solid opening repertoire and deeper positional intuition is what let me beat a 2370 FM twice in classical.",
      reviewText: "I've been working with Shailendra sir, and I've gone from 1700 to 2000 FIDE. The biggest noticeable change in my game has been in my positional understanding and being able to understand openings deeply. I used to play openings without really knowing why, but now I can form my own opinions on a position and evaluate it with real confidence. My White repertoire in particular has become my strongest point. I go into most games with at least a slight edge, something that just wasn't true before. That combination of a solid opening repertoire and deeper positional intuition is what let me beat a 2370 FM twice in classical, a result I wouldn't have believed possible before I took training from sir.\n\nSir also gave me middlegame resources like the Woodpecker Method and Developing Chess Intuition to work through, and challenged me to do puzzles with a timer in class. We have also done many high quality, difficult endgames which have increased my capacity to see variations in different branches and also refined the basic endgame ideas I had before. I very highly recommend him to anyone trying to improve and increase their quality and understanding of the game.",
      images: ["/chess1.png"], // Chess graphic
      tags: ["Positional Play", "White Repertoire", "FM Slayer"]
    },
    {
      id: "prisha",
      name: "Prisha",
      country: "Ireland",
      flag: "🇮🇪",
      type: "international",
      ratingBefore: "1400 Online / 1300 National",
      ratingAfter: "1700 Online / 1600 National",
      ratingJump: "+300 ELO Progress",
      coach: "CM Shailendra Bajpai",
      duration: "Nearly 3 Years",
      achievements: [
        "Won the Women’s Challenger Section 🏆",
        "Represented Ireland at the World Youth Chess Championship",
        "Won 1st Place in Girls for the U16 National Irish Championship (tied 3rd in open)"
      ],
      studyMaterial: [
        "Tactical vision enhancement",
        "Skill-highly improving exercises",
        "Motivation & tournament prep"
      ],
      quote: "Because of sir I was able to win the women’s challenger section, got selected to play at the world youth chess championship and won first place in girls for the U16 national Irish championship🏆",
      reviewText: "Shailender sir has been teaching for nearly 3 years now. When I started learning chess from sir I was 1400 rapid online rating and now I have nearly reached 1700 and my national rating was 1300 now I am nearly 1600. Sir has taught me very good things that have helped me improve my skill highly. Because of sir I was able to win the women’s challenger section, got selected to play at the world youth chess championship and won first place in girls for the U16 national Irish championship with tied 3rd in the open🏆. Sir has always motivated me and helped in many ways.\n\nThank you so much for everything sir, I can’t wait to learn even more. 😊",
      images: ["/g11.jpeg"], // Prisha photos
      tags: ["National Champion", "World Youth Player", "Challenger Winner"]
    },
    {
      id: "vihaan",
      name: "Vihaan (Parent Testimonial)",
      country: "Delhi/UP, India",
      flag: "🇮🇳",
      type: "champions",
      ratingBefore: "Beginner",
      ratingAfter: "1700+ FIDE Rated",
      ratingJump: "Elite Rated Player",
      coach: "CM Shailendra Bajpai",
      duration: "7 Years (Since Age 5)",
      achievements: [
        "Delhi State Championships 🥇",
        "UP State Championships 🥇",
        "CBSE Zonals Gold Medals 🥇",
        "Multiple championships at the biggest levels"
      ],
      studyMaterial: [
        "Step-by-step beginner to 1700+ guide",
        "Mental toughness and tournament coaching",
        "Long-term master progression path"
      ],
      quote: "From a beginner to a 1700+ FIDE rated player, Sir has guided him, mentored him at every step.",
      reviewText: "Shailendra Sir has been teaching Vihaan since the age of 5 years and he is 12 now. In the proud association of 7 years with Guru Chess Academy, I have seen Vihaan level growing tremendously. From a beginner to a 1700+ FIDE rated player, Sir has guided him, mentored him at every step. Under his guidance, He achieved multiple championships at biggest levels, Delhi State Championships, UP State Championships, CBSE Zonals gold medals and many more. Sir has been his biggest motivator in tough times and always pushed him to do better. Keep pushing him Sir. Thanks for all your support during this journey👍👍",
      images: ["/v1.jpeg", "/v2.jpeg", "/v3.jpeg", "/v4.jpeg", "/v5.jpeg"], // Vihaan photos
      tags: ["State Champion", "CBSE Gold Medalist", "7-Year Legacy"]
    },
    {
      id: "paritosh",
      name: "Paritosh Dhanaraju",
      country: "India / USA",
      flag: "🇮🇳",
      type: "international",
      ratingBefore: "1400",
      ratingAfter: "1750",
      ratingJump: "+350 ELO Jump",
      coach: "CM Shailendra Bajpai",
      duration: "10 Months",
      achievements: [
        "Jumped 300+ rating points in under a year 📈",
        "Mastered opening structures and ideas",
        "Significantly improved visualization & calculation"
      ],
      studyMaterial: [
        "Specialized opening study material",
        "The Woodpecker Method",
        "Art of Attack in Chess",
        "Classic endgame literature"
      ],
      quote: "One of the main reasons for a rating jump of 300 was the study material which sir gave for openings.",
      reviewText: "I started working with Shailendra sir from september 2024 when i was 1400 . Within 10 months of training with sir i was able to reach 1750 . One of the main reasons for a rating jump of 300 was the study material which sir gave for openings . It helped me to increase my knowledge of openings I play, basic structures, ideas of the openings . It helped me to get slightly better positions ( especially white )and keep pressing for the whole game. Sir also focuses on calculation which is done using various book like Woodpecker Method , Art of Attack and various endgame books which has helped me to improve my visualization . I would highly recommend him to anyone who would like to improve and increase their understanding and rating.",
      images: ["/chess2.png"], // Chess graphic
      tags: ["Opening Prep", "Visualisation", "Rapid Rating Jump"]
    }
  ]

  const filteredReviews = activeTab === "all" 
    ? fullReviews 
    : fullReviews.filter(r => r.type === activeTab)

  return (
    <>
      <Seo
        title="Student Reviews & Success Stories | Guru Chess Academy"
        description="Read detailed student reviews for Coach CM Shailendra Bajpai. Learn how our trainees jumped 300+ FIDE rating points, won Irish & Indian state championships, and beat 2370 FMs."
        keywords="CM Shailendra Bajpai, Guru Chess Academy Reviews, Chess coach reviews, Shailendra Bajpai feedback, chess rating progress stories"
        structuredData={seoData}
      />

      <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#C2410C] selection:text-white">
        <Navbar />
        <ReviewsHero />

        {/* Filters and Stats Summary */}
        <section className="py-12 bg-white border-b border-slate-100 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Tab Filters */}
              <div className="flex flex-wrap bg-slate-100 p-1.5 rounded-2xl gap-1 w-full md:w-auto">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 w-full sm:w-auto text-center ${
                    activeTab === "all" 
                      ? "bg-white text-[#2B5292] shadow-md" 
                      : "text-slate-500 hover:text-[#2B5292]"
                  }`}
                >
                  All Reviews
                </button>
                <button
                  onClick={() => setActiveTab("international")}
                  className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 w-full sm:w-auto text-center ${
                    activeTab === "international" 
                      ? "bg-white text-[#2B5292] shadow-md" 
                      : "text-slate-500 hover:text-[#2B5292]"
                  }`}
                >
                  International Rating Jumps
                </button>
                <button
                  onClick={() => setActiveTab("champions")}
                  className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 w-full sm:w-auto text-center ${
                    activeTab === "champions" 
                      ? "bg-white text-[#2B5292] shadow-md" 
                      : "text-slate-500 hover:text-[#2B5292]"
                  }`}
                >
                  Championships & Medals
                </button>
              </div>

              {/* Coach Endorsement Banner */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200/60 px-5 py-3.5 rounded-2xl max-w-md w-full md:w-auto">
                <Sparkles className="text-[#C2410C] shrink-0 animate-pulse" size={20} />
                <p className="text-[11px] font-bold text-slate-700 leading-normal">
                  All featured students are trained by <span className="text-[#C2410C] font-black">CM Shailendra Bajpai</span> (Certified FIDE Instructor).
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Reviews Cards Grid */}
        <section className="py-20 flex-1">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-16">
              
              {filteredReviews.map((review, index) => (
                <Card 
                  key={review.id}
                  className="bg-white border-0 shadow-xl rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border-l-[6px] border-[#2B5292] group"
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      
                      {/* Left: Text and Achievements (60%) */}
                      <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between space-y-8 order-2 lg:order-1">
                        
                        {/* Head info */}
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {review.tags.map((tag, tIdx) => (
                                <Badge 
                                  key={tIdx} 
                                  className="bg-slate-100 hover:bg-slate-200 text-[#2B5292] font-black tracking-widest text-[9px] uppercase border-0 px-3 py-1"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {/* Location flag */}
                            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                              <MapPin size={12} className="text-slate-400" />
                              <span>{review.country} {review.flag}</span>
                            </div>
                          </div>

                          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tight leading-tight uppercase group-hover:text-[#2B5292] transition-colors">
                            {review.name}
                          </h2>

                          {/* Coach Tag */}
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                            <span>Coach:</span>
                            <span className="text-[#C2410C] font-black">{review.coach}</span>
                          </div>
                        </div>

                        {/* Rating Jump & Duration Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-y border-slate-100 py-6">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#C2410C] shrink-0">
                              <TrendingUp size={20} />
                            </div>
                            <div>
                              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Progress</p>
                              <p className="text-sm font-black text-slate-700 leading-tight">
                                {review.ratingBefore} ➔ {review.ratingAfter}
                              </p>
                              <p className="text-[10px] font-bold text-[#C2410C] mt-0.5">{review.ratingJump}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#2B5292] shrink-0">
                              <Calendar size={20} />
                            </div>
                            <div>
                              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Duration</p>
                              <p className="text-sm font-black text-slate-700 leading-tight">{review.duration}</p>
                            </div>
                          </div>
                        </div>

                        {/* Main Testimonial Block */}
                        <div className="relative pt-6">
                          <Quote size={50} className="absolute -top-3 -left-3 text-slate-100 z-0 pointer-events-none group-hover:text-[#2B5292]/5 transition-colors" />
                          <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed italic z-10 relative whitespace-pre-line">
                            "{review.reviewText}"
                          </p>
                        </div>

                        {/* Highlight Achievements and Material */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                          
                          {/* Achievements */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-black text-[#2B5292] uppercase tracking-wider">
                              <Trophy size={14} className="text-[#C2410C]" />
                              <span>Key Highlights</span>
                            </div>
                            <ul className="space-y-2">
                              {review.achievements.map((ach, aIdx) => (
                                <li key={aIdx} className="text-[11px] text-slate-600 font-bold leading-normal flex items-start gap-2">
                                  <span className="text-[#C2410C] mt-0.5">•</span>
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Study material */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-black text-[#2B5292] uppercase tracking-wider">
                              <BookOpenCheck size={14} />
                              <span>Core Training Materials</span>
                            </div>
                            <ul className="space-y-2">
                              {review.studyMaterial.map((mat, mIdx) => (
                                <li key={mIdx} className="text-[11px] text-slate-600 font-bold leading-normal flex items-start gap-2">
                                  <span className="text-[#2B5292] mt-0.5">✓</span>
                                  <span>{mat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                      </div>

                      {/* Right: Images and Slide-shows (40%) */}
                      <div className="lg:col-span-5 relative bg-slate-900 order-1 lg:order-2 min-h-[300px] md:min-h-[400px] lg:min-h-0">
                        <div className="lg:absolute lg:inset-0 w-full h-full">
                          <ReviewCarousel images={review.images} altText={review.name} />
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              ))}

            </div>
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="py-24 bg-[#080c17] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#2B5292_1px,transparent_1px)] [background-size:40px_40px] opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight">
              Begin Your Chess Journey With <br />
              <span className="text-[#C2410C]">Guru Chess Academy</span>
            </h2>
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs md:text-sm max-w-xl mx-auto leading-loose">
              Whether you want to climb FIDE ratings like Preeyansh & Vihaan or secure international junior titles like Prisha, our grandmaster methodology starts with a free demo.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="bg-[#C2410C] hover:bg-[#A34F26] text-white font-black px-10 py-6 rounded-xl shadow-2xl text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                  Request a Free Evaluation Class
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
