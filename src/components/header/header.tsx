import Link from "next/link";
import Image from "next/image";
import { Nav } from "../nav/nav";
import { SocialMediaNav } from "./socialMedia";

export const Header = () => {
  return (
    <header className="scrollbar-none px-4 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:overflow-auto lg:py-24">
      <div>
        <div className="flex items-center gap-4">
          <Image
            priority
            className="h-20 w-20 rounded-full object-cover ring-2 ring-teal-400/40 ring-offset-2 ring-offset-slate-900 sm:h-24 sm:w-24"
            src="/foto_perfil.webp"
            alt="Portrait of Matias Videla"
            width={150}
            height={150}
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <Link href="/" aria-label="Matias Videla — back to top">
                Matias Videla
              </Link>
            </h1>
            <p className="mt-2 text-lg font-medium tracking-tight text-teal-300 sm:text-xl">
              Senior Frontend Engineer
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-xs leading-normal">
          I build accessible, high-performance web apps — pixel-perfect on the
          surface, clean and well tested underneath.
        </p>

        <Nav />
      </div>

      <div className="mt-8 lg:mt-0">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-5 py-2.5 text-sm font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/30 transition-colors hover:bg-teal-400/20 hover:text-teal-200"
        >
          Get in touch
          <span aria-hidden="true">&rarr;</span>
        </Link>

        <SocialMediaNav />
      </div>
    </header>
  );
};
