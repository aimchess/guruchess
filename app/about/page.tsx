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
import CoachSection from "@/components/founder"
import { FounderSection } from "@/components/anu"
import DeepakKatiyarProfile from "@/components/deepak"
import Seo from "@/components/Seo"

export default function AboutPage() {
  const coachData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "CM Shailendra Bajpai",
    jobTitle: "FIDE Instructor",
    affiliation: {
      "@type": "Organization",
      name: "Guru Chess Academy",
    },
    sameAs: [
      "https://www.facebook.com/share/1CrebozWXz/",
      "https://www.instagram.com/guruchessacademy2025",
      "https://youtube.com/@guruchessacademy",
    ],
  };

  return (
    <>
      <Seo
        title="About Coach – CM Shailendra Bajpai | Guru Chess Academy"
        description="Learn from CM Shailendra Bajpai, a certified FIDE Instructor and Candidate Master, leading Guru Chess Academy."
        keywords="CM Shailendra Bajpai, FIDE Instructor India, Candidate Master Chess Coach, Guru Chess Academy"
        structuredData={coachData}
      />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <AboutHero />
        <AboutUsSection />
        <FounderSection />
        <CoachSection />
        <DeepakKatiyarProfile />
        <MissionVision />
        <WhyDifferent />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}