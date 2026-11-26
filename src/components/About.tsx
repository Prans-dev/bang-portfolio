export default function About() {
  const technicalSkills = [
    "Adobe Premier Pro",
    "Adobe Lightroom",
    "Capcut",
    "Canva",
    "Adobe Edition",
    "Virtual DJ",
    "Photography",
  ];

  const communicationSkills = [
    "Hosting",
    "Leading Teams",
    "Collaboration Projects",
  ];

  return (
    <section id="about" className="bg-[#EDEDEA] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#686868]">
            01 — About
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl text-[#686868]">
            About Me
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 md:grid-cols-2">
          {/* Introduction */}
          <div>
            <h3 className="mb-5 text-2xl font-semibold text-[#686868]">
              Communication, creativity & storytelling.
            </h3>

            <p className="leading-8 text-[#686868]">
              Eleanor Javier, also known as Ellie, is a recent graduate with a
              B.A. in Communication and Media Studies at the University of the
              Philippines Visayas. Since she was young, she has loved reading
              and watching films, letting her step into a world that she may or
              may not have yet experienced. The ability to bring out tales of
              life, listen to familiar and unfamiliar narratives, and feel
              connected are the things that led her to pursue filmmaking. To
              her, she believes that filmmaking is a tool to present stories,
              connect people, and represent voices. <br></br>
              <br></br>Currently, she is an active member of Cine ni Mango
              Productions (est. 2024), a student production house that she
              founded along with her college friends in UPV, which has already
              produced four student films in 2024. Furthermore, she has also
              participated in several student film productions in Metro Manila
              and the Regions. She hopes to continue to learn and experience
              more in bringing out the narratives of people
            </p>

            <p className="mt-5 leading-8 text-[#686868]">
              My experience in academic projects and creative work has allowed
              me to explore content creation, visual communication, research,
              and digital media.
            </p>
          </div>

          {/* Education */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
              Education
            </p>

            <h3 className="text-xl font-semibold">
              Bachelor of Arts in Communication and Media Studies
            </h3>

            <p className="mt-2 text-[#686868]">
              University of the Philippines Visayas
            </p>

            <p className="mt-1 text-sm text-[#686868]">2026</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <p className="mb-6 text-sm uppercase tracking-widest text-[#686868]">
            Technical Skills
          </p>

          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((technicalSkills) => (
              <span
                key={technicalSkills}
                className="rounded-full border border-[#D8D7D3] px-5 py-2 text-sm"
              >
                {technicalSkills}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <p className="mb-6 text-sm uppercase tracking-widest text-[#686868]">
            Communication Skills
          </p>

          <div className="flex flex-wrap gap-3">
            {communicationSkills.map((communicationSkills) => (
              <span
                key={communicationSkills}
                className="rounded-full border border-[#D8D7D3] px-5 py-2 text-sm"
              >
                {communicationSkills}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
