import Link from "next/link"
import { GithubIcon } from "../icons/github"
import { LinkedinIcon } from "../icons/linkedin"

export const SocialMediaNav = () => {
    return (
        <ul className="ml-1 mt-8 flex items-center">
            <li className="mr-5 shrink-0 text-xs">
                <Link className="block hover:text-slate-200" href="https://github.com/VidelaMatias" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                    <span className="sr-only">GitHub</span>
                    <GithubIcon />
                </Link>
            </li>

            <li className="mr-5 shrink-0 text-xs">
                <Link className="block hover:text-slate-200" href="https://www.linkedin.com/in/matias-exequiel-videla/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinIcon />
                </Link>
            </li>
        </ul>
    )
}