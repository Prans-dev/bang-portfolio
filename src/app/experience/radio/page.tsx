import Image from "next/image";
import Link from "next/link";
import { radioExperience } from "@/data/radio";

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
              {radioExperience.number}
            </p>

            <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
              {radioExperience.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#686868]">
              {radioExperience.description}
            </p>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#536D8A]">
              Behind the scenes
            </p>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              01
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {radioExperience.featuredPictures.map((item) => (
              <div
                key={item.title}
                className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#EDEDEA] shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coursework & Workshops */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              02
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Academic Background
            </h2>
          </div>

          <div className="grid gap-x-12 md:grid-cols-2">
            {radioExperience.academics.map((item) => (
              <div key={item.title} className="border-t border-[#D8D7D3] py-6">
                <p className="text-sm font-medium text-[#536D8A]">
                  {item.code}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#686868]">
                  {item.role} ({item.year})
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
