"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const MAX_MESSAGE_LENGTH = 500;

const inputClasses =
  "w-full p-4 text-sm text-slate-400 placeholder-slate-600 transition-all duration-300 outline-none font-['Space_Mono'] text-[12px] tracking-[0.05em] disabled:opacity-40 disabled:cursor-not-allowed";
const inputStyle = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(255,255,255,0.06)",
  boxShadow: "none",
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_MESSAGE_LENGTH) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = new FormData();
    submissionData.append("access_key", "d39f39a3-64d5-49ac-964a-9ae73bc21c48");
    submissionData.append("name", `${formData.firstName} ${formData.lastName}`);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="relative p-8 md:p-10 flex flex-col items-center justify-center text-center"
        style={{ background: "rgba(255,255,255,0.015)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-[1px]"
          style={{ background: "linear-gradient(to right, transparent 10%, rgba(34,197,94,0.3) 50%, transparent 90%)" }}
        />
        <div className="mb-6 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.1)", boxShadow: "0 0 30px rgba(34,197,94,0.1)" }}>
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-['Space_Mono'] text-sm tracking-[0.1em] uppercase text-slate-300 mb-3">
          Message Sent
        </h3>
        <p className="font-['Space_Mono'] text-[12px] text-slate-500 max-w-xs leading-relaxed">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ firstName: "", lastName: "", email: "", message: "" }); }}
          className="mt-8 font-['Space_Mono'] text-[11px] tracking-[0.15em] uppercase text-orange-500 hover:text-orange-400 transition-colors duration-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {isSubmitting && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-sm" style={{ background: "rgba(15,23,42,0.7)", backdropFilter: "blur(2px)" }}>
          <div className="flex flex-col items-center gap-3">
            <div className="w-5 h-5 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
            <span className="font-['Space_Mono'] text-[11px] tracking-[0.15em] uppercase text-slate-400">Sending...</span>
          </div>
        </div>
      )}

      <div
        className="relative p-8 md:p-10"
        style={{ background: "rgba(255,255,255,0.015)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-[1px]"
          style={{ background: "linear-gradient(to right, transparent 10%, rgba(249,115,22,0.2) 50%, transparent 90%)" }}
        />

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2">
              Full Name <span className="text-orange-500">*</span>
            </label>
            <div className="flex gap-3">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={inputClasses} style={inputStyle} required disabled={isSubmitting} />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={inputClasses} style={inputStyle} required disabled={isSubmitting} />
            </div>
          </div>

          <div>
            <label className="block font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2">
              E-mail <span className="text-orange-500">*</span>
            </label>
            <input type="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} className={inputClasses} style={inputStyle} required disabled={isSubmitting} />
          </div>

          <div>
            <label className="block font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2">
              Message <span className="text-orange-500">*</span>
            </label>
            <textarea name="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} className={`${inputClasses} h-32 resize-none`} style={inputStyle} required disabled={isSubmitting} />
            <div className="flex justify-end mt-1">
              <span className={`font-['Space_Mono'] text-[10px] tracking-wider ${formData.message.length > MAX_MESSAGE_LENGTH * 0.9 ? "text-orange-500" : "text-slate-600"}`}>
                {formData.message.length}/{MAX_MESSAGE_LENGTH}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 font-['Space_Mono'] text-xs tracking-[0.15em] uppercase text-slate-950 font-bold transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 0 20px rgba(249,115,22,0.15)" }}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
