import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

// Each contact method: how it's labeled, the actual value shown to the
// user, and the "href" that makes the whole card clickable and useful
// (mailto: opens their email app, tel: opens their phone dialer, etc).
const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "mshan6766@gmail.com",
    href: "mailto:mshan6766@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 342 1184063",
    href: "tel:+923421184063",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammad-zeeshanali",
    href: "https://www.linkedin.com/in/muhammad-zeeshanali/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "shani11221122",
    href: "https://github.com/shani11221122/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
            Let's work together
          </h2>
          <p className="mt-3 text-muted max-w-lg mx-auto">
            Open to backend and full-stack roles, freelance work, or just a
            conversation about a project. Reach out on whichever channel
            is easiest for you.
          </p>
        </motion.div>

        {/* Contact method cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CONTACT_METHODS.map(({ icon: Icon, label, value, href }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-emerald/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-emerald-soft flex items-center justify-center shrink-0">
                <Icon size={20} className="text-emerald" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-muted">{label}</p>
                <p className="text-ink text-sm mt-0.5 truncate">{value}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted group-hover:text-emerald transition-colors shrink-0"
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto max-w-6xl mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p className="font-mono">
          <span className="text-muted">&lt;</span>
          <span className="text-emerald">MZ</span>
          <span className="text-muted">/&gt;</span> Muhammad Zeeshan —{" "}
          {new Date().getFullYear()}
        </p>
        <p>Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </section>
  );
}
