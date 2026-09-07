import ExperienceCard, { type ImageTheme } from "../experienceCard/experienceCard";
import SectionHeading from "../section/sectionHeading";
import projectsData from "@/fakedata/projects.json";

type Project = {
  companyName: string;
  companyURL: string;
  description: string;
  techList: string;
  imageURL: string;
  imageTheme?: ImageTheme;
};

const projects = projectsData as Project[];

export const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mb-16 scroll-mt-16 lg:scroll-mt-24"
    >
      <SectionHeading id="projects" title="Selected Projects" />
      <ul className="group/list">
        {projects.map((project) => (
          <ExperienceCard
            key={project.companyName}
            {...project}
            techList={project.techList.split(",")}
          />
        ))}
      </ul>
    </section>
  );
};
