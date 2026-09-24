import { motion } from "framer-motion";
import { Server, Database, MonitorSmartphone, Boxes } from "lucide-react";

// Each skill can optionally be "primary: true" — primary skills get a
// filled emerald pill, the rest get a plain outlined pill. This creates
// visual hierarchy instead of one flat wall of identical tags.
const BACKEND_SKILLS = [
  { name: "Node.js", primary: true },
  { name: "Express.js", primary: true },
  { name: "REST APIs", primary: true },
  { name: "JWT Auth", primary: false },
  { name: "RBAC", primary: false },
  { name: "Python", primary: false },
];

const GROUPS = [
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend",
    items: ["JavaScript", "React.js", "Next.js"],
  },
  {
    icon: Boxes,
    title: "DevOps / Tools",
    items: ["Docker", "Git & GitHub", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl font-bold text-ink"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mt-3 text-muted max-w-xl"
        >
          Backend is where I spend most of my time — everything else
          supports that focus.
        </motion.p>

        {/* Backend card — full width, since it's the specialty.
            This is a deliberate size difference, not a uniform 4-card grid. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 glass rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-soft flex items-center justify-center">
              <Server size={20} className="text-emerald" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Backend
            </h3>
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {BACKEND_SKILLS.map((skill) => (
              <span
                key={skill.name}
                className={
                  skill.primary
                    ? "px-3.5 py-1.5 rounded-lg bg-emerald text-sm font-medium"
                    : "px-3.5 py-1.5 rounded-lg border border-border text-sm text-muted"
                }
                style={skill.primary ? { color: "#062318" } : undefined}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Three supporting categories below */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {GROUPS.map(({ icon: Icon, title, items }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-soft flex items-center justify-center">
                  <Icon size={18} className="text-indigo" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-muted text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
