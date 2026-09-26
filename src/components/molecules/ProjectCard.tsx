"use client";

import Image from "next/image";
import Button from "@/components/atoms/Button";

interface ProjectCardProps {
  name: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  onLearnMore: () => void;
}

export default function ProjectCard({
  name,
  shortDescription,
  technologies,
  image,
  onLearnMore,
}: ProjectCardProps) {
  return (
    <article className="w-full shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md md:w-[360px]">
      <div className="relative h-48 overflow-hidden bg-[var(--primary-soft)]">
        <Image
          src={image}
          alt={`Imagen del proyecto ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--text-primary)]">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
          {shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-medium text-[var(--primary)]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Button onClick={onLearnMore}>Ver más</Button>
        </div>
      </div>
    </article>
  );
}