import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/data/stats";

export function StatsBand() {
  return (
    <section aria-label="Grosine Infotech in numbers" className="relative z-10">
      <Container>
        <dl className="on-dark relative grid grid-cols-2 gap-y-8 overflow-hidden rounded-3xl bg-primary-800 px-4 py-9 text-center shadow-lift sm:px-8 lg:grid-cols-4 lg:py-11">
          <div
            aria-hidden="true"
            className="bg-dots absolute inset-0 text-white/[0.07]"
          />
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative flex flex-col-reverse justify-end gap-1.5 px-2 lg:border-l lg:border-white/15 lg:first:border-l-0"
            >
              <dt className="text-sm font-medium text-primary-100/85 sm:text-base">
                {stat.label}
              </dt>
              <dd className="font-display text-4xl font-extrabold text-accent-400 sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
