import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Wind, Activity, UtensilsCrossed } from "lucide-react";
import { PageShell, Reveal, SectionHeading } from "@/components/PageShell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Dharani K" },
      {
        name: "description",
        content:
          "Urban Breeze (AI air quality), TalentTrack (CV-powered athletic assessment), FoodHopper (full-stack restaurant platform).",
      },
      { property: "og:title", content: "Projects — Dharani K" },
      {
        property: "og:description",
        content:
          "AI, computer vision, and full-stack projects exploring data-driven problem solving.",
      },
    ],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  {
    title: "Urban Breeze",
    subtitle: "AI · Machine Learning · Data Analytics",
    icon: Wind,
    summary:
      "AI-powered air quality monitoring system providing real-time AQI data, predictions, and personalized health recommendations.",
    details: [
      "Real-time AQI tracking across multiple data sources.",
      "Predictive ML models for short-term air quality forecasts.",
      "Personalized health guidance based on user health profile.",
    ],
    tags: ["Python", "Machine Learning", "Data Analytics", "APIs"],
    accent: "from-emerald-500/40 to-cyan-500/40",
  },
  {
    title: "TalentTrack",
    subtitle: "AI · Computer Vision · Mobile Development",
    icon: Activity,
    summary:
      "Mobile app democratizing athletic assessment using only a smartphone camera — no extra hardware required.",
    details: [
      "Computer vision pipeline for posture and movement analysis.",
      "On-device performance metrics tailored to multiple sports.",
      "Designed for accessibility — works with everyday smartphones.",
    ],
    tags: ["OpenCV", "Computer Vision", "Mobile", "AI"],
    accent: "from-fuchsia-500/40 to-violet-500/40",
  },
  {
    title: "FoodHopper",
    subtitle: "React · Node.js · SQL",
    icon: UtensilsCrossed,
    summary:
      "MakeMyTrip-inspired restaurant discovery and booking platform with full-stack implementation and analytics dashboards.",
    details: [
      "End-to-end booking flow with real-time availability.",
      "Multi-vendor management and operations dashboard.",
      "Performance analytics for restaurants and platform metrics.",
    ],
    tags: ["React", "Node.js", "SQL", "Dashboards"],
    accent: "from-amber-500/40 to-pink-500/40",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: -py * 8, y: px * 8 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="h-full"
    >
      {children}
    </div>
  );
}

function ProjectsPage() {
  return (
    <PageShell>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Projects"
            title={
              <>
                Built with <span className="text-gradient-primary font-serif italic">intent.</span>
              </>
            }
            description="Each project started with a question. Each one taught me something new about turning ideas into working software."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <TiltCard>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur transition-smooth hover:border-primary/40 hover:shadow-glow"
                  >
                    {/* glow */}
                    <div
                      className={`absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50`}
                    />

                    {/* gradient header */}
                    <div className="relative mb-6 h-32 overflow-hidden rounded-2xl border border-white/10">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${p.accent}`}
                      />
                      <div className="absolute inset-0 grid-pattern opacity-50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-background/70 backdrop-blur">
                        <p.icon className="h-5 w-5 text-primary-glow" />
                      </div>
                    </div>

                    <div className="text-xs font-medium uppercase tracking-wider text-primary-glow">
                      {p.subtitle}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {p.details.map((d) => (
                        <li
                          key={d}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-[11px] text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center text-sm text-muted-foreground">
              More on{" "}
              <a
                href="https://github.com/dharanikarthi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-primary-glow"
              >
                GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
