import { useState } from 'react';
import { FiGift, FiHeart, FiX, FiCopy, FiCheck } from 'react-icons/fi';

export default function GiftRegistry() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const accountName = 'Dece Rae Keziah Gayoba';
  const gcashNumber = '09XX XXX XXXX';

  const copyNumber = async () => {
    await navigator.clipboard.writeText(gcashNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="bg-ivory">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-teal px-6 py-14 text-center text-white sm:px-12">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />

          <FiHeart className="mx-auto text-gold" size={34} />

          <p className="mt-5 font-script text-4xl text-champagne">
            Your presence is the greatest gift.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
            For loved ones who wish to bless our new chapter, an optional cash gift may be shared through the details provided by the couple.
          </p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="pill-button mt-7 border border-gold/50 bg-white/10 text-white hover:bg-white/20"
          >
            <FiGift className="mr-2" />
            View Gift Details
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-[2rem] bg-[#FAF8F2] p-7 text-center shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 rounded-full bg-[#005E54]/10 p-2 text-[#005E54]"
            >
              <FiX />
            </button>

            <FiGift className="mx-auto text-[#D4AF37]" size={42} />

            <h3 className="mt-4 font-display text-4xl text-[#005E54]">
              Gift Details
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#005E54]/70">
              Cash gifts are optional and deeply appreciated.
            </p>

            <div className="mt-6 rounded-2xl border border-[#005E54]/10 bg-white p-5 text-left">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                GCash
              </p>

              <p className="mt-3 text-sm text-[#005E54]/60">Account Name</p>
              <p className="font-semibold text-[#005E54]">{accountName}</p>

              <p className="mt-4 text-sm text-[#005E54]/60">Number</p>
              <p className="font-semibold text-[#005E54]">{gcashNumber}</p>

              <button
                type="button"
                onClick={copyNumber}
                className="mt-5 flex w-full items-center justify-center rounded-full bg-[#005E54] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#006D5B]"
              >
                {copied ? <FiCheck className="mr-2" /> : <FiCopy className="mr-2" />}
                {copied ? 'Copied!' : 'Copy GCash Number'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}