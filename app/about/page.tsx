"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Trophy, Award, Users, Target, Calendar, Star, Heart, BookOpen, Lightbulb, Eye } from "lucide-react"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/aboutBanner"
import { AboutUsSection } from "@/components/about"
import { MissionVision } from "@/components/vision"
import { WhyDifferent } from "@/components/diff"
import { CallToAction } from "@/components/cta"
import { Testimonials } from "@/components/review"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <AboutHero/>
      <AboutUsSection/>
      <MissionVision/>
      <WhyDifferent/>
      <Testimonials/>
      <CallToAction/>

  
      <Footer/>
    </div>
  )
}