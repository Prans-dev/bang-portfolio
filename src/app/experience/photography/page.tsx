import Image from "next/image";
import Link from "next/link";
import { photographyExperience } from "@/data/photography";

type GalleryProject = {
  title: string;
  images: string[];
  role?: string;
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
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold md:text-2xl">
                  {project.title}
                </h3>

                {project.role && (
                  <p className="text-sm text-[#686868]">{project.role}</p>
                )}
              </div>

              <div
                className={
                  project.title === "UP Law Graduation"
                    ? "flex flex-wrap justify-center md:justify-start gap-2"
                    : "grid grid-cols-2 gap-1 md:grid-cols-3"
                }
              >
                {project.images.map((image, index) => (
                  <div
                    key={image}
                    className={`relative overflow-hidden bg-[#EDEDEA] ${
                      [
                        "Mundane Miagao",
                        "Miagao Market Finds",
                        "60th Anniversary Event",
                        "61st Anniversary Event",
                      ].includes(project.title)
                        ? "aspect-[3/2]"
                        : project.title === "UP Law Graduation"
                          ? "relative w-full max-w-[220px] aspect-[3/5] overflow-hidden bg-[#EDEDEA]"
                          : index === 0 && project.images.length > 2
                            ? "col-span-2 aspect-[2/1] md:col-span-1 md:aspect-[4/5]"
                            : "aspect-[3/4]"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} photograph ${index + 1}`}
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

export default function PhotographyExperiencePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      {/* Header */}
      <section className="px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#experience"
            className="text-sm text-[#686868] transition hover:text-[#536D8A]"
          >
            ← Back to Experience
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              {photographyExperience.number}
            </p>

            <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
              {photographyExperience.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#686868]">
              {photographyExperience.description}
            </p>
          </div>
        </div>
      </section>
      {/* 01 — Event Photography */}
      <GallerySection
        number="01"
        title="Event Photography"
        projects={photographyExperience.events}
      />
      {/* 02 — Portraits */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              02
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Portraits
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
            {photographyExperience.portraits.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[3/4] overflow-hidden bg-[#EDEDEA]"
              >
                <Image
                  src={image}
                  alt={`Portrait photograph ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 03 — Documentary Photography */}
      <GallerySection
        number="03"
        title="Documentary Photography"
        projects={photographyExperience.documentary}
      />
      {/* 04 — Pictorial */}
      <GallerySection
        number="04"
        title="Pictorial"
        projects={photographyExperience.pictorial}
      />
      ```
      {/* Back to all experience */}
      <section className="border-t border-[#D8D7D3] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#experience"
            className="text-lg font-medium transition hover:text-[#536D8A]"
          >
            ← Back to all experience
          </Link>
        </div>
      </section>
    </main>
  );
}
