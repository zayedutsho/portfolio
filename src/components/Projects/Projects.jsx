import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="font-mono text-cyan-400">Portfolio</p>

          <h2 className="mt-3 text-5xl font-bold">Featured Projects</h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            A collection of projects showcasing my experience in full-stack
            development, modern UI/UX, scalable backend systems, and real-world
            problem solving.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl"
            >
              {/* Image */}

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

              {/* Content */}

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 line-clamp-3 text-slate-400">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-cyan-500 p-3 text-black transition hover:bg-cyan-400"
                    >
                      <FaGlobe />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-cyan-500 p-3 transition hover:bg-cyan-500"
                    >
                      <FaGithub />
                    </a>
                  </div>

                  <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-2 font-medium text-cyan-400 transition hover:gap-4"
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
