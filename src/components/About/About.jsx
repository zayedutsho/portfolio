import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLocationDot, FaRocket } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="bg-[var(--bg)] py-28 text-[var(--text)]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="font-mono text-[var(--accent)]">Get To Know Me</p>
          <h2 className="mt-3 text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[var(--card)] shadow-xl">
              <div className="flex items-center gap-2 border-b border-[color:var(--border)] px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-4 font-mono text-sm text-[var(--muted)]">
                  terminal
                </span>
              </div>

              <div className="space-y-4 p-6 font-mono text-sm md:text-base">
                <p>
                  <span className="text-green-400">$</span> whoami
                </p>
                <p className="text-[var(--accent)]">MD Rifat Al Jayed Utsho</p>
                <p>
                  <span className="text-green-400">$</span> role
                </p>
                <p className="text-[var(--text)]">Full Stack Developer</p>
                <p>
                  <span className="text-green-400">$</span> tech-stack
                </p>
                <p className="text-[var(--text)]">
                  React • Next.js • Node.js • Express • MongoDB • PostgreSQL
                </p>
                <p>
                  <span className="text-green-400">$</span> location
                </p>
                <p className="text-[var(--text)]">Tongi, Gazipur, Bangladesh</p>
                <p>
                  <span className="text-green-400">$</span> status
                </p>
                <p className="animate-pulse text-[var(--accent)]">
                  Available for exciting opportunities 🚀
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-4xl font-bold">
              Passionate About Building Modern Web Experiences
            </h3>

            <p className="leading-8 text-[var(--muted)]">
              I'm a Full Stack Developer from Bangladesh with a passion for
              building scalable, user-friendly web applications. My journey
              started with HTML, CSS, and JavaScript and evolved into working
              with React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and
              Supabase.
            </p>

            <p className="mt-6 leading-8 text-[var(--muted)]">
              I enjoy solving real-world problems, transforming ideas into
              production-ready products, and continuously learning modern
              technologies. Outside of coding, I enjoy exploring UI/UX trends,
              learning new technologies, watching documentaries, and traveling.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card)] p-5 backdrop-blur">
                <FaLaptopCode className="mb-3 text-3xl text-[var(--accent)]" />
                <h4 className="font-semibold">3+ Years Experience</h4>
              </div>

              <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card)] p-5 backdrop-blur">
                <FaCode className="mb-3 text-3xl text-[var(--accent)]" />
                <h4 className="font-semibold">20+ Projects Built</h4>
              </div>

              <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card)] p-5 backdrop-blur">
                <FaLocationDot className="mb-3 text-3xl text-[var(--accent)]" />
                <h4 className="font-semibold">Based in Bangladesh</h4>
              </div>

              <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card)] p-5 backdrop-blur">
                <FaRocket className="mb-3 text-3xl text-[var(--accent)]" />
                <h4 className="font-semibold">Always Learning</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
