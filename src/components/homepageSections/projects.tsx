
import ExperienceCard from "../experienceCard/experienceCard";
import projectsData from '@/fakedata/projects.json';

export const Projects = () => {

    return (
        <section id="projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:bg-[#0b4769]">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:text-lg">Projects</h2>
            </div>
            <ul className="group/list">
                {projectsData?.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} techList={experience.techList.split(",")} />
                ))}
            </ul>
        </section>
    )
}