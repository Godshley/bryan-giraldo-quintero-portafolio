interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--border)]">
      <div
        className="h-full rounded-full bg-[var(--primary)] transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}