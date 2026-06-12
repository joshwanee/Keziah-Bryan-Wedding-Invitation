import { FiHeart } from 'react-icons/fi';
import { weddingData } from '../../data/weddingData';

export default function Footer() {
  const c = weddingData.couple;

  return (
    <footer className="relative overflow-hidden bg-teal px-5 py-20 text-center text-white">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,.18),transparent_42%)]" />

      <div className="relative">
        <FiHeart className="mx-auto text-gold" />
        
        <p className="mt-5 font-script text-5xl text-champagne">
          We can't wait to celebrate with you.
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl sm:text-4xl">
          #aBRYghterfuturewithKEZIAH
        </h2>

        <p className="mt-8 text-xs uppercase tracking-[.3em] text-white/50">
          
        </p>
      </div>
    </footer>
  );
}