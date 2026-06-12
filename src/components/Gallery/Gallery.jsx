import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import pic1 from '../../pictures/pic1.jpg';
import pic2 from '../../pictures/pic2.jpg';
import pic3 from '../../pictures/pic3.jpg';
import pic4 from '../../pictures/pic4.jpg';
import pic5 from '../../pictures/pic5.jpg';
import pic6 from '../../pictures/pic6.jpg';

const items = [
  { src: pic1, pos: 'object-center' },
  { src: pic2, pos: 'object-left' },
  { src: pic3, pos: 'object-right' },
  { src: pic4, pos: 'object-[45%_30%]' },
  { src: pic5, pos: 'object-[55%_65%]' },
  { src: pic6, pos: 'object-[50%_20%]' }
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="bg-teal text-white">
      <div className="section-shell">
        <p className="eyebrow">Captured moments</p>
        <h2 className="section-title !text-white">Our Gallery</h2>
        
        <div className="mt-12 columns-2 gap-3 md:columns-3">
          {items.map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -5 }}
              onClick={() => setActive(item)}
              className="mb-3 block w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2"
            >
              <img
                loading="lazy"
                src={item.src}
                className={`w-full rounded-[1.2rem] object-cover ${item.pos} ${
                  i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
                alt={`Wedding gallery placeholder ${i + 1}`}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-5"
            onClick={() => setActive(null)}
          >
            <button className="absolute right-5 top-5 rounded-full bg-white p-3 text-teal">
              <FiX />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              src={active.src}
              className="max-h-[85vh] max-w-4xl rounded-3xl object-contain"
              alt="Gallery preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}