import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center justify-center text-center space-y-6">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-full inline-flex items-center justify-center mb-4">
        <svg
          className="w-16 h-16 text-green-600 dark:text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        Thank You!
      </h1>
      
      <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Your registration for Guru Chess Academy has been successfully submitted. We have received your information and will be in touch with you shortly.
      </p>

      <div className="pt-8">
        <Button asChild size="lg" className="rounded-full">
          <Link href="/">
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
