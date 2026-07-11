import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully 🚀");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg)] py-28 text-[var(--text)]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="font-mono text-[var(--accent)]">Get In Touch</p>
          <h2 className="mt-3 text-5xl font-bold">Contact Me</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted)]">
            Have a project in mind or want to work together? Feel free to
            contact me anytime.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5 rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-6 backdrop-blur">
              <FaEnvelope className="text-3xl text-[var(--accent)]" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-[var(--muted)]">zayedutsho@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-6 backdrop-blur">
              <FaPhoneAlt className="text-3xl text-[var(--accent)]" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-[var(--muted)]">+8801XXXXXXXXX</p>
              </div>
            </div>

            <div className="flex gap-6 pt-6 text-3xl">
              <a
                href="https://github.com/zayedutsho"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="transition hover:scale-110 hover:text-[var(--accent)]" />
              </a>

              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="transition hover:scale-110 hover:text-[var(--accent)]" />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 rounded-3xl border border-[color:var(--border)] bg-[var(--card)] p-8 backdrop-blur"
          >
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-[color:var(--border)] bg-transparent p-4 text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
            />

            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-[color:var(--border)] bg-transparent p-4 text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
            />

            <textarea
              name="message"
              required
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-xl border border-[color:var(--border)] bg-transparent p-4 text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[var(--accent)] py-4 font-semibold text-[var(--surface-strong)] transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
