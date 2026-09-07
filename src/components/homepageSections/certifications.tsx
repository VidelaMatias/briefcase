import Link from "next/link";
import SectionHeading from "../section/sectionHeading";

const certifications = [
  {
    id: "sfcc-bootcamp",
    courseName: "Mastering Salesforce Commerce Cloud — Complete SFCC Bootcamp",
    url: "https://www.udemy.com/course/mastering-salesforce-commerce-cloud-the-complete-bootcamp",
    platform: "Udemy",
    image: "/salesforce_1.jpg",
  },
  {
    id: "nextjs-15",
    courseName: "Next.js 15 & React — The Complete Guide",
    url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
    platform: "Udemy",
    image: "/next-certificate.jpg",
  },
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="mb-16 scroll-mt-16 lg:scroll-mt-24"
    >
      <SectionHeading id="certifications" title="Certifications" />
      <ul className="divide-y divide-slate-800 border-y border-slate-800">
        {certifications.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="font-medium text-slate-200">
              {item.courseName}
            </span>
            <span className="flex shrink-0 items-center gap-4 text-sm">
              <Link
                className="text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${item.courseName} on ${item.platform} (opens in a new tab)`}
              >
                {item.platform}
              </Link>
              <Link
                className="text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                href={item.image}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`View the ${item.courseName} certificate (opens in a new tab)`}
              >
                Certificate
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
