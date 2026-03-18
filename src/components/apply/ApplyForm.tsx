"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  currentSituation: string;
  supervision: string;
}

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyAGohOTYu96rDRWgylkdlCL0clrjcBmlAzEhROw-N_S5PVkpnB-GyPSihKRgIINWSt/exec";

const inputBase =
  "w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-[border-color,box-shadow] duration-200";

const inputError =
  "border-red-500 focus:border-red-500 focus:ring-red-500/20";

export default function ApplyForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    currentSituation: "",
    supervision: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generalError, setGeneralError] = useState("");

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.dob) {
      errs.dob = "Date of birth is required";
    }
    if (!formData.currentSituation) {
      errs.currentSituation = "Please select your current situation";
    }
    if (!formData.supervision) {
      errs.supervision = "Please indicate your supervision status";
    }

    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setGeneralError("");

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          fullName: formData.fullName,
          dob: formData.dob,
          phone: formData.phone,
          email: formData.email,
          currentSituation: formData.currentSituation,
          supervision: formData.supervision,
        }),
      });
      // no-cors = opaque response — resolve without throw means success
      setIsSubmitted(true);
    } catch {
      setGeneralError(
        "Something went wrong. Please call us at 727-563-6540 to complete your application."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function handleRadio(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-libre)] mb-3">
          Application Submitted!
        </h2>
        <p className="text-muted text-lg max-w-md mx-auto mb-8">
          Thank you for your interest. We&apos;ll review your application and
          contact you within 1-2 business days.
        </p>
        <Button href="/" variant="primary">
          Return Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Your full legal name"
          value={formData.fullName}
          onChange={handleChange}
          className={`${inputBase} ${errors.fullName ? inputError : ""}`}
        />
        {errors.fullName && (
          <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 000-0000"
          value={formData.phone}
          onChange={handleChange}
          className={`${inputBase} ${errors.phone ? inputError : ""}`}
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          className={`${inputBase} ${errors.email ? inputError : ""}`}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label
          htmlFor="dob"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Date of Birth <span className="text-red-400">*</span>
        </label>
        <input
          id="dob"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          className={`${inputBase} ${errors.dob ? inputError : ""}`}
        />
        {errors.dob && (
          <p className="text-red-400 text-xs mt-1">{errors.dob}</p>
        )}
      </div>

      {/* Current Situation — Radio */}
      <div>
        <p className="block text-sm font-medium text-foreground mb-2">
          Current Situation <span className="text-red-400">*</span>
        </p>
        <div className="grid grid-cols-2 gap-3">
          {["Employed", "Looking for Work"].map((option) => {
            const selected = formData.currentSituation === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => handleRadio("currentSituation", option)}
                className={`rounded-lg border px-4 py-3 text-sm font-medium cursor-pointer text-left transition-[border-color,background-color] duration-200 ${
                  selected
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border bg-bg-elevated text-muted hover:border-border-hover"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        {errors.currentSituation && (
          <p className="text-red-400 text-xs mt-1">{errors.currentSituation}</p>
        )}
      </div>

      {/* Supervision Status — Radio */}
      <div>
        <p className="block text-sm font-medium text-foreground mb-2">
          Currently Under Supervision?{" "}
          <span className="text-red-400">*</span>
        </p>
        <div className="grid grid-cols-2 gap-3">
          {["Yes", "No"].map((option) => {
            const selected = formData.supervision === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => handleRadio("supervision", option)}
                className={`rounded-lg border px-4 py-3 text-sm font-medium cursor-pointer text-left transition-[border-color,background-color] duration-200 ${
                  selected
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border bg-bg-elevated text-muted hover:border-border-hover"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        {errors.supervision && (
          <p className="text-red-400 text-xs mt-1">{errors.supervision}</p>
        )}
      </div>

      {/* General Error */}
      {generalError && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
          <p className="text-red-400 text-sm">{generalError}</p>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className={`w-full ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
