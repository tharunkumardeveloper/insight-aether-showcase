import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Check } from "lucide-react";
import { PageShell, Reveal } from "@/components/PageShell";
import { MagneticButton } from "@/components/MagneticButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dharani K" },
      {
        name: "description",
        content:
          "Reach out for opportunities, collaborations, or a friendly chat about AI, data, and software.",
      },
      { property: "og:title", content: "Contact — Dharani K" },
      {
        property: "og:description",
        content:
          "Email, LinkedIn, GitHub, and a direct contact form. Open to internships and collaborations.",
      },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "dharanik269@gmail.com",
    href: "mailto:dharanik269@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90426 07881",
    href: "tel:+919042607881",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "dharani-karthikeyan",
    href: "https://linkedin.com/in/dharani-karthikeyan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "dharanikarthi",
    href: "https://github.com/dharanikarthi",
  },
];

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:dharanik269@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 animated-mesh opacity-50" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />

        <div className="mx-auto max-w-6xl px-6 py-12">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-glow">
                Contact
              </div>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Let's build<br />
                <span className="text-shine font-serif italic">something good.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                Open to internships, research collaborations, and meaningful side
                projects. I usually reply within a day.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* Channels */}
            <Reveal>
              <div className="space-y-3">
                {CHANNELS.map((c, i) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur transition-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                      <c.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="truncate text-sm font-medium text-foreground">
                        {c.value}
                      </div>
                    </div>
                  </motion.a>
                ))}

                <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                    <MapPin className="h-5 w-5 text-primary-glow" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Based in
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      Chennai, India
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-elegant"
              >
                <div className="space-y-5">
                  <Field
                    label="Your name"
                    value={name}
                    onChange={setName}
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                  />
                  <Field
                    label="Message"
                    value={message}
                    onChange={setMessage}
                    textarea
                    required
                  />

                  <MagneticButton>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                    >
                      {sent ? (
                        <>
                          <Check className="h-4 w-4" />
                          Email opened
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                          Send message
                        </>
                      )}
                    </button>
                  </MagneticButton>

                  <p className="text-xs text-muted-foreground">
                    This opens your email client with the message ready to send.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const inputClasses =
    "peer w-full rounded-xl border border-border bg-background/60 px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

  return (
    <label className="relative block">
      <span
        className={`pointer-events-none absolute left-4 z-10 transition-all ${
          active
            ? "top-2 text-[10px] font-medium uppercase tracking-wider text-primary-glow"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          rows={5}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={inputClasses}
        />
      )}
    </label>
  );
}
