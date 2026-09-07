import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 max-w-md pb-16 text-sm text-slate-500">
      <p>
        Built by Matias Videla with{" "}
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </Link>
        , deployed on{" "}
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </Link>
        .
      </p>
      <p className="mt-2">
        Accessibility checked with WAVE and Lighthouse against WCAG 2.1, images
        compressed with{" "}
        <Link
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://squish.addy.ie/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Squish
        </Link>
        .
      </p>
      <p className="mt-4">&copy; {year} Matias Videla</p>
    </footer>
  );
};

export default Footer;
