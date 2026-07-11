import { FaArrowLeft, FaGithub, FaGlobe } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import projects from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] text-[var(--text)]">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[var(--bg)] py-24 text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-strong)]"
        >
          <FaArrowLeft />
          Back
        </Link>

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 75vw"
          className="mb-10 h-[450px] w-full rounded-3xl object-cover"
        />

        <h1 className="text-5xl font-bold">{project.title}</h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          {project.description}
        </p>

        <h2 className="mt-14 text-3xl font-bold">Technology Stack</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[var(--accent)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.features && (
          <>
            <h2 className="mt-14 text-3xl font-bold">Highlights</h2>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-[var(--muted)]">
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <h2 className="mt-14 text-3xl font-bold">Challenges</h2>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-[var(--muted)]">
          {project.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-14 text-3xl font-bold">Future Improvements</h2>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-[var(--muted)]">
          {project.improvements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap gap-5">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-4 font-semibold text-[var(--surface-strong)] hover:bg-[var(--accent-strong)]"
          >
            <FaGlobe />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-[color:var(--accent)] px-6 py-4 hover:bg-[var(--accent-soft)]"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
