"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import type { SiteSettings } from "@/lib/types";

const projectTypes = [
  "Business consultancy",
  "Investment analysis",
  "Business analysis",
  "Business planning",
  "Business setup",
  "Business restructuring",
  "Project management",
  "Publishing / knowledge packaging",
  "Other",
];

const inputBase =
  "w-full rounded-sm border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate focus:border-brand focus:ring-2 focus:ring-brand";

export function EnquiryForm({ settings }: { settings: SiteSettings }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "done">("idle");

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex h-full flex-col items-start justify-center border border-line bg-cream p-10 sm:p-14">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-7 font-display text-3xl font-semibold tracking-tight text-ink">
          Enquiry received.
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate">
          Thank you, {form.name || "friend"}. A senior member of the team will read your enquiry and reply with an
          honest next step — usually within two working days.
        </p>
        <p className="mt-6 text-sm text-slate">
          Keen to move faster? Email us directly at{" "}
          <a href={`mailto:${settings.email}`} className="font-semibold text-ink underline decoration-brand underline-offset-4">
            {settings.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-line bg-cream p-8 sm:p-10"
      aria-label="Enquiry form"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
            Name <span className="text-brand">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
            Email <span className="text-brand">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={inputBase}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-ink">
            Company / Organisation
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={update("company")}
            placeholder="Name of your company or organisation"
            className={inputBase}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="projectType" className="mb-2 block text-sm font-semibold text-ink">
            Project type <span className="text-brand">*</span>
          </label>
          <select
            id="projectType"
            required
            value={form.projectType}
            onChange={update("projectType")}
            className={`${inputBase} appearance-none`}
          >
            <option value="" disabled>
              Select the closest category
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-2 block text-sm font-semibold text-ink">
            Tell us about the project <span className="text-brand">*</span>
          </label>
          <textarea
            id="description"
            required
            rows={6}
            value={form.description}
            onChange={update("description")}
            placeholder="What are you building, fixing or deciding? A few honest paragraphs are enough — we will read them all."
            className={`${inputBase} resize-y`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-sm border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Something went wrong sending your enquiry. Please try again, or email us directly at {settings.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-8 py-4 text-base font-semibold text-white shadow-[inset_0_-2px_0_rgb(0_0_0/0.18)] transition-colors hover:bg-brand-soft disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {status === "loading" ? "Sending…" : "Send Enquiry"}
      </button>

      <p className="mt-5 text-xs leading-relaxed text-slate">
        We reply to every serious enquiry — usually within two working days. Your details are never shared.
      </p>
    </form>
  );
}