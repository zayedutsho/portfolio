import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Background from "../Background/Background";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030712] text-white"
    >
      {/* Background Glow */}
      <Background> </Background>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-mono text-lg text-cyan-400">👋 Hello, I'm</p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            MD Rifat <br />
            Al Jayed{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Utsho
            </span>
          </h1>

          <div className="mt-6 h-16 text-2xl font-semibold text-cyan-300">
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

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            Results-driven Full Stack Developer specializing in React, Next.js,
            Node.js, Express, MongoDB, PostgreSQL and Supabase. Passionate about
            building scalable, modern, and user-friendly web applications with
            clean architecture and exceptional user experience.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_0_30px_#06b6d4]">
              Download Resume
            </button>

            <button className="rounded-xl border border-cyan-500 px-7 py-4 transition duration-300 hover:bg-cyan-500 hover:shadow-[0_0_20px_#06b6d4]">
              Contact Me
            </button>
            <div className="mt-14 grid grid-cols-3 gap-5 max-w-lg">
              <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur">
                <h2 className="text-3xl font-bold text-cyan-400">3+</h2>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur">
                <h2 className="text-3xl font-bold text-cyan-400">20+</h2>
                <p className="text-sm text-slate-400">Projects</p>
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur">
                <h2 className="text-3xl font-bold text-cyan-400">100%</h2>
                <p className="text-sm text-slate-400">Dedication</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-6 text-2xl">
            <a
              href="https://github.com/zayedutsho"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="transition hover:scale-125 hover:text-cyan-400" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="transition hover:scale-125 hover:text-cyan-400" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="transition hover:scale-125 hover:text-cyan-400" />
            </a>

            <a href="mailto:zayedutsho@gmail.com">
              <FaEnvelope className="transition hover:scale-125 hover:text-cyan-400" />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="group relative">
            <div className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-full border-4 border-cyan-400 bg-slate-900 p-2 shadow-[0_0_50px_#06b6d4]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80"
                alt="Developer"
                className="h-80 w-80 rounded-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Floating Badges */}

            <div className="absolute -left-8 top-12 rounded-xl border border-cyan-500/30 bg-slate-900/80 px-4 py-2 backdrop-blur">
              ⚛ React
            </div>

            <div className="absolute -right-10 top-28 rounded-xl border border-cyan-500/30 bg-slate-900/80 px-4 py-2 backdrop-blur">
              ▲ Next.js
            </div>

            <div className="absolute bottom-16 -left-10 rounded-xl border border-cyan-500/30 bg-slate-900/80 px-4 py-2 backdrop-blur">
              🟢 Node.js
            </div>

            <div className="absolute -right-10 bottom-6 rounded-xl border border-cyan-500/30 bg-slate-900/80 px-4 py-2 backdrop-blur">
              🍃 MongoDB
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
