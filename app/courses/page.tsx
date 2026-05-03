"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Trophy, 
  ChevronRight, 
  CheckCircle2, 
  Users, 
  Clock, 
  Target, 
  BarChart3,
  Search,
  BookOpen
} from "lucide-react"
import Link from "next/link"
import { CoursesBanner } from "@/components/courseBanner"
import { Courses } from "@/components/courses"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LearningIsFun } from "@/components/learning"
import { PlayerTransformation } from "@/components/before"
import { DottedCTA } from "@/components/course-cta"

export default function CoursesPage() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const courses = [
    {
      title: "Beginner",
      subtitle: "The Pawn Foundation",
      elo: "0 - 800",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=600",
      features: ["Piece Movements", "Basic Mates", "Notation"],
      duration: "12 Weeks",
      focus: "Logic Building"
    },
    {
      title: "Intermediate",
      subtitle: "The Knight's Gambit",
      elo: "800 - 1300",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=600",
      features: ["Tactical Patterns", "Opening Basics", "Strategy"],
      duration: "16 Weeks",
      focus: "Tactical IQ"
    },
    {
      title: "Advanced",
      subtitle: "The Rook's Strategy",
      elo: "1300 - 1800",
      image: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?q=80&w=600",
      features: ["Complex Plans", "Endgame Lab", "Analysis"],
      duration: "24 Weeks",
      focus: "Deep Calculation"
    },
    {
      title: "Master",
      subtitle: "The King's Domain",
      elo: "1800+",
      image: "https://images.unsplash.com/photo-1523398003113-cd86430005a2?q=80&w=600",
      features: ["Engine Mastery", "Tournament Prep", "Psychology"],
      duration: "Ongoing",
      focus: "Elite Competition"
    }
  ]

  return (
    <main className="bg-white">
        <Navbar/>
        <CoursesBanner/>
        <Courses/>
        <LearningIsFun/>
        <PlayerTransformation/>
        <DottedCTA/>

        <Footer/>
      


    </main>
  )
}