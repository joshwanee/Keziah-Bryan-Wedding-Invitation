import { motion } from 'framer-motion';
import { weddingData } from '../../data/weddingData';

export default function Entourage() {
  return (
    <section id="entourage" className="bg-ivory">
      <div className="section-shell">
        <p className="eyebrow">With love and honor</p>

        <h2 className="section-title">Wedding Entourage</h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {Object.entries(weddingData.entourage).map(
            ([role, names], i) => (
              <motion.article
                key={role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="glass rounded-2xl p-4 text-center transition-transform duration-300 hover:scale-105 sm:p-5 sm:rounded-3xl"
              >
                <h3 className="font-display text-lg font-semibold tracking-wide text-white sm:text-2xl">
                  {role}
                </h3>

                <div className="mx-auto my-3 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:my-4 sm:w-16" />

                <div className="space-y-1.5 sm:space-y-2">
                  {names.map((n, j) => (
                    <p
                      key={j}
                      className="text-sm font-normal text-white sm:text-base"
                    >
                      {n}
                    </p>
                  ))}
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}