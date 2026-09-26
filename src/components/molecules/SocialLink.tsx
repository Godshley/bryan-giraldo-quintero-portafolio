interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function SocialLink({
  href,
  label,
  children,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        bg-[var(--surface)]
        text-[var(--text-secondary)]
        shadow-sm
        transition
        duration-200
        hover:bg-[var(--primary)]
        hover:text-white
        hover:shadow-md
      "
    >
      {children}
    </a>
  );
}