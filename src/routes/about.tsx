import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Languages, Sparkles, Target } from "lucide-react";
import { PageShell, Reveal, SectionHeading } from "@/components/PageShell";
import dharaniPhoto from "@/assets/dharani.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dharani K" },
      {
        name: "description",
        content:
          "Computer Science student at Sri Sairam Engineering College exploring data analytics and AI. Education, languages, and what drives me.",
      },
      { property: "og:title", content: "About — Dharani K" },
      {
        property: "og:description",
        content:
          "CS student passionate about AI, data, and building thoughtful software.",
      },
    ],
  }),
  component: AboutPage,
});

const EDUCATION = [
  {
    school: "Sri Sairam Engineering College",
    place: "Chennai, India",
    degree: "B.Tech — Computer Science and Business Systems",
    detail: "Pre-Final Year · CGPA 8.62 / 10",
    when: "2026 — Present",
  },
  {
    school: "Vels Vidyashram",
    place: "Chennai, India",
    degree: "12th Science (HSC)",
    detail: "Percentage: 89.9%",
    when: "2023",
  },
];

const TRAITS = [
  {
    icon: Sparkles,
    title: "Curiosity-driven",
    desc: "I love exploring how emerging tech turns messy data into clear, useful answers.",
  },
  {
    icon: Target,
    title: "Outcome-focused",
    desc: "I care about shipping things that work, look great, and feel intentional.",
  },
  {
    icon: GraduationCap,
    title: "Always learning",
    desc: "From AI/ML to full-stack — I move quickly between disciplines and tools.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="About me"
            title={
              <>
                A student, a builder,<br />
                a <span className="text-gradient-primary font-serif italic">curious mind.</span>
              </>
            }
          />

          <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-primary opacity-40 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-elegant">
                  <img
                    src={dharaniPhoto}
                    alt="Dharani Karthikeyan"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  I'm <span className="text-foreground">Dharani Karthikeyan</span>, a
                  Computer Science and Business Systems student exploring the
                  intersection of <span className="text-foreground">data analytics</span>
                  {" "}and <span className="text-foreground">artificial intelligence</span>.
                </p>
                <p>
                  I gravitate toward problems where technology meets human
                  understanding — air quality forecasting, sports analytics from a
                  phone camera, restaurant discovery — anything where data tells a
                  story and software brings it to life.
                </p>
                <p>
                  Outside of code, I write papers, win the occasional hackathon, and
                  spend a lot of time thinking about how interfaces should feel.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Pre-final year",
                    "Chennai based",
                    "Open to internships",
                    "Research-curious",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Traits */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {TRAITS.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.1}>
                <div className="glass h-full rounded-3xl p-6 transition-smooth hover:-translate-y-1 hover:border-primary/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Education"
            title={<>Where I've <span className="text-gradient-primary">studied</span></>}
          />

          <div className="mt-12 space-y-5">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.1}>
                <div className="group relative grid gap-4 rounded-3xl border border-border bg-surface/60 p-6 transition-smooth hover:border-primary/40 sm:grid-cols-[180px_1fr] sm:p-8">
                  <div className="text-sm font-medium uppercase tracking-wider text-primary-glow">
                    {e.when}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{e.school}</h3>
                    <div className="text-sm text-muted-foreground">{e.place}</div>
                    <div className="mt-3 text-sm text-foreground/90">{e.degree}</div>
                    <div className="text-sm text-muted-foreground">{e.detail}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="glass-strong flex flex-wrap items-center justify-between gap-6 rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                  <Languages className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Languages
                  </div>
                  <div className="font-display text-lg font-semibold">
                    English & Tamil
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground">
                  English · Proficient
                </span>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground">
                  Tamil · Native
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
