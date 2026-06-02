import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import CardSection from "../components/CardSection";
import SkillCard from "../components/SkillCard";
import { projects } from "../../data/projects";
import { skills } from "../../data/skills";

const highlights = [
  { label: "Years coding", value: "4+" },
  { label: "Projects shipped", value: "18" },
  { label: "Focus", value: "Full stack" },
];

function Homepage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-left text-[var(--text)]">
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

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-md border border-[var(--accent-border)] bg-[var(--accent-bg)] px-3 py-1 text-sm font-semibold text-[var(--accent)]">
              Available for software engineering roles
            </p>
            <h1 className="max-w-3xl text-left text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--text-h)] sm:text-6xl">
              I build reliable web products with thoughtful user experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8">
              I am a software engineer focused on turning ambiguous ideas into
              polished, maintainable applications. I care about clean
              interfaces, practical architecture, and shipping work that people
              can actually use.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-md bg-[var(--text-h)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
              >
                View projects
              </Link>
              <Link
                to="/aboutme"
                className="inline-flex items-center justify-center rounded-md border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text-h)] transition hover:bg-[var(--social-bg)]"
              >
                More about me
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-[var(--border)] bg-[var(--social-bg)] p-5 shadow-[var(--shadow)]">
            <div className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Currently building
              </p>
              <h2 className="mt-4 text-left text-2xl font-semibold text-[var(--text-h)]">
                Practical tools for career growth and developer storytelling.
              </h2>
              <p className="mt-4 leading-7">
                My recent work combines React interfaces, structured product
                thinking, and AI-assisted workflows into software that feels
                direct, calm, and useful.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-4"
                >
                  <p className="text-2xl font-semibold text-[var(--text-h)]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase leading-5 tracking-[0.12em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <CardSection
        background={"bg-[var(--social-bg)]"}
        title={"Featured Projects"}
        link={"projects"}
        linkName={"See all projects"}
      >
        {projects.map((project) => (
          <ProjectCard
            slug={project.slug}
            title={project.title}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </CardSection>

      <CardSection background={""} title={"Skills"}>
        {skills.map((skill) => (
          <SkillCard icon={skill.icon} title={skill.title} />
        ))}
      </CardSection>
    </main>
  );
}

export default Homepage;
