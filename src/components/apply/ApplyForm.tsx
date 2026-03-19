"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

// ---------------------------------------------------------------
// Google Apps Script endpoint
// ---------------------------------------------------------------
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyAGohOTYu96rDRWgylkdlCL0clrjcBmlAzEhROw-N_S5PVkpnB-GyPSihKRgIINWSt/exec";

// ---------------------------------------------------------------
// Shared style tokens
// ---------------------------------------------------------------
const inputBase =
  "w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-[border-color,box-shadow] duration-200";

const inputErr =
  "border-red-500 focus:border-red-500 focus:ring-red-500/20";

const labelBase = "block text-sm font-medium text-foreground mb-1.5";

const sectionDivider = "border-none border-t-2 border-border my-10 pt-0";

// ---------------------------------------------------------------
// Form state interface
// ---------------------------------------------------------------
interface FormData {
  // Client Information
  fullName: string;
  dob: string;
  phone: string;
  email: string;
  currentAddress: string;
  // Supervision Status
  supervision: string;
  referringAgency: string;
  officerContact: string;
  // Employment / Income
  employer: string;
  position: string;
  monthlyIncome: string;
  workSchedule: string;
  // Housing Details
  moveInDate: string;
  emergencyContact: string;
  // Acknowledgment & Signature
  ackRules: boolean;
  signature: string;
  signatureDate: string;
}

// ---------------------------------------------------------------
// Helper components
// ---------------------------------------------------------------
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-400 text-xs mt-1">{message}</p>;
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-foreground font-[family-name:var(--font-libre)] mb-1">
        {title}
      </h3>
      <p className="text-muted text-sm">{subtitle}</p>
    </div>
  );
}

