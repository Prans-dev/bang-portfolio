import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            04 — Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Let's work together.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm always open to new opportunities, collaborations, and creative
            projects. Feel free to get in touch.
          </p>
        </div>

        {/* Email */}
        <div className="mt-12">
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
            Email
          </p>
          <div className="flex flex-col gap-4">
            <Link
              href="mailto:ellie.pascualjavier@gmail.com"
              className="text-xl font-medium underline underline-offset-8 transition hover:opacity-60 md:text-2xl"
            >
              ellie.pascualjavier@gmail.com
            </Link>

            <Link
              href="mailto:mpjavier1@up.edu.ph"
              className="text-xl font-medium underline underline-offset-8 transition hover:opacity-60 md:text-2xl"
            >
              mpjavier1@up.edu.ph
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex flex-wrap gap-6">
          <Link
            href="https://www.linkedin.com/in/eleanor-javier-354864345/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-4 hover:opacity-60"
          >
            LinkedIn
          </Link>

          <Link
            href="https://www.instagram.com/javierellieee_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-4 hover:opacity-60"
          >
            Instagram
          </Link>

          <Link
            href="https://www.facebook.com/ellie.pascualjavier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-4 hover:opacity-60"
          >
            Facebook
          </Link>
        </div>
      </div>
    </section>
  );
}
