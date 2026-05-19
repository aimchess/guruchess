"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, TrendingUp, Calendar, Award, Target, Users, Heart } from "lucide-react"

export default function SuccessStoriesPage() {
  const stories = [
    {
  id: 1,
  name: "Fide Master Madhvendra Pratap Sharma",
  age: 12,
  image: "/student-1.jpg",
  achievement: "Gold Medalist: Asian Youth & Commonwealth Chess Championships",
  rating: "ELO 2229",
  timeframe: "3 years",
  story:
    "Fide Master Madhvendra Pratap Sharma (ELO 2229) is a shining talent from Guru Chess Academy who has achieved outstanding success on the world stage. He made India proud by securing Gold Medals at both the Asian Youth Chess Championship 2025 (Thailand) and the Commonwealth Chess Championship. Previously, he dominated the 2022 Asian Youth Championship in Indonesia, becoming champion in all three formats (Rapid, Blitz, Classical), and won National Championships in 2022 (Indore) and 2024 (Hyderabad). His vision is to become a Grandmaster, and his journey is an inspiration for chess learners everywhere.",
  quote: "I love how chess makes me think differently about problems. Representing India and winning Gold is just the beginning!",
  badges: ["Asian Games Gold", "Commonwealth Gold", "National Champion"],
  program: "Grandmaster Path",
},
    {
      id: 3,
      name: "Suhani Munet",
      age: 18,
      image: "/student-2.jpg",
      achievement: "SGFI National Bronze Medalist (2023-24) and proudly attended Chess Olympiad (2022) with india",
      rating: "From 800 to 1600",
      timeframe: "4 years",
      story:
        "An accomplished International FIDE Rated Chess Player, Suhani has consistently showcased excellence on both national and international platforms. She is an SGFI National Bronze Medalist (2023–24) and proudly Joined India at the Chess Olympiad in 2022. A 4-time State Chess Champion, she continues to demonstrate remarkable consistency, discipline, and determination in her journey. With every tournament, she not only strengthens her achievements but also inspires fellow players with her passion and commitment to the game.",
      quote: "Kamlesh sir taught me that every position tells a story. Now I can read those stories and write my own!",
      badges: ["National Medalist", "Rating Expert", "STEM Excellence"],
      program: "Grandmaster Path",
    },
    {
      id: 4,
      name: "Umasankar Datta",
      age: 16,
      image: "/uma.jpg",
      achievement: "Three Times State Champion",
      rating: "Best 2152",
      timeframe: "18 months",
      story:
        "Umasankar Datta is a prominent chess player from Tripura with notable achievements including being a 3-time State Champion. He has a peak rating of 2152 and won the All India FIDE Rated Tournament in Agartala in 2019. Umasankar also earned a prize at KIT 2025, reflecting his competitive edge. Currently, he is training with Grandmasters and International Masters to further improve his skills and reach higher levels in chess. His journey showcases dedication, strategic growth, and a commitment to mastering the game.",
      quote:
        "Chess opened doors I never knew existed. It's not just a game - it's a life skill that changed everything!",
      badges: ["Team Captain", "Mentor"],
      program: "Grandmaster Path",
    },
    {
      id: 5,
      name: "Himadri paliwal",
      age: 15,
      image: "/himadri.jpg",
      achievement: "SGFI State U-19 Chess Champion (Kolkata)",
      rating: "Rapid Rating 1620",
      timeframe: "4 years",
      story:
        "Himadri Paliwal is the SGFI State U-19 Chess Champion and proudly represented Rajasthan at the SGFI National Chess Championship held in Kolkata. With a rapid rating of 1620, Himadri has demonstrated strong competitive skills and commitment to the game, making notable strides in her chess journey.",
      quote: "Chess is like magic! I can make my pieces dance and create beautiful patterns on the board!",
      badges: ["Youngest Winner", "Natural Talent", "Emotional Growth"],
      program: "Chess Foundations",
    },
    // {
    //   id: 6,
    //   name: "David Kim",
    //   age: 15,
    //   image: "https://i.redd.it/male-chess-players-i-find-attractive-whos-the-best-looking-v0-8av4i8z823id1.jpg?width=640&format=pjpg&auto=webp&s=4c16bb49612e3355aab8283fc94ccd781a83ea6d",
    //   achievement: "International Tournament",
    //   rating: "From 1200 to 2000",
    //   timeframe: "24 months",
    //   story:
    //     "David's two-year journey culminated in representing his country at an international youth championship. His transformation from a casual player to a serious competitor showcases what's possible with dedication and expert guidance. He's now considering a career in chess while maintaining excellent grades.",
    //   quote:
    //     "Every lesson taught me something new, not just about chess, but about myself and what I'm capable of achieving!",
    //   badges: ["International Player", "Expert Rating", "Future Master"],
    //   program: "Grandmaster Path",
    // },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Success{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Real transformations from our students who've achieved remarkable success through our proven chess training methodology.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  1500+
                </div>
                <div className="text-gray-600 font-semibold text-sm">Students Transformed</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-semibold text-sm">Tournament Winners</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-gray-600 font-semibold text-sm">Rating Improvement</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  13+
                </div>
                <div className="text-gray-600 font-semibold text-sm">Years Excellence</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16 md:space-y-20">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center"
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                  <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                    <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-16 sm:aspect-h-9 lg:aspect-w-4 lg:aspect-h-3">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                        <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-xl">
                          <CardContent className="p-2 sm:p-3">
                            {/* THIS IS THE CORRECTED OVERLAY CONTENT */}
                            <div>
                                <h3 className="text-base sm:text-xl font-black text-gray-800 leading-tight">{story.name}</h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                  Age {story.age} • {story.program}
                                </p>
                                <div className="mt-1 sm:mt-2">
                                    <div className="text-sm sm:text-lg font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
                                    {story.achievement}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-600">{story.timeframe}</div>
                                </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-first" : ""}`}>
                  <div className="flex flex-wrap gap-2">
                    {story.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-3 py-1 text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-lg">
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-black text-gray-800 text-sm sm:text-lg">Rating Progress</div>
                        <div className="text-gray-600 font-semibold text-xs sm:text-base">{story.rating}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-lg">
                      <CardContent className="p-4 text-center">
                        <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-2" />
                        <div className="font-black text-gray-800 text-sm sm:text-lg">Time Frame</div>
                        <div className="text-gray-600 font-semibold text-xs sm:text-base">{story.timeframe}</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-br from-gray-50 to-purple-50/30 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-2xl font-bold">"</span>
                        </div>
                        <p className="text-gray-800 italic text-base sm:text-lg leading-relaxed font-medium">{story.quote}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Succeed */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Why Our Students{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Succeed</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The key factors behind every success story at Guru Chess Academy
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Personalized Approach", description: "Every student gets a customized learning path based on their unique strengths and goals", gradient: "from-purple-500 to-blue-500" },
              { icon: Award, title: "Expert Mentorship", description: "Direct guidance from Kamlesh Choudhary and experienced chess masters", gradient: "from-blue-500 to-cyan-500" },
              { icon: Users, title: "Supportive Community", description: "A family-like environment where students motivate and learn from each other", gradient: "from-cyan-500 to-green-500" },
              { icon: Heart, title: "Holistic Development", description: "Focus on character building, confidence, and life skills beyond chess", gradient: "from-green-500 to-yellow-500" },
            ].map((factor, index) => (
              <Card
                key={index}
                className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 text-center"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${factor.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <factor.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{factor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chess-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Write Your{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Success Story?
            </span>
          </h2>
          <p className="text-lg sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our community of champions and start your transformation with our proven methodology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button onClick={() => {
                    setIsOpen(false);
                    setIsDemoModalOpen(true);
                  }} className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              <Calendar className="w-6 h-6 mr-2" />
              Book Your Demo
            </Button>
            <Link href="/programs">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-base sm:text-xl px-8 py-4 rounded-full bg-transparent transition-all duration-300"
              >
                View All Programs
              </Button>
              </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}