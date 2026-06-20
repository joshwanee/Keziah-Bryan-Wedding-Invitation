import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiSend,
  FiLoader,
  FiUser,
  FiHeart,
  FiMessageSquare,
  FiChevronDown,
} from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { weddingData, allGuests } from '../../data/weddingData';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initial = {
  name: '',
  attending: 'yes',
  message: '',
};

export default function RSVP() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (name === 'name' && value.trim()) {
      const filtered = allGuests.filter((guest) =>
        guest.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else if (name === 'name') {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (name) => {
    setForm({
      ...form,
      name,
    });
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const submit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const next = {};

    if (!form.name.trim()) {
      next.name = 'Full name is required.';
    } else if (!allGuests.some((guest) => guest.toLowerCase() === form.name.toLowerCase())) {
      next.name = 'Please select a name from the suggestions. Your name must be in our guest list.';
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      next.submit = 'Email service is not configured properly.';
    }

    setErrors(next);

    if (Object.keys(next).length > 0) return;

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          guest_name: form.name.trim(),
          attending_status:
            form.attending === 'yes'
              ? 'Joyfully accepts'
              : 'Regretfully declines',
          guest_message:
            form.message.trim() || 'No message provided',
        },
        EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setForm(initial);
    } catch (error) {
      console.error('EmailJS error:', error);

      setErrors({
        submit:
          error?.text ||
          'Failed to send RSVP. Please check your connection and try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="bg-gradient-to-b from-ivory to-champagne/60"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Kindly respond</p>

          <h2 className="section-title">RSVP</h2>

          <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-7 text-white">
            Please let us know whether you can celebrate with us.
          </p>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  relative
                  mt-10
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/40
                  bg-white/15
                  px-6
                  py-12
                  text-center
                  shadow-[0_24px_70px_rgba(0,0,0,0.12)]
                  backdrop-blur-2xl
                  sm:px-10
                  sm:py-14
                "
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

                <div className="relative z-10">
                  <motion.div
                    initial={{
                      scale: 0.7,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.15,
                      type: 'spring',
                    }}
                    className="
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-white/15
                      backdrop-blur-xl
                    "
                  >
                    <FiCheckCircle
                      className="text-[#A5A93D]"
                      size={44}
                    />
                  </motion.div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/65">
                    Response Received
                  </p>

                  <h3 className="mt-3 font-display text-4xl text-white sm:text-5xl">
                    Thank You!
                  </h3>

                  <div className="mx-auto my-5 h-px w-20 bg-white/35" />

                  <p className="mx-auto max-w-md text-sm leading-7 text-white/70 sm:text-base">
                    Your RSVP has been sent successfully. We
                    truly appreciate your response.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  relative
                  mt-8
                  grid
                  gap-6
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/40
                  bg-white/15
                  p-5
                  shadow-[0_24px_70px_rgba(0,0,0,0.12)]
                  backdrop-blur-2xl
                  sm:p-8
                "
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#A5A93D]/10 blur-3xl" />

                <div className="relative z-10 grid gap-6">
                  <div className="text-center">
                    <p className="font-display text-2xl text-white sm:text-3xl">
                      Your Response
                    </p>

                    <div className="mx-auto mt-3 flex max-w-[180px] items-center gap-3">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/40" />

                      <FiHeart
                        className="text-[#A5A93D]"
                        size={13}
                      />

                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/40" />
                    </div>
                  </div>

                  <Field
                    label="Full Name"
                    error={errors.name}
                    icon={<FiUser />}
                  >
                    <div className="relative">
                      <input
                        name="name"
                        value={form.name}
                        onChange={change}
                        onFocus={() => form.name.trim() && setShowSuggestions(true)}
                        disabled={loading}
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-white/35
                          bg-white/15
                          px-4
                          py-3.5
                          text-sm
                          text-white
                          outline-none
                          backdrop-blur-xl
                          transition
                          duration-300
                          placeholder:text-white/45
                          hover:border-white/55
                          focus:border-[#A5A93D]
                          focus:bg-white/20
                          focus:shadow-[0_0_0_4px_rgba(165,169,61,0.15)]
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                          sm:text-base
                        "
                        placeholder="Your complete name"
                        autoComplete="off"
                      />
                      {showSuggestions && suggestions.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="absolute top-full z-10 mt-1 w-full rounded-2xl border border-white/35 bg-white/90 backdrop-blur-xl shadow-lg"
                        >
                          {suggestions.slice(0, 5).map((suggestion, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => selectSuggestion(suggestion)}
                              className="w-full px-4 py-2.5 text-left text-sm text-black transition hover:bg-white/20 first:rounded-t-xl last:rounded-b-xl"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </Field>

                  <Field
                    label="Will You Attend?"
                    icon={<FiHeart />}
                  >
                    <div className="relative">
                      <select
                        name="attending"
                        value={form.attending}
                        onChange={change}
                        disabled={loading}
                        className="
                          w-full
                          appearance-none
                          rounded-2xl
                          border
                          border-white/35
                          bg-white/15
                          px-4
                          py-3.5
                          pr-12
                          text-sm
                          text-white
                          outline-none
                          backdrop-blur-xl
                          transition
                          duration-300
                          hover:border-white/55
                          focus:border-[#A5A93D]
                          focus:bg-white/20
                          focus:shadow-[0_0_0_4px_rgba(165,169,61,0.15)]
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                          sm:text-base
                        "
                      >
                        <option
                          value="yes"
                          className="bg-[#0D3B2E] text-white"
                        >
                          Joyfully accepts
                        </option>

                        <option
                          value="no"
                          className="bg-[#0D3B2E] text-white"
                        >
                          Regretfully declines
                        </option>
                      </select>

                      <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/70" />
                    </div>
                  </Field>

                  <Field
                    label="Message for the Couple"
                    optional
                    icon={<FiMessageSquare />}
                  >
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={change}
                      disabled={loading}
                      rows="4"
                      className="
                        w-full
                        resize-none
                        rounded-2xl
                        border
                        border-white/35
                        bg-white/15
                        px-4
                        py-3.5
                        text-sm
                        leading-7
                        text-white
                        outline-none
                        backdrop-blur-xl
                        transition
                        duration-300
                        placeholder:text-white/45
                        hover:border-white/55
                        focus:border-[#A5A93D]
                        focus:bg-white/20
                        focus:shadow-[0_0_0_4px_rgba(165,169,61,0.15)]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        sm:text-base
                      "
                      placeholder="Share a warm message..."
                    />
                  </Field>

                  {errors.submit && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      role="alert"
                      className="rounded-2xl border border-red-300/40 bg-red-500/10 px-4 py-3 text-center text-sm leading-6 text-red-100 backdrop-blur-xl"
                    >
                      {errors.submit}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      group
                      relative
                      mt-1
                      flex
                      min-h-14
                      w-full
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#A5A93D]/70
                      bg-[#0D3B2E]
                      px-7
                      py-4
                      text-base
                      font-semibold
                      tracking-wide
                      text-white
                      shadow-[0_16px_40px_rgba(13,59,46,0.35)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#164D3B]
                      hover:shadow-[0_20px_50px_rgba(13,59,46,0.45)]
                      focus:outline-none
                      focus:ring-4
                      focus:ring-[#A5A93D]/20
                      active:scale-[0.98]
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                      disabled:hover:translate-y-0
                      disabled:active:scale-100
                    "
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative flex items-center justify-center">
                      {loading ? (
                        <>
                          <FiLoader className="mr-2 animate-spin text-xl" />
                          Sending RSVP...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2 text-xl" />
                          Send RSVP
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
  icon,
  optional = false,
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
        <span className="text-[#A5A93D]">
          {icon}
        </span>

        <span>{label}</span>

        {optional && (
          <span className="ml-auto text-xs font-normal text-white/50">
            Optional
          </span>
        )}
      </span>

      {children}

      {error && (
        <motion.span
          initial={{
            opacity: 0,
            y: -4,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-2 block text-xs font-medium text-red-200"
        >
          {error}
        </motion.span>
      )}
    </label>
  );
}