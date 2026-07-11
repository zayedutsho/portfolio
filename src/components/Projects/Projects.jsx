import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--bg)] py-28 text-[var(--text)]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="font-mono text-[var(--accent)]">Portfolio</p>
          <h2 className="mt-3 text-5xl font-bold">Featured Projects</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[var(--muted)]">
            A collection of projects showcasing my experience in full-stack
            development, modern UI/UX, scalable backend systems, and real-world
            problem solving.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[var(--card)] backdrop-blur-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 line-clamp-3 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[color:var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-sm text-[var(--accent)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-[var(--accent)] p-3 text-[var(--surface-strong)] transition hover:bg-[var(--accent-strong)]"
                    >
                      <FaGlobe />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-[color:var(--accent)] p-3 transition hover:bg-[var(--accent-soft)]"
                    >
                      <FaGithub />
                    </a>
                  </div>

                  <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-2 font-medium text-[var(--accent)] transition hover:gap-4"
                  >
                    View Details
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
