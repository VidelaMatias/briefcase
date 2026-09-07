import Link from "next/link";
import { FC } from "react";
import TechChip from "../techChip/techChip";
import Image from "next/image";
import AnimatedCard from "./animatedCard";

interface Props {
    year?: string;
    companyName: string;
    companyURL: string;
    description: string;
    techList: string[];
    imageURL?: string;
    /** Backdrop for the logo. Light logos need a dark plate to stay visible. */
    imageTheme?: keyof typeof imageBackgrounds;
}

// Written out as literal classes so Tailwind's scanner picks them up
// (it does not read the JSON data files).
const imageBackgrounds = {
    light: "bg-white/95",
    blue: "bg-blue-900",
    dark: "bg-black",
} as const;

export type ImageTheme = keyof typeof imageBackgrounds;

const ExperienceCard: FC<Props> = ({
    year,
    companyName,
    companyURL,
    description,
    techList,
    imageURL,
    imageTheme = "light",
}) => {
    // JSON stores the stack as a comma separated string, so drop stray spaces and empties.
    const technologies = techList.map((tech) => tech.trim()).filter(Boolean);

    return (
        <AnimatedCard>
            <div
                className='group relative mb-4 grid rounded-lg border border-transparent p-4 transition-all duration-300
sm:grid-cols-10 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100
lg:hover:border-slate-700/60 lg:hover:bg-slate-800/50 lg:hover:shadow-lg lg:hover:shadow-slate-950/40'>
                {year && (
                    <p className='mb-2 font-mono text-xs uppercase tracking-wide text-slate-500 sm:col-span-3 sm:mb-0 sm:pt-1'>
                        {year}
                    </p>
                )}

                {imageURL && (
                    <div
                        className={`mb-4 flex items-center justify-center rounded-md p-3 sm:col-span-3 sm:mb-0 sm:h-28 ${imageBackgrounds[imageTheme]}`}
                    >
                        <Image
                            className='h-auto max-h-20 w-auto object-contain'
                            src={imageURL}
                            alt={`${companyName} logo`}
                            height={150}
                            width={150}
                            sizes='(min-width: 640px) 150px, 40vw'
                        />
                    </div>
                )}

                <div className='sm:col-span-7'>
                    <h3 className='font-medium leading-tight text-slate-200'>
                        <Link
                            className='inline-flex items-baseline transition-colors duration-300 hover:text-teal-300 focus-visible:text-teal-300 group-hover:text-teal-300'
                            href={companyURL}
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label={`${companyName} (opens in a new tab)`}>
                            <span>
                                {companyName}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    aria-hidden='true'
                                    className='ml-1 inline-block h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'>
                                    <path
                                        fillRule='evenodd'
                                        d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </span>
                        </Link>
                    </h3>

                    <p className='mt-2 text-sm leading-relaxed text-slate-400'>
                        {description}
                    </p>

                    {technologies.length > 0 && (
                        <ul className='mt-3 flex flex-wrap gap-2'>
                            {technologies.map((item) => (
                                <TechChip key={item} name={item} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </AnimatedCard>
    );
};

export default ExperienceCard;
