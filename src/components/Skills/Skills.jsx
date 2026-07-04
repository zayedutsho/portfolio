import { motion } from "framer-motion";
import { useState } from "react";
import skills from "../../data/skills";

const categories = ["frontend", "backend", "database", "tools"];

const Skills = () => {
  const [active, setActive] = useState("frontend");

  return (
    <section id="skills" className="bg-[#030712] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-mono text-cyan-400">Technologies I Use</p>
          <h2 className="mt-3 text-5xl font-bold">Skills</h2>
        </div>

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-full px-6 py-3 capitalize transition ${
                active === item
                  ? "bg-cyan-500 text-black"
                  : "bg-white/5 text-slate-300 hover:bg-cyan-500/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills[active].map((skill) => {
            const Icon = skill.icon || (() => null);

            return (
              <motion.div
                key={skill.name}
                layout
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-8 text-center backdrop-blur-lg hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,.35)]"
              >
                <div className="mb-4 flex justify-center text-4xl text-cyan-400">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
