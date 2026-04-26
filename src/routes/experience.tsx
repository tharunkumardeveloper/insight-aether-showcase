import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { PageShell, Reveal, SectionHeading } from "@/components/PageShell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Dharani K" },
      {
        name: "description",
        content:
          "Web development internship at Rudhra Info Solutions and website coordination at IEEE TEMS — building real products and dashboards.",
      },
      { property: "og:title", content: "Experience — Dharani K" },
      {
        property: "og:description",
        content:
          "Internships and roles where I shipped real products, ran websites, and supported strategic decisions.",
      },
    ],
  }),
  component: ExperiencePage,
});

const TIMELINE = [
  {
    role: "Web Developer Intern",
    org: "Rudhra Info Solutions",
    place: "Chennai, India",
    when: "Jun 2025 — Jul 2025",
    bullets: [
      "Conducted requirement analysis and translated business needs into actionable insights.",
      "Developed FoodHopper, a MakeMyTrip-inspired platform for restaurants, using React, Node.js, and SQL.",
      "Built dashboards to track performance and supported multi-vendor workflow optimization.",
    ],
  },
  {
    role: "Website Coordinator",
    org: "IEEE TEMS Chennai",
    place: "Chennai, India",
    when: "Oct 2024 — Nov 2025",
    bullets: [
      "Managed and optimized the WordPress website for content accuracy and user engagement.",
      "Collaborated with teams to gather requirements and implement strategic updates.",
      "Prepared performance reports to support executive decision-making.",
    ],
  },
];

function ExperiencePage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageShell>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                A short, <span className="text-gradient-primary font-serif italic">meaningful</span> journey.
              </>
            }
            description="Real teams, real products, real outcomes — every role taught me to ship and listen carefully."
          />

          <div ref={ref} className="relative mt-20">
            {/* Timeline rail */}
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary-glow to-accent-cyan md:left-1/2 md:-translate-x-1/2"
            />

            <div className="space-y-16">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={item.role} delay={i * 0.05}>
                    <div
                      className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                        isLeft ? "" : "md:[&>*:first-child]:order-2"
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_oklch(0.62_0.22_290)] md:left-1/2">
                        <div className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
                      </div>

                      <div className={isLeft ? "md:text-right" : ""}>
                        <div className="ml-10 md:ml-0">
                          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow">
                            <Calendar className="h-3 w-3" />
                            {item.when}
                          </div>
                        </div>
                      </div>

                      <div className="ml-10 md:ml-0">
                        <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 shadow-card backdrop-blur transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow sm:p-8">
                          <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                              <Briefcase className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="font-display text-xl font-semibold">
                                {item.role}
                              </h3>
                              <div className="mt-1 text-sm text-foreground/80">
                                {item.org}
                              </div>
                              <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                {item.place}
                              </div>
                            </div>
                          </div>

                          <ul className="mt-5 space-y-2.5">
                            {item.bullets.map((b) => (
                              <li
                                key={b}
                                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
