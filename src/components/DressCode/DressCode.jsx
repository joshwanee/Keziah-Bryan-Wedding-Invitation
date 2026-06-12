import { motion } from 'framer-motion';
import { weddingData } from '../../data/weddingData';
import outfitExample from '../../pictures/outfit-example2.png';

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

        <div className="mx-auto mt-8 max-w-xl space-y-3 text-center text-white">
          <p className="text-base font-semibold">
            <span className="font-bold text-amber-200">Principal Sponsors</span> - Formal
          </p>
          <p className="text-base font-semibold">
            <span className="font-bold text-amber-200">Guests</span> - Semi Formal
          </p>
          <p className="text-base italic font-bold">
            Avoid wearing sandos and shorts
          </p>
        </div>

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

        <div className="mt-8 flex justify-center">
          <img
            src={outfitExample}
            alt="Outfit Examples"
            className="w-full max-w-[180px]"
          />
        </div>
      </div>
    </section>
  );
}