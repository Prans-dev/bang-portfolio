import Link from "next/link";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
            02 — Experience
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Areas of Creative Practice
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#686868]">
            A collection of Eleanor's experience across film, advertising,
            broadcasting, photography, and extracurricular activities.
          </p>
        </div>

        {/* Experience List */}
        <div className="border-t border-[#D8D7D3]">
          {experiences.map((experience) => (
            <Link
              key={experience.id}
              href={`/experience/${experience.id}`}
              className="group block border-b border-[#D8D7D3]"
            >
              <div className="grid gap-6 py-8 transition md:grid-cols-[100px_1fr_auto] md:items-center md:gap-10 md:py-10">
                {/* Number */}
                <p className="text-sm font-medium text-[#536D8A]">
                  {experience.number}
                </p>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight transition group-hover:text-[#536D8A] md:text-3xl">
                    {experience.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-[#686868]">
                    {experience.description}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-2xl text-[#536D8A] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
