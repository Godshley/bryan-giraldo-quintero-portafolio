import SectionTitle from "@/components/atoms/SectionTitle";
import EducationItem from "@/components/molecules/EducationItem";
import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section
      id="educacion"
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
    >
      <SectionTitle>Educación</SectionTitle>

      <div className="mt-8 space-y-6">
        {education.map((item) => (
          <EducationItem
            key={`${item.institution}-${item.program}`}
            institution={item.institution}
            program={item.program}
            period={item.period}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}