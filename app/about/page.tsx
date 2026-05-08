import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";

const certs = [
  {
    name: "Multicloud Network Associate",
    issuer: "Aviatrix",
    issued: "Mar 2024",
    expires: "Mar 2027",
    colors: ["#E87A4F", "#F4A261", "#FFB5A7"],
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "Sep 2023",
    expires: "Sep 2026",
    colors: ["#F4A261", "#FFB5A7", "#E87A4F"],
  },
  {
    name: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    issued: "Mar 2023",
    expires: "Mar 2026",
    colors: ["#E87A4F", "#FFB5A7", "#FCD5CE"],
  },
  {
    name: "(ISC)² Candidate",
    issuer: "ISC2",
    issued: "Jan 2023",
    colors: ["#A8D8EA", "#C9B1FF", "#B8C5FF"],
  },
];

const now = [
  "Shipping AI-powered onboarding flows at Ve.",
  "Reading more about LLM evaluation than I'd like to admit.",
  "Trying to keep at least one weekend a month for side builds.",
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="relative z-10 flex-1">
        <AboutHero />
        <NowSection />
        <Extracurriculars />
        <Education />
        <Certs />
      </main>
      <Footer />
    </>
  );
}

function Extracurriculars() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-4">
            <p className="text-[14px] tracking-[0.18em] uppercase text-[color:var(--olive-light)] mb-3">
              Extra-curriculars
            </p>
            <h2 className="font-display text-[36px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] text-[color:var(--olive)]">
              Things I do <em className="italic">on the side.</em>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <article className="rounded-[24px] border border-[color:var(--olive-mute)] bg-[color:var(--cream-light)] p-8 lg:p-10 flex flex-col gap-6">
              <header className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
                <h3 className="font-display text-[28px] lg:text-[36px] leading-[1.05] tracking-[-0.015em] text-[color:var(--olive)]">
                  Expedite
                </h3>
                <span className="font-display italic text-[16px] lg:text-[18px] text-[color:var(--olive-light)]">
                  · No-code club, KL University
                </span>
              </header>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Field label="Role" value="Co-Founder" />
                <Field label="When" value="Apr 2024" />
                <Field label="Where" value="KL University" />
                <Field label="Mode" value="On-site" />
              </div>

              <p className="text-[15px] lg:text-[16px] leading-[1.65] text-[color:var(--olive-light)] max-w-[60ch]">
                Co-founded a small no-code / low-code student club at KL
                University with a friend. The aim: lower the bar for classmates
                who wanted to build software but hadn&apos;t yet. A one-off
                workshop turned into a recurring weekend rhythm — Mendix
                workshops, idea-to-install pairing sessions, and internal docs
                so the club could run without us hand-holding every session.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Mendix", "Figma", "Notion"].map((t) => (
                  <span
                    key={t}
                    className="text-[12px] tracking-[0.06em] uppercase text-[color:var(--olive)] border border-[color:var(--olive-mute)] rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function NowSection() {
  return (
    <section className="relative w-full bg-[color:var(--cream-light)]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-[14px] tracking-[0.18em] uppercase text-[color:var(--olive-light)] mb-3">
              Currently
            </p>
            <h2 className="font-display text-[36px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] text-[color:var(--olive)]">
              Right now <em className="italic">I&apos;m…</em>
            </h2>
          </div>
          <ul className="lg:col-span-8 flex flex-col divide-y divide-[color:var(--olive-mute)]">
            {now.map((item, i) => (
              <li
                key={i}
                className="flex items-baseline gap-5 py-5 text-[17px] lg:text-[19px] text-[color:var(--olive)]"
              >
                <span className="font-display text-[14px] text-[color:var(--olive-light)] w-8 shrink-0">
                  0{i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-4">
            <p className="text-[14px] tracking-[0.18em] uppercase text-[color:var(--olive-light)] mb-3">
              Education
            </p>
            <h2 className="font-display text-[36px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] text-[color:var(--olive)]">
              Where I learned <em className="italic">the basics</em>.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <article className="rounded-[24px] border border-[color:var(--olive-mute)] bg-[color:var(--cream-light)] p-8 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
              <Field label="School" value="KL University" />
              <Field label="Degree" value="B.Tech, Computer Science" />
              <Field label="Years" value="2020 — 2024" />
              <Field label="GPA" value="8.8 / 10" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)] mb-2">
        {label}
      </p>
      <p className="font-display text-[20px] lg:text-[22px] leading-tight text-[color:var(--olive)]">
        {value}
      </p>
    </div>
  );
}

function Certs() {
  return (
    <section className="relative w-full bg-[color:var(--cream-light)]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 lg:mb-16">
          <div className="lg:col-span-5">
            <p className="text-[14px] tracking-[0.18em] uppercase text-[color:var(--olive-light)] mb-3">
              Credentials
            </p>
            <h2 className="font-display text-[36px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] text-[color:var(--olive)]">
              A few things I&apos;ve <em className="italic">earned</em>.
            </h2>
          </div>
          <p className="lg:col-span-7 lg:pt-10 text-[16px] lg:text-[17px] leading-[1.6] text-[color:var(--olive-light)] max-w-[60ch]">
            Mostly cloud, security, and platform certs picked up during my
            engineering years. Useful for the systems side of product calls —
            and a reminder that AI features still ride on infrastructure that
            has to behave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {certs.map((c) => (
            <article
              key={c.name}
              className="rounded-[24px] border border-[color:var(--olive-mute)] bg-[color:var(--cream)] overflow-hidden flex flex-col"
            >
              <div
                className="aspect-[16/10] grid place-items-center"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${c.colors.join(", ")})`,
                }}
              >
                <span className="font-display italic text-white/95 text-[40px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                  {c.issuer.charAt(0)}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <p className="text-[12px] tracking-[0.12em] uppercase text-[color:var(--olive-light)]">
                  {c.issuer}
                </p>
                <p className="font-display text-[18px] leading-[1.25] text-[color:var(--olive)]">
                  {c.name}
                </p>
                <div className="mt-auto flex justify-between text-[12px] text-[color:var(--olive-light)] pt-3 border-t border-[color:var(--olive-mute)]">
                  <span>Issued · {c.issued}</span>
                  {c.expires && <span>Until · {c.expires}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
