import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { whatsappUrl } from "@/lib/contact";

/** Floating WhatsApp shortcut, shown on small screens only. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-30 flex size-14 items-center justify-center rounded-full bg-[#0f7a41] text-white shadow-lift transition hover:scale-105 md:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
