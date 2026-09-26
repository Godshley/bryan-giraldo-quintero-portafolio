import Icon from "@/components/atoms/Icon";

interface EducationItemProps {
  institution: string;
  program: string;
  period: string;
  description: string;
}

export default function EducationItem({
  institution,
  program,
  period,
  description,
}: EducationItemProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
          <Icon name="graduation" size={22} />
        </div>

        <div className="min-w-0">
          <h3 className="font-bold text-[var(--text-primary)]">
            {institution}
          </h3>

          <p className="mt-1 font-medium text-[var(--primary)]">
            {program}
          </p>

          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {period}
          </p>

          <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}