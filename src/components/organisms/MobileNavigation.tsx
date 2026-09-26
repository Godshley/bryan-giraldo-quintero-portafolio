"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)] lg:hidden">
      <div className="flex items-center justify-between px-4 py-4">
        <div>
          <p className="font-bold text-[var(--text-primary)]">
            {profile.name}
          </p>

          <p className="text-xs text-[var(--text-secondary)]">
            {profile.title}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg border border-[var(--border)]
            text-xl text-[var(--text-primary)]
            transition hover:border-[var(--primary)]
            hover:text-[var(--primary)]
          "
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-[var(--border)] px-4 py-4">
          <div className="flex flex-col gap-2">
            <a
              href="#perfil"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              Perfil
            </a>

            <a
              href="#conocimientos"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              Conocimientos
            </a>

            <a
              href="#educacion"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              Educación
            </a>

            <a
              href="#portfolio"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              Portafolio
            </a>

            <a
              href="https://github.com/Godshley"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bryan-giraldo-quintero/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}