import Image from "next/image";
import Link from "next/link";
import { extracurricularExperience } from "@/data/extracurricular";

type GalleryProject = {
  title: string;
  role: string;
  description: string;
  images: string[];
};

function GallerySection({
  number,
  title,
  projects,
}: {
  number: string;
  title: string;
  projects: GalleryProject[];
}) {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
            {number}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="space-y-14">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="mb-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#536D8A]">{project.role}</p>
                </div>

                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#686868] md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
                {project.images.map((image, index) => (
                  <div
                    key={image}
                    className={`relative aspect-[4/5] overflow-hidden bg-[#EDEDEA] ${
                      index === 0 && project.images.length > 2
                        ? "col-span-2 aspect-[2/1] md:col-span-1 md:aspect-[4/5]"
                        : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} photo ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ExtracurricularExperiencePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#171717]">
      {/* Header */}
      <section className="px-6 pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#experience"
            className="text-sm text-[#686868] transition-colors hover:text-[#536D8A]"
          >
            ← Back to Experience
          </Link>

          <p className="mt-16 text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
            {extracurricularExperience.number}
          </p>

          <h1 className="mt-4 text-6xl font-bold tracking-tight md:text-8xl">
            {extracurricularExperience.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#686868] md:text-lg">
            {extracurricularExperience.description}
          </p>
        </div>
      </section>

      {/* Hosting */}
      <GallerySection
        number="01 — Category"
        title="Hosting"
        projects={extracurricularExperience.hosting}
      />

      {/* Others */}
      <GallerySection
        number="02 — Category"
        title="Others"
        projects={extracurricularExperience.others}
      />

      {/* Back to Experience */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl border-t border-[#D8D7D3] pt-8">
          <Link
            href="/#experience"
            className="text-sm text-[#686868] transition-colors hover:text-[#536D8A]"
          >
            ← Back to all experience
          </Link>
        </div>
      </section>
    </main>
  );
}
