import { blogs } from "../blog-data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Calendar, Clock, ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.seoTitle || post.title} | Guru Chess Academy`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      images: [{ url: post.image }],
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
    },
  };
}

export default async function BlogPostDetail({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <div className="relative pt-28 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-[#2B5292] mb-10 transition-all duration-300 font-medium"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to All Articles
          </Link>

          <div className="mb-6">
            <span className="inline-block px-5 py-2 bg-[#2B5292]/10 text-[#2B5292] text-xs font-bold uppercase tracking-[0.125em] rounded-full border border-[#2B5292]/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic leading-[1.05] text-slate-900 tracking-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10 py-8 border-y border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2B5292] to-[#1E3A8A] flex items-center justify-center text-white font-bold text-xl shadow-md">
                G
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Written by</p>
                <p className="font-semibold text-slate-900">{post.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <button
              className="ml-auto flex items-center gap-2 px-5 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all active:scale-95"
              aria-label="Share article"
            >
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 mb-16">
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 pb-32">
        <div
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-serif prose-headings:italic prose-headings:text-slate-900 prose-headings:tracking-tight
            prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-[#2B5292] prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:pl-6 prose-blockquote:italic
            prose-li:text-slate-600 prose-li:marker:text-[#2B5292]
            prose-a:text-[#2B5292] prose-a:hover:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Newsletter CTA */}
        <div className="mt-24 p-14 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 text-center shadow-sm">
          <div className="mx-auto w-20 h-20 bg-[#2B5292] text-white rounded-2xl flex items-center justify-center mb-8">
            ♟️
          </div>
          <h3 className="text-3xl font-serif italic text-slate-900 mb-4">
            Loved this article?
          </h3>
          <p className="text-slate-600 max-w-md mx-auto mb-10">
            Get more chess tactics, training tips, and academy updates delivered to your inbox.
          </p>
          <Link href="/contact">
            <button className="bg-[#2B5292] hover:bg-[#1E3A8A] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-[0.985]">
              Subscribe to Our Newsletter
            </button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}