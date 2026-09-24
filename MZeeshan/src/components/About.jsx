import { motion } from "framer-motion";
import { GraduationCap, Target, MapPin, Sparkles } from "lucide-react";

// Small key/value facts shown next to the bio — styled like a config
// panel rather than a plain paragraph, matching the dashboard language
// we started in the Hero section.
const FACTS = [
  { icon: GraduationCap, label: "Education", value: "BSIT, University of Sargodha" },
  { icon: MapPin, label: "Based in", value: "Lahore, Pakistan" },
  { icon: Sparkles, label: "Focus", value: "Backend architecture & scalable APIs" },
  { icon: Target, label: "Goal", value: "Professional Backend / Full-Stack Engineer" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section heading — kept short, no decorative "eyebrow" label above it */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl font-bold text-ink"
        >
          About Me
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          {/* ---------- LEFT: photo ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-3 max-w-sm mx-auto lg:mx-0">
              <div className="accent-line h-[3px] w-full rounded-full mb-3" />
              <img
                src="/assets/profile/profile.jpg"
                alt="Muhammad Zeeshan"
                className="rounded-xl w-full h-auto object-cover grayscale-[15%]"
              />
            </div>
          </motion.div>

          {/* ---------- RIGHT: bio text + facts ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted text-lg leading-relaxed">
              I'm a Full-Stack Developer who genuinely enjoys the backend
              side of building software — designing clean REST APIs,
              writing efficient database aggregation pipelines, and making
              sure a system stays fast and reliable as it grows. I hold a
              BSIT degree from the University of Sargodha, and I've spent
              my recent internships building authentication systems,
              monitoring dashboards, and secure API infrastructure.
            </p>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              On the frontend, I work comfortably with React and Next.js to
              turn those backend systems into interfaces people actually
              enjoy using. My goal is to keep growing as a backend-focused
              full-stack engineer — someone who can own a feature from the
              database schema all the way to the deployed UI.
            </p>

            {/* Quick-facts grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FACTS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="glass rounded-xl px-4 py-3 flex items-start gap-3"
                >
                  <Icon size={18} className="text-emerald mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-xs text-muted">{label}</p>
                    <p className="text-ink text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
