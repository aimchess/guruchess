import { blogs } from "../blog-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, Clock, User, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"

// SEO Metadata Generation
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogs.find((b) => b.slug === params.slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.seoTitle || post.title} | Guru Chess Academy`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      images: [post.image],
    },
  }
}

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = blogs.find((b) => b.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Post Header */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#2B5292] mb-8 font-bold text-xs uppercase tracking-widest transition-colors">
            <ChevronLeft size={16} /> Back to Blog
          </Link>
          
          <span className="px-4 py-1.5 bg-blue-50 text-[#2B5292] text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 inline-block">
            {post.category}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif italic text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 py-8 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[#2B5292]">G</div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Written by</p>
                <p className="text-sm font-bold text-slate-900">{post.author}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-orange-500" />
                  <span className="text-sm font-medium text-slate-500">{post.date}</span>
               </div>
               <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-500" />
                  <span className="text-sm font-medium text-slate-500">{post.readTime}</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content Section */}
      <article className="max-w-3xl mx-auto px-6 pb-32">
        <div 
          className="prose prose-lg prose-slate max-w-none 
          prose-headings:font-serif prose-headings:italic prose-headings:text-slate-900
          prose-p:text-slate-600 prose-p:leading-relaxed
          prose-strong:text-slate-900 prose-blockquote:border-l-[#2B5292]
          prose-li:text-slate-600"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* Newsletter In-Post CTA */}
        <div className="mt-20 p-12 rounded-[2rem] bg-slate-50 border border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Enjoyed this article?</h3>
          <p className="text-slate-500 mb-8">Join our community to receive chess tactics and academy updates directly.</p>
          <Link href="/contact">
            <button className="bg-[#2B5292] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#C2410C] transition-colors">
              Subscribe to Newsletter
            </button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  )
}