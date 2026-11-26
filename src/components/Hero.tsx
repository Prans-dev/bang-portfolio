import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#536D8A] sm:text-sm">
            Film, Advertising & Marketing, Radio & Broadcasting, and Photography
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Eleanor Javier
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-[#686868] sm:text-lg sm:leading-8">
            A Communication & Media Studies graduate passionate about
            storytelling, creativity, and meaningful communication.
          </p>

          <Link
            href="#experience"
            className="mt-8 inline-block rounded-full bg-[#171717] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#536D8A]"
          >
            View My Work
          </Link>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative aspect-[4/3] rounded-xl w-full max-w-sm overflow-hidden bg-[#EDEDEA]">
            <Image
              src="/images/profile.jpg"
              alt="Eleanor Javier"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
