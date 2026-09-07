import ExperienceCard from "../experienceCard/experienceCard";
import SectionHeading from "../section/sectionHeading";
import experienceData from "@/fakedata/experience.json";

export const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mb-16 scroll-mt-16 lg:scroll-mt-24"
    >
      <SectionHeading id="experience" title="Experience" />
      <ul className="group/list">
        {experienceData.map((experience) => (
          <ExperienceCard
            key={experience.companyName}
            {...experience}
            techList={experience.techList.split(",")}
          />
        ))}
      </ul>
    </section>
  );
};
