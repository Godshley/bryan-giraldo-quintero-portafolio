export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 text-center">
      <p className="text-sm text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Bryan Giraldo Quintero. Todos los
        derechos reservados.
      </p>

      <p className="mt-2 text-xs text-[var(--text-secondary)]">
        Estudiante de Ingeniería de Sistemas · Universidad de Antioquia
      </p>
    </footer>
  );
}