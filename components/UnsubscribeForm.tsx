"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

/**
 * Netlify Forms, same setup as the contact form (see components/ContactForm.tsx).
 * Declared for Netlify in public/__forms.html; keep the field names in sync.
 * Links in emails can prefill the address: /unsubscribe/?email=name@example.com
 */
export const UNSUBSCRIBE_FORM = "unsubscribe";

const input =
  "mt-2 block w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 text-lg text-ink placeholder:text-gray-500 focus:border-accent focus:outline-none focus-visible:outline-3 focus-visible:outline-accent";

const REASONS = [
  "I don't want these emails",
  "It's not relevant to my business",
  "I get too many emails",
  "Other",
];

export function UnsubscribeForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  useEffect(() => {
    const fromLink = new URLSearchParams(window.location.search).get("email");
    if (fromLink) setEmail(fromLink);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      router.push("/unsubscribe/done/");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name={UNSUBSCRIBE_FORM}
      method="POST"
      action="/unsubscribe/done/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={UNSUBSCRIBE_FORM} />
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="unsub-email" className="block text-lg font-semibold">
          Your email address
          <span className="ml-1 text-accent" aria-hidden="true">*</span>
          <span className="sr-only"> (Required)</span>
        </label>
        <input
          id="unsub-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={input}
        />
      </div>

      <div>
        <label htmlFor="unsub-reason" className="block text-lg font-semibold">
          Why are you unsubscribing? <span className="font-normal text-muted">(optional)</span>
        </label>
        <select id="unsub-reason" name="reason" defaultValue="" className={input}>
          <option value="">Choose one</option>
          {REASONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg border-2 border-red-700 bg-red-50 p-4 text-base font-medium text-red-800">
          Something went wrong and your request wasn&apos;t sent. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-8 py-3 text-lg font-bold text-white hover:bg-accent-dark disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Unsubscribe"}
      </button>
    </form>
  );
}
