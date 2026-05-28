"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Scale, FileText, AlertCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsAndConditions() {
  const brand = {
    blue: "#2B5292",
    orange: "#C2410C",
    bg: "#fdfdfd"
  }

  const sections = [
    {
      title: "1. Enrollment & Membership",
      icon: <ShieldCheck className="w-6 h-6" />,
      content: "By enrolling in Guru Chess Academy, students and guardians agree to provide accurate information. Membership is personal and non-transferable. We reserve the right to refuse admission or terminate membership for conduct that violates our community standards."
    },
    {
      title: "2. Payment & Refund Policy",
      icon: <FileText className="w-6 h-6" />,
      content: "Fees must be paid in advance of the session or month. Guru Chess Academy operates on a no-refund policy for completed classes. For cancellations, a 24-hour notice is required to be eligible for a makeup class. Failure to show up without notice results in forfeiture of that session's fee."
    },
    {
      title: "3. Fair Play & Integrity",
      icon: <Scale className="w-6 h-6" />,
      content: "Chess is a game of integrity. We maintain a zero-tolerance policy towards engine assistance or outside help during academy tournaments and training games. Violation of fair play rules may lead to immediate expulsion without refund."
    },
    {
      title: "4. Code of Conduct",
      icon: <AlertCircle className="w-6 h-6" />,
      content: "Students are expected to respect coaches and fellow peers. Cyberbullying, disruptive behavior during live sessions, or any form of harassment will result in a warning or account suspension. We aim to foster a positive growth mindset for all players."
    },
    {
      title: "5. Intellectual Property",
      icon: <ShieldCheck className="w-6 h-6" />,
      content: "All training materials, including PDFs, recorded lectures, tactical databases, and proprietary curriculum provided by Guru Chess Academy, are for personal use only. Distribution or reproduction of these materials without written consent is strictly prohibited."
    },
    {
      title: "6. Parental Consent",
      icon: <FileText className="w-6 h-6" />,
      content: "For students under the age of 18, a parent or legal guardian must agree to these terms. Parents are responsible for ensuring their child follows the academy's online safety protocols and code of conduct."
    }
  ]

  return (
    <div className={`min-h-screen bg-[${brand.bg}] text-gray-900 font-sans`}>
      {/* Header Section */}
      <header className="py-12 md:py-20 border-b border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link href="/">
            <Button variant="ghost" className="mb-8 group text-gray-500 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-[1000] tracking-tight mb-6">
              Terms of <span style={{ color: brand.blue }}>Service.</span>
            </h1>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Last updated: October 2023. These terms outline the rules and regulations for the use of Guru Chess Academy&apos;s programs and website.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Table of Contents / Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 p-8 rounded-3xl border border-gray-100 bg-white shadow-sm">
              <h3 className="font-bold text-xl mb-6" style={{ color: brand.blue }}>Quick Navigation</h3>
              <nav className="flex flex-col gap-4">
                {sections.map((s, i) => (
                  <button key={i} className="text-left text-sm font-semibold text-gray-500 hover:text-[#C2410C] transition-colors">
                    {s.title}
                  </button>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Have questions about our terms? <br />
                  <Link href="/contact" className="underline font-bold" style={{ color: brand.orange }}>Contact our support team</Link>
                </p>
              </div>
            </div>
          </aside>

          {/* Right: Detailed Content */}
          <div className="lg:col-span-8 space-y-12">
            {sections.map((section, index) => (
              <motion.section 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="p-3 rounded-xl transition-colors group-hover:bg-orange-50"
                    style={{ color: brand.orange, backgroundColor: '#fdf2f2' }}
                  >
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg pl-2 border-l-2 border-transparent group-hover:border-[#2B5292] transition-all ml-6">
                  {section.content}
                </p>
              </motion.section>
            ))}

            {/* Final Note */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-16 p-8 rounded-[2rem] bg-[#2B5292] text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Acceptance of Terms</h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  By clicking &quot;Start Your Journey&quot; or enrolling in any of our classes, you acknowledge that you have read, understood, and agreed to be bound by these terms. 
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-[#2B5292] hover:bg-gray-100 font-bold px-8">
                    I Have a Question
                  </Button>
                </Link>
              </div>
              {/* Decorative Background for the box */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -translate-y-12 translate-x-12 rounded-full blur-3xl" />
            </motion.div>
          </div>

        </div>
      </main>

      {/* Footer Simple */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Guru Chess Academy. All rights reserved. Professional Excellence in Chess.
        </p>
      </footer>
    </div>
  )
}