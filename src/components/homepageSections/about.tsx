import SectionHeading from "../section/sectionHeading";

export const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mb-16 scroll-mt-16 lg:scroll-mt-24"
    >
      <SectionHeading id="about" title="About" />

      <p className="mb-4">
        I&rsquo;m a frontend engineer who builds web experiences that are fast,
        accessible and pleasant to use. Most of my work lives in e-commerce,
        where performance and SEO are measured in revenue, so I care as much
        about Core Web Vitals and semantics as I do about the pixels.
      </p>

      <p className="mb-4">
        Today I work as a <strong className="font-medium text-slate-200">Senior
        UI Engineer</strong>, leading frontend work in React, Next.js and
        TypeScript across Salesforce Commerce Cloud and BigCommerce storefronts.
        I review code, mentor teammates and keep WCAG compliance part of the
        definition of done rather than an afterthought.
      </p>

      <p className="mb-4">
        Away from the editor I train for triathlons, read, and dig into whatever
        technology I&rsquo;m curious about that month.
      </p>
    </section>
  );
};
