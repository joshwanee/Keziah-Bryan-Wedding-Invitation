import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../../data/weddingData';

export default function GuestList({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white/40 backdrop-blur-2xl text-[#0D3B2E] shadow-2xl border border-white/50"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 250, damping: 28 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#0D3B2E]/20 px-6 py-4 bg-white/20">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#0D3B2E]">Guest List</h2>
                <p className="mt-1 text-sm font-bold text-[#0D3B2E]/90">
                  Browse guests invited to the wedding.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-[#0D3B2E]/20 px-4 py-2 text-sm font-extrabold text-[#0D3B2E] transition hover:bg-[#0D3B2E]/30"
              >
                Close
              </button>
            </div>

            {/* Scrollable Guest Content */}
            <div className="max-h-[75vh] overflow-y-auto px-6 py-6">
              {Object.entries(weddingData.guests).map(([category, names]) => (
                <div key={category} className="mb-6 last:mb-0">
                  {/* Category Title - Made extra bold */}
                  <h3 className="mb-3 text-lg font-extrabold tracking-wide uppercase text-[#0D3B2E]">{category}</h3>
                  
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {names.map((name) => (
                      <div
                        key={name}
                        className="rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm font-bold text-[#0D3B2E] shadow-sm tracking-wide"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}