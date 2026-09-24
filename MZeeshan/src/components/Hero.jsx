import { motion } from "framer-motion";
import { FolderGit2, Mail, ArrowDownToLine, CircleDot } from "lucide-react";

const CV_LINK =
  "https://drive.google.com/open?id=1b6O0Ce9mVjnQkQbOI2t4BOtIrdBYYAn1";

// A small helper "variants" object for Framer Motion.
// Instead of writing initial/animate props on every element, we define
// the animation shape once and reuse it — this keeps the JSX readable.
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* A very faint grid + glow in the background — sits behind everything
          (negative z-index) and never distracts from the text on top of it. */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald/10 blur-[120px] rounded-full" />
      </div>

      {/* "container" holds our two columns. On small screens they stack
          (grid-cols-1); from the lg breakpoint up, they sit side by side. */}
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center"
      >
        {/* ---------- LEFT COLUMN: text + CTAs ---------- */}
        <div>
          {/* Status badge — real information (open to work), not decoration */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm font-mono text-emerald mb-6"
          >
            <CircleDot size={14} className="animate-pulse" />
            Open to backend & full-stack roles
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl sm:text-6xl font-bold text-ink leading-[1.05] tracking-tight"
          >
            Muhammad Zeeshan
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-4 font-mono text-lg text-indigo"
          >
            Full-Stack Developer · Backend Specialist
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-6 text-muted text-lg leading-relaxed max-w-xl"
          >
            I build scalable APIs and backend systems with{" "}
            <span className="text-ink">Node.js</span>,{" "}
            <span className="text-ink">Express</span>, and{" "}
            <span className="text-ink">MongoDB</span> or{" "}
            <span className="text-ink">PostgreSQL</span> — and pair them with
            clean, responsive interfaces in{" "}
            <span className="text-ink">React</span>. Comfortable across the
            whole stack, from database design to deployment.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-emerald text-base font-semibold px-5 py-3 shadow-glow hover:brightness-110 transition"
              style={{ color: "#062318" }}
            >
              <FolderGit2 size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-border text-ink px-5 py-3 font-medium hover:border-indigo/50 hover:text-indigo transition"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href={CV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted px-2 py-3 font-medium hover:text-ink transition"
            >
              <ArrowDownToLine size={18} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* ---------- RIGHT COLUMN: the "status card" ----------
            Instead of a generic hero illustration, this mimics the kind of
            API response / dashboard card Zeeshan actually builds — grounded
            in his own subject matter as a backend developer. */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
          <div className="glass rounded-2xl overflow-hidden shadow-2xl">
            <div className="accent-line h-[3px] w-full" />
            <div className="px-5 py-3 border-b border-border flex items-center justify-between">
              <span className="font-mono text-xs text-muted">
                GET /api/zeeshan
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald">
                <CircleDot size={10} /> 200 OK
              </span>
            </div>
            <pre className="px-5 py-6 text-sm font-mono leading-7 overflow-x-auto">
              <code>
                <span className="text-muted">{"{"}</span>
                {"\n  "}
                <span className="text-indigo">"role"</span>
                <span className="text-muted">: </span>
                <span className="text-emerald">"Full-Stack Developer"</span>
                <span className="text-muted">,</span>
                {"\n  "}
                <span className="text-indigo">"focus"</span>
                <span className="text-muted">: </span>
                <span className="text-emerald">"Backend & APIs"</span>
                <span className="text-muted">,</span>
                {"\n  "}
                <span className="text-indigo">"stack"</span>
                <span className="text-muted">: [</span>
                {"\n    "}
                <span className="text-emerald">"Node.js"</span>
                <span className="text-muted">, </span>
                <span className="text-emerald">"Express"</span>
                <span className="text-muted">,</span>
                {"\n    "}
                <span className="text-emerald">"React"</span>
                <span className="text-muted">, </span>
                <span className="text-emerald">"MongoDB"</span>
                <span className="text-muted">,</span>
                {"\n    "}
                <span className="text-emerald">"PostgreSQL"</span>
                {"\n  "}
                <span className="text-muted">],</span>
                {"\n  "}
                <span className="text-indigo">"basedIn"</span>
                <span className="text-muted">: </span>
                <span className="text-emerald">"Lahore, Pakistan"</span>
                <span className="text-muted">,</span>
                {"\n  "}
                <span className="text-indigo">"status"</span>
                <span className="text-muted">: </span>
                <span className="text-amber">"available"</span>
                {"\n"}
                <span className="text-muted">{"}"}</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
