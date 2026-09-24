import { motion } from "framer-motion";
import { Briefcase, ShieldCheck, Database, Activity, FileCheck2 } from "lucide-react";

// Each entry in this timeline is one internship. "highlights" becomes a
// bullet list, and "icon" is just used as a small visual marker per bullet
// so the list doesn't read as a plain wall of text.
const EXPERIENCE = [
  {
    role: "Backend Developer Intern",
    company: "CodeAlpha",
    period: "Internship",
    summary:
      "Worked on backend features for real client-style projects — building REST endpoints, connecting them to a database, and fixing bugs reported during testing.",
    highlights: [
      { icon: Briefcase, text: "REST API development with Node.js & Express" },
      { icon: ShieldCheck, text: "Implemented authentication flows for protected routes" },
      { icon: Database, text: "Worked with database models and queries" },
    ],
    certificate: null,
  },
  {
    role: "Backend Development Intern",
    company: "NeuroFive Solutions",
    period: "July 2026 Cohort",
    summary:
      "Completed a structured Node.js backend curriculum — building a JWT-authenticated API with role-based access, then extending it independently with monitoring and optimization work.",
    highlights: [
      { icon: Database, text: "Optimized MongoDB aggregation pipelines for performance" },
      { icon: ShieldCheck, text: "Built authentication & role-based access control (RBAC)" },
      { icon: FileCheck2, text: "Wrote automated tests and handled centralized error handling" },
      { icon: Activity, text: "Added system health monitoring to a deployed API" },
    ],
    certificate: "/assets/certificates/neurofive-certificate.png",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl font-bold text-ink"
        >
          Experience
        </motion.h2>

        {/* This is a real chronological timeline, so a connecting line +
            dots is meaningful here (not decoration for its own sake). */}
        <div className="mt-12 relative">
          {/* The vertical line running behind all the dots */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {EXPERIENCE.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* The dot marking this point on the timeline */}
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full glass flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald" />
                </div>

                <div className="glass rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-indigo font-mono text-sm mt-1">
                    {job.company}
                  </p>

                  <p className="mt-4 text-muted leading-relaxed">
                    {job.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map(({ icon: Icon, text }) => (
                      <li
                        key={text}
                        className="flex items-start gap-2.5 text-sm text-muted"
                      >
                        <Icon size={16} className="text-emerald mt-0.5 shrink-0" />
                        {text}
                      </li>
                    ))}
                  </ul>

                  {/* Only NeuroFive has a certificate to show */}
                  {job.certificate && (
                    <a
                      href={job.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald border border-emerald/30 rounded-lg px-4 py-2 hover:bg-emerald-soft transition"
                    >
                      <FileCheck2 size={16} />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
