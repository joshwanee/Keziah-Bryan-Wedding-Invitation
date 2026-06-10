import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { weddingData } from '../../data/weddingData';

export default function EventDetails() {
  return (
    <section
      id="details"
      className="bg-gradient-to-b from-champagne/45 to-ivory"
    >
      <div className="section-shell">
        <p className="eyebrow">Save the date</p>

        <h2 className="section-title">Wedding Details</h2>

        <div className="mt-8 grid gap-3 sm:gap-5 md:mt-12 md:grid-cols-2">
          {weddingData.events.map((event, i) => (
            <motion.article
              key={event.type}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass rounded-2xl p-4 sm:rounded-[2rem] sm:p-7 md:p-9"
            >
              <p className="font-script text-xl text-amber-200 sm:text-2xl md:text-3xl">
                {event.type}
              </p>

              <h3 className="mt-1.5 font-display text-2xl text-white sm:mt-2 sm:text-3xl md:text-4xl">
                {event.venue}
              </h3>

              <div className="mt-4 space-y-3 text-xs text-white/75 sm:mt-6 sm:space-y-4 sm:text-sm">
                <p className="flex gap-3">
                  <FiCalendar className="mt-1 text-amber-200" />
                  {event.date}
                </p>

                <p className="flex gap-3">
                  <FiClock className="mt-1 text-amber-200" />
                  {event.time}
                </p>

                <p className="flex gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-amber-200" />
                  {event.address}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}