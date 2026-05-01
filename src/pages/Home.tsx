import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Server, Brain, Wrench, GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import dharaniPhoto from "@/assets/dharani.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d0a14] text-[#f5f0ff]">
      {/* SECTION 1 - HERO */}
      <section className="bg-[#0d0a14]">
        <div className="mx-auto min-h-screen max-w-[1200px] px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid min-h-[calc(100vh-10rem)] items-center gap-8 sm:gap-10 md:gap-12 md:grid-cols-[60fr_40fr]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pr-0 md:pr-12 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-sans text-sm text-[#6b5f80]"
            >
              👋 Hey, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-[#f5f0ff]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Dharani K
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 sm:mt-6 max-w-[480px] mx-auto md:mx-0 font-sans text-base sm:text-lg leading-relaxed text-[#a89bc2]"
            >
              Computer Science and Business Systems student exploring data analytics and artificial intelligence. Interested in technology-driven problem-solving and data-driven insights. Passionate about learning emerging technologies and building innovative solutions. Seeking opportunities to grow and apply analytical thinking in real-world projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c084fc] px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-[#0d0a14] transition-all hover:scale-105 hover:bg-[#e879f9]"
              >
                See My Work <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://drive.google.com/file/d/1dFcVzK2hB4rJJfXBgxMDtxofktFqbwjv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c084fc] bg-transparent px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-[#c084fc] transition-all hover:bg-[#c084fc] hover:text-[#0d0a14]"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm text-[#6b5f80]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Open to internships & collaborations
            </motion.div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center order-first md:order-last"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer glow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#c084fc] via-[#e879f9] to-[#c084fc] opacity-20 blur-2xl" />
              
              {/* Frame container */}
              <div className="relative rounded-3xl border-2 border-[#2d1f42] bg-gradient-to-br from-[#1a1025] to-[#150d20] p-2 sm:p-3 shadow-[0_0_60px_rgba(192,132,252,0.4)]">
                {/* Inner border accent */}
                <div className="rounded-2xl border border-[#c084fc]/30 p-1.5 sm:p-2">
                  <img
                    src={dharaniPhoto}
                    alt="Dharani K"
                    className="h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px] rounded-2xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2d1f42]" />

      {/* SECTION 3 - SKILLS */}
      <section className="bg-[#150d20]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#f5f0ff]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            What I Work With
          </h2>
          <div className="mt-2 h-1 w-12 bg-[#c084fc]" />
        </motion.div>

        <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-4 md:grid-cols-2">
          {[
            {
              icon: Code,
              title: "Frontend",
              skills: ["React", "Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "UI/UX"],
            },
            {
              icon: Server,
              title: "Backend",
              skills: ["Node.js", "Express.js", "Python", "Flask", "MongoDB", "MySQL"],
            },
            {
              icon: Brain,
              title: "AI & Data",
              skills: ["Machine Learning", "OpenCV", "Groq API", "LLaMA3", "Data Analytics"],
            },
            {
              icon: Wrench,
              title: "Tools",
              skills: ["Git", "Vercel", "Render", "Figma", "WordPress", "Chart.js"],
            },
          ].map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-xl border border-[#2d1f42] bg-[#1a1025] p-4 sm:p-6 transition-all duration-300 hover:border-[#c084fc]"
            >
              <div className="flex items-center gap-3">
                <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#c084fc]" />
                <h3 className="font-display text-base sm:text-lg font-semibold text-[#f5f0ff]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {category.title}
                </h3>
              </div>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#2d1f42] bg-[#150d20] px-3 py-1 text-sm text-[#a89bc2] transition-all hover:border-[#c084fc] hover:text-[#c084fc]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2d1f42]" />

      {/* SECTION 5 - EXPERIENCE */}
      <section className="bg-[#0d0a14]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#f5f0ff]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Where I've Worked
          </h2>
        </motion.div>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
          {[
            {
              role: "Web Developer Intern",
              company: "Rudhra Info Solutions, Chennai",
              duration: "Jun 2025 – Jul 2025",
              bullets: [
                "Built FoodHopper serving 50+ restaurants, cutting development time by 20%",
                "Supported 3 teams improving order processing efficiency by 25%",
              ],
            },
            {
              role: "Website Coordinator",
              company: "IEEE TEMS, Chennai",
              duration: "Oct 2024 – Nov 2025",
              bullets: [
                "Managed WordPress site, increasing user engagement by 35%",
                "Executed 12+ strategic updates over 6 months",
              ],
            },
          ].map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-r-xl border-l-[3px] border-[#c084fc] bg-[#1a1025] p-4 sm:p-6 transition-all hover:bg-[#241832]"
            >
              <h3 className="font-display text-base sm:text-lg font-bold text-[#f5f0ff]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {exp.role}
              </h3>
              <div className="mt-1 font-sans text-sm font-medium text-[#c084fc]">{exp.company}</div>
              <div className="mt-0.5 font-sans text-xs text-[#6b5f80]">{exp.duration}</div>
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="font-sans text-sm text-[#a89bc2]">
                    · {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2d1f42]" />

      {/* SECTION 6 - RESEARCH */}
      <section className="bg-[#150d20]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#2d1f42] border-t-[3px] border-t-[#c084fc] bg-[#1a1025] p-5 sm:p-6 md:p-8"
        >
          <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-center">
            <div className="flex-1">
              <div className="font-sans text-xs text-[#6b5f80]">📄 Published Research · 2024</div>
              <h3 className="mt-2 max-w-[600px] font-display text-base sm:text-lg md:text-xl font-semibold text-[#f5f0ff]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                AORA Model for IoT-Edge Computing Using Hybrid Newton-Raphson and Dolphin Echolocation Algorithm Technique
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["IoT", "Edge Computing", "Optimization"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#c084fc] bg-transparent px-3 py-1 text-sm text-[#c084fc]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <a
                href="https://www.researchgate.net/publication/391994421_Adaptive_Optimization_and_Resource_Allocation_AORA_Model_for_IoT-Edge_Computing_Using_Hybrid_Newton-Raphson_and_Dolphin_Echolocation_Algorithm_HNR-DEA_Technique"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#c084fc] bg-transparent px-5 py-2 text-[#c084fc] transition-all hover:bg-[#c084fc] hover:text-[#0d0a14]"
              >
                View Paper <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#2d1f42]" />

      {/* SECTION 7 - CONTACT CTA */}
      <section className="bg-[#0d0a14]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#2d1f42] bg-[#1a1025] px-5 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#f5f0ff]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Let's Build Something Together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-base sm:text-lg text-[#6b5f80] px-4">
            Open to internships, freelance projects, and research collaborations.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c084fc] px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-[#0d0a14] transition-all hover:scale-105 hover:bg-[#e879f9] w-full sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://linkedin.com/in/dharani-karthikeyan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c084fc] bg-transparent px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-[#c084fc] transition-all hover:bg-[#c084fc] hover:text-[#0d0a14] w-full sm:w-auto"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/dharanikarthi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c084fc] bg-transparent px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-[#c084fc] transition-all hover:bg-[#c084fc] hover:text-[#0d0a14] w-full sm:w-auto"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2d1f42] bg-[#0d0a14] px-4 sm:px-6 md:px-8 py-6">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-display font-bold text-[#c084fc]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            DK
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-[#6b5f80]">
            <Link to="/" className="hover:text-[#f5f0ff]">Home</Link>
            <Link to="/projects" className="hover:text-[#f5f0ff]">Projects</Link>
            <Link to="/experience" className="hover:text-[#f5f0ff]">Experience</Link>
            <Link to="/contact" className="hover:text-[#f5f0ff]">Contact</Link>
          </div>
          <div className="text-sm text-[#6b5f80] text-center">© 2026 Dharani K</div>
        </div>
      </footer>
    </div>
  );
}
