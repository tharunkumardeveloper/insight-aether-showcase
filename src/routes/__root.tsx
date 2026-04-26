import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CursorGlow } from "../components/CursorGlow";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gradient-primary">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dharani K — Computer Science · AI · Data Analytics" },
      {
        name: "description",
        content:
          "Portfolio of Dharani Karthikeyan — CS student exploring AI, data analytics, and full-stack development. Projects, experience, and achievements.",
      },
      { name: "author", content: "Dharani Karthikeyan" },
      { property: "og:title", content: "Dharani K — Computer Science · AI · Data Analytics" },
      {
        property: "og:description",
        content:
          "CS student exploring AI, data analytics, and full-stack development. Featured projects: Urban Breeze, TalentTrack, FoodHopper.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dharani K — Computer Science · AI · Data Analytics" },
      { name: "description", content: "Dharani's Digital Canvas is a professional portfolio website showcasing technical skills and projects." },
      { property: "og:description", content: "Dharani's Digital Canvas is a professional portfolio website showcasing technical skills and projects." },
      { name: "twitter:description", content: "Dharani's Digital Canvas is a professional portfolio website showcasing technical skills and projects." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/48c6052d-e928-4f2e-8244-b4530ab0cc4b/id-preview-37daef64--c920e9b1-5301-44c0-b012-c5b2448d5c5d.lovable.app-1777181930772.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/48c6052d-e928-4f2e-8244-b4530ab0cc4b/id-preview-37daef64--c920e9b1-5301-44c0-b012-c5b2448d5c5d.lovable.app-1777181930772.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
