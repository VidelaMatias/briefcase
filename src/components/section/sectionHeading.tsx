import { FC } from "react";

interface Props {
  /** Must match the parent section id so the heading labels it for screen readers. */
  id: string;
  title: string;
}

/**
 * Sticky bar on small screens (so you always know where you are while scrolling),
 * plain heading on desktop where the side nav already tracks the position.
 */
const SectionHeading: FC<Props> = ({ id, title }) => (
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
    <h2
      id={`${id}-heading`}
      className="text-sm font-bold uppercase tracking-widest text-slate-200"
    >
      {title}
    </h2>
  </div>
);

export default SectionHeading;
