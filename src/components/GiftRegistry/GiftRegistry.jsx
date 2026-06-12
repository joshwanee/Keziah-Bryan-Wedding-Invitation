import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

export default function GiftRegistry() {
  return (
    <section className="bg-ivory">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-teal px-6 py-14 text-center text-white shadow-[0_24px_70px_rgba(0,94,84,0.18)] sm:px-12 sm:py-16"
        >
          {/* Decorative background glows */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-white/10"
            >
              <FiHeart className="text-gold" size={30} />
            </motion.div>

            <p className="mt-6 font-script text-4xl leading-tight text-champagne sm:text-5xl">
              Your presence is the greatest gift.
            </p>

            <div className="mx-auto my-6 flex max-w-xs items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/70" />
              <span className="h-2 w-2 rotate-45 border border-gold bg-teal" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/70" />
            </div>

            <p className="mx-auto max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              With all that we have, weve been truly blessed. Your
              presence and prayers are all we request. No gifts are needed or
              expected. But if you desire to give nonetheless, a monetary gift
              is one we suggest.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}