import { motion } from "framer-motion";
import { useState } from "react";
import skills from "../../data/skills";

const categories = ["frontend", "backend", "database", "tools"];

const Skills = () => {
  const [active, setActive] = useState("frontend");

  return (
    <section id="skills" className="bg-[var(--bg)] py-28 text-[var(--text)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-mono text-[var(--accent)]">Technologies I Use</p>
          <h2 className="mt-3 text-5xl font-bold">Skills</h2>
        </div>

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-full px-6 py-3 capitalize transition ${
                active === item
                  ? "bg-[var(--accent)] text-[var(--surface-strong)]"
                  : "bg-[var(--card)] text-[var(--muted)] hover:bg-[var(--accent-soft)]"
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
                className="group rounded-2xl border border-[color:var(--border)] bg-[var(--card)] p-8 text-center backdrop-blur-lg hover:border-[color:var(--accent)] hover:shadow-[0_0_35px_rgba(6,182,212,.35)]"
              >
                <div className="mb-4 flex justify-center text-4xl text-[var(--accent)]">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)]">
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
