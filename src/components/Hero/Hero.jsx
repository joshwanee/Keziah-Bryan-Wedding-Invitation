import { motion } from 'framer-motion';
import { FiArrowDown, FiHeart } from 'react-icons/fi';
import { weddingData } from '../../data/weddingData';
import main from '../../pictures/main.jpg';

export default function Hero({ onViewGuest }) {
  const { couple } = weddingData;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-transparent text-white"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.28)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200 sm:text-sm">
            Together with their families
          </p>

          {/* Couple names */}
          <h1
            className="
              flex
              flex-col
              items-center
              font-script
              font-normal
              leading-[0.8]
              text-white
              drop-shadow-[0_5px_20px_rgba(0,0,0,0.3)]
              lg:items-start
            "
          >
            <motion.span
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="
                relative
                inline-block
                text-[4.8rem]
                tracking-wide
                sm:text-[6.5rem]
                lg:text-[7.8rem]
              "
            >
              Keziah
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="
                my-3
                block
                pl-0
                font-script
                text-5xl
                font-normal
                leading-none
                text-amber-200
                sm:my-4
                sm:text-7xl
                lg:pl-28
              "
            >
              &
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="
                relative
                inline-block
                text-[4.8rem]
                tracking-wide
                sm:text-[6.5rem]
                lg:text-[7.8rem]
              "
            >
              Bryan
            </motion.span>
          </h1>

          {/* Decorative line */}
          <div className="mx-auto mt-8 flex max-w-sm items-center gap-3 lg:mx-0">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-200/70" />

            <FiHeart className="text-amber-200" size={15} />

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-200/70" />
          </div>

          {/* Wedding hashtag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="
              mx-auto
              mt-6
              w-fit
              max-w-full
              rounded-full
              border
              border-amber-200/40
              bg-white/10
              px-5
              py-3
              shadow-[0_12px_35px_rgba(0,0,0,0.16)]
              backdrop-blur-md
              sm:px-7
              sm:py-3.5
              lg:mx-0
            "
          >
            <p
              className="
                break-words
                text-center
                text-base
                font-semibold
                tracking-wide
                text-amber-100
                sm:text-xl
                lg:text-2xl
              "
            >
              #aBRYghterfuturewithKEZIAH
            </p>
          </motion.div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base lg:mx-0">
            Invite you to celebrate their wedding—a day of love,
            gratitude, and the beginning of forever.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={onViewGuest}
              className="pill-button bg-amber-200 text-[#064E31] hover:-translate-y-1 hover:bg-amber-100"
            >
              View Guest
              <FiArrowDown className="ml-2" />
            </button>

            <a
              href="#rsvp"
              className="pill-button border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <FiHeart className="mr-2" />
              RSVP
            </a>
          </div>
        </motion.div>

        {/* Main couple image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-amber-200/30 to-[#0B6B44]/20 blur-2xl" />

          <div className="glass relative overflow-hidden rounded-[2.5rem] border-white/10 bg-white/10 p-3">
            <img
              src={main}
              alt={`${couple.bride} and ${couple.groom}`}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-center"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}