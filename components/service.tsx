"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Services() {
  const brandBlue = "#2B5292"
  const brandOrange = "#C2410C"

  const services = [
    {
      title: "Chess Coaching",
      description: "Basic to pro levels, 1-on-1 or group coaching.",
      image: "/chess2.png", 
      bgColor: "#F0F4F8", // Soft Blue tint
      btnColor: brandBlue
    },
    {
      title: "Tournaments",
      description: "Organizing inter-club competitive events.",
      image: "/chess4.png",
      bgColor: "#FFF7F2", // Soft Orange tint
      btnColor: brandOrange
    },
    {
      title: "Holiday Camps",
      description: "Intensive seasonal training for rapid growth.",
      image: "/chess1.png",
      bgColor: "#F0F4F8",
      btnColor: brandBlue
    },
    {
      title: "Online Training",
      description: "Global virtual classrooms for remote learning.",
      image: "/chess3.png",
      bgColor: "#FFF7F2",
      btnColor: brandOrange
    },
    {
      title: "Chess Clocks",
      description: "Official DGT clocks and timing equipment.",
      image: "/clock.png",
      bgColor: "#F0F4F8",
      btnColor: brandBlue
    },
    {
      title: "Chess Books",
      description: "Theory and tactical guides for all levels.",
      image: "/book.png",
      bgColor: "#FFF7F2",
      btnColor: brandOrange
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        
        {/* Centered Heading Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-[1000] text-[#1a1a1a] tracking-tighter uppercase italic">
            Our <span style={{ color: brandBlue }}>Learning</span> <span style={{ color: brandOrange }}>World</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#C2410C] mx-auto mt-4 rounded-full" /> {/* Centered accent line */}
          <p className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mt-4">
            Professional programs for future grandmasters
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-[2.5rem] overflow-hidden border border-gray-100 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1"
              style={{ backgroundColor: service.bgColor }}
            >
              {/* Image Container */}
              <div className="pt-8 px-6 flex justify-center items-center h-32 md:h-40 lg:h-44">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="px-6 pb-8 pt-4 text-center">
                <h3 className="text-lg md:text-xl font-black text-[#1a1a1a] uppercase tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-semibold leading-relaxed max-w-[250px] mx-auto">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <Link href="/contact" className="mt-auto">
                <button 
                  className="w-full py-4 px-8 flex items-center justify-between text-white font-black text-[11px] tracking-[0.2em] uppercase transition-all active:scale-95"
                  style={{ backgroundColor: service.btnColor }}
                >
                  <span>Explore Service</span>
                  <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}