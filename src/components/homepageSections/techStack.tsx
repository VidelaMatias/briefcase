import TechChip from "../techChip/techChip"

export const TechStack = () => {
    const techList: string[] =["React","Next.js","SOLID","TailwindCSS","Testing","Bigcommerce","NodeJS","Typescript","Javascript","Java","Spring","MondoDB","MySQL","Express","Scrum","AWS","VueJS","Angular","Pattern Design"];

    return (
        <section id="techStack" className="mb-10 scroll-mt-10 md:mb-10 lg:scroll-mt-10">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Tech Stack</h2>
            </div>
            <ul className="flex flex-wrap gap-2">
                {techList.map((item) => (
                    <TechChip key={item} name={item} />
                ))}
            </ul>
        </section>

    )
}
