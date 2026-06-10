import { motion } from 'framer-motion';
import { weddingData } from '../../data/weddingData';

export default function DressCode() {
  return (
    <section className="bg-champagne/50">
      <div className="section-shell">
        <p className="eyebrow">Wear the celebration</p>

        <h2 className="section-title">
          Wedding Dress Code
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-7 text-teal/65 text-white">
          Formal or semi-formal attire in our romantic
          Olive Green and Emerald Green
          palette.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {weddingData.dressCode.map((c, i) => (
            <motion.div
              key={c.hex}
              whileHover={{ y: -7, scale: 1.03 }}
              className="text-center"
            >
              <div
                className="mx-auto h-20 w-20 rounded-full border-4 border-white shadow-lg sm:h-24 sm:w-24"
                style={{ backgroundColor: c.hex }}
              />

              <p className="mt-3 text-xs font-medium uppercase tracking-[.12em] text-white">
                {c.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}