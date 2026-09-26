import Avatar from "@/components/atoms/Avatar";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContactItem from "@/components/molecules/ContactItem";
import SkillItem from "@/components/molecules/SkillItem";
import {
  extraSkills,
  languages,
  programmingLanguages,
} from "@/data/skills";
import { profile } from "@/data/profile";

export default function LeftSidebar() {
  return (
    <aside className="w-full border-r border-[var(--border)] bg-[var(--surface)] p-6 lg:w-80">
      <div className="flex flex-col items-center text-center">
        <Avatar
          src="/images/profile.jpg"
          alt={`Foto de ${profile.name}`}
          size="lg"
        />

        <h1 className="mt-5 text-xl font-bold text-[var(--text-primary)]">
          {profile.name}
        </h1>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          {profile.title}
        </p>
      </div>

      <div className="mt-10">
        <SectionTitle>Contacto</SectionTitle>

        <div className="mt-5 space-y-4">
          <ContactItem icon="mapPin">{profile.city}</ContactItem>

          <ContactItem icon="mail">{profile.email}</ContactItem>

          <ContactItem icon="phone">{profile.phone}</ContactItem>
        </div>
      </div>

      <div className="mt-10">
        <SectionTitle>Idiomas</SectionTitle>

        <div className="mt-5 space-y-5">
          {languages.map((language) => (
            <SkillItem
              key={language.name}
              name={language.name}
              level={language.level}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionTitle>Lenguajes</SectionTitle>

        <div className="mt-5 space-y-5">
          {programmingLanguages.map((language) => (
            <SkillItem
              key={language.name}
              name={language.name}
              level={language.level}
            />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionTitle>Habilidades</SectionTitle>

        <div className="mt-5 flex flex-wrap gap-2">
          {extraSkills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                bg-[var(--primary-soft)]
                px-3
                py-2
                text-sm
                font-medium
                text-[var(--primary)]
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}