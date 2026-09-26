import Icon from "@/components/atoms/Icon";

interface ContactItemProps {
  icon: "mail" | "phone" | "mapPin";
  children: React.ReactNode;
}

export default function ContactItem({
  icon,
  children,
}: ContactItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
        <Icon name={icon} size={18} />
      </div>

      <span className="text-sm text-[var(--text-secondary)]">
        {children}
      </span>
    </div>
  );
}