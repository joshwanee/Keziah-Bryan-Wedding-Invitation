import { motion } from 'framer-motion';
import { weddingData } from '../../data/weddingData';

export default function LoveStory() {
  return (
    <section id="story" className="bg-ivory">
      <div className="section-shell">
        <p className="eyebrow">Our journey</p>
        <h2 className="section-title">A Love Written in Time</h2>

        <div className="relative mt-8 sm:mt-14">
          {/* Timeline Center/Side Line */}
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-gold via-emerald to-transparent md:left-1/2" />

          {/* Timeline Cards */}
          {weddingData.story.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative mb-6 flex md:mb-8 md:w-1/2 ${
                i % 2 ? 'md:ml-auto md:pl-12' : 'md:pr-12'
              }`}
            >
              {/* Timeline Indicator Dot */}
              <span
                className={`absolute left-0 top-6 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-ivory sm:left-[6px] sm:ring-6 md:left-auto ${
                  i % 2 ? 'md:-left-[7px]' : 'md:-right-[7px]'
                }`}
              />

              {/* Content Card */}
              <div className="glass ml-8 w-full rounded-2xl p-4 transition hover:-translate-y-1 sm:ml-12 sm:rounded-3xl sm:p-5">
                <p className="text-xs uppercase tracking-[.25em] text-amber-200">{item.year}</p>
                <h3 className="mt-1.5 font-display text-xl text-white sm:mt-2 sm:text-3xl">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/75 sm:mt-3 sm:text-sm sm:leading-7">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}