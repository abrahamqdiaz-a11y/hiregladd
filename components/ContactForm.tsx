"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { contact } from "@/content/en/site";

/**
 * Netlify Forms.
 * - Netlify can't see forms rendered by React at runtime, so the same form is
 *   declared in plain HTML at public/__forms.html. Netlify finds it there at deploy.
 *   If you add or rename a field here, change it in public/__forms.html too.
 * - With JavaScript, we POST to /__forms.html and then go to /thank-you/.
 * - Without JavaScript, the browser posts the form straight to /thank-you/,
 *   which Netlify also accepts.
 * - "bot-field" is the honeypot: real people never see or fill it.
 */
export const FORM_NAME = "contact";

const input =
  "mt-2 block w-full rounded-lg border-2 border-gray-400 bg-white px-4 py-3 text-lg text-ink placeholder:text-gray-500 focus:border-accent focus:outline-none focus-visible:outline-3 focus-visible:outline-accent";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-lg font-semibold">
      {children}
      <span className="ml-1 text-accent" aria-hidden="true">*</span>
      <span className="sr-only"> ({contact.form.required})</span>
    </label>
  );
}

export function ContactForm({ industries }: { industries: string[] }) {
  const f = contact.form;
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

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
      router.push("/thank-you/");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      action="/thank-you/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">{f.name}</Label>
          <input id="name" name="name" type="text" required autoComplete="name" className={input} />
        </div>
        <div>
          <Label htmlFor="company">{f.company}</Label>
          <input id="company" name="company" type="text" required autoComplete="organization" className={input} />
        </div>
        <div>
          <Label htmlFor="industry">{f.industry}</Label>
          <select id="industry" name="industry" required defaultValue="" className={input}>
            <option value="" disabled>{f.industryPrompt}</option>
            {industries.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
            <option value={f.industryOther}>{f.industryOther}</option>
          </select>
        </div>
        <div>
          <Label htmlFor="team-size">{f.teamSize}</Label>
          <select id="team-size" name="team-size" required defaultValue="" className={input}>
            <option value="" disabled>{f.teamSizePrompt}</option>
            {f.teamSizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="phone">{f.phone}</Label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={input} />
        </div>
        <div>
          <Label htmlFor="email">{f.email}</Label>
          <input id="email" name="email" type="email" required autoComplete="email" className={input} />
        </div>
      </div>

      <div>
        <Label htmlFor="handoff">{f.handoff}</Label>
        <p id="handoff-hint" className="mt-1 text-base text-muted">{f.handoffHint}</p>
        <textarea
          id="handoff"
          name="handoff"
          required
          rows={4}
          aria-describedby="handoff-hint"
          className={input}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg border-2 border-red-700 bg-red-50 p-4 text-base font-medium text-red-800">
          {f.error}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-8 py-3 text-lg font-semibold text-white hover:bg-accent-dark disabled:opacity-70"
        >
          {status === "sending" ? f.sending : f.submit}
        </button>
        <p className="text-base text-muted">
          {f.privacyNote}{" "}
          <Link href="/privacy/" className="font-medium text-accent underline underline-offset-2">
            {f.privacyLink}
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
