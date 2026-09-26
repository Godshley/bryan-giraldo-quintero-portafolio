interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        rounded-lg
        bg-[var(--primary)]
        px-6
        py-3
        font-semibold
        text-white
        transition
        duration-200
        hover:bg-[var(--primary-light)]
        hover:shadow-md
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--primary)]
        focus:ring-offset-2
      "
    >
      {children}
    </button>
  );
}