"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const funnyMessages = [
  "🚧 Oops! This form is still under construction. Maybe try carrier pigeon? 🐦",
  "🔮 Our crystal ball says this form isn't ready yet. Try again in 2099! ⏳",
  "🚀 Houston, we have a problem. This form isn't operational... yet! 👨‍🚀",
  "🧙‍♂️ Abracadabra! ...Nope, still can't make this form work. Magic is tricky! 🎩",
  "🏖️ This form is on vacation. Please leave a message after the coconut. 🥥",
  "🤖 Beep boop... Form not found. Have you tried turning it off and on again? 🔌",
  "🍕 This form is as useful as a pizza without cheese. We're working on adding the toppings! 🧀",
  "🎭 Plot twist: This form is just pretending to be a form. It's actually a very convincing cake! 🎂",
];

const inputClasses =
  "w-full p-4 text-sm text-slate-400 placeholder-slate-600 transition-all duration-300 outline-none cursor-not-allowed opacity-60 font-['Space_Mono'] text-[12px] tracking-[0.05em]";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormClick = () => {
    toast(funnyMessages[Math.floor(Math.random() * funnyMessages.length)], {
      id: "form-disabled-toast",
    });
  };

  return (
    <div onClick={handleFormClick}>
      <div
        className="relative p-8 md:p-10"
        style={{ background: "rgba(255,255,255,0.015)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-[1px]"
          style={{ background: "linear-gradient(to right, transparent 10%, rgba(249,115,22,0.2) 50%, transparent 90%)" }}
        />

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="block font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2">
              Full Name <span className="text-orange-500">*</span>
            </label>
            <div className="flex gap-3">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={inputClasses} style={inputStyle} required disabled />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={inputClasses} style={inputStyle} required disabled />
            </div>
          </div>

          <div>
            <label className="block font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2">
              E-mail <span className="text-orange-500">*</span>
            </label>
            <input type="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} className={inputClasses} style={inputStyle} required disabled />
          </div>

          <div>
            <label className="block font-['Space_Mono'] text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2">
              Message <span className="text-orange-500">*</span>
            </label>
            <textarea name="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} className={`${inputClasses} h-32 resize-none`} style={inputStyle} required disabled />
          </div>

          <button
            type="submit"
            disabled
            className="w-full py-4 font-['Space_Mono'] text-xs tracking-[0.15em] uppercase text-slate-950 font-bold cursor-not-allowed opacity-50 transition-all duration-300 rounded-sm"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 0 20px rgba(249,115,22,0.15)" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
