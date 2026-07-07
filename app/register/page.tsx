import { Metadata } from "next";
import { RegistrationForm } from "@/components/registration-form";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Student Registration | Guru Chess Academy",
  description: "Register for chess classes at Guru Chess Academy with Coach Shailendra Bajpai.",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <RegistrationForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
