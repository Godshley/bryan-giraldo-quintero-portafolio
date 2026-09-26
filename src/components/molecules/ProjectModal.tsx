"use client";

import Button from "@/components/atoms/Button";

interface ProjectModalProps {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  onClose: () => void;
}

export default function ProjectModal({
  name,
  description,
  technologies,
  github,
  demo,
  onClose,
}: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[var(--surface)] p-8 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="project-modal-title" className="text-2xl font-bold text-[var(--text-primary)]">
            {name}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar diálogo"
            className="text-2xl leading-none text-[var(--text-secondary)] transition hover:text-[var(--primary)]"
          >
            ×
          </button>
        </div>

        <p className="mt-6 leading-7 text-[var(--text-secondary)]">
          {description}
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-[var(--text-primary)]">
            Tecnologías
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-sm font-medium text-[var(--primary)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[var(--primary)] px-6 py-3 font-semibold text-white transition duration-200 hover:bg-[var(--primary-light)] hover:shadow-md"
          >
            GitHub
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary)] transition duration-200 hover:bg-[var(--primary-soft)]"
            >
              Ver demo
            </a>
          )}

          <Button onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </div>
  );
}