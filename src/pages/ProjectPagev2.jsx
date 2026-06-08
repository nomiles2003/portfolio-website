import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import PageNotFound from "./PageNotFound";
import TitleBar from "../components/TitleBar";

function getSourceCodeUrl(project) {
  return (
    project.sourceCode ||
    project.sourceUrl ||
    project.github ||
    project.repository ||
    ""
  );
}

function ProjectImage({ image, title }) {
  if (!image || image === "placeholder") {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--social-bg)] p-6 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Project image
          </p>
          <p className="mt-3 max-w-md text-sm leading-6">
            Add an image path or URL to this project in{" "}
            <code>data/projects.js</code> to show a preview here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={`${title} project preview`}
      className="aspect-[16/9] w-full rounded-lg border border-[var(--border)] object-cover"
    />
  );
}

function ProjectPagev2() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <PageNotFound />;
  }

  const sourceCodeUrl = getSourceCodeUrl(project);

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-8 text-left text-[var(--text)] sm:px-10 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <TitleBar />

        <section className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <h1 className="text-left text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--text-h)] sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8">{project.description}</p>
          </div>

          <aside className="rounded-lg border border-[var(--border)] bg-[var(--social-bg)] p-5">
            <h2 className="text-left text-xl font-semibold text-[var(--text-h)]">
              Tech stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-[var(--code-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--text-h)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <ProjectImage image={project.image} title={project.title} />
        </section>

        <section className="mt-8 rounded-lg border border-[var(--border)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Source code
          </p>
          {/* <h2 className="mt-3 text-left text-2xl font-semibold text-[var(--text-h)]">
            Repository
          </h2> */}
          {/* <p className="mt-3 leading-7">
            This area is reserved for the project source. Add a{" "}
            <code>sourceCode</code> field to the matching project object in{" "}
            <code>data/projects.js</code>.
          </p> */}

          {sourceCodeUrl ? (
            <a
              href={sourceCodeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-md bg-[var(--text-h)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
            >
              View source code
            </a>
          ) : (
            <div className="mt-5 rounded-md border border-dashed border-[var(--border)] bg-[var(--social-bg)] p-4 text-sm">
              No source-code link has been added for this project yet.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default ProjectPagev2;
