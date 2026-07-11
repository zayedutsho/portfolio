import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import me from "../../assets/me.webp";
import Background from "../Background/Background";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] text-[var(--text)]"
    >
      <Background />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-mono text-lg text-[var(--accent)]">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            MD Rifat <br />
            Al Jayed{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Utsho
            </span>
          </h1>

          <div className="mt-6 h-16 text-2xl font-semibold text-[var(--accent-strong)]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "MERN Stack Specialist",
                1500,
                "React Developer",
                1500,
                "Next.js Developer",
                1500,
                "Node.js Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-xl leading-8 text-[var(--muted)]">
            Results-driven Full Stack Developer specializing in React, Next.js,
            Node.js, Express, MongoDB, PostgreSQL and Supabase. Passionate about
            building scalable, modern, and user-friendly web applications with
            clean architecture and exceptional user experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-7 py-4 font-semibold text-[var(--surface-strong)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--accent-strong)] hover:shadow-[0_0_30px_#06b6d4]"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-[color:var(--accent)] px-7 py-4 transition duration-300 hover:bg-[var(--accent-soft)]"
            >
              Contact Me
            </a>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5">
              <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card)] p-5 backdrop-blur">
                <h2 className="text-3xl font-bold text-[var(--accent)]">3+</h2>
                <p className="text-sm text-[var(--muted)]">Years Experience</p>
              </div>

              <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card)] p-5 backdrop-blur">
                <h2 className="text-3xl font-bold text-[var(--accent)]">20+</h2>
                <p className="text-sm text-[var(--muted)]">Projects</p>
              </div>

              <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card)] p-5 backdrop-blur">
                <h2 className="text-3xl font-bold text-[var(--accent)]">
                  100%
                </h2>
                <p className="text-sm text-[var(--muted)]">Dedication</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-6 text-2xl">
            <a
              href="https://github.com/zayedutsho"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="transition hover:scale-125 hover:text-[var(--accent)]" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="transition hover:scale-125 hover:text-[var(--accent)]" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="transition hover:scale-125 hover:text-[var(--accent)]" />
            </a>

            <a href="mailto:zayedutsho@gmail.com">
              <FaEnvelope className="transition hover:scale-125 hover:text-[var(--accent)]" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="group relative">
            <div className="absolute -inset-4 rounded-full bg-[var(--hero-glow)] blur-3xl"></div>

            <div className="relative overflow-hidden rounded-full border-4 border-[color:var(--accent)] bg-[var(--surface-strong)] p-2 shadow-[0_0_50px_#06b6d4]">
              <img
                src={me}
                alt="Developer"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 768px) 280px, 320px"
                className="h-80 w-80 rounded-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute -left-8 top-12 rounded-xl border border-[color:var(--border)] bg-[var(--card)] px-4 py-2 backdrop-blur">
              ⚛ React
            </div>

            <div className="absolute -right-10 top-28 rounded-xl border border-[color:var(--border)] bg-[var(--card)] px-4 py-2 backdrop-blur">
              ▲ Next.js
            </div>

            <div className="absolute bottom-16 -left-10 rounded-xl border border-[color:var(--border)] bg-[var(--card)] px-4 py-2 backdrop-blur">
              🟢 Node.js
            </div>

            <div className="absolute -right-10 bottom-6 rounded-xl border border-[color:var(--border)] bg-[var(--card)] px-4 py-2 backdrop-blur">
              🍃 MongoDB
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
