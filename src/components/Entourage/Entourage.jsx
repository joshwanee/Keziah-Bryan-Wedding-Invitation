import { motion } from 'framer-motion';
import { weddingData } from '../../data/weddingData';

export default function Entourage() {
  return (
    <section id="entourage" className="bg-ivory">
      <div className="section-shell">
        <p className="eyebrow">With love and honor</p>

        <h2 className="section-title">Wedding Entourage</h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3">
          {Object.entries(weddingData.entourage).map(([role, names], i) => {
            // Combine Ninongs and Ninangs into one two-column block
            if (role === 'Ninongs') {
              const ninangs = weddingData.entourage.Ninangs || [];
              return (
                <motion.article
                  key="ninong-ninang"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08 }}
                  className={`w-full p-0 text-center transition-transform duration-300 hover:scale-105 ` +
                    `sm:rounded-2xl sm:p-5 sm:border sm:border-white/55 sm:bg-white/45 sm:backdrop-blur-xl sm:shadow-2xl`}
                >
                  <div className="grid grid-cols-2 gap-4 items-start">
                    <div className="px-2">
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal text-center sm:text-2xl sm:text-white">Ninongs</h3>
                      <div className="mx-auto my-2 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:my-4 sm:w-16" />
                      <div className="space-y-1 text-center">
                        {names.map((n, j) => (
                          <p key={j} className="text-xs font-normal text-teal/90 sm:text-base sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>

                    <div className="px-2">
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal text-center sm:text-2xl sm:text-white">Ninangs</h3>
                      <div className="mx-auto my-2 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:my-4 sm:w-16" />
                      <div className="space-y-1 text-center">
                        {ninangs.map((n, j) => (
                          <p key={j} className="text-xs font-normal text-teal/90 sm:text-base sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            // Combine Best Man + Maid of Honor
            if (role === 'Best Man') {
              const maid = weddingData.entourage['Maid of Honor'] || [];
              return (
                <motion.article
                  key="best-maid"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08 }}
                  className={`w-full p-0 text-center transition-transform duration-300 hover:scale-105 ` +
                    `sm:rounded-2xl sm:p-5 sm:border sm:border-white/55 sm:bg-white/45 sm:backdrop-blur-xl sm:shadow-2xl`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal text-center sm:text-2xl sm:text-white">Best Man</h3>
                      <div className="mx-auto my-2 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:my-4 sm:w-16" />
                      <div className="space-y-1 text-center">
                        {names.map((n, j) => (
                          <p key={j} className="text-sm font-normal text-teal/95 sm:text-base sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal text-center sm:text-2xl sm:text-white">Maid of Honor</h3>
                      <div className="mx-auto my-2 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:my-4 sm:w-16" />
                      <div className="space-y-1 text-center">
                        {maid.map((n, j) => (
                          <p key={j} className="text-sm font-normal text-teal/95 sm:text-base sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            // Combine Groomsmen + Bridesmaids
            if (role === 'Groomsmen') {
              const brides = weddingData.entourage['Bridesmaids'] || [];
              return (
                <motion.article
                  key="groom-bride-list"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08 }}
                  className={`w-full p-0 text-center transition-transform duration-300 hover:scale-105 ` +
                    `sm:rounded-2xl sm:p-5 sm:border sm:border-white/55 sm:bg-white/45 sm:backdrop-blur-xl sm:shadow-2xl`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal text-center sm:text-2xl sm:text-white">Groomsmen</h3>
                      <div className="mx-auto my-2 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:my-4 sm:w-16" />
                      <div className="space-y-1 text-center">
                        {names.map((n, j) => (
                          <p key={j} className="text-sm font-normal text-teal/95 sm:text-base sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal text-center sm:text-2xl sm:text-white">Bridesmaids</h3>
                      <div className="mx-auto my-2 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:my-4 sm:w-16" />
                      <div className="space-y-1 text-center">
                        {brides.map((n, j) => (
                          <p key={j} className="text-sm font-normal text-teal/95 sm:text-base sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            // Combine sponsor trio into one row
            if (role === 'Candle Sponsors') {
              const veil = weddingData.entourage['Veil Sponsors'] || [];
              const cord = weddingData.entourage['Cord Sponsors'] || [];
              return (
                <motion.article
                  key="sponsors-trio"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08 }}
                  className={`w-full p-0 text-center transition-transform duration-300 hover:scale-105 ` +
                    `sm:rounded-2xl sm:p-5 sm:border sm:border-white/55 sm:bg-white/45 sm:backdrop-blur-xl sm:shadow-2xl`}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal sm:text-white">Candle Sponsors</h3>
                      <div className="space-y-1 mt-2">
                        {names.map((n, j) => (
                          <p key={j} className="text-sm text-teal/95 sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal sm:text-white">Veil Sponsors</h3>
                      <div className="space-y-1 mt-2">
                        {veil.map((n, j) => (
                          <p key={j} className="text-sm text-teal/95 sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal sm:text-white">Cord Sponsors</h3>
                      <div className="space-y-1 mt-2">
                        {cord.map((n, j) => (
                          <p key={j} className="text-sm text-teal/95 sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            // Combine bearers trio
            if (role === 'Bible Bearers') {
              const ring = weddingData.entourage['Ring Bearers'] || [];
              const coin = weddingData.entourage['Coin Bearers'] || [];
              return (
                <motion.article
                  key="bearers-trio"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08 }}
                  className={`w-full p-0 text-center transition-transform duration-300 hover:scale-105 ` +
                    `sm:rounded-2xl sm:p-5 sm:border sm:border-white/55 sm:bg-white/45 sm:backdrop-blur-xl sm:shadow-2xl`}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal sm:text-white">Bible Bearers</h3>
                      <div className="space-y-1 mt-2">
                        {names.map((n, j) => (
                          <p key={j} className="text-sm text-teal/95 sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal sm:text-white">Ring Bearers</h3>
                      <div className="space-y-1 mt-2">
                        {ring.map((n, j) => (
                          <p key={j} className="text-sm text-teal/95 sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal sm:text-white">Coin Bearers</h3>
                      <div className="space-y-1 mt-2">
                        {coin.map((n, j) => (
                          <p key={j} className="text-sm text-teal/95 sm:text-white">{n}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            // Skip entries that have been merged above
            if (['Ninangs', 'Maid of Honor', 'Bridesmaids', 'Veil Sponsors', 'Cord Sponsors', 'Ring Bearers', 'Coin Bearers'].includes(role)) {
              return null;
            }

            const isParents = role === 'Parents of the Groom' || role === 'Parents of the Bride';

            return (
              <motion.article
                key={role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className={`w-full p-0 text-center transition-transform duration-300 hover:scale-105 ` +
                  `sm:rounded-2xl sm:p-5 sm:border sm:border-white/55 sm:bg-white/45 sm:backdrop-blur-xl sm:shadow-2xl`}
              >
                <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-teal sm:text-2xl sm:text-white">
                  {role}
                </h3>

                <div className="mx-auto my-2 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:my-4 sm:w-16" />

                {/* Parents: each name on its own line (full-width on mobile) */}
                {isParents && (
                  <div className="space-y-1.5 sm:space-y-2">
                    {names.map((n, j) => (
                      <p key={j} className="text-sm font-normal text-teal/95 sm:text-base sm:text-white">
                        {n}
                      </p>
                    ))}
                  </div>
                )}

                {/* Default: single column list */}
                {!isParents && (
                  <div className="space-y-1.5 sm:space-y-2">
                    {names.map((n, j) => (
                      <p key={j} className="text-sm font-normal text-teal/95 sm:text-base sm:text-white">
                        {n}
                      </p>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}