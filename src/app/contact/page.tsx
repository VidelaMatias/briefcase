import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Matias Videla, Senior Frontend Engineer — available for frontend, e-commerce and accessibility work.",
};

const fields = [
  {
    id: "name",
    name: "Name",
    label: "Name",
    type: "text",
    autoComplete: "name",
    required: true,
  },
  {
    id: "email",
    name: "Email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    id: "company",
    name: "Company",
    label: "Company",
    type: "text",
    autoComplete: "organization",
    required: false,
  },
];

const inputClasses =
  "w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-slate-200 placeholder:text-slate-500 transition-colors focus:border-teal-400 focus:outline-none";

export default function Contact() {
  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-12 md:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
      >
        <span aria-hidden="true">&larr;</span> Back to portfolio
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
        Let&rsquo;s work together
      </h1>
      <p className="mt-3 max-w-lg">
        Tell me about your project or role and I&rsquo;ll get back to you within
        a couple of days. You can also email me directly at{" "}
        <Link
          className="font-medium text-teal-300 hover:text-teal-200"
          href="mailto:matividela.dev@gmail.com"
        >
          matividela.dev@gmail.com
        </Link>
        .
      </p>

      <form
        action="https://formsubmit.co/matividela.dev@gmail.com"
        method="POST"
        className="mt-10 rounded-xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8"
      >
        {/* FormSubmit configuration */}
        <input
          type="hidden"
          name="_subject"
          value="New message from your portfolio"
        />
        <input type="hidden" name="_template" value="table" />
        {/* Honeypot: bots fill this in, humans never see it. */}
        <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />

        <p className="mb-6 text-sm text-slate-500">
          Fields marked with <span aria-hidden="true">*</span> are required.
        </p>

        {fields.map(({ id, name, label, type, autoComplete, required }) => (
          <div key={id} className="mb-5 flex flex-col gap-2">
            <label htmlFor={id} className="text-sm font-medium text-slate-300">
              {label}
              {required && (
                <span className="ml-1 text-teal-300" aria-hidden="true">
                  *
                </span>
              )}
            </label>
            <input
              id={id}
              name={name}
              type={type}
              autoComplete={autoComplete}
              required={required}
              className={inputClasses}
            />
          </div>
        ))}

        <div className="mb-6 flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-300">
            Message
            <span className="ml-1 text-teal-300" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id="message"
            name="Message"
            rows={6}
            required
            className={inputClasses}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-teal-400 px-6 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-teal-300 sm:w-auto"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
