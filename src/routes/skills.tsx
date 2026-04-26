import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Brain,
  Globe,
  BarChart3,
  Award,
  Trophy,
  Zap,
  FileText,
  GraduationCap,
} from "lucide-react";
import { PageShell, Reveal, SectionHeading } from "@/components/PageShell";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Achievements — Dharani K" },
      {
        name: "description",
        content:
          "Programming, AI/ML, Web, Data — plus certifications, achievements, and a published research paper.",
      },
      { property: "og:title", content: "Skills & Achievements — Dharani K" },
      {
        property: "og:description",
        content:
          "Tech skills, certifications from Coursera, NPTEL, AWS, Great Learning, and award-winning hackathon work.",
      },
    ],
  }),
  component: SkillsPage,
});

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "React JS"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    items: ["Machine Learning", "OpenCV"],
  },
  {
    icon: Globe,
    title: "Web",
    items: ["WordPress", "UI/UX Design", "HTML", "CSS"],
  },
  {
    icon: BarChart3,
    title: "Data",
    items: ["Data Analytics"],
  },
];

const CERTS = [
  { name: "Machine Learning", by: "Coursera · DeepLearning.AI" },
  { name: "Python For Everybody", by: "Coursera · University of Michigan" },
  { name: "Front End Development — CSS", by: "Great Learning" },
  { name: "Front End Development — HTML", by: "Great Learning" },
  { name: "Solutions Architecture Job Simulation", by: "AWS" },
  { name: "Programming in Java", by: "NPTEL" },
  { name: "Introduction to Database Systems", by: "NPTEL" },
  { name: "Cloud Computing", by: "NPTEL" },
  { name: "UI/UX, Data Analytics, Full Stack", by: "Maiyyam" },
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "1st Place",
    detail: "IET Mobile App Development Competition · KCG College of Technology, 2025",
  },
  {
    icon: Award,
    title: "10+ Wins",
    detail: "Paper Presentations and Project Expos across inter and intra college events",
  },
  {
    icon: Zap,
    title: "3 Hackathons",
    detail: "Participated in three intense 24-hour hackathons",
  },
];

function SkillsPage() {
  return (
    <PageShell>
      {/* Skills */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Skills"
            title={
              <>
                Tools that help me <span className="text-gradient-primary font-serif italic">build.</span>
              </>
            }
            description="A blend of programming, AI/ML, web, and data — picked up through projects, courses, and curiosity."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="glass group h-full rounded-3xl p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                    <g.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold">{g.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-foreground/90 transition-colors group-hover:border-primary/40"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Achievements"
            title={
              <>
                Moments worth <span className="text-gradient-primary">celebrating.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-surface/60 p-7 backdrop-blur transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <a.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research Paper */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface/60 p-8 shadow-elegant sm:p-12">
              <div className="absolute inset-0 -z-10 animated-mesh opacity-40" />
              <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-primary shadow-glow">
                  <FileText className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-primary-glow">
                    Research Paper · 2024
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug sm:text-2xl">
                    AORA Model for IoT-Edge Computing Using Hybrid Newton Raphson and
                    Dolphin Echolocation Algorithm Technique
                  </h3>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative mt-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Certifications"
            title={
              <>
                Always <span className="text-gradient-primary font-serif italic">learning.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur transition-smooth hover:-translate-y-0.5 hover:border-primary/40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-glow ring-1 ring-primary/30">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.by}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
