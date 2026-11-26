import Image from "next/image";
import Link from "next/link";
import { filmExperience } from "@/data/film";
import ExperienceList from "@/components/ExperienceList";

export default function FilmExperiencePage() {
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
              {filmExperience.number}
            </p>

            <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
              Film
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#686868]">
              {filmExperience.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-12 lg:gap-16">
            {/* Poster Column (7 of 12 columns) */}
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-[#EDEDEA] shadow-xl md:col-span-7">
              <Image
                src={filmExperience.featuredWork.image}
                alt={filmExperience.featuredWork.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 650px"
                className="object-cover"
              />
            </div>

            {/* Info Column (5 of 12 columns) */}
            <div className="flex flex-col justify-center md:col-span-5 md:py-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#536D8A]">
                Featured Work
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 lg:text-5xl">
                {filmExperience.featuredWork.title}
              </h2>

              {/* Role & Year Badges/Details */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[#686868]">
                <span className="font-medium text-neutral-800">
                  {filmExperience.featuredWork.role}
                </span>
                <span>•</span>
                <span>{filmExperience.featuredWork.year}</span>
              </div>

              <div className="my-6 h-px w-16 bg-[#D8D7D3]" />

              <p className="text-base leading-relaxed text-[#555] lg:text-lg">
                {filmExperience.featuredWork.description}
              </p>

              {/* Optional decorative tag */}
              <div className="mt-8">
                <span className="inline-flex rounded-full border border-[#D8D7D3] bg-[#F3F2EE] px-4 py-1.5 text-xs font-medium text-[#536D8A]">
                  Puregold CinePanalo 2025 Official Selection
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Filmmaker */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              01
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Student Filmmaker
            </h2>
          </div>

          <ExperienceList items={filmExperience.studentFilmmaker} />
        </div>
      </section>

      {/* Management Department */}
      <section className="bg-[#EDEDEA] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              02
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Management Department
            </h2>
          </div>

          <ExperienceList items={filmExperience.management} />
        </div>
      </section>

      {/* Production Department */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              03
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Production Department
            </h2>
          </div>

          <ExperienceList items={filmExperience.production} />
        </div>
      </section>

      {/* Post-Production Department */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              05
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Post-Production Department
            </h2>
          </div>
          <p className=" max-w-2xl leading-7 text-[#686868]">
            A selection of editing and post-production work, bringing stories
            together through visual pacing, sound, and storytelling.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filmExperience.postProduction.map((item) => (
              <article
                key={`${item.title}-${item.year}`}
                className="group flex flex-col"
              >
                {item.image && (
                  <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#EDEDEA] shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                    <Image
                      src={item.image}
                      alt={`${item.title} film still`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Title & Year */}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                    {item.title}
                  </h3>
                  <span className="shrink-0 text-sm font-medium text-[#686868]">
                    {item.year}
                  </span>
                </div>

                {/* Role */}
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#536D8A]">
                  {item.role}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#686868]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Acting */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              05
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Acting
            </h2>
          </div>

          <ExperienceList items={filmExperience.acting} />
        </div>
      </section>

      {/* Film-Related Coursework */}
      <section className="bg-[#EDEDEA] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#536D8A]">
              06
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Film-Related Coursework
            </h2>
          </div>

          <div className="grid gap-x-12 md:grid-cols-2">
            {filmExperience.coursework.map((course) => (
              <div key={course.code} className="border-t border-[#D8D7D3] py-6">
                <p className="text-sm font-medium text-[#536D8A]">
                  {course.code}
                </p>

                <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>

                <p className="mt-2 text-sm leading-6 text-[#686868]">
                  {course.instructor} · {course.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Experience */}
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
