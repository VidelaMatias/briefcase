import SectionHeading from "../section/sectionHeading";
import TechChip from "../techChip/techChip";

const techList: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "Node.js",
  "Salesforce Commerce Cloud",
  "BigCommerce",
  "Testing (Jest / Cypress)",
  "Accessibility",
  "SEO",
  "Java",
  "Spring",
  "Vue",
  "Angular",
  "MongoDB",
  "MySQL",
  "Express",
  "AWS",
  "SOLID & design patterns",
  "Scrum",
];

export const TechStack = () => {
  return (
    <section
      id="techStack"
      aria-labelledby="techStack-heading"
      className="mb-16 scroll-mt-16 lg:scroll-mt-24"
    >
      <SectionHeading id="techStack" title="Tech Stack" />
      <ul className="flex flex-wrap gap-2">
        {techList.map((item) => (
          <TechChip key={item} name={item} />
        ))}
      </ul>
    </section>
  );
};
