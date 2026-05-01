import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
    images: [
      "/experience/rudhra-1.jpg",
      "/experience/rudhra-2.jpg"
    ]
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
    images: [
      "/experience/ieee-1.jpg",
      "/experience/ieee-2.jpg"
    ]
  },
];

function ExperiencePage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");

  const openLightbox = (images: string[], index: number, title: string) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setCurrentTitle(title);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentImages.length]);

  return (
    <>
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
              {/* Center timeline rail */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#2d1f42]" />
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-[#c084fc]"
              />

              <div className="space-y-24">
                {TIMELINE.map((item, i) => {
                  const isRight = i % 2 === 0;
                  return (
                    <Reveal key={item.role} delay={i * 0.05}>
                      <div className="relative">
                        {/* Date badge - centered on line */}
                        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-12">
                          <div className="inline-flex items-center gap-2 rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 px-4 py-1.5 text-xs font-medium text-[#c084fc]">
                            <Calendar className="h-3 w-3" />
                            {item.when}
                          </div>
                        </div>

                        {/* 3-column grid: [images/card] [center line] [card/images] */}
                        <div className="grid grid-cols-[1fr_60px_1fr] items-center gap-0">
                          {/* LEFT COLUMN */}
                          <div className={`flex ${isRight ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                            {isRight ? (
                              // Entry 1: Images on LEFT
                              item.images && item.images.length > 0 && (
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.6, delay: 0.2 }}
                                  className="flex w-full max-w-[380px] flex-col gap-3"
                                >
                                  {item.images.map((img, idx) => (
                                    <motion.img
                                      key={idx}
                                      src={img}
                                      alt={`${item.role} ${idx + 1}`}
                                      onClick={() => openLightbox(item.images!, idx, item.role)}
                                      className="h-[200px] w-full cursor-pointer rounded-[14px] border border-[#2d1f42] object-cover transition-all duration-300 hover:border-[#c084fc]"
                                      whileHover={{ scale: 1.02 }}
                                    />
                                  ))}
                                </motion.div>
                              )
                            ) : (
                              // Entry 2: Card on LEFT
                              <div className="w-full max-w-[420px]">
                                <div className="group relative overflow-hidden rounded-3xl border border-[#2d1f42] bg-[#1a1025]/60 p-6 shadow-card backdrop-blur transition-smooth hover:-translate-y-1 hover:border-[#c084fc]/40 hover:shadow-glow sm:p-8">
                                  <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />
                                  <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                                      <Briefcase className="h-4 w-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                      <h3 className="font-display text-xl font-semibold text-[#f5f0ff]">
                                        {item.role}
                                      </h3>
                                      <div className="mt-1 text-sm text-[#c084fc]">
                                        {item.org}
                                      </div>
                                      <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-[#6b5f80]">
                                        <MapPin className="h-3 w-3" />
                                        {item.place}
                                      </div>
                                    </div>
                                  </div>

                                  <ul className="mt-5 space-y-2.5">
                                    {item.bullets.map((b) => (
                                      <li
                                        key={b}
                                        className="flex gap-3 text-sm leading-relaxed text-[#a89bc2]"
                                      >
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c084fc]" />
                                        {b}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* CENTER COLUMN - Timeline dot */}
                          <div className="relative flex items-center justify-center">
                            <div className="h-3 w-3 rounded-full border-2 border-[#0d0a14] bg-[#c084fc] shadow-[0_0_20px_rgba(192,132,252,0.6)]">
                              <div className="absolute inset-0 animate-ping rounded-full bg-[#c084fc]/60" />
                            </div>
                          </div>

                          {/* RIGHT COLUMN */}
                          <div className={`flex ${isRight ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                            {isRight ? (
                              // Entry 1: Card on RIGHT
                              <div className="w-full max-w-[420px]">
                                <div className="group relative overflow-hidden rounded-3xl border border-[#2d1f42] bg-[#1a1025]/60 p-6 shadow-card backdrop-blur transition-smooth hover:-translate-y-1 hover:border-[#c084fc]/40 hover:shadow-glow sm:p-8">
                                  <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-primary opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />
                                  <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                                      <Briefcase className="h-4 w-4 text-primary-foreground" />
                                    </div>
                                    <div>
                                      <h3 className="font-display text-xl font-semibold text-[#f5f0ff]">
                                        {item.role}
                                      </h3>
                                      <div className="mt-1 text-sm text-[#c084fc]">
                                        {item.org}
                                      </div>
                                      <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-[#6b5f80]">
                                        <MapPin className="h-3 w-3" />
                                        {item.place}
                                      </div>
                                    </div>
                                  </div>

                                  <ul className="mt-5 space-y-2.5">
                                    {item.bullets.map((b) => (
                                      <li
                                        key={b}
                                        className="flex gap-3 text-sm leading-relaxed text-[#a89bc2]"
                                      >
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c084fc]" />
                                        {b}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              // Entry 2: Images on RIGHT
                              item.images && item.images.length > 0 && (
                                <motion.div
                                  initial={{ opacity: 0, x: 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.6, delay: 0.2 }}
                                  className="flex w-full max-w-[380px] flex-col gap-3"
                                >
                                  {item.images.map((img, idx) => (
                                    <motion.img
                                      key={idx}
                                      src={img}
                                      alt={`${item.role} ${idx + 1}`}
                                      onClick={() => openLightbox(item.images!, idx, item.role)}
                                      className="h-[200px] w-full cursor-pointer rounded-[14px] border border-[#2d1f42] object-cover transition-all duration-300 hover:border-[#c084fc]"
                                      whileHover={{ scale: 1.02 }}
                                    />
                                  ))}
                                </motion.div>
                              )
                            )}
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

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.92)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#1a1025",
                border: "1px solid #2d1f42",
                color: "#f5f0ff",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 200ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c084fc";
                e.currentTarget.style.color = "#c084fc";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2d1f42";
                e.currentTarget.style.color = "#f5f0ff";
              }}
            >
              ✕
            </button>

            {/* Left Arrow */}
            {currentImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                style={{
                  position: "absolute",
                  left: "20px",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(192,132,252,0.1)",
                  border: "1px solid #c084fc",
                  color: "#c084fc",
                  fontSize: "24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 200ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(192,132,252,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(192,132,252,0.1)";
                }}
              >
                ‹
              </button>
            )}

            {/* Image */}
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              src={currentImages[currentIndex]}
              alt={`${currentTitle} ${currentIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "900px",
                maxHeight: "80vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />

            {/* Right Arrow */}
            {currentImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                style={{
                  position: "absolute",
                  right: "20px",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(192,132,252,0.1)",
                  border: "1px solid #c084fc",
                  color: "#c084fc",
                  fontSize: "24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 200ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(192,132,252,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(192,132,252,0.1)";
                }}
              >
                ›
              </button>
            )}

            {/* Counter */}
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.6)",
                color: "#f5f0ff",
                fontSize: "14px",
                padding: "8px 16px",
                borderRadius: "999px",
                pointerEvents: "none",
              }}
            >
              {currentIndex + 1} / {currentImages.length} — {currentTitle}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
