import { Link } from "react-router-dom";

function TitleBar() {
  return (
    <section className="border-b border-[var(--border)] px-6 py-8 sm:px-10 lg:px-14">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link
          to="/"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-h)]"
        >
          Noble Miles
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/aboutme"
            className="rounded-md px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--social-bg)] hover:text-[var(--text-h)]"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="rounded-md px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--social-bg)] hover:text-[var(--text-h)]"
          >
            Projects
          </Link>
          <Link
            to="/chat"
            className="rounded-md border border-[var(--accent-border)] bg-[var(--accent-bg)] px-3 py-2 text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--accent)]"
          >
            Chat
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default TitleBar;
