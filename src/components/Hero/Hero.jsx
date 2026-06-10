import { motion } from 'framer-motion';
import { FiArrowDown, FiHeart } from 'react-icons/fi';
import { weddingData } from '../../data/weddingData';
import main from '../../pictures/main.jpg';

export default function Hero() {
  const { couple } = weddingData;
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.28)_100%)]" />
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">Together with their families</p>
          <h1 className="font-display text-5xl font-semibold leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            {couple.bride}
            <span className="my-3 block font-script text-5xl font-normal text-amber-200 sm:text-7xl">&</span>
            {couple.groom}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base lg:mx-0">Invite you to celebrate their wedding—a day of love, gratitude, and the beginning of forever.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#story" className="pill-button bg-amber-200 text-[#064E31] hover:-translate-y-1 hover:bg-amber-100">View Invitation <FiArrowDown className="ml-2" /></a>
            <a href="#rsvp" className="pill-button border border-white/30 bg-white/10 text-white hover:bg-white/20"><FiHeart className="mr-2" /> RSVP</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .2 }} className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-amber-200/30 to-[#0B6B44]/20 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-3 border-white/10 bg-white/10">
            <img src={main} alt={`${couple.bride} and ${couple.groom}`} className="aspect-[4/5] w-full rounded-[2rem] object-cover object-center" fetchPriority="high" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
