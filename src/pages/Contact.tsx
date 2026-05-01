import { motion } from "framer-motion";
import { Mail, Phone, LinkedinIcon, GithubIcon } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "dharanik269@gmail.com",
    href: "mailto:dharanik269@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9042607881",
    href: "tel:+919042607881",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/dharani-karthikeyan",
    href: "https://linkedin.com/in/dharani-karthikeyan",
    target: "_blank",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/dharanikarthi",
    href: "https://github.com/dharanikarthi",
    target: "_blank",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0d0a14] text-[#f5f0ff] pt-20 sm:pt-24">
      <div className="mx-auto max-w-[700px] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-[#f5f0ff]"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Let's build something{" "}
            <span className="block text-[#c084fc]">together</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 font-sans text-base sm:text-lg text-[#a89bc2] px-4">
            Open for internships, freelance projects, and research collaborations.
          </p>
        </motion.div>

        {/* CONTACT CARDS LIST */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-8 sm:mt-12 flex flex-col gap-3"
        >
          {contactCards.map((card) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.target}
              rel={card.target === "_blank" ? "noreferrer" : undefined}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="flex cursor-pointer items-center gap-3 sm:gap-4 rounded-2xl border border-[#2d1f42] bg-[#1a1025] px-4 sm:px-6 py-4 sm:py-5 transition-all duration-300 hover:border-[#c084fc]"
            >
              {/* Icon Box */}
              <div className="rounded-xl border border-[rgba(192,132,252,0.2)] bg-[rgba(192,132,252,0.1)] p-2.5 sm:p-3 flex-shrink-0">
                <card.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#c084fc]" />
              </div>

              {/* Text Block */}
              <div className="min-w-0 flex-1">
                <div
                  className="font-display text-sm sm:text-base font-semibold text-[#f5f0ff] truncate"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {card.label}
                </div>
                <div className="mt-0.5 font-sans text-xs sm:text-sm text-[#a89bc2] break-all">
                  {card.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* AVAILABILITY BADGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 sm:mt-12 flex items-center justify-center gap-2"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
          <span className="font-sans text-xs sm:text-sm text-[#6b5f80]">
            Open to internships & collaborations
          </span>
        </motion.div>
      </div>
    </div>
  );
}

