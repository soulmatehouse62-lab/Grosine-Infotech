import { services } from "@/data/services";
import { HeaderNav, type MegaMenuItem } from "./HeaderNav";
import { Logo } from "./Logo";

/**
 * Server component: resolves the logo and service list at build time and
 * hands plain, serialisable props to the interactive navigation.
 */
export function Header() {
  const megaItems: MegaMenuItem[] = services.map((service) => ({
    href: `/services/${service.slug}/`,
    title: service.shortTitle,
    summary: service.summary,
    icon: <service.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />,
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur-md">
      <HeaderNav logo={<Logo />} megaItems={megaItems} />
    </header>
  );
}
