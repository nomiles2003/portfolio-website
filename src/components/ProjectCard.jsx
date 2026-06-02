import { Link } from "react-router-dom";

function ProjectCard({ slug, title, description, stack }) {
  return (
    <article
      key={title}
      className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-5"
    >
      {/* <h3 className="text-xl font-semibold text-[var(--text-h)]">{title}</h3> */}
      <Link
        to={`/${slug}`}
        className="text-xl font-semibold text-[var(--text-h)] hover:underline"
      >
        {title}
      </Link>
      <p className="mt-3 min-h-28 leading-7">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-md bg-[var(--code-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--text-h)]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
