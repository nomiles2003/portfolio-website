function CardSection({ children, background, title }) {
  return (
    <section
      className={`border-y border-[var(--border)] ${background} px-6 py-14 sm:px-10 lg:px-14`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-3xl font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              {title}
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{children}</div>
      </div>
    </section>
  );
}

export default CardSection;
