import BrandIcon from "@/components/atoms/BrandIcon";
import SocialLink from "@/components/molecules/SocialLink";

export default function RightSidebar() {
  return (
    <aside className="flex w-full flex-col items-center gap-4 border-l border-[var(--border)] bg-[var(--background)] p-4 lg:w-20">
      <SocialLink
        href="https://github.com/Godshley"
        label="GitHub"
      >
        <BrandIcon name="github" size={20} />
      </SocialLink>

      <SocialLink
        href="https://www.linkedin.com/in/bryan-giraldo-quintero/"
        label="LinkedIn"
      >
        <BrandIcon name="linkedin" size={20} />
      </SocialLink>
      <SocialLink
  href="https://www.youtube.com/bryangiraldoq"
  label="YouTube"
>
  <BrandIcon name="youtube" size={20} />
</SocialLink>
    </aside>
  );
}