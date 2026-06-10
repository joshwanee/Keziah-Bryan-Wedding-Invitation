import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS with your public key
// emailjs.init(EMAILJS_PUBLIC_KEY);

const initial = { name: '', attending: 'yes', message: '' };

export default function RSVP() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Full name is required.';
    
    setErrors(next);
    
    if (Object.keys(next).length === 0) {
      try {
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                guest_name: form.name,
                attending_status:
                form.attending === 'yes' ? 'Joyfully accepts' : 'Regretfully declines',
                guest_message: form.message || 'No message provided',
            },
            EMAILJS_PUBLIC_KEY
        );
        
        setSent(true);
        setForm(initial);
      } catch (error) {
        console.error('EmailJS error:', error);
        next.submit = 'Failed to send RSVP. Please try again.';
        setErrors(next);
      }
    }
  };

  return (
    <section id="rsvp" className="bg-gradient-to-b from-ivory to-champagne/60">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Kindly respond</p>
          <h2 className="section-title">RSVP</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-7 text-teal/65">
            Please let us know whether you can celebrate with us.
          </p>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass mt-10 rounded-[2rem] p-10 text-center"
              >
                <FiCheckCircle className="mx-auto text-emerald" size={52} />
                <h3 className="mt-4 font-display text-4xl text-teal">Thank you!</h3>
                <p className="mt-3 text-sm text-teal/65">
                  Your RSVP has been sent successfully.
                </p>
                <button onClick={() => setSent(false)} className="pill-button mt-6 bg-teal text-white">
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass mt-10 grid gap-5 rounded-[2rem] p-5 sm:p-8"
              >
                <Field label="Full Name" error={errors.name}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={change}
                    className="input"
                    placeholder="Your complete name"
                  />
                </Field>

                <Field label="Will you attend?">
                  <select name="attending" value={form.attending} onChange={change} className="input">
                    <option value="yes">Joyfully accepts</option>
                    <option value="no">Regretfully declines</option>
                  </select>
                </Field>

                <Field label="Message for the Couple (Optional)">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={change}
                    rows="4"
                    className="input resize-none"
                    placeholder="Share a warm message..."
                  />
                </Field>

                {errors.submit && <span className="text-xs text-red-600">{errors.submit}</span>}

                <button className="pill-button bg-teal text-white hover:bg-jade">
                  <FiSend className="mr-2" />
                  Send RSVP
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-teal">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}