import Link from "next/link";
import { Nav } from "../nav/nav";
import { SocialMediaNav } from "./socialMedia";

export const Header = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/" rel="noopener noreferrer" aria-label="Go To Top Page">Matias Videla</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front End Engineer</h2>
            <p className="mt-4 max-w-xs leading-normal">I build accessible, performant and ensure high quality web apps.</p>
            <Nav />
            <SocialMediaNav />
        </header>
    )
}
