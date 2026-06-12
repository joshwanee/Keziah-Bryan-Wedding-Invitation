import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import log111 from '../../pictures/log111.png';

const links = [
  ['Story', '#story'],
  ['Details', '#details'],
  ['Gallery', '#gallery'],
  ['Entourage', '#entourage'],
  ['RSVP', '#rsvp'],
  ['FAQ', '#faq'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-3 sm:p-5">
      <nav className="glass relative mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
        {/* Fixed-size logo area so the navbar height does not grow */}
        <a
          href="#home"
          className="relative block h-11 w-24 shrink-0 sm:w-32"
          aria-label="Go to home"
        >
          <img
            src={log111}
            alt="Wedding logo"
            className="
              pointer-events-none
              absolute
              left-0
              top-1/2
              h-20
              w-auto
              -translate-y-1/2
              object-contain
              sm:h-24
            "
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-teal/75 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#rsvp"
          className="pill-button hidden bg-teal text-white hover:bg-jade sm:inline-flex"
        >
          RSVP
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full bg-teal text-white lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-auto mt-3 max-w-7xl rounded-3xl p-4 lg:hidden"
          >
            <div className="grid gap-2">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-teal hover:bg-white/60"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}