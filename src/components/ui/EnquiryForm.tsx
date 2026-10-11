"use client";

import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { isPlaceholder, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { Button } from "./Button";

// Read at build time and inlined into the static bundle. See .env.example.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
const FORM_ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? "";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

/** "sent" = delivered to the endpoint, "handoff" = opened WhatsApp or email. */
type Status = "idle" | "submitting" | "sent" | "handoff" | "error";

const emptyFields: Fields = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  const phoneDigits = fields.phone.replace(/\D/g, "");

  if (fields.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (
    !/^\+?[\d\s()-]+$/.test(fields.phone.trim()) ||
    phoneDigits.length < 10 ||
    phoneDigits.length > 15
  ) {
    errors.phone = "Please enter a valid phone number (at least 10 digits).";
  }
  if (!fields.service) {
    errors.service = "Please choose a service.";
  }
  if (fields.message.trim().length < 10) {
    errors.message = "Please tell us a little about what you need.";
  }
  return errors;
}

function toPlainText(fields: Fields): string {
  return [
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Phone: ${fields.phone.trim()}`,
    `Service: ${fields.service}`,
    "",
    fields.message.trim(),
  ].join("\n");
}

const fieldClasses =
  "block w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-muted/70 transition focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-600/20 focus:outline-none aria-invalid:border-red-600";

type EnquiryFormProps = {
  serviceOptions: string[];
  /** Pre-select a service, e.g. on a service detail page. */
  defaultService?: string;
  submitLabel?: string;
};

export function EnquiryForm({
  serviceOptions,
  defaultService = "",
  submitLabel = "Get My Free Quote",
}: EnquiryFormProps) {
  const id = useId();
  const [fields, setFields] = useState<Fields>({
    ...emptyFields,
    service: defaultService,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  // Honeypot: real visitors never see or fill this field.
  const [botField, setBotField] = useState("");

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(fields);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Array<keyof Fields>)[0];
    if (firstInvalid) {
      document.getElementById(`${id}-${firstInvalid}`)?.focus();
      return;
    }
    if (botField) {
      setStatus("sent");
      return;
    }

    const subject = `Website enquiry: ${fields.service}`;

    // No endpoint configured: hand the message to WhatsApp, or to the
    // visitor's email app while the WhatsApp number is still a placeholder.
    if (!FORM_ENDPOINT) {
      const text = toPlainText(fields);
      if (!isPlaceholder(site.whatsapp)) {
        window.open(
          whatsappUrl(`Hi ${site.name}, I have an enquiry.\n\n${text}`),
          "_blank",
          "noopener,noreferrer",
        );
      } else {
        window.location.href = mailtoUrl(subject, text);
      }
      setStatus("handoff");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...(FORM_ACCESS_KEY ? { access_key: FORM_ACCESS_KEY } : {}),
          subject,
          from_name: `${site.name} website`,
          name: fields.name.trim(),
          email: fields.email.trim(),
          phone: fields.phone.trim(),
          service: fields.service,
          message: fields.message.trim(),
        }),
      });
      const result: { success?: boolean } = await response
        .json()
        .catch(() => ({}));
      if (!response.ok || result.success === false) {
        throw new Error(`Form endpoint responded with ${response.status}`);
      }
      setStatus("sent");
      setFields({ ...emptyFields, service: defaultService });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "handoff") {
    return (
      <div role="status" className="py-6 text-center">
        <CircleCheck
          className="mx-auto size-12 text-primary-600"
          aria-hidden="true"
        />
        <h3 className="mt-4 text-xl font-bold">
          {status === "sent" ? "Thank you, we've got it" : "Almost there"}
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-muted">
          {status === "sent"
            ? "Your enquiry has been sent. We'll get back to you shortly with the next steps."
            : "We've opened your enquiry as a ready-to-send message. Press send there and it will reach our team."}
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          {status === "sent" ? "Send another enquiry" : "Back to the form"}
        </Button>
      </div>
    );
  }

  const describe = (key: keyof Fields) =>
    errors[key] ? `${id}-${key}-error` : undefined;

  const errorText = (key: keyof Fields) =>
    errors[key] && (
      <p id={`${id}-${key}-error`} className="mt-1.5 text-sm text-red-700">
        {errors[key]}
      </p>
    );

  const labelClasses = "mb-1.5 block text-sm font-semibold text-ink";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor={`${id}-name`} className={labelClasses}>
          Full name
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          value={fields.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describe("name")}
          className={fieldClasses}
        />
        {errorText("name")}
      </div>

      <div>
        <label htmlFor={`${id}-phone`} className={labelClasses}>
          Phone number
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={fields.phone}
          onChange={(event) => update("phone", event.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={describe("phone")}
          className={fieldClasses}
        />
        {errorText("phone")}
      </div>

      <div>
        <label htmlFor={`${id}-email`} className={labelClasses}>
          Email address
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={fields.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describe("email")}
          className={fieldClasses}
        />
        {errorText("email")}
      </div>

      <div>
        <label htmlFor={`${id}-service`} className={labelClasses}>
          Service you need
        </label>
        <select
          id={`${id}-service`}
          name="service"
          required
          value={fields.service}
          onChange={(event) => update("service", event.target.value)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={describe("service")}
          className={cn(fieldClasses, "min-h-[3.125rem]")}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errorText("service")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${id}-message`} className={labelClasses}>
          How can we help?
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          required
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describe("message")}
          placeholder="Tell us about your business and what you'd like to achieve."
          className={cn(fieldClasses, "resize-y")}
        />
        {errorText("message")}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-company-website`}>Leave this field empty</label>
        <input
          id={`${id}-company-website`}
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={botField}
          onChange={(event) => setBotField(event.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        {status === "error" && (
          <p
            role="alert"
            className="mb-4 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              Sorry, your message could not be sent. Please try again, or reach
              us directly on{" "}
              <a href={whatsappUrl()} className="font-semibold underline">
                WhatsApp
              </a>
              .
            </span>
          </p>
        )}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              {submitLabel}
              <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
        <p className="mt-3 text-center text-xs text-muted">
          Free and without obligation. We only use your details to reply to
          this enquiry.
        </p>
      </div>
    </form>
  );
}
