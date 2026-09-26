"use client";

import { useState } from "react";

import SectionTitle from "@/components/atoms/SectionTitle";
import ProjectCard from "@/components/molecules/ProjectCard";
import ProjectModal from "@/components/molecules/ProjectModal";
import { projects } from "@/data/projects";

export default function PortfolioSection() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  return (
    <section
      id="portfolio"
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
    >
      <SectionTitle>Portafolio</SectionTitle>

      <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">
        Proyectos académicos y personales desarrollados durante mi formación
        como estudiante de Ingeniería de Sistemas.
      </p>

      <div className="mt-8 flex gap-6 overflow-x-auto pb-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            shortDescription={project.shortDescription}
            technologies={project.technologies}
            image={project.image}
            onLearnMore={() => setSelectedProjectId(project.id)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          name={selectedProject.name}
          description={selectedProject.description}
          technologies={selectedProject.technologies}
          github={selectedProject.github}
          demo={selectedProject.demo}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </section>
  );
}