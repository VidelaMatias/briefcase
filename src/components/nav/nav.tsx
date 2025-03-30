'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export const Nav = () => {
    const [activeSection, setActiveSection] = useState("");
    const sections = [
        { id: "about", label: "About" },
        { id: "techStack", label: "Tech Stack" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } 
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="nav hidden lg:block" aria-label="Links content page">
            <ul className="mt-16 w-max">
                {sections.map(({ id, label }) => (
                    <li key={id}>
                        <Link 
                            className={`group flex items-center py-3 ${activeSection === id ? "text-teal-300" : ""}`} 
                            href={`#${id}`}
                        >
                            <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all 
                                ${activeSection === id ? "w-16 bg-teal-300" : "group-hover:w-16 group-hover:bg-slate-200"}`}>
                            </span>
                            <span className={`nav-text text-xs font-bold uppercase tracking-widest 
                                ${activeSection === id ? "text-teal-300" : "text-slate-500 group-hover:text-slate-200"}`}>
                                {label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
