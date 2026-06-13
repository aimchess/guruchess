"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MonitorPlay } from "lucide-react" // Added icon for Classroom
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { BookDemoModal } from "./bookdemo"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const pathname = usePathname()

  const classroomLink = "https://guruchessacademy.chessplay.io/admin/dashboard/125/classrooms/running"

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/coaches", label: "Coaches" },
    { href: "/achievements", label: "Achievements" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3 },
    },
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-[100] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 shrink-0">
              <img
                src="/guru-logo.jpeg"
                alt="Guru Chess Academy"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-lg sm:text-xl font-black tracking-tight leading-tight whitespace-nowrap">
                  <span className="text-[#2B5292]">GURU</span>
                  <span className="text-[#333333] ml-2">CHESS ACADEMY</span>
                </h1>
                <p className="hidden sm:block text-[8px] text-gray-400 tracking-[0.2em] font-bold uppercase leading-tight mt-0.5">
                  Turning Interest into Passion
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-7">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-bold text-[11px] xl:text-[12px] uppercase tracking-wider whitespace-nowrap transition-all duration-300 relative group ${
                      isActive ? "text-[#2B5292]" : "text-gray-600 hover:text-[#2B5292]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#C2410C] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                )
              })}
            </div>

            {/* Action Buttons Group */}
            <div className="hidden lg:flex items-center space-x-3 shrink-0">
              {/* Classroom Button - Deep Blue */}
              <Link href={classroomLink} target="_blank">
                <Button 
                  variant="outline"
                  className="border-[#2B5292] text-[#2B5292] hover:bg-[#2B5292] hover:text-white font-bold px-5 py-5 rounded-md text-[10px] tracking-widest transition-all flex items-center gap-2"
                >
                  <MonitorPlay size={14} />
                  CLASSROOM
                </Button>
              </Link>

              {/* Book Demo Button - Vibrant Orange */}
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-[#C2410C] hover:bg-[#A34F26] text-white font-bold px-5 py-5 rounded-md shadow-md text-[10px] tracking-widest transition-all active:scale-95"
              >
                BOOK A DEMO
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#2B5292] z-50 relative"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16 sm:h-20"></div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden fixed inset-0 bg-white z-[90] overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6 px-8 text-center">
              {navItems.map((item) => {
                 const isActive = pathname === item.href
                 return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-black text-2xl uppercase tracking-tighter ${
                      isActive ? "text-[#C2410C]" : "text-[#2B5292]"
                    }`}
                  >
                    {item.label}
                  </Link>
                 )
              })}
              
              <div className="pt-6 w-full space-y-4">
                {/* Mobile Classroom Button */}
                <Link href={classroomLink} target="_blank" className="w-full block">
                    <Button
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-[#2B5292] text-white font-bold py-7 text-lg rounded-2xl flex items-center justify-center gap-3"
                    >
                        <MonitorPlay size={20} />
                        JOIN CLASSROOM
                    </Button>
                </Link>

                {/* Mobile Demo Button */}
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                  className="w-full bg-[#C2410C] text-white font-bold py-7 text-lg rounded-2xl"
                >
                  BOOK FREE DEMO
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  )
}