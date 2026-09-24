import { motion } from "framer-motion";
import { ExternalLink, Github, Activity } from "lucide-react";

// One object per project. "image: null" (Monitoring Dashboard) means we
// don't have a screenshot for it yet — the card falls back to an icon
// tile instead of a broken image.
const PROJECTS = [
  {
    title: "Billing & Sales Management System",
    description:
      "A backend-driven billing platform for tracking sales, invoices, and payments, built on Express and PostgreSQL.",
    image: "/assets/projects/billing-saas.png",
    tech: ["Node.js", "Express", "PostgreSQL"],
    link: "https://billing-and-sales-management-system.vercel.app/",
  },
  {
    title: "API Gateway Protection",
    description:
      "A security-focused API key management system — generate, secure, and monitor API keys with request-level protection.",
    image: "/assets/projects/api-gateway-landing.png",
    tech: ["Node.js", "Express", "Security Middleware"],
    link: "https://api-gateway-protection.vercel.app/",
  },
  {
    title: "System Health & Incident Monitoring Dashboard",
    description:
      "A production-style monitoring system with scheduled health checks, live incident tracking, and email alerts.",
    image: null,
    tech: ["MERN", "PostgreSQL", "Redis"],
    link: "https://system-health-incident-monitoring-d.vercel.app/",
  },
  {
    title: "ElectroHub — E-Commerce Website",
    description:
      "A full electronics storefront with product browsing, cart, and checkout, deployed as a decoupled frontend and API.",
    image: "/assets/projects/electrohub-hero.png",
    tech: ["React", "Vite", "Node.js", "Express"],
    link: "https://ecommerce-website-project-h3qs.vercel.app/",
  },
];

const GITHUB_ALL_PROJECTS = "https://tinyurl.com/eyax3ydz";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold text-ink"
          >
            Featured Projects
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            href={GITHUB_ALL_PROJECTS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-ink transition"
          >
            <Github size={16} />
            All projects on GitHub
          </motion.a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:border-emerald/40 transition-colors"
            >
              {/* Thumbnail area */}
              <div className="aspect-video bg-surface2 overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                  />
                ) : (
                  // Fallback tile for the project with no screenshot yet
                  <div className="w-full h-full flex items-center justify-center">
                    <Activity size={40} className="text-indigo/50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={18}
                    className="text-muted group-hover:text-emerald transition-colors shrink-0 mt-1"
                  />
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-indigo bg-indigo-soft rounded-md px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
