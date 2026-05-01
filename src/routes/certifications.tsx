import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ExternalLink, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Dharani K" },
      {
        name: "description",
        content: "Professional certifications and credentials earned through continuous learning.",
      },
    ],
  }),
  component: CertificationsPage,
});

const infosysCertificates = [
  "/certificates/infosys-ai/015cefdd-30f9-4a51-ae0c-69cba2ce2eff.pdf",
  "/certificates/infosys-ai/1032bf2f-825e-42fd-b68d-26dd290f3d15.pdf",
  "/certificates/infosys-ai/1280c578-9e5c-470c-90d1-4c815bf164cd.pdf",
  "/certificates/infosys-ai/3b03c914-6748-4ae5-8b8c-e742372a7b7c.pdf",
  "/certificates/infosys-ai/3f193340-3278-47fd-a09b-12e276d8e3e5.pdf",
  "/certificates/infosys-ai/46375b48-904e-43bf-8717-ccd9b14c08ab.pdf",
  "/certificates/infosys-ai/5ee62881-eaac-4471-bbc2-991b3f082fb4.pdf",
  "/certificates/infosys-ai/6a7baee9-2497-401e-a8c7-b4a91cc09e55.pdf",
  "/certificates/infosys-ai/6fd65f90-b313-4499-87d1-020cdc7e0b6c.pdf",
  "/certificates/infosys-ai/8bec07ff-b405-4fd1-a540-8256c948a886.pdf",
  "/certificates/infosys-ai/b2572d00-efe0-40b6-8d94-3027ea6ea7ec.pdf",
  "/certificates/infosys-ai/bd3ce9de-abd4-4eda-bb6f-29818ba6c0a2.pdf",
  "/certificates/infosys-ai/c8b447b3-0b9d-4799-ad47-ca77f5632fd0.pdf",
  "/certificates/infosys-ai/cbc7cdcc-df89-4bf1-906d-f56b7d4c7b14.pdf",
  "/certificates/infosys-ai/f1adc977-4b79-4df4-833f-c5ef7e4c59db.pdf",
  "/certificates/infosys-ai/f89d81fe-e5f3-482b-be2d-e7ede1bfdbc3.pdf",
];

const certifications = [
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera — DeepLearning.AI",
    date: "Issued 2024",
    tags: ["Regression", "Classification", "Python"],
    certificateUrl: "/certificates/Supervised Machine Learning Regression and Classification.pdf",
    logo: "/logos/Coursera.png",
  },
  {
    name: "Python For Everybody",
    issuer: "Coursera — University of Michigan",
    date: "Issued 2024",
    tags: ["Python", "Programming", "Data"],
    certificateUrl: "/certificates/Python For Everybody.pdf",
    logo: "/logos/Coursera.png",
  },
  {
    name: "Front-End Development: CSS",
    issuer: "Great Learning",
    date: "Issued 2024",
    tags: ["CSS", "Frontend", "Web Design"],
    certificateUrl: "/certificates/Front-End Development CSS.pdf",
    logo: "/logos/Great Learning.png",
  },
  {
    name: "Front-End Development: HTML",
    issuer: "Great Learning",
    date: "Issued 2024",
    tags: ["HTML", "Frontend", "Web Development"],
    certificateUrl: "/certificates/Front-End Development HTML.pdf",
    logo: "/logos/Great Learning.png",
  },
  {
    name: "Solutions Architecture Job Simulation",
    issuer: "AWS",
    date: "Issued 2024",
    tags: ["Cloud", "AWS", "Architecture"],
    certificateUrl: "/certificates/Solutions Architecture Job Simulation.pdf",
    logo: "/logos/AWS.png",
  },
  {
    name: "Programming in Java",
    issuer: "NPTEL",
    date: "Issued 2024",
    tags: ["Java", "Programming", "OOP"],
    certificateUrl: "/certificates/Programming in Java.pdf",
    logo: "/logos/nptel.jpg",
  },
  {
    name: "The Joy of Computing using Python",
    issuer: "NPTEL",
    date: "Issued 2024",
    tags: ["Python", "Programming", "Computing"],
    certificateUrl: "/certificates/The Joy of Computing using Python NPTEL.pdf",
    logo: "/logos/nptel.jpg",
  },
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    date: "Issued 2024",
    tags: ["Cloud", "Computing", "Infrastructure"],
    certificateUrl: "/certificates/Cloud Computing NPTEL.pdf",
    logo: "/logos/nptel.jpg",
  },
  {
    name: "Introduction to Database Management Systems",
    issuer: "NPTEL",
    date: "Issued 2024",
    tags: ["DBMS", "Database", "Management"],
    certificateUrl: "/certificates/Introduction to Database Systems.pdf",
    logo: "/logos/nptel.jpg",
  },
  {
    name: "Artificial Intelligence Courses (15+)",
    issuer: "Infosys Spring Board",
    date: "Issued 2024",
    tags: ["AI", "Machine Learning", "Deep Learning"],
    isMultiple: true,
    logo: "/logos/Infosys.png",
  },
  {
    name: "UI/UX Design",
    issuer: "Maiyyam",
    date: "Issued 2024",
    tags: ["UI/UX", "Design", "User Experience"],
    certificateUrl: "/certificates/Maiyyam UIUX.pdf",
    logo: "/logos/Maiyyam.png",
  },
  {
    name: "Full Stack (MERN) Web/App Development",
    issuer: "Maiyyam",
    date: "Issued 2024",
    tags: ["MERN", "Full Stack", "Web Development"],
    certificateUrl: "/certificates/Full Stack Maiyyam.pdf",
    logo: "/logos/Maiyyam.png",
  },
  {
    name: "Data Analytics",
    issuer: "Maiyyam",
    date: "Issued 2024",
    tags: ["Data Analytics", "Analysis", "Insights"],
    certificateUrl: "/certificates/Maiyyam Data Analytics.pdf",
    logo: "/logos/Maiyyam.png",
  },
];

