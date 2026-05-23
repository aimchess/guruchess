"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  Send, 
  MessageCircle,
  Target,
  Sparkles,
  Clock,
  CheckCircle2
} from "lucide-react"
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"
  const adminWhatsApp = "919911289767"

  // Form State
  const [loading, setLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skillLevel: "Beginner (Never played)",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // --- WHATSAPP LOGIC ---
  const sendToWhatsApp = () => {
    const text = `*New Contact Inquiry*%0A` + 
                 `*Name:* ${formData.name || 'Interested User'}%0A` + 
                 `*Phone:* ${formData.phone || 'N/A'}%0A` + 
                 `*Skill:* ${formData.skillLevel}%0A` + 
                 `*Message:* ${formData.message || 'I want to know more.'}`
    window.open(`https://wa.me/${adminWhatsApp}?text=${text}`, '_blank')
    setIsSubmitted(true)
  }

  // --- EMAILJS LOGIC ---
  const sendToEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_msd8whk', 
        'template_ygqb7pg', 
        {
          name: formData.name,       // Maps to {{name}}
          email: formData.email,     // Maps to {{email}} (if in your template)
          phone: formData.phone,     
          skill: formData.skillLevel,
          message: formData.message, // Maps to {{message}}
          time: new Date().toLocaleString(),
        },
        'dKWdfwW4FO65gjqRB'
      )
      setIsSubmitted(true)
    } catch (error) {
      alert("Email failed. Use the WhatsApp button!")
    } finally {
      setLoading(false)
    }
  }

  const contactDetails = [
    { icon: <Phone size={20} />, title: "General Line", value: "+91 99112 89767" },
    { icon: <Mail size={20} />, title: "Email Queries", value: "guruchessacademy@gmail.com" },
    { icon: <Clock size={20} />, title: "Timing", value: "Mon-Sun: 10AM - 07PM" }
  ]

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="relative flex flex-col lg:flex-row rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-white">
          
          {/* LEFT SIDE: Info */}
          <div className="lg:w-[40%] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between" style={{ backgroundColor: brandBlue }}>
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#C2410C]/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  <Sparkles size={12} style={{ color: brandOrange }} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-100">Connect with Gurus</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-[1000] italic uppercase tracking-tighter leading-tight">
                  Contact <br /> <span style={{ color: brandOrange }}>Details.</span>
                </h3>
              </div>

              <div className="space-y-6">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    <div className="p-3 rounded-xl bg-white/10 text-white shadow-xl transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-200/50 mb-1">{item.title}</p>
                      <p className="text-sm md:text-base font-bold text-white leading-snug">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-10 mt-10 border-t border-white/10">
                <p className="text-xs font-bold text-blue-200/70 mb-4 uppercase tracking-widest">Immediate Enrollment Help:</p>
                <Button 
                  onClick={() => window.open(`https://wa.me/${adminWhatsApp}`, '_blank')}
                  className="bg-[#25D366] hover:bg-[#1fae53] text-white font-black h-14 rounded-2xl w-full flex items-center justify-center gap-3 text-sm tracking-widest uppercase shadow-2xl border-none transition-transform active:scale-95"
                >
                    <MessageCircle size={20} fill="white" /> WHATSAPP US
                </Button>
            </div>

            <div className="absolute -right-12 bottom-20 opacity-5 rotate-12 pointer-events-none">
                <Target size={300} />
            </div>
          </div>

          {/* RIGHT SIDE: Form Area */}
          <div className="lg:w-[60%] bg-white p-8 md:p-12 lg:p-16 relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form-view" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}>
                  <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8">Send an <span style={{ color: brandBlue }}>Inquiry</span></h4>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                        <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full h-14 px-5 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#2B5292] font-bold text-slate-700" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                        <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full h-14 px-5 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#2B5292] font-bold text-slate-700" placeholder="name@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                        <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full h-14 px-5 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#2B5292] font-bold text-slate-700" placeholder="+91 00000 00000" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Skill Level</label>
                        <select name="skillLevel" value={formData.skillLevel} onChange={handleInputChange} className="w-full h-14 px-5 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#2B5292] font-bold text-slate-700 appearance-none cursor-pointer">
                          <option>Beginner (Never played)</option>
                          <option>Intermediate (Knows basics)</option>
                          <option>Advanced (Rated player)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                      <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full p-5 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#2B5292] font-bold text-slate-700" placeholder="How can we help your chess journey?"></textarea>
                    </div>

                    {/* TWO BUTTONS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button 
                        type="button"
                        onClick={sendToWhatsApp}
                        className="w-full h-16 rounded-2xl text-sm font-[1000] tracking-widest uppercase shadow-xl bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-3 transition-transform active:scale-95"
                      >
                        WhatsApp Inquiry <MessageCircle size={20} />
                      </Button>

                      <Button 
                        type="submit"
                        disabled={loading}
                        onClick={sendToEmail}
                        className="w-full h-16 rounded-2xl text-sm font-[1000] tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
                        style={{ backgroundColor: brandOrange, color: 'white' }}
                      >
                        {loading ? "SENDING..." : <>Email Submission <Send size={20} /></>}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 uppercase italic">Message Sent!</h4>
                  <p className="text-slate-500 mt-2 mb-8">Thank you. Our team will contact you shortly.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full px-10">Send Another</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}