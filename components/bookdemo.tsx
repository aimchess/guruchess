"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  X, ChevronRight, CheckCircle2, Calendar, User, Mail, 
  Phone, Globe, Trophy, Award, Clock, Search 
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Simple list of countries (truncated for brevity, but you can expand this)
const COUNTRIES = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const brandOrange = "#C2410C"
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  
  // Country Search State
  const [countrySearch, setCountrySearch] = useState("")
  const [showCountryList, setShowCountryList] = useState(false)
  const countryRef = useRef<HTMLDivElement>(null)

  const filteredCountries = COUNTRIES.filter(c => 
    c.toLowerCase().includes(countrySearch.toLowerCase())
  ).slice(0, 10) // Show top 10 matches

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setShowCountryList(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const inputClass = "w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2B5292]/10 focus:border-[#2B5292] transition-all text-sm font-medium text-slate-900 placeholder:text-slate-400"
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
            className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full max-h-[95vh]"
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-6 right-6 z-50 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200">
              <X size={20} />
            </button>

            {/* LEFT SIDE: Info */}
            <div className="hidden md:flex md:w-[30%] bg-[#2B5292] p-10 flex-col justify-between text-white relative">
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
               <div className="relative z-10">
                  <h2 className="text-3xl font-serif italic leading-tight mb-8">Start Your <br /> <span style={{ color: brandOrange }}>Grandmaster</span> <br /> Journey.</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Award size={20} className="text-orange-400" />
                        <p className="text-sm font-bold tracking-tight">FIDE Certified Coaching</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* RIGHT SIDE: The Form */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white">
              {!isSubmitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic">Registration Form</h3>
                    <p className="text-slate-400 text-sm mt-1">Complete details to help us assign the right coach.</p>
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

                    {/* Location with Typing Box */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4" ref={countryRef}>
                        <div className="relative">
                            <Globe className={iconClass} size={18} />
                            <input 
                                required
                                type="text" 
                                placeholder="Type Country..." 
                                className={inputClass}
                                value={countrySearch}
                                onChange={(e) => {
                                    setCountrySearch(e.target.value)
                                    setShowCountryList(true)
                                }}
                                onFocus={() => setShowCountryList(true)}
                            />
                            {showCountryList && filteredCountries.length > 0 && (
                                <div className="absolute z-50 w-full mt-1 bg-white border border-slate-100 rounded-xl shadow-xl max-h-40 overflow-y-auto">
                                    {filteredCountries.map(c => (
                                        <div 
                                            key={c} 
                                            className="px-4 py-2 hover:bg-slate-50 cursor-pointer text-sm font-medium"
                                            onClick={() => {
                                                setCountrySearch(c)
                                                setShowCountryList(false)
                                            }}
                                        >
                                            {c}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <input type="text" placeholder="State (Opt)" className={`${inputClass} !pl-5`} />
                        <input type="text" placeholder="City (Opt)" className={`${inputClass} !pl-5`} />
                    </div>

                    {/* Chess Experience */}
                    <div className="pt-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Chess Profile</p>
                        <div className="relative mb-4">
                            <Award className={iconClass} size={18} />
                            <input type="text" placeholder="Current FIDE Rating (Optional)" className={inputClass} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <Search className={iconClass} size={18} />
                                <input type="text" placeholder="Lichess ID" className={inputClass} />
                            </div>
                            <div className="relative">
                                <Search className={iconClass} size={18} />
                                <input type="text" placeholder="Chess.com ID" className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* Tournament Selection */}
                    <div className="relative">
                        <Trophy className={iconClass} size={18} />
                        <select required className={`${inputClass} appearance-none`}>
                            <option value="">Highest Tournament Played</option>
                            <option value="none">Beginner / No Tournament</option>
                            <option value="school">School / District</option>
                            <option value="state">State Level</option>
                            <option value="national">National / FIDE Events</option>
                        </select>
                    </div>

                    {/* Scheduling */}
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
                                <input required type="text" placeholder="Preferred Time (e.g. 5PM)" className={inputClass} />
                            </div>
                        </div>
                    </div>

                    <Button 
                      type="submit"
                      disabled={loading}
                      className="w-full h-14 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:scale-[1.01] mt-2"
                      style={{ backgroundColor: brandOrange, color: 'white' }}
                    >
                      {loading ? "Processing..." : "Register Now"}
                      {!loading && <ChevronRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <CheckCircle2 size={60} className="text-green-500 mb-4" />
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic">Form Submitted!</h3>
                    <p className="text-slate-500 text-sm max-w-xs mt-2 mb-8">We have received your profile. Our head coach will message you on WhatsApp soon.</p>
                    <Button onClick={onClose} variant="outline" className="rounded-full px-10">Close</Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}