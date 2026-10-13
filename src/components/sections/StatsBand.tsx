import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/data/stats";

export function StatsBand() {
  return (
    <section aria-label="Grosine Infotech in numbers" className="relative z-10">
      <Container>
        <dl className="on-dark relative grid grid-cols-2 gap-y-8 overflow-hidden rounded-[2rem] bg-primary-950 px-4 py-9 text-center shadow-lift sm:px-8 lg:grid-cols-4 lg:py-12">
          <div aria-hidden="true" className="bg-mesh-dark absolute inset-0" />
          <div aria-hidden="true" className="bg-grid absolute inset-0 text-white/[0.07]" />
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative flex flex-col-reverse justify-end gap-2 px-2 lg:border-l lg:border-white/10 lg:first:border-l-0"
            >
              <dt className="text-sm font-medium text-primary-100/85 sm:text-base">
                {stat.label}
              </dt>
              <dd className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
