import Link from "next/link";
import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/VidelaMatias",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matias-exequiel-videla/",
    Icon: LinkedinIcon,
  },
];

export const SocialMediaNav = () => {
  return (
    <ul className="ml-1 mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
      {socials.map(({ label, href, Icon }) => (
        <li key={label} className="shrink-0">
          <Link
            className="block text-slate-400 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            title={label}
          >
            <span className="sr-only">{label} (opens in a new tab)</span>
            <Icon />
          </Link>
        </li>
      ))}
      <li>
        <Link
          className="break-all text-sm text-slate-400 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
          href="mailto:matividela.dev@gmail.com"
        >
          matividela.dev@gmail.com
        </Link>
      </li>
    </ul>
  );
};
