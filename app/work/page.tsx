import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorkHero from "@/components/WorkHero";

type Role = {
  num: string;
  dates: string;
  location: string;
  company: string;
  tagline: string;
  role: string;
  intro: string;
  worked: string[];
  stack: string[];
  highlight?: string;
  accent: string;
  accentColors: string[];
};

const roles: Role[] = [
  {
    num: "01",
    dates: "Aug 2025 — present",
    location: "Hyderabad, India · On-site",
    company: "Ve",
    tagline: "the intent company",
    role: "Associate Product Manager",
    intro:
      "AI-powered onboarding and adoption work. The brief is simple to say and harder to do — turn outputs from internal models into something a user can actually act on, then sit close enough to design and engineering to keep the next iteration honest.",
    worked: [
      "Shipped Intercom-based onboarding flows that simplify the first session and lift early activation.",
      "Built a voice-input feature for content creation, focused on cutting friction for users who'd rather speak than type.",
      "Designed lightweight email touchpoints — notifications, summaries, automated replies — that keep users informed without becoming noise.",
      "Used behaviour analytics to iterate on engagement and quietly remove drop-offs at the seams between flows.",
    ],
    stack: ["Figma", "Mixpanel", "Linear", "Intercom", "Notion"],
    highlight: "Working on the parts of the product that decide whether a new user comes back tomorrow.",
    accent: "from-[#FFB5A7] via-[#F4A261] to-[#E87A4F]",
    accentColors: ["#FFB5A7", "#F4A261", "#E87A4F"],
  },
  {
    num: "02",
    dates: "Jun 2024 — Aug 2025",
    location: "Bengaluru, India · On-site",
    company: "Ambito",
    tagline: "Study-abroad platform",
    role: "Associate Product Manager",
    intro:
      "AI-powered product work at a study-abroad startup. Owned the features that took a student from profile-building to a real application — and helped the team see, with actual numbers, where the funnel was leaking.",
    worked: [
      "Led delivery of AI-driven profile evaluation and university shortlisting tools.",
      "Wrote PRDs, prioritised the roadmap, and shipped weekly in a fast-moving startup environment.",
      "Ran user research with both students and mentors to find pain points in the admissions flow.",
      "Built funnel instrumentation that surfaced quiet drop-offs at signup and onboarding, then shipped the smallest changes that moved each one.",
    ],
    stack: ["Figma", "Amplitude", "SQL", "Notion", "Linear"],
    highlight:
      "Most of the time was spent in funnels — finding where people quietly left, then removing the reason.",
    accent: "from-[#A8D8EA] via-[#C9B1FF] to-[#B8C5FF]",
    accentColors: ["#A8D8EA", "#C9B1FF", "#B8C5FF"],
  },
  {
    num: "03",
    dates: "Apr 2023 — Jul 2023 · 4 mos",
    location: "India · Internship",
    company: "Samsung",
    tagline: "Bixby voice platform",
    role: "Product Intern",
    intro:
      "Four months on Samsung's Bixby voice platform — focused on the unglamorous parts of release stability: automated tests, log noise, and the kind of QA work that decides whether a voice command actually works in production.",
    worked: [
      "Helped expand automated testing for the Bixby voice platform, improving regression coverage and release stability.",
      "Ran log analysis and debugging to surface functional issues across builds.",
      "Supported API-level testing and troubleshooting to keep data exchange and authentication behaviour reliable.",
      "Worked with global engineering teams to validate production readiness and close out defects.",
    ],
    stack: ["Test automation", "API testing", "Log analysis"],
    highlight:
      "First time seeing how a real voice product behaves under load — and how much of shipping is the QA that decides go or no-go.",
    accent: "from-[#FCD5CE] via-[#FFB5A7] to-[#FEC5BB]",
    accentColors: ["#FCD5CE", "#FFB5A7", "#FEC5BB"],
  },
];

type Icon = "sparkle" | "orbit" | "arch";

const principles: {
  n: string;
  title: string;
  sub: string;
  desc: string;
  tags: string[];
  colors: string[];
  icon: Icon;
}[] = [
  {
    n: "01",
    title: "AI feature delivery",
    sub: "From research to ship without losing the thread",
    desc: "I work on the parts of AI products users actually touch — onboarding, defaults, feedback loops — translating model behaviour into something that feels predictable and worth coming back for.",
    tags: ["PRDs", "Linear", "Figma"],
    colors: ["#E87A4F", "#F4A261", "#C9B1FF"],
    icon: "sparkle",
  },
  {
    n: "02",
    title: "Growth & activation",
    sub: "Funnels that surface the real drop-offs",
    desc: "I spend time in the data — figuring out where people quietly leave, building the instrumentation to see it, and shipping the smallest change that moves the curve.",
    tags: ["Mixpanel", "Amplitude", "SQL"],
    colors: ["#C9B1FF", "#B8C5FF", "#A8D8EA"],
    icon: "orbit",
  },
  {
    n: "03",
    title: "Cross-functional shipping",
    sub: "Design and engineering as one room",
    desc: "I sit on the seam between PM, design, and engineering — keeping decisions documented, tradeoffs visible, and the end goal close enough that everyone can steer toward it.",
    tags: ["Figma", "Notion", "GitHub"],
    colors: ["#90E0A8", "#A8E6CF", "#C9B1FF"],
    icon: "arch",
  },
];

