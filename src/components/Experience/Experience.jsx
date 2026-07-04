import { motion } from "framer-motion";
import education from "../../data/education";
import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#030712] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <p className="font-mono text-cyan-400">My Journey</p>

          <h2 className="mt-3 text-5xl font-bold">Experience & Education</h2>
        </div>

        <div className="relative border-l-2 border-cyan-500/30 pl-10">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-14"
            >
              <div className="absolute -left-[49px] top-2 h-5 w-5 rounded-full border-4 border-cyan-500 bg-[#030712]" />

              <span className="text-sm text-cyan-400">{item.duration}</span>

              <h3 className="mt-2 text-2xl font-bold">{item.role}</h3>

              <p className="text-lg text-slate-300">{item.company}</p>

              <p className="mt-3 leading-7 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-[49px] top-2 h-5 w-5 rounded-full border-4 border-cyan-500 bg-[#030712]" />

              <span className="text-sm text-cyan-400">{item.duration}</span>

              <h3 className="mt-2 text-2xl font-bold">{item.degree}</h3>

              <p className="text-lg text-slate-300">{item.institute}</p>

              <p className="mt-3 leading-7 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
