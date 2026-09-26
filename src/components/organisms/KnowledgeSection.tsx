import SectionTitle from "@/components/atoms/SectionTitle";
import KnowledgeCard from "@/components/molecules/KnowledgeCard";
import { knowledge } from "@/data/knowledge";

export default function KnowledgeSection() {
  return (
    <section
      id="conocimientos"
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
    >
      <SectionTitle>Conocimientos</SectionTitle>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {knowledge.map((item) => (
          <KnowledgeCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}