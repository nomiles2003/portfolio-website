function SkillCard({ icon, title }) {
  return (
    <article
      key={title}
      className="rounded-lg border border-[var(--border)] bg-[var(--social-bg)] p-5"
    >
      <h2>{icon}</h2>
      <h3 className="text-xl font-semibold text-[var(--text-h)]">{title}</h3>
    </article>
  );
}

export default SkillCard;
