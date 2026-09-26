"use client";

import Button from "@/components/atoms/Button";

interface ProfileModalProps {
  onClose: () => void;
}

export default function ProfileModal({
  onClose,
}: ProfileModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
  role="dialog"
  aria-modal="true"
  aria-labelledby="profile-modal-title"
  className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[var(--surface)] p-8 shadow-xl"
  onClick={(event) => event.stopPropagation()}
        >
        <div className="flex items-start justify-between gap-4">
          <h2 id="profile-modal-title"
          className="text-2xl font-bold text-[var(--text-primary)]">
            Sobre mí
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

        <div className="mt-6 space-y-4 text-[var(--text-secondary)]">
          <p className="leading-7">
            Soy estudiante de Ingeniería de Sistemas de la Universidad de
            Antioquia, actualmente cursando octavo semestre.
          </p>

          <p className="leading-7">
            Mi principal interés está orientado al desarrollo de software,
            especialmente en el área backend, utilizando tecnologías como
            Java, Python y Spring Boot.
          </p>

          <p className="leading-7">
            Durante mi formación académica he trabajado en proyectos
            relacionados con arquitectura de software, bases de datos,
            desarrollo web, calidad de software y metodologías ágiles.
          </p>

          <p className="leading-7">
            En proyectos académicos también he participado en el diseño de
            arquitecturas y en el modelado de bases de datos, buscando
            construir soluciones organizadas, mantenibles y escalables.
          </p>
        </div>

        <div className="mt-8">
          <Button onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </div>
  );
}