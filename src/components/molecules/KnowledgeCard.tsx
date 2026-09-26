import Icon from "@/components/atoms/Icon";

interface KnowledgeCardProps {
  icon: "code" | "briefcase" | "graduation";
  title: string;
  description: string;
}

export default function KnowledgeCard({
  icon,
  title,
  description,
}: KnowledgeCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
        <Icon name={icon} size={24} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-[var(--text-primary)]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
        {description}
      </p>
    </article>
  );
}