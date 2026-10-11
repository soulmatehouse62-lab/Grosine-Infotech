import { site } from "@/data/site";

/**
 * True while a value in site.ts is still one of the shipped placeholders
 * (zeroed phone number, example.com email, or a bare social platform URL).
 * Placeholders are still displayed, but kept out of structured data.
 */
export function isPlaceholder(value: string): boolean {
  if (!value) return true;
  if (/0{5,}|example\.com|TODO/i.test(value)) return true;
  if (/^https?:\/\//.test(value)) {
    try {
      return new URL(value).pathname.replace(/\/$/, "") === "";
    } catch {
      return true;
    }
  }
  return false;
}

export function whatsappUrl(message: string = site.whatsappGreeting): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string, body: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
export const emailHref = `mailto:${site.email}`;

/** "10:00" -> "10:00 AM" */
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${period}`;
}
