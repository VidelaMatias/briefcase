import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm font-bold uppercase tracking-widest text-teal-300">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
        This page doesn&rsquo;t exist
      </h1>
      <p className="mt-4">
        The link may be outdated or the page may have moved. Everything else is
        still where you left it.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-5 py-2.5 text-sm font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/30 transition-colors hover:bg-teal-400/20 hover:text-teal-200"
      >
        <span aria-hidden="true">&larr;</span> Back to the portfolio
      </Link>
    </main>
  );
}
