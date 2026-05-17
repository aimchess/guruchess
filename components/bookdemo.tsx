"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  X, ChevronRight, CheckCircle2, Calendar, User, Mail, 
  Phone, GraduationCap, Globe, MapPin, Trophy, Award, Clock 
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const brandOrange = "#C2410C"

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  // Common class for inputs to ensure no overlap
  const inputClass = "w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2B5292]/10 focus:border-[#2B5292] transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400"
  // Common class for icon wrappers
  const iconClass = "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X size={20} />
            </button>

            {/* LEFT SIDE: Info */}
            <div className="hidden md:flex md:w-[35%] bg-[#2B5292] p-10 flex-col justify-between text-white relative">
               <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
               
               <div className="relative z-10">
                  <h2 className="text-3xl font-serif italic leading-tight mb-8">
                    Your Path to <br /> <span style={{ color: brandOrange }}>Chess Mastery</span>
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                        <h4 className="flex items-center gap-2 text-orange-400 font-bold text-[10px] uppercase tracking-widest mb-2">
                            <Award size={14} /> FIDE Certification
                        </h4>
                        <p className="text-white/70 text-xs leading-relaxed">
                            Our curriculum aligns with the International Chess Federation (FIDE) standards.
                        </p>
                    </div>

                    <div>
                        <h4 className="flex items-center gap-2 text-orange-400 font-bold text-[10px] uppercase tracking-widest mb-2">
                            <Clock size={14} /> Lifetime Access
                        </h4>
                        <p className="text-white/70 text-xs leading-relaxed">
                            Permanent access to digital library and recorded sessions even after course completion.
                        </p>
                    </div>
                  </div>
               </div>
            </div>

            {/* RIGHT SIDE: The Form */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white">
              {!isSubmitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic">Book Your Demo</h3>
                    <p className="text-slate-400 text-sm mt-1">We'll reach out on WhatsApp to confirm.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                            <User className={iconClass} size={18} />
                            <input required type="text" placeholder="Player's Full Name" className={inputClass} />
                        </div>
                        <div className="relative">
                            <Calendar className={iconClass} size={18} />
                            <input required type="text" placeholder="Age or DOB" className={inputClass} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                            <Mail className={iconClass} size={18} />
                            <input required type="email" placeholder="Email Address" className={inputClass} />
                        </div>
                        <div className="relative">
                            <Phone className={iconClass} size={18} />
                            <input required type="tel" placeholder="WhatsApp Number" className={inputClass} />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative">
                            <Globe className={iconClass} size={18} />
                            <select required className={`${inputClass} appearance-none`}>
                                <option value="">Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                        </div>
                        <input type="text" placeholder="State (Opt)" className={inputClass.replace('pl-12', 'pl-5')} />
                        <input type="text" placeholder="City (Opt)" className={inputClass.replace('pl-12', 'pl-5')} />
                    </div>

                    {/* Experience */}
                    <div className="pt-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Chess Experience</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="Current FIDE Rating" className={inputClass.replace('pl-12', 'pl-5')} />
                            <input type="text" placeholder="Lichess / Chess.com ID" className={inputClass.replace('pl-12', 'pl-5')} />
                        </div>
                        <div className="relative">
                            <Trophy className={iconClass} size={18} />
                            <select required className={`${inputClass} appearance-none`}>
                                <option value="">Highest Tournament Played</option>
                                <option value="none">None / Beginner</option>
                                <option value="school">School/District</option>
                                <option value="state">State</option>
                                <option value="national">National/FIDE</option>
                            </select>
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="pt-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Scheduling</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <Calendar className={iconClass} size={18} />
                                <select required className={`${inputClass} appearance-none`}>
                                    <option value="">Preferred Day</option>
                                    <option value="weekday">Weekday</option>
                                    <option value="weekend">Weekend</option>
                                </select>
                            </div>
                            <div className="relative">
                                <Clock className={iconClass} size={18} />
                                <input required type="text" placeholder="Preferred Time (e.g. 6 PM)" className={inputClass} />
                            </div>
                        </div>
                    </div>

                    <Button 
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:scale-[1.01] active:scale-95"
                      style={{ backgroundColor: brandOrange, color: 'white' }}
                    >
                      {loading ? "Processing..." : "Schedule My Free Demo"}
                      {!loading && <ChevronRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                        <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-2">You're Booked!</h3>
                    <p className="text-slate-500 text-sm max-w-xs mb-8">
                        We will message you on WhatsApp within 24 hours to confirm your session.
                    </p>
                    <Button onClick={onClose} variant="outline" className="rounded-full px-10">Return to Home</Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}