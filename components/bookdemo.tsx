"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight, CheckCircle2, Calendar, User, Mail, Phone, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X size={20} />
            </button>

            {/* LEFT SIDE: Brand Reinforcement */}
            <div className="hidden md:flex md:w-2/5 bg-[#2B5292] p-12 flex-col justify-between text-white relative overflow-hidden">
               {/* Pattern Overlay */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
               
               <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Free Consultation</span>
                  </div>
                  <h2 className="text-4xl font-serif italic leading-tight mb-6">
                    Start Your <br /> <span style={{ color: brandOrange }}>Grandmaster</span> <br /> Journey.
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Book a 30-minute demo session with our FIDE rated coaches and get a personalized roadmap for your child.
                  </p>
               </div>

               <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <CheckCircle2 size={18} className="text-orange-500" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider">Skill Assessment</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <CheckCircle2 size={18} className="text-orange-500" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider">Curriculum Preview</p>
                  </div>
               </div>
            </div>

            {/* RIGHT SIDE: The Form */}
            <div className="flex-1 p-8 md:p-14 bg-white">
              {!isSubmitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic">Book Your Demo</h3>
                    <p className="text-slate-400 text-sm mt-1">Fill in the details below and we'll reach out.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2B5292] transition-colors" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="Parent / Student Name"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2B5292]/10 focus:border-[#2B5292] transition-all text-sm font-medium"
                      />
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2B5292] transition-colors" size={18} />
                        <input 
                          required
                          type="email" 
                          placeholder="Email Address"
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2B5292]/10 focus:border-[#2B5292] transition-all text-sm font-medium"
                        />
                      </div>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2B5292] transition-colors" size={18} />
                        <input 
                          required
                          type="tel" 
                          placeholder="Phone Number"
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2B5292]/10 focus:border-[#2B5292] transition-all text-sm font-medium"
                        />
                      </div>
                    </div>

                    {/* Level Select */}
                    <div className="relative group">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2B5292] transition-colors" size={18} />
                      <select className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2B5292]/10 focus:border-[#2B5292] transition-all text-sm font-medium appearance-none">
                        <option value="">Select Student Level</option>
                        <option value="beginner">Beginner (New to Chess)</option>
                        <option value="intermediate">Intermediate (Knows Tactics)</option>
                        <option value="advanced">Advanced (Tournament Player)</option>
                      </select>
                    </div>

                    {/* Date Picker (Simplified) */}
                    <div className="relative group">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#2B5292] transition-colors" size={18} />
                      <select className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2B5292]/10 focus:border-[#2B5292] transition-all text-sm font-medium appearance-none">
                        <option value="">Preferred Demo Day</option>
                        <option value="weekday">Weekday (Mon-Fri)</option>
                        <option value="weekend">Weekend (Sat-Sun)</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      disabled={loading}
                      className="w-full h-16 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: brandOrange, color: 'white' }}
                    >
                      {loading ? "Processing..." : "Schedule My Free Demo"}
                      {!loading && <ChevronRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                /* SUCCESS STATE */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                    <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-6">
                        <CheckCircle2 size={48} className="text-green-500" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 uppercase italic mb-4">You're on the list!</h3>
                    <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                        Our academy manager will call you within <span className="text-[#2B5292] font-bold">24 hours</span> to confirm your slot. Get ready to play!
                    </p>
                    <Button 
                      onClick={onClose}
                      variant="outline"
                      className="rounded-full px-8 border-slate-200 text-[10px] font-black uppercase tracking-widest"
                    >
                        Back to Home
                    </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}