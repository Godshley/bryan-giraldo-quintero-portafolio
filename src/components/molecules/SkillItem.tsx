import ProgressBar from "@/components/atoms/ProgressBar";

interface SkillItemProps {
  name: string;
  level: number;
}

export default function SkillItem({
  name,
  level,
}: SkillItemProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium text-[var(--text-primary)]">
          {name}
        </span>

        <span className="text-sm text-[var(--text-secondary)]">
          {level}%
        </span>
      </div>

      <ProgressBar value={level} />
    </div>
  );
}