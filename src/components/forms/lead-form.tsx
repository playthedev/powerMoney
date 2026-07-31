"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { leadFormSchema, type LeadFormValues } from "@/lib/schemas";
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
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

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
          Our team will reach out within 1 business day.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-5"
          onClick={() => setStatus("idle")}
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
          <label className="mb-1.5 block text-sm font-medium text-navy">
            Full name
          </label>
          <Input placeholder="Your name" {...register("name")} />
          {errors.name && (
            <p className="mt-1 text-xs text-danger">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">
            Phone number
          </label>
          <Input placeholder="98765 43210" {...register("phone")} />
          {errors.phone && (
            <p className="mt-1 text-xs text-danger">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">
            Email address
          </label>
          <Input type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && (
            <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">
            City <span className="text-foreground/40">(optional)</span>
          </label>
          <Input placeholder="Bengaluru" {...register("city")} />
        </div>
      </div>

      {interestOptions && interestOptions.length > 0 && (
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">
            I&apos;m interested in
          </label>
          <Select {...register("interest")}>
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
          <label className="mb-1.5 block text-sm font-medium text-navy">
            Message <span className="text-foreground/40">(optional)</span>
          </label>
          <Textarea rows={3} placeholder="Tell us a bit more…" {...register("message")} />
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl bg-danger-light px-4 py-3 text-sm text-danger">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMessage}
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