function CertificationsPage() {
  const [showInfosysModal, setShowInfosysModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0a14] text-[#f5f0ff]">
      {/* PAGE HERO */}
      <section className="bg-[#0d0a14]">
        <div className="mx-auto max-w-[1200px] px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1
              className="font-display text-5xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              <span className="text-[#a89bc2]">Licenses & </span>
              <span className="text-[#c084fc]">Certifications</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-[#6b5f80]">
              Professional certifications and credentials earned through continuous learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS LIST */}
      <section className="bg-[#0d0a14]">
        <div className="mx-auto max-w-[1200px] px-8 pb-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#2d1f42] bg-[#1a1025] px-8 py-6 transition-all duration-300 hover:border-[#c084fc] md:flex-row md:items-center"
              >
                {/* Left Side */}
                <div className="flex flex-1 items-center gap-5">
                  {/* Logo Box */}
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl border border-[#2d1f42] bg-[#150d20] p-3">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Text Block */}
                  <div className="flex-1">
                    <h3
                      className="font-display text-base font-semibold text-[#f5f0ff]"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {cert.name}
                    </h3>
                    <p className="mt-0.5 font-sans text-sm text-[#c084fc]">{cert.issuer}</p>
                    <div className="mt-1 flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-[#6b5f80]" />
                      <span className="font-sans text-xs text-[#6b5f80]">{cert.date}</span>
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#2d1f42] bg-[#150d20] px-3 py-1 text-xs text-[#a89bc2]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                {cert.isMultiple ? (
                  <button
                    onClick={() => setShowInfosysModal(true)}
                    className="flex items-center gap-2 rounded-lg border border-[#2d1f42] bg-transparent px-4 py-2 text-sm text-[#a89bc2] transition-all hover:border-[#c084fc] hover:text-[#c084fc]"
                  >
                    Show Credentials
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-[#2d1f42] bg-transparent px-4 py-2 text-sm text-[#a89bc2] transition-all hover:border-[#c084fc] hover:text-[#c084fc]"
                  >
                    Show Credential
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infosys Certificates Modal */}
      <AnimatePresence>
        {showInfosysModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowInfosysModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#2d1f42] bg-[#0d0a14] p-8"
            >
              <button
                onClick={() => setShowInfosysModal(false)}
                className="absolute right-4 top-4 rounded-lg border border-[#2d1f42] bg-[#1a1025] p-2 text-[#c084fc] transition-all hover:border-[#c084fc]"
              >
                <X className="h-5 w-5" />
              </button>

              <h2
                className="font-display text-3xl font-bold text-[#f5f0ff]"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Infosys Spring Board AI Certificates (16)
              </h2>
              <p className="mt-2 text-sm text-[#6b5f80]">
                Click on any certificate to view it in a new tab
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {infosysCertificates.map((certUrl, index) => (
                  <a
                    key={certUrl}
                    href={certUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-[#2d1f42] bg-[#1a1025] p-4 transition-all hover:border-[#c084fc]"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#c084fc]/10 text-[#c084fc]">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[#f5f0ff]">
                        AI Certificate {index + 1}
                      </div>
                      <div className="text-xs text-[#6b5f80]">Infosys Spring Board</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-[#c084fc]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
