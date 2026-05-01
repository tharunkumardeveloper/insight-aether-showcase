import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Brain,
  Lightbulb,
  GraduationCap,
  School,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dharani K" },
      {
        name: "description",
        content: "Learn more about Dharani Karthikeyan — CS & Business Systems student exploring data analytics and AI.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d0a14] text-[#f5f0ff]">
      {/* SECTION 1 - PAGE HERO */}
      <section className="bg-[#0d0a14]">
        <div className="mx-auto max-w-[1200px] px-8 py-24">
          <div className="grid items-center gap-12 md:grid-cols-[55fr_45fr]">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c084fc] bg-[#1a1025] px-4 py-1 text-xs uppercase tracking-widest text-[#c084fc]">
                ✦ About Me
              </div>

              <h1
                className="mt-6 font-display text-6xl font-black text-[#f5f0ff]"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  textShadow: "0 0 40px rgba(192,132,252,0.15)",
                }}
              >
                I'm Dharani Karthikeyan
              </h1>

              <div
                className="mt-2 font-display text-xl font-medium text-[#c084fc]"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                CS & Business Systems Student
              </div>

              <div className="mt-8 max-w-[540px] space-y-4">
                <p className="font-sans text-lg leading-[1.8] text-[#a89bc2]">
                  A Computer Science and Business Systems student with a strong focus on Data Analytics and Artificial Intelligence. I work with Python, machine learning pipelines, computer vision, and LLM APIs to extract meaning from data and build intelligent systems that solve real problems.
                </p>
                <p className="font-sans text-lg leading-[1.8] text-[#a89bc2]">
                  Alongside data, I build the interfaces that bring it to life — React, Next.js, and Tailwind CSS with a strong eye for UI/UX. I spend a lot of time thinking about how things should look, feel, and behave — because good design is just as important as good data.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#2d1f42] bg-[#1a1025] px-4 py-2 text-sm text-[#a89bc2]">
                  📍 Chennai, India
                </span>
                <span className="rounded-full border border-[#2d1f42] bg-[#1a1025] px-4 py-2 text-sm text-[#a89bc2]">
                  🎓 Pre-Final Year, SSEC
                </span>
                <span className="rounded-full border border-[#2d1f42] bg-[#1a1025] px-4 py-2 text-sm text-[#a89bc2]">
                  🟢 Open to Opportunities
                </span>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Stats Card */}
              <div className="rounded-3xl border border-[#2d1f42] bg-[#1a1025] p-8 transition-all hover:shadow-[0_0_40px_rgba(192,132,252,0.1)]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-b border-r border-[#2d1f42] pb-6 pr-6">
                    <div
                      className="font-display text-4xl font-bold text-[#c084fc]"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      8.62
                    </div>
                    <div className="mt-1 text-sm text-[#6b5f80]">CGPA</div>
                  </div>
                  <div className="border-b border-[#2d1f42] pb-6 pl-6">
                    <div
                      className="font-display text-4xl font-bold text-[#c084fc]"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      10+
                    </div>
                    <div className="mt-1 text-sm text-[#6b5f80]">Competition Wins</div>
                  </div>
                  <div className="border-r border-[#2d1f42] pt-6 pr-6">
                    <div
                      className="font-display text-4xl font-bold text-[#c084fc]"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      1
                    </div>
                    <div className="mt-1 text-sm text-[#6b5f80]">Research Paper</div>
                  </div>
                  <div className="pt-6 pl-6">
                    <div
                      className="font-display text-4xl font-bold text-[#c084fc]"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      2
                    </div>
                    <div className="mt-1 text-sm text-[#6b5f80]">Internships</div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/dharanikarthi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-xl border border-[#2d1f42] bg-[#1a1025] p-3 transition-all hover:border-[#c084fc]"
                >
                  <Github className="h-5 w-5 text-[#c084fc]" />
                </a>
                <a
                  href="https://linkedin.com/in/dharani-karthikeyan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-xl border border-[#2d1f42] bg-[#1a1025] p-3 transition-all hover:border-[#c084fc]"
                >
                  <Linkedin className="h-5 w-5 text-[#c084fc]" />
                </a>
                <a
                  href="mailto:dharanik269@gmail.com"
                  className="flex items-center justify-center rounded-xl border border-[#2d1f42] bg-[#1a1025] p-3 transition-all hover:border-[#c084fc]"
                >
                  <Mail className="h-5 w-5 text-[#c084fc]" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2d1f42]" />

      {/* SECTION 2 - WHAT I DO */}
      <section className="bg-[#150d20]">
        <div className="mx-auto max-w-[1200px] px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c084fc] bg-[#1a1025] px-4 py-1 text-xs uppercase tracking-widest text-[#c084fc]">
              ✦ Expertise
            </div>
            <h2
              className="mt-4 font-display text-4xl font-bold text-[#f5f0ff]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Where I Spend My Time
            </h2>
            <div className="mx-auto mt-3 h-1 w-12 bg-[#c084fc]" />
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Layers,
                title: "Frontend & UI/UX",
                desc: "I care deeply about how things look and feel. I build interfaces with React and Next.js that are clean, responsive, and intuitive — paying close attention to layout, typography, spacing, and micro-interactions. Good UI should make sense without explanation.",
              },
              {
                icon: Brain,
                title: "AI & Data",
                desc: "I work at the intersection of machine learning, computer vision, and data analytics. Comfortable with Python-based ML pipelines, OpenCV, LLM APIs, and translating raw data into something meaningful and actionable.",
              },
              {
                icon: Lightbulb,
                title: "Problem Solving",
                desc: "I'm drawn to real-world problem statements — the kind that have messy data, unclear requirements, and no obvious solution. Whether it's a hackathon brief or an open-ended research question, I enjoy breaking the problem down, finding the angle, and building something that actually addresses it.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-2xl border border-[#2d1f42] bg-gradient-to-br from-[#1a1025] to-[#150d20] p-8 transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-[#c084fc] hover:shadow-[0_20px_40px_rgba(192,132,252,0.08)]"
              >
                <div className="inline-flex rounded-xl border border-[rgba(192,132,252,0.2)] bg-[rgba(192,132,252,0.1)] p-3">
                  <item.icon className="h-6 w-6 text-[#c084fc]" />
                </div>
                <h3
                  className="mt-5 font-display text-xl font-bold text-[#f5f0ff]"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-[1.8] text-[#a89bc2]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2d1f42]" />

      {/* LEADERSHIP & ACHIEVEMENTS */}
      <section className="bg-[#0d0a14]">
        <div className="mx-auto max-w-[1200px] px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c084fc] bg-[#1a1025] px-4 py-1 text-xs uppercase tracking-widest text-[#c084fc]">
              ✦ Recognition
            </div>
            <h2
              className="mt-4 font-display text-4xl font-bold text-[#f5f0ff]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Achievements
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 rounded-2xl border border-[#2d1f42] border-l-[4px] border-l-[#c084fc] bg-[#1a1025] p-8"
          >
            <div className="flex items-center gap-3">
              <Trophy className="h-7 w-7 text-[#c084fc]" />
              <h3
                className="font-display text-xl font-bold text-[#f5f0ff]"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Highlights
              </h3>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {[
                "Completed the Technical Pack course on Maiyyam — UI/UX Design, Data Analytics, and Full-Stack (MERN) Web Development",
                "Supervised Machine Learning: Regression and Classification — DeepLearning.AI",
                "Python For Everybody — University of Michigan (Coursera)",
                "Shortlisted for the National Level Internship Program — DxEdge",
                "1st Place — IET App Development, BIS, Convergence'24",
                "IEEE TEMS Website Coordinator",
                "Organized events as part of IEEE Pro-Com Society",
                "2nd Place at Steganos'25 Idea Pitching — Talent Track AI Fitness Platform",
                "Winner — Inter-College Cultural Dance Competition",
                "Member — Disaster Management Club & UBA",
                "School Pupil Leader — Olive Public School",
              ].map((achievement, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 text-[#c084fc]">•</span>
                  <p className="font-sans text-sm leading-relaxed text-[#a89bc2]">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2d1f42]" />

      {/* SECTION 3 - EDUCATION */}
      <section className="bg-[#0d0a14]">
        <div className="mx-auto max-w-[1200px] px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c084fc] bg-[#1a1025] px-4 py-1 text-xs uppercase tracking-widest text-[#c084fc]">
              ✦ Background
            </div>
            <h2
              className="mt-4 font-display text-4xl font-bold text-[#f5f0ff]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Education
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* B.Tech Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-[#2d1f42] border-t-[3px] border-t-[#c084fc] bg-gradient-to-br from-[#1a1025] to-[#150d20] p-8 transition-all hover:shadow-[0_0_30px_rgba(192,132,252,0.1)]"
            >
              <div className="flex items-center justify-between">
                <GraduationCap className="h-6 w-6 text-[#c084fc]" />
                <span className="rounded-full bg-[rgba(192,132,252,0.1)] px-3 py-1 text-xs text-[#c084fc]">
                  2022 – 2026
                </span>
              </div>
              <h3
                className="mt-4 font-display text-xl font-bold text-[#f5f0ff]"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                B.Tech — Computer Science & Business Systems
              </h3>
              <p className="mt-2 font-sans text-sm text-[#c084fc]">
                Sri Sairam Engineering College, Chennai
              </p>
              <div className="mt-6">
                <div className="text-xs uppercase text-[#6b5f80]">CGPA</div>
                <div
                  className="mt-1 font-display text-2xl font-bold text-[#c084fc]"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  8.62 / 10
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Computer Science", "Business Systems", "Pre-Final Year"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#2d1f42] bg-[#150d20] px-3 py-1 text-xs text-[#a89bc2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 12th Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="rounded-2xl border border-[#2d1f42] border-t-[3px] bg-gradient-to-br from-[#1a1025] to-[#150d20] p-8 transition-all hover:shadow-[0_0_30px_rgba(192,132,252,0.1)]"
            >
              <div className="flex items-center justify-between">
                <School className="h-6 w-6 text-[#6b5f80]" />
                <span className="rounded-full bg-[#1a1025] px-3 py-1 text-xs text-[#6b5f80]">
                  2023
                </span>
              </div>
              <h3
                className="mt-4 font-display text-xl font-bold text-[#f5f0ff]"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                12th Science — HSC
              </h3>
              <p className="mt-2 font-sans text-sm text-[#a89bc2]">
                Vels Vidyashram, Chennai
              </p>
              <div className="mt-6">
                <div className="text-xs uppercase text-[#6b5f80]">Score</div>
                <div
                  className="mt-1 font-display text-2xl font-bold text-[#f5f0ff]"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  89.9%
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Science", "HSC Board"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#2d1f42] bg-[#150d20] px-3 py-1 text-xs text-[#a89bc2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2d1f42]" />

      {/* SECTION 5 - CTA */}
      <section className="bg-[#0d0a14]">
        <div className="mx-auto max-w-[1200px] px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#2d1f42] border-t-[3px] border-t-[#c084fc] bg-gradient-to-br from-[#1a1025] to-[#150d20] px-12 py-16 text-center shadow-[0_0_60px_rgba(192,132,252,0.05)]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c084fc] bg-[#1a1025] px-4 py-1 text-xs uppercase tracking-widest text-[#c084fc]">
              ✦ Let's Connect
            </div>
            <h2
              className="mt-6 font-display text-5xl font-black text-[#f5f0ff]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Want to work together?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-[#6b5f80]">
              Open to internships, research collaborations, and interesting problems.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:dharanik269@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-[#c084fc] px-8 py-3 font-bold text-[#0d0a14] transition-all hover:bg-[#e879f9]"
              >
                Email Me <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/dharani-karthikeyan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#c084fc] bg-transparent px-8 py-3 font-bold text-[#c084fc] transition-all hover:bg-[#c084fc] hover:text-[#0d0a14]"
              >
                LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/dharanikarthi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#c084fc] bg-transparent px-8 py-3 font-bold text-[#c084fc] transition-all hover:bg-[#c084fc] hover:text-[#0d0a14]"
              >
                GitHub <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
