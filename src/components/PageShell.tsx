import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative pt-20 sm:pt-24 md:pt-28"
    >
      {children}
    </motion.main>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-2xl text-center px-4" : "max-w-3xl px-4 sm:px-0"}>
        {eyebrow && (
          <div
            className={`mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-glow ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_8px_oklch(0.72_0.2_305)]" />
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
