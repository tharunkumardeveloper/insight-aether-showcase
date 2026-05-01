import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
                DK
              </div>
              <span className="font-display text-base font-medium tracking-wider">
                DHARANI K
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Computer Science student exploring data analytics, AI, and meaningful
              software.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/experience" className="hover:text-foreground">Experience</Link></li>
              <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
              <li><Link to="/skills" className="hover:text-foreground">Skills</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:dharanik269@gmail.com" className="hover:text-foreground">
                  dharanik269@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Chennai, India
              </li>
              <li className="flex items-center gap-3 pt-1">
                <a
                  href="https://linkedin.com/in/dharani-karthikeyan"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-white/5 hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/dharanikarthi"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-white/5 hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Dharani Karthikeyan. Crafted with care.</p>
          <p>Designed for curiosity. Built with intent.</p>
        </div>
      </div>
    </footer>
  );
}
