"use client";

import { useState } from "react";
import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import SectionTitle from "@/components/atoms/SectionTitle";
import ProfileModal from "@/components/molecules/ProfileModal";
import { profile } from "@/data/profile";

export default function ProfileSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="perfil"
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
    >
      <SectionTitle>Perfil</SectionTitle>

      <div className="mt-8 flex flex-col items-center gap-8 md:flex-row">
        <Avatar
          src="/images/profile.jpg"
          alt="Foto de Bryan Giraldo Quintero"
          size="lg"
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">
            {profile.name}
          </h1>

          <p className="mt-2 text-lg font-medium text-[var(--primary)]">
            {profile.title}
          </p>

          <p className="mt-5 max-w-3xl leading-7 text-[var(--text-secondary)]">
            {profile.description}
          </p>

          <div className="mt-6">
            <Button onClick={() => setIsModalOpen(true)}>
              Ver más
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProfileModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}