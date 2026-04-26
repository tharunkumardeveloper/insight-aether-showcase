import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { PageShell, Reveal, SectionHeading } from "@/components/PageShell";
import { MagneticButton } from "@/components/MagneticButton";
import { Particles } from "@/components/Particles";
import dharaniPhoto from "@/assets/dharani.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharani K — CS Student · AI & Data Analytics" },
      {
        name: "description",
        content:
          "Portfolio of Dharani Karthikeyan — exploring AI, data analytics, and building thoughtful, modern software.",
      },
      { property: "og:title", content: "Dharani K — Portfolio" },
      {
        property: "og:description",
        content:
          "CS student building with data, AI, and full-stack tech. Projects, experience, and achievements.",
      },
    ],
  }),
  component: HomePage,
});

const ROLES = [
  "Data Analytics",
  "AI / Machine Learning",
  "Full-Stack Development",
  "Computer Vision",
];

function Typewriter() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block min-h-[1.4em] min-w-[14ch] text-left">
      <motion.span
        key={i}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-gradient-primary inline-block"
      >
        {ROLES[i]}
      </motion.span>
    </span>
  );
}

const STATS = [
  { v: "8.62", l: "CGPA / 10" },
  { v: "10+", l: "Awards Won" },
  { v: "3", l: "Hackathons" },
  { v: "9+", l: "Certifications" },
];

const FEATURED = [
  {
    title: "Urban Breeze",
    tag: "AI · ML · Data",
    desc: "AI-powered air quality system delivering real-time AQI, predictions, and personalized health recommendations.",
  },
  {
    title: "TalentTrack",
    tag: "AI · Computer Vision · Mobile",
    desc: "Mobile app democratizing athletic assessment using only a smartphone camera.",
  },
  {
    title: "FoodHopper",
    tag: "React · Node.js · SQL",
    desc: "MakeMyTrip-inspired restaurant booking platform with full-stack implementation and analytics dashboards.",
  },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 animated-mesh opacity-70" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <Particles count={28} />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-12 pb-24 md:grid-cols-[1.2fr_1fr] md:pt-20 md:pb-32">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-glow">
                <Sparkles className="h-3 w-3" />
                Available for opportunities
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Hi, I'm{" "}
                <span className="text-shine font-serif italic">Dharani.</span>
                <br />
                I build with
                <br />
                <Typewriter />
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Computer Science student at Sri Sairam Engineering College, exploring
                data-driven insights, AI, and elegant software. Curious by default.
                Builder by practice.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton>
                  <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                  >
                    View my work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-white/10"
                  >
                    Get in touch
                  </Link>
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
                <a
                  href="https://linkedin.com/in/dharani-karthikeyan"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4 text-primary group-hover:text-primary-glow" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/dharanikarthi"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Github className="h-4 w-4 text-primary group-hover:text-primary-glow" />
                  GitHub
                </a>
                <span className="hidden items-center gap-2 sm:inline-flex">
                  <MapPin className="h-4 w-4 text-primary" />
                  Chennai, India
                </span>
              </div>
            </Reveal>
          </div>

          {/* Photo */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-md">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-primary via-primary-glow to-accent-cyan opacity-70 blur-md" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-elegant">
                  <img
                    src={dharaniPhoto}
                    alt="Dharani Karthikeyan"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Floating chips */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-strong absolute -left-4 top-12 hidden rounded-2xl px-4 py-2.5 shadow-card sm:block"
                >
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Currently
                  </div>
                  <div className="text-xs font-medium text-foreground">
                    Pre-final year · CSBS
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-strong absolute -right-4 bottom-16 hidden rounded-2xl px-4 py-2.5 shadow-card sm:block"
                >
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Stack
                  </div>
                  <div className="text-xs font-medium text-foreground">
                    Python · React · ML
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-3xl shadow-card md:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-background/40 p-6 text-center md:p-8"
                >
                  <div className="font-display text-3xl font-semibold text-gradient-primary md:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative mt-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Projects with <span className="text-gradient-primary">purpose</span>
              </>
            }
            description="A snapshot of things I've built — blending AI, data, and software craft."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURED.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 backdrop-blur transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="text-xs font-medium uppercase tracking-wider text-primary-glow">
                    {p.tag}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
              >
                See all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/40 p-10 text-center shadow-elegant sm:p-16">
              <div className="absolute inset-0 -z-10 animated-mesh opacity-50" />
              <h3 className="font-display text-3xl font-semibold sm:text-4xl">
                Have an idea worth building?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                I'm always up for interesting projects, internships, and collaborations
                in AI, data, or web.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
                  >
                    <Mail className="h-4 w-4" />
                    Reach out
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
