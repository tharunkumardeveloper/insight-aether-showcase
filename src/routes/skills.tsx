import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Brain,
  Globe,
  BarChart3,
} from "lucide-react";
import { PageShell, Reveal, SectionHeading } from "@/components/PageShell";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Dharani K" },
      {
        name: "description",
        content:
          "Programming, AI/ML, Web, Data — tech skills picked up through projects, courses, and curiosity.",
      },
      { property: "og:title", content: "Skills — Dharani K" },
      {
        property: "og:description",
        content:
          "Tech skills across programming, AI/ML, web development, and data analytics.",
      },
    ],
  }),
  component: SkillsPage,
});

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "React JS", "Java", "SQL"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    items: ["Machine Learning", "OpenCV", "MediaPipe", "LLaMA3", "XAI", "Computer Vision"],
  },
  {
    icon: Globe,
    title: "Web",
    items: ["WordPress", "UI/UX Design", "HTML", "CSS"],
  },
  {
    icon: BarChart3,
    title: "Data",
    items: ["Data Analytics", "DBMS", "Cloud Computing"],
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
    </PageShell>
  );
}
