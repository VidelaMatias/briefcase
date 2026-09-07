"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "techStack", label: "Tech Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
];

export const Nav = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    // Highlight whichever section crosses the middle of the viewport. A plain
    // threshold misses sections that are taller than the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="Page sections">
      <ul className="mt-16 w-max">
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;

          return (
            <li key={id}>
              <Link
                className="group flex items-center py-3"
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`nav-indicator mr-4 h-px transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-teal-300"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                  }`}
                />
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-teal-300"
                      : "text-slate-500 group-hover:text-slate-200"
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
