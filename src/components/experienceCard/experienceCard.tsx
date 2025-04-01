import Link from "next/link";
import { FC } from "react";
import TechChip from "../techChip/techChip";
import Image from "next/image";

interface Props {
    year?: string,
    companyName: string,
    companyURL: string,
    description: string,
    techList: string[];
    imageURL?: string;
}

const ExperienceCard: FC<Props> = ({ year, companyName, companyURL, description, techList, imageURL }) => {

    return (
        <li key={companyName} >
            <div className="group relative mb-6 grid pb-1 transition-all duration-300 sm:grid-cols-10 sm:gap-8 md:gap-4 
lg:hover:!opacity-100 lg:group-hover/list:opacity-50 bg-slate-900 rounded-lg p-4 
hover:bg-slate-800 hover:shadow-lg hover:scale-105 hover:border-teal-400 border border-transparent">
                {year &&
                    <p className="col-span-3 text-slate-400 transition-colors duration-300 group-hover:text-teal-300">
                        {year}
                    </p>
                }
                {imageURL &&
                    <Image className="col-span-3 m-auto" src={imageURL} alt={companyName} height={150} width={150} />
                }

                <div className="col-span-7">
                    <Link
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 
group-hover:text-white transition-colors duration-300"
                        href={companyURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <span>
                            {companyName}
                            <span className="inline-block text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform duration-300 
      group-hover:-translate-y-1 group-hover:translate-x-1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </span>
                    </Link>

                    <p className="text-slate-300 transition-colors duration-300 group-hover:text-white">
                        {description}  </p>

                    {techList && (
                        <ul className="flex flex-wrap gap-2 my-2">
                            {techList.map((item) => (
                                <TechChip key={item} name={item} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </li>
    )

}
export default ExperienceCard;