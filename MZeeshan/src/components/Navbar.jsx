import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowDownToLine } from "lucide-react";

// This array drives both the desktop links and the mobile menu links,
// so we only have to edit the list in one place when a section changes.
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Replace this with your real Google Drive CV link.
const CV_LINK =
  "https://drive.google.com/open?id=1b6O0Ce9mVjnQkQbOI2t4BOtIrdBYYAn1";

export default function Navbar() {
  // "scrolled" flips to true once the page scrolls past 8px.
  // We use it to make the navbar's glass background slightly more opaque
  // once there is content behind it — a small, purposeful detail.
  const [scrolled, setScrolled] = useState(false);

  // "open" controls whether the mobile menu panel is visible.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // This function runs every time the user scrolls the page.
    const handleScroll = () => setScrolled(window.scrollY > 8);

    // Attach the listener when the component mounts...
    window.addEventListener("scroll", handleScroll);

    // ...and remove it when the component unmounts, so we don't leak memory.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // empty array = "run this setup only once"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo mark: a bracket motif, since the whole site leans on a
            developer/API visual language rather than a generic wordmark. */}
        <a
          href="#top"
          className="font-mono text-lg font-semibold text-ink tracking-tight"
        >
          <span className="text-muted">&lt;</span>
          <span className="text-emerald">MZ</span>
          <span className="text-muted">/&gt;</span>
        </a>

        {/* Desktop links — hidden on small screens (md:flex kicks in at 768px) */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-ink border border-border rounded-lg px-4 py-2 hover:border-emerald/50 hover:text-emerald transition-colors"
          >
            <ArrowDownToLine size={16} />
            Resume
          </a>
        </div>

        {/* Hamburger button — only visible below md breakpoint */}
        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* AnimatePresence lets Framer Motion animate a component OUT
          before removing it from the page, instead of it just vanishing. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass border-t border-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 text-muted">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base hover:text-ink transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald font-medium"
                >
                  <ArrowDownToLine size={16} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
