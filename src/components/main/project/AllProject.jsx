import { useEffect, useState } from "react";
import AOS from "aos";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers3,
  Lightbulb,
  Sparkles,
  X,
} from "lucide-react";
import { projects } from "../../../data/projects";
import { FaGithub } from "react-icons/fa";

const AllProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });
  }, []);

  const filters = ["All", "Full Stack", "AI Projects", "E-Commerce"];

  const getCategory = (project) => {
    const title = project.title.toLowerCase();
    const description = (
      project.subtitle +
      " " +
      project.fullDesc
    ).toLowerCase();

    if (
      title.includes("smartwallet") ||
      title.includes("career prep") ||
      description.includes("ai-powered") ||
      description.includes("ai integration") ||
      description.includes("ai-driven")
    ) {
      return "AI Projects";
    }

    if (
      title.includes("fresh root") ||
      title.includes("zeroomiro") ||
      description.includes("e-commerce")
    ) {
      return "E-Commerce";
    }

    return "Full Stack";
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => getCategory(project) === activeFilter);

  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#030712] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
          data-aos="fade-up"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-sm font-medium text-blue-300">
            <Sparkles size={16} />
            <span>MY CREATIVE WORK</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Projects That{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Make an Impact.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            A collection of applications and digital experiences built with
            modern technologies, thoughtful design, and a focus on solving
            real-world problems.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">
              <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
                <Layers3 size={19} />
              </div>

              <div className="text-left">
                <p className="text-xl font-bold">
                  {projects.length.toString().padStart(2, "0")}+
                </p>
                <p className="text-xs text-slate-500">Projects</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">
              <div className="rounded-lg bg-violet-500/10 p-2 text-violet-400">
                <Code2 size={19} />
              </div>

              <div className="text-left">
                <p className="text-xl font-bold">Modern</p>
                <p className="text-xs text-slate-500">Tech Stack</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 sm:px-5 ${
                activeFilter === filter
                  ? "border-blue-400/40 bg-blue-500/15 text-blue-300 shadow-lg shadow-blue-500/5"
                  : "border-white/[0.08] bg-white/[0.025] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1120]/80 transition-all duration-500 hover:-translate-y-2  hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/30 "
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-black/10" />

                {/* Status */}
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status?.toLowerCase().includes("complete")
                          ? "bg-emerald-400"
                          : "bg-blue-400"
                      }`}
                    />
                    {project.status || "Project"}
                  </span>
                </div>

                {/* Project number */}
                <div className="absolute bottom-4 right-4 text-4xl font-black tracking-tighter text-white/40 transition-colors duration-300 group-hover:text-white/80">
                  {String(project.id).padStart(2, "0")}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                      {getCategory(project)}
                    </p>

                    <h2 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-300 sm:text-2xl">
                      {project.title}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View ${project.title} details`}
                    className="shrink-0 rounded-full border border-white/10 p-2.5 text-slate-400 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>

                <p className="mb-5 text-sm leading-7 text-slate-400">
                  {project.subtitle}
                </p>

                {/* Technology Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}

                  {project.tags.length > 4 && (
                    <span className="rounded-md border border-white/[0.07] px-2.5 py-1.5 text-[11px] text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center gap-3 border-t border-white/[0.07] pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-blue-300"
                  >
                    View Details
                    <ArrowDownRight
                      size={17}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:translate-y-0.5"
                    />
                  </button>

                  {project.githubClient && (
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="rounded-xl border border-white/10 p-3 text-slate-300 transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white"
                    >
                      <FaGithub size={19} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="rounded-xl border border-white/10 p-3 text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      <ExternalLink size={19} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] py-16 text-center">
            <Layers3 size={36} className="mx-auto mb-4 text-slate-500" />

            <h3 className="text-xl font-semibold">No projects found</h3>

            <p className="mt-2 text-sm text-slate-400">
              Try selecting another category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-blue-500/[0.08] via-transparent to-violet-500/[0.08] p-7 text-center sm:mt-20 sm:p-12"
          data-aos="fade-up"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
            <Lightbulb size={26} />
          </div>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Let's collaborate and build something meaningful with modern web
            technologies.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Let's Talk
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative my-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#080e1c] shadow-2xl shadow-black/50"
          >
            {/* Modal Header Image */}
            <div className="relative h-52 overflow-hidden sm:h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080e1c] via-black/20 to-black/20" />

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close project details"
                className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 p-2.5 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <X size={21} />
              </button>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-8">
                <span className="mb-3 inline-flex rounded-full border border-blue-400/20 bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-300">
                  {getCategory(selectedProject)}
                </span>

                <h2
                  id="project-modal-title"
                  className="text-2xl font-bold sm:text-4xl"
                >
                  {selectedProject.title}
                </h2>

                <p className="mt-2 text-sm text-slate-300 sm:text-base">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-8 p-5 sm:p-8">
              {/* Description */}
              <section>
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <Code2 size={19} className="text-blue-400" />
                  About the Project
                </h3>

                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                  {selectedProject.fullDesc}
                </p>
              </section>

              {/* Technology Stack */}
              <section>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Layers3 size={19} className="text-blue-400" />
                  Technology Stack
                </h3>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedProject.mainTechStack?.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4"
                    >
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-blue-300">
                        {item.name}
                      </p>

                      <p className="text-sm leading-6 text-slate-300">
                        {item.tech}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenges */}
              {selectedProject.challenges?.length > 0 && (
                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <CheckCircle2 size={19} className="text-emerald-400" />
                    Challenges & Solutions
                  </h3>

                  <div className="space-y-4">
                    {selectedProject.challenges.map((challenge, index) => (
                      <div
                        key={`${challenge.problem}-${index}`}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5"
                      >
                        <h4 className="font-semibold text-white">
                          {challenge.problem}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-400">
                          {challenge.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Future Plans */}
              {selectedProject.futurePlans?.length > 0 && (
                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <Sparkles size={19} className="text-violet-400" />
                    Future Improvements
                  </h3>

                  <ul className="space-y-3">
                    {selectedProject.futurePlans.map((plan, index) => (
                      <li
                        key={`${plan}-${index}`}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                      >
                        <ArrowRight
                          size={17}
                          className="mt-1 shrink-0 text-violet-400"
                        />
                        <span>{plan}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Modal Actions */}
              <div className="flex flex-wrap gap-3 border-t border-white/[0.08] pt-6">
                {selectedProject.githubClient && (
                  <a
                    href={selectedProject.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/5 sm:flex-none"
                  >
                    <FaGithub size={18} />
                    Source Code
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 sm:flex-none"
                  >
                    Live Preview
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllProject;