// ---------------------------------------------------------------
// Main component
// ---------------------------------------------------------------
export default function ApplyForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dob: "",
    phone: "",
    email: "",
    currentAddress: "",
    supervision: "",
    referringAgency: "",
    officerContact: "",
    employer: "",
    position: "",
    monthlyIncome: "",
    workSchedule: "",
    moveInDate: "",
    emergencyContact: "",
    ackRules: false,
    signature: "",
    signatureDate: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData | "general", string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  // Auto-fill today's date into signatureDate on mount
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, signatureDate: today }));
  }, []);

  // ------------------------------------------------------------------
  // Input handlers
  // ------------------------------------------------------------------
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormData];
        return next;
      });
    }
  }

  function handleRadio(name: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  // ------------------------------------------------------------------
  // Validation
  // ------------------------------------------------------------------
  function validate(): Partial<Record<keyof FormData, string>> {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.dob) errs.dob = "Please enter your date of birth.";
    if (!formData.phone.trim()) errs.phone = "Please enter a valid phone number.";
    if (!formData.currentAddress.trim())
      errs.currentAddress = "Please enter your current address.";
    if (!formData.supervision) errs.supervision = "Please select a supervision status.";
    if (!formData.employer.trim())
      errs.employer = "Please enter employer name or indicate seeking employment.";
    if (!formData.monthlyIncome.trim())
      errs.monthlyIncome = "Please enter your monthly income.";
    if (!formData.moveInDate) errs.moveInDate = "Please select an expected move-in date.";
    if (!formData.emergencyContact.trim())
      errs.emergencyContact = "Please enter an emergency contact.";
    if (!formData.ackRules)
      errs.ackRules = "You must agree to the House Rules to submit your application.";
    if (!formData.signature.trim())
      errs.signature = "Please type your full name as your signature.";

    return errs;
  }

  // ------------------------------------------------------------------
  // Submit
  // ------------------------------------------------------------------
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const firstErrEl = document.querySelector("[data-field-error]");
      firstErrEl?.scrollIntoView({ behavior: "smooth", block: "center" });
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
          // Client Information
          fullName: formData.fullName,
          dob: formData.dob,
          phone: formData.phone,
          email: formData.email,
          currentAddress: formData.currentAddress,
          // Supervision
          supervision: formData.supervision,
          referringAgency: formData.referringAgency,
          officerContact: formData.officerContact,
          // Employment
          employer: formData.employer,
          position: formData.position,
          monthlyIncome: formData.monthlyIncome,
          workSchedule: formData.workSchedule,
          // Housing
          moveInDate: formData.moveInDate,
          emergencyContact: formData.emergencyContact,
          // Signature
          ackRules: formData.ackRules,
          signature: formData.signature,
          signatureDate: formData.signatureDate,
        }),
      });
      // no-cors = opaque response — if no throw, treat as success
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  // ------------------------------------------------------------------
  // Success state
  // ------------------------------------------------------------------
  if (submitState === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-libre)] mb-3">
          Application Submitted!
        </h3>
        <p className="text-muted text-lg max-w-md mx-auto mb-4">
          Thank you for applying to Blu Manor. We&apos;ll review your application and
          contact you within 48 hours.
        </p>
        <p className="text-sm text-muted mb-8">
          <strong className="text-foreground">Need immediate assistance?</strong>{" "}
          Call us at{" "}
          <a
            href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
            className="text-primary font-bold hover:text-primary-light transition-[color] duration-200"
          >
            {siteConfig.phoneResident}
          </a>{" "}
          or{" "}
          <a
            href={`tel:${siteConfig.phonePartner.replace(/-/g, "")}`}
            className="text-primary font-bold hover:text-primary-light transition-[color] duration-200"
          >
            {siteConfig.phonePartner}
          </a>
        </p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Error state
  // ------------------------------------------------------------------
  if (submitState === "error") {
    return (
      <div className="text-center py-12">
        <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-libre)] mb-3">
          Submission Error
        </h3>
        <p className="text-muted mb-8">
          Something went wrong. Please try again or call us directly.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setSubmitState("idle")}
          >
            Try Again
          </Button>
          <Button
            href={`tel:${siteConfig.phoneResident.replace(/-/g, "")}`}
            variant="primary"
          >
            ☎ Call {siteConfig.phoneResident}
          </Button>
        </div>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Form
  // ------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-0">

      {/* ======================================================= */}
      {/* Section 1 — Client Information                          */}
      {/* ======================================================= */}
      <SectionTitle
        title="Client Information"
        subtitle="Please provide your basic contact and personal details."
      />

      {/* Full Name + DOB */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div data-field-error={errors.fullName ? "true" : undefined}>
          <label htmlFor="fullName" className={labelBase}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="First and Last Name"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            className={`${inputBase} ${errors.fullName ? inputErr : ""}`}
          />
          <FieldError message={errors.fullName} />
        </div>

        <div data-field-error={errors.dob ? "true" : undefined}>
          <label htmlFor="dob" className={labelBase}>
            Date of Birth <span className="text-red-400">*</span>
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            className={`${inputBase} ${errors.dob ? inputErr : ""}`}
          />
          <FieldError message={errors.dob} />
        </div>
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div data-field-error={errors.phone ? "true" : undefined}>
          <label htmlFor="phone" className={labelBase}>
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(XXX) XXX-XXXX"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputBase} ${errors.phone ? inputErr : ""}`}
          />
          <FieldError message={errors.phone} />
        </div>

        <div>
          <label htmlFor="email" className={labelBase}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      {/* Current Address */}
      <div className="mb-5" data-field-error={errors.currentAddress ? "true" : undefined}>
        <label htmlFor="currentAddress" className={labelBase}>
          Current Address <span className="text-red-400">*</span>
        </label>
        <input
          id="currentAddress"
          name="currentAddress"
          type="text"
          placeholder="Street, City, State, ZIP"
          autoComplete="street-address"
          value={formData.currentAddress}
          onChange={handleChange}
          className={`${inputBase} ${errors.currentAddress ? inputErr : ""}`}
        />
        <FieldError message={errors.currentAddress} />
      </div>

      {/* ======================================================= */}
      {/* Divider                                                  */}
      {/* ======================================================= */}
      <div className={sectionDivider}>
        <hr className="border-border my-10" />
      </div>

      {/* ======================================================= */}
      {/* Section 2 — Supervision Status                          */}
      {/* ======================================================= */}
      <SectionTitle
        title="Supervision Status"
        subtitle="Select your current supervision status."
      />

      <div className="mb-5" data-field-error={errors.supervision ? "true" : undefined}>
        <label className={labelBase}>
          Supervision Status <span className="text-red-400">*</span>
        </label>
        <div className="flex flex-wrap gap-4 mt-2">
          {["Probation", "Parole", "Pretrial", "None"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer text-sm text-foreground"
            >
              <input
                type="radio"
                name="supervision"
                value={option}
                checked={formData.supervision === option}
                onChange={() => handleRadio("supervision", option)}
                className="accent-primary w-4 h-4 cursor-pointer"
              />
              {option}
            </label>
          ))}
        </div>
        <FieldError message={errors.supervision} />
      </div>

      {/* Referring Agency + Officer Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="referringAgency" className={labelBase}>
            Referring Agency / Officer
          </label>
          <input
            id="referringAgency"
            name="referringAgency"
            type="text"
            placeholder="Agency or officer name"
            value={formData.referringAgency}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="officerContact" className={labelBase}>
            Officer Phone / Email
          </label>
          <input
            id="officerContact"
            name="officerContact"
            type="text"
            placeholder="Phone or email"
            value={formData.officerContact}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      {/* ======================================================= */}
      {/* Divider                                                  */}
      {/* ======================================================= */}
      <hr className="border-border my-10" />

      {/* ======================================================= */}
      {/* Section 3 — Employment / Income Verification            */}
      {/* ======================================================= */}
      <SectionTitle
        title="Employment / Income Verification"
        subtitle="Tell us about your current employment and income."
      />

      {/* Employer + Position */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div data-field-error={errors.employer ? "true" : undefined}>
          <label htmlFor="employer" className={labelBase}>
            Employer Name <span className="text-red-400">*</span>
          </label>
          <input
            id="employer"
            name="employer"
            type="text"
            placeholder="Current employer or 'Seeking Employment'"
            value={formData.employer}
            onChange={handleChange}
            className={`${inputBase} ${errors.employer ? inputErr : ""}`}
          />
          <FieldError message={errors.employer} />
        </div>

        <div>
          <label htmlFor="position" className={labelBase}>
            Position / Title
          </label>
          <input
            id="position"
            name="position"
            type="text"
            placeholder="Your job title"
            value={formData.position}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      {/* Monthly Income + Work Schedule */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div data-field-error={errors.monthlyIncome ? "true" : undefined}>
          <label htmlFor="monthlyIncome" className={labelBase}>
            Monthly Income <span className="text-red-400">*</span>
          </label>
          <input
            id="monthlyIncome"
            name="monthlyIncome"
            type="text"
            placeholder="$0.00"
            value={formData.monthlyIncome}
            onChange={handleChange}
            className={`${inputBase} ${errors.monthlyIncome ? inputErr : ""}`}
          />
          <FieldError message={errors.monthlyIncome} />
        </div>

        <div>
          <label htmlFor="workSchedule" className={labelBase}>
            Work Schedule
          </label>
          <input
            id="workSchedule"
            name="workSchedule"
            type="text"
            placeholder="e.g., Mon-Fri 8am-5pm"
            value={formData.workSchedule}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      {/* ======================================================= */}
      {/* Divider                                                  */}
      {/* ======================================================= */}
      <hr className="border-border my-10" />

      {/* ======================================================= */}
      {/* Section 4 — Housing Details                             */}
      {/* ======================================================= */}
      <SectionTitle
        title="Housing Details"
        subtitle="Provide your expected move-in date and emergency contact."
      />

      {/* Move-In Date + Emergency Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div data-field-error={errors.moveInDate ? "true" : undefined}>
          <label htmlFor="moveInDate" className={labelBase}>
            Expected Move-In Date <span className="text-red-400">*</span>
          </label>
          <input
            id="moveInDate"
            name="moveInDate"
            type="date"
            value={formData.moveInDate}
            onChange={handleChange}
            className={`${inputBase} ${errors.moveInDate ? inputErr : ""}`}
          />
          <FieldError message={errors.moveInDate} />
        </div>

        <div data-field-error={errors.emergencyContact ? "true" : undefined}>
          <label htmlFor="emergencyContact" className={labelBase}>
            Emergency Contact <span className="text-red-400">*</span>
          </label>
          <input
            id="emergencyContact"
            name="emergencyContact"
            type="text"
            placeholder="Name and phone number"
            value={formData.emergencyContact}
            onChange={handleChange}
            className={`${inputBase} ${errors.emergencyContact ? inputErr : ""}`}
          />
          <FieldError message={errors.emergencyContact} />
        </div>
      </div>

      {/* ======================================================= */}
      {/* Divider                                                  */}
      {/* ======================================================= */}
      <hr className="border-border my-10" />

      {/* ======================================================= */}
      {/* Section 5 — House Rules Acknowledgment                  */}
      {/* ======================================================= */}
      <SectionTitle
        title="House Rules Acknowledgment"
        subtitle="Please review and acknowledge the following before submitting."
      />

      <div className="rounded-xl border border-border bg-bg-elevated p-6 mb-5">
        <p className="text-foreground font-medium mb-4">Residents agree to:</p>
        <ul className="flex flex-col gap-2.5 mb-5 pl-0 list-none">
          {[
            "Maintain employment or verified income",
            "Comply with supervision requirements",
            "Follow curfew and property guidelines",
            "Maintain cleanliness of shared spaces",
            "Abstain from illegal activity or prohibited substances",
          ].map((rule) => (
            <li key={rule} className="flex items-center gap-3 text-sm text-foreground">
              <span className="text-primary font-bold text-base leading-none">•</span>
              {rule}
            </li>
          ))}
        </ul>
        <p className="text-xs text-red-400 font-semibold mb-4">
          Violation of program rules may result in removal from housing.
        </p>

        <label
          className="flex items-start gap-3 cursor-pointer"
          data-field-error={errors.ackRules ? "true" : undefined}
        >
          <input
            id="ackRules"
            name="ackRules"
            type="checkbox"
            checked={formData.ackRules}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0"
          />
          <span className="text-sm text-foreground">
            I have read, understand, and agree to the House Rules{" "}
            <span className="text-red-400">*</span>
          </span>
        </label>
        <FieldError message={errors.ackRules} />
      </div>

      {/* ======================================================= */}
      {/* Section 6 — Electronic Signature                        */}
      {/* ======================================================= */}
      <div className="rounded-xl border border-border bg-bg-elevated p-6 mb-8">
        <h4 className="text-base font-semibold text-foreground mb-4">
          Resident Signature
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div data-field-error={errors.signature ? "true" : undefined}>
            <label htmlFor="signature" className={labelBase}>
              Type Your Full Legal Name <span className="text-red-400">*</span>
            </label>
            <input
              id="signature"
              name="signature"
              type="text"
              placeholder="Your full legal name"
              value={formData.signature}
              onChange={handleChange}
              className={`${inputBase} ${errors.signature ? inputErr : ""}`}
            />
            <FieldError message={errors.signature} />
          </div>

          <div>
            <label htmlFor="signatureDate" className={labelBase}>
              Date
            </label>
            <input
              id="signatureDate"
              name="signatureDate"
              type="date"
              value={formData.signatureDate}
              readOnly
              className={`${inputBase} cursor-not-allowed opacity-70`}
            />
          </div>
        </div>
      </div>

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
