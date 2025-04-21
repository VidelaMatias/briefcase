import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { About } from "@/components/homepageSections/about";
import { Experience } from "@/components/homepageSections/experience";
import { Projects } from "@/components/homepageSections/projects";
import { TechStack } from "@/components/homepageSections/techStack";
import Link from "next/link";

export default function Home() {


  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main id="content" tabIndex={-1} className="pt-20 lg:w-[52%] lg:py-24">
          <About />
          <TechStack />
          <div className="flex flex-row w-full gap-4 justify-around">
          <Link className="block mb-6 text-emerald-50 hover:text-emerald-400 font-bold" href="/matias_videla_software_resume.pdf" target="_blank" rel="noopener noreferrer">
            Open Complete PDF Resume
          </Link>
          <Link className="block mb-6 text-emerald-50 hover:text-emerald-400 font-bold" href="https://matias-videla-resume.vercel.app/" target="_blank" rel="noopener noreferrer">
            Go to Online Resume
          </Link>
          </div>
         
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
 
    </div>

  );
}
