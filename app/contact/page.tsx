"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Award, Users, Trophy } from "lucide-react"

import { sendContactEmail } from "@/app/actions/sendEmail" // Import the action
import { ContactHero } from "@/components/contactBanner"
import { ContactSection } from "@/components/contact"
import { FAQ } from "@/components/faq"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    program: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Call the Server Action
    const result = await sendContactEmail(formData)

    if (result.success) {
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        experience: "",
        program: "",
        message: "",
      })
    } else {
      console.error("Resend Error:", result.error)
      setSubmitStatus("error")
    }
    
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactHero/>
      <ContactSection/>
      <FAQ/>


      <Footer />
    </div>
  )
}