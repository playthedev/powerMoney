"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { leadFormSchema, type LeadFormValues } from "@/lib/schemas";
import { buildLeadWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Input, Select, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LeadForm({
  interestOptions,
  defaultInterest,
  submitLabel = "Request a Callback",
  showMessage = true,
}: {
  interestOptions?: string[];
  defaultInterest?: string;
  submitLabel?: string;
  showMessage?: boolean;
}) {
  const formId = React.useId();
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [whatsappUrl, setWhatsappUrl] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      interest: defaultInterest ?? interestOptions?.[0] ?? "",
    },
  });

  async function onSubmit(values: LeadFormValues) {
    setStatus("loading");
    setErrorMessage("");

    // Open WhatsApp as the very first thing, synchronously, so browsers still
    // treat it as part of the user's click (not a blocked popup). It's a plain
    // wa.me deep link — no API or credentials needed, the visitor just has to
    // tap Send once WhatsApp opens. (window.open's return value isn't a
    // reliable signal here — with noopener it's always null even on success —
    // so we always keep the link around as a visible fallback below.)
    const url = buildWhatsAppUrl(buildLeadWhatsAppMessage(values));
    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset({ interest: defaultInterest ?? interestOptions?.[0] ?? "", name: "", email: "", phone: "", city: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-growth/20 bg-growth-light px-6 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-growth" />
        <h3 className="mt-4 font-display text-lg font-bold text-navy">
          Thanks — we&apos;ve got your details
        </h3>
        <p className="mt-1.5 max-w-sm text-sm text-foreground/60">
          We&apos;ve opened WhatsApp with your details — just hit send there, and our team will reach out within 1 business day.
        </p>
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm font-semibold text-growth underline underline-offset-2 hover:text-growth/80"
          >
            Didn&apos;t see the WhatsApp tab? Open it again
          </a>
        )}
        <Button
          variant="outline"
          size="sm"
          className="mt-5"
          onClick={() => {
            setStatus("idle");
            setWhatsappUrl(null);
          }}
        >
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("company")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="mb-1.5 block text-sm font-medium text-navy">
            Full name
          </label>
          <Input placeholder="Your name" id={`${formId}-name`} {...register("name")} />
          {errors.name && (
            <p className="mt-1 text-xs text-danger">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="mb-1.5 block text-sm font-medium text-navy">
            Phone number
          </label>
          <Input placeholder="98765 43210" id={`${formId}-phone`} {...register("phone")} />
          {errors.phone && (
            <p className="mt-1 text-xs text-danger">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-email`} className="mb-1.5 block text-sm font-medium text-navy">
            Email address
          </label>
          <Input type="email" placeholder="you@example.com" id={`${formId}-email`} {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-city`} className="mb-1.5 block text-sm font-medium text-navy">
            City <span className="text-foreground/40">(optional)</span>
          </label>
          <Input placeholder="Bengaluru" id={`${formId}-city`} {...register("city")} />
        </div>
      </div>

      {interestOptions && interestOptions.length > 0 && (
        <div>
          <label htmlFor={`${formId}-interest`} className="mb-1.5 block text-sm font-medium text-navy">
            I&apos;m interested in
          </label>
          <Select id={`${formId}-interest`} {...register("interest")}>
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
        </div>
      )}

      {showMessage && (
        <div>
          <label htmlFor={`${formId}-message`} className="mb-1.5 block text-sm font-medium text-navy">
            Message <span className="text-foreground/40">(optional)</span>
          </label>
          <Textarea rows={3} placeholder="Tell us a bit more…" id={`${formId}-message`} {...register("message")} />
        </div>
      )}

      {status === "error" && (
        <div role="alert" className="rounded-xl bg-danger-light px-4 py-3 text-sm text-danger">
          <div className="flex items-start gap-2">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
            {errorMessage}
          </div>
          {whatsappUrl && (
            <p className="mt-2 pl-6">
              We&apos;ve still opened WhatsApp with your details — please hit send there (or{" "}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
                open it again
              </a>
              ) so we don&apos;t miss your enquiry.
            </p>
          )}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {submitLabel}
      </Button>

      <p className="text-center text-xs text-foreground/40">
        We&apos;ll only use these details to contact you about your enquiry.
      </p>
    </form>
  );
}