function PrincipleIcon({ name }: { name: Icon }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "sparkle") {
    return (
      <svg {...common} aria-hidden>
        <path d="M12 2.5 L13.4 10.6 L21.5 12 L13.4 13.4 L12 21.5 L10.6 13.4 L2.5 12 L10.6 10.6 Z" />
      </svg>
    );
  }
  if (name === "orbit") {
    return (
      <svg {...common} aria-hidden>
        <path d="M3 18 C 7 8, 11 6, 15 7" />
        <circle cx="18" cy="7.5" r="2.4" fill="rgba(255,255,255,0.85)" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden>
      <path d="M3.5 20 V 14 A 8.5 8.5 0 0 1 20.5 14 V 20" />
      <path d="M9 20 V 16 A 3 3 0 0 1 15 16 V 20" />
      <line x1="12" y1="11" x2="12" y2="20" />
    </svg>
  );
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="relative z-10 flex-1">
        <WorkHero />
        <Timeline />
        <Principles />
      </main>
      <Footer />
    </>
  );
}

function Timeline() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-10 lg:py-16">
        {roles.map((r, i) => (
          <RoleCard key={r.num} role={r} isLast={i === roles.length - 1} />
        ))}
      </div>
    </section>
  );
}

function RoleCard({ role, isLast }: { role: Role; isLast: boolean }) {
  return (
    <article
      className={`role-card grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-10 py-12 lg:py-16 ${
        isLast ? "" : "border-b border-[color:var(--olive-mute)]"
      }`}
    >
      {/* LEFT — meta column */}
      <aside className="lg:col-span-3 flex lg:flex-col gap-4 lg:gap-3 items-start lg:items-stretch">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-[32px] lg:text-[48px] leading-none text-[color:var(--olive-light)]">
            {role.num}
          </span>
          <span
            className={`mt-2 inline-block w-12 h-12 rounded-full bg-gradient-to-br ${role.accent} shrink-0`}
            aria-hidden
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
            {role.dates}
          </p>
          <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
            {role.location}
          </p>
        </div>
      </aside>

      {/* RIGHT — content */}
      <div className="lg:col-span-9 flex flex-col gap-8">
        {/* Heading */}
        <header className="flex flex-col gap-3">
          <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
            <h2 className="hover-fill-wrap font-display text-[44px] lg:text-[64px] leading-[1.02] tracking-[-0.015em]">
              <span className="hover-fill-ghost">{role.company}</span>
              <span
                aria-hidden
                className="hover-fill-top font-display"
                style={{
                  backgroundImage: `linear-gradient(120deg, ${role.accentColors.join(", ")})`,
                }}
              >
                {role.company}
              </span>
            </h2>
            <span className="font-display italic text-[18px] lg:text-[22px] text-[color:var(--olive-light)]">
              · {role.tagline}
            </span>
          </div>
          <p className="font-display italic text-[18px] lg:text-[22px] text-[color:var(--olive)]">
            {role.role}
          </p>
        </header>

        {/* Intro */}
        <p className="text-[17px] lg:text-[19px] leading-[1.65] text-[color:var(--olive-light)] max-w-[64ch]">
          {role.intro}
        </p>

        {/* Highlight pull-quote */}
        {role.highlight && (
          <blockquote className="relative pl-6 border-l-2 border-[color:var(--olive-mute)] max-w-[60ch]">
            <p className="font-display italic text-[18px] lg:text-[22px] leading-[1.45] text-[color:var(--olive)]">
              “{role.highlight}”
            </p>
          </blockquote>
        )}

        {/* Worked-on list */}
        <div className="flex flex-col gap-3">
          <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
            What I worked on
          </p>
          <ul className="flex flex-col gap-2">
            {role.worked.map((w, idx) => (
              <li
                key={idx}
                className="flex gap-4 text-[15px] lg:text-[16px] leading-[1.6] text-[color:var(--olive)]"
              >
                <span
                  className="mt-[0.55em] w-[6px] h-[6px] rounded-full bg-[color:var(--olive-light)] shrink-0"
                  aria-hidden
                />
                <span className="max-w-[70ch]">{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack tags */}
        <div className="flex flex-col gap-3">
          <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
            Stack & tools
          </p>
          <div className="flex flex-wrap gap-2">
            {role.stack.map((t) => (
              <span
                key={t}
                className="text-[13px] text-[color:var(--olive)] border border-[color:var(--olive-mute)] rounded-full px-3.5 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Principles() {
  return (
    <section className="relative w-full bg-[color:var(--cream-light)] mt-8 lg:mt-12">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16 lg:py-20">
        <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.015em] text-[color:var(--olive)] text-center mb-16 lg:mb-24 max-w-[20ch] mx-auto">
          What I bring to the work
        </h2>

        <div className="flex flex-col gap-16 lg:gap-20">
          {principles.map((p) => (
            <article
              key={p.n}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              <p className="lg:col-span-1 font-display text-[24px] lg:text-[32px] leading-none text-[color:var(--olive-light)]">
                {p.n}
              </p>
              <div className="lg:col-span-2">
                <div className="relative w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] pulse-soft">
                  {/* Soft blurred gradient orb */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 32% 30%, ${p.colors[0]} 0%, ${p.colors[1]} 45%, ${p.colors[2]} 100%)`,
                      filter: "blur(18px)",
                      opacity: 0.78,
                    }}
                  />
                  {/* Crisp icon centered on top */}
                  <div className="absolute inset-0 grid place-items-center text-[color:var(--olive-dark)]">
                    <PrincipleIcon name={p.icon} />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="font-display text-[24px] lg:text-[32px] leading-tight text-[color:var(--olive)]">
                  {p.title}
                </p>
                <p className="mt-2 font-display italic text-[16px] lg:text-[18px] text-[color:var(--olive-light)]">
                  {p.sub}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <p className="text-[15px] lg:text-[16px] leading-[1.6] text-[color:var(--olive-light)]">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] tracking-[0.06em] uppercase text-[color:var(--olive)] border border-[color:var(--olive-mute)] rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
