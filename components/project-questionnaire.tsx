"use client";

import { useEffect, useId, useRef, useState } from "react";
import toast from "react-hot-toast";
import { gsap } from "gsap";

const WEB3FORMS_ACCESS_KEY = "d39f39a3-64d5-49ac-964a-9ae73bc21c48";

interface Question {
  id: string;
  question: string;
  hint: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: "service",
    question: "What are we building?",
    hint: "Pick the closest match for your project.",
    options: ["Website", "Web app / SaaS", "Mobile app", "Brand + design system"],
  },
  {
    id: "stage",
    question: "Where are you in the process?",
    hint: "This helps me understand what you already have.",
    options: ["Just an idea", "Redesign / refresh", "Design ready", "Already in development"],
  },
  {
    id: "timeline",
    question: "When do you want to start?",
    hint: "No pressure — an honest answer works best.",
    options: ["As soon as possible", "Within 1 month", "1–3 months", "Just exploring"],
  },
  {
    id: "priority",
    question: "What matters most to you?",
    hint: "I'll use this to shape the first recommendation.",
    options: ["Visual impact", "Clear UX", "Fast delivery", "Scalable system"],
  },
];

const quizInputClasses =
  "w-full rounded-sm border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 font-['Space_Mono'] text-[11px] tracking-[0.06em] text-slate-200 outline-none transition-colors duration-300 placeholder:text-slate-600 focus:border-orange-500/45 disabled:cursor-not-allowed disabled:opacity-40";

export default function ProjectQuestionnaire({
  className = "",
}: {
  className?: string;
}) {
  const uid = useId();
  const nameInputId = `${uid}-name`;
  const emailInputId = `${uid}-email`;
  const quizBodyRef = useRef<HTMLDivElement>(null);
  const advanceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lockedRef = useRef(false);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = questions.length;
  const currentStepNumber = Math.min(step + 1, totalSteps);
  const progress = submitted ? 100 : Math.round((currentStepNumber / totalSteps) * 100);
  const activeQuestion = questions[step];

  useEffect(() => {
    if (!quizBodyRef.current) return;
    const tween = gsap.fromTo(
      quizBodyRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
    return () => {
      tween.kill();
    };
  }, [step, submitted]);

  useEffect(() => {
    return () => {
      if (advanceTimeout.current) clearTimeout(advanceTimeout.current);
    };
  }, []);

  const selectOption = (option: string) => {
    if (lockedRef.current || !activeQuestion || submitted) return;

    lockedRef.current = true;
    setSelectedOption(option);
    advanceTimeout.current = setTimeout(() => {
      setAnswers((prev) => ({ ...prev, [activeQuestion.id]: option }));
      setSelectedOption(null);
      setStep((prev) => Math.min(prev + 1, questions.length));
      lockedRef.current = false;
    }, 280);
  };

  const goBack = () => {
    if (lockedRef.current || isSubmitting) return;
    setSelectedOption(null);
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const resetQuiz = () => {
    if (advanceTimeout.current) clearTimeout(advanceTimeout.current);
    lockedRef.current = false;
    setStep(0);
    setAnswers({});
    setSelectedOption(null);
    setContact({ name: "", email: "" });
    setSubmitted(false);
  };

  const submitQuiz = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (questions.some((question) => !answers[question.id])) {
      toast.error("Please finish the questions first.");
      return;
    }

    setIsSubmitting(true);

    const summary = questions
      .map((question) => `${question.question}\n- ${answers[question.id] ?? "—"}`)
      .join("\n\n");

    const submissionData = new FormData();
    submissionData.append("access_key", WEB3FORMS_ACCESS_KEY);
    submissionData.append("subject", "New project questionnaire response");
    submissionData.append("name", contact.name);
    submissionData.append("email", contact.email);
    submissionData.append(
      "message",
      `Project questionnaire\n\n${summary}\n\nName: ${contact.name}\nEmail: ${contact.email}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        toast.error("Couldn't send your answers. Please try again.");
      }
    } catch {
      toast.error("Failed to send your answers. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative min-w-0 ${className}`}>
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-orange-500/[0.055] blur-[90px]" />
      <div className="pointer-events-none absolute -left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 font-['Space_Mono'] text-[9px] tracking-[0.4em] text-orange-500/30 lg:block">
        QUICK BRIEF
      </div>

      <div
        className="relative overflow-hidden rounded-sm border border-white/10 bg-[#080d18]/80 shadow-[0_30px_90px_rgba(0,0,0,0.48)] backdrop-blur-xl"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.025), 0 30px 90px rgba(0,0,0,0.48)",
        }}
      >
        <div
          className="absolute left-0 top-0 h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent 4%, rgba(249,115,22,0.6), rgba(168,85,247,0.28), transparent 96%)",
          }}
        />

        <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] bg-white/[0.015] px-5 py-3.5">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-orange-500/35" />
            <span className="h-2 w-2 rounded-full bg-purple-500/30" />
          </div>
          <span className="font-['Space_Mono'] text-[9px] tracking-[0.2em] text-slate-500">
            PROJECT_QUESTIONNAIRE
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-orange-500/20 bg-orange-500/[0.06] px-2 py-1 font-['Space_Mono'] text-[8px] tracking-[0.16em] text-orange-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
            4 QUESTIONS
          </span>
        </div>

        <div className="border-b border-white/[0.06] px-6 py-4 sm:px-8">
          <div className="flex items-center justify-between font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-600">
            <span>
              Question {String(currentStepNumber).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
            </span>
            <span className="text-orange-400/70">{progress}%</span>
          </div>
          <div className="mt-3 h-0.5 w-full overflow-hidden bg-white/[0.06]">
            <div
              className="h-full bg-gradient-to-r from-orange-300 to-orange-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex min-h-[390px] flex-col p-6 sm:p-8" aria-live="polite">
          {submitted ? (
            <div
              ref={quizBodyRef}
              className="flex flex-1 flex-col items-center justify-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] shadow-[0_0_30px_rgba(52,211,153,0.12)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-emerald-400"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 font-['Rajdhani'] text-2xl font-bold text-slate-100">
                Brief received
              </h3>
              <p className="mt-3 max-w-sm font-sans text-[13px] leading-6 text-slate-500">
                Thanks — I&apos;ve got your answers. I&apos;ll review them and
                reply to <span className="break-all text-slate-300">{contact.email}</span>.
              </p>
              <button
                type="button"
                onClick={resetQuiz}
                className="mt-8 rounded-sm border border-white/10 bg-white/[0.02] px-5 py-3 font-['Space_Mono'] text-[10px] uppercase tracking-[0.16em] text-slate-300 transition-colors duration-300 hover:border-orange-500/35 hover:text-orange-200"
              >
                Start another brief
              </button>
            </div>
          ) : (
            <>
              <div ref={quizBodyRef} className="flex-1">
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.26em] text-orange-500/55">
                  {activeQuestion ? `Step ${String(step + 1).padStart(2, "0")}` : "Final step"}
                </span>
                <h3 className="mt-3 font-['Rajdhani'] text-2xl font-bold leading-tight text-slate-100 sm:text-[1.7rem]">
                  {activeQuestion ? activeQuestion.question : "Where should I send the reply?"}
                </h3>
                <p className="mt-2.5 font-sans text-[13px] leading-6 text-slate-500">
                  {activeQuestion ? activeQuestion.hint : "Add your details and I'll take it from here."}
                </p>

                {activeQuestion ? (
                  <div className="mt-6 space-y-2.5">
                    {activeQuestion.options.map((option, index) => {
                      const isSelected = selectedOption === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => selectOption(option)}
                          disabled={Boolean(selectedOption)}
                          className={`flex w-full items-center justify-between gap-3 rounded-sm border px-4 py-3.5 text-left transition-all duration-300 ${
                            isSelected
                              ? "border-orange-500/60 bg-orange-500/[0.12]"
                              : "border-white/[0.08] bg-white/[0.02] hover:border-orange-500/30 hover:bg-orange-500/[0.05]"
                          } disabled:cursor-default`}
                        >
                          <span className="flex min-w-0 items-center gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-white/[0.08] font-['Space_Mono'] text-[9px] text-slate-600">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="truncate font-['Space_Mono'] text-[11px] tracking-[0.06em] text-slate-300">
                              {option}
                            </span>
                          </span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`shrink-0 transition-colors duration-300 ${
                              isSelected ? "text-orange-300" : "text-slate-600"
                            }`}
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <form onSubmit={submitQuiz} className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor={nameInputId}
                        className="mb-2 block font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500"
                      >
                        Your name
                      </label>
                      <input
                        id={nameInputId}
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Doe"
                        value={contact.name}
                        onChange={(event) =>
                          setContact((prev) => ({ ...prev, name: event.target.value }))
                        }
                        className={quizInputClasses}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={emailInputId}
                        className="mb-2 block font-['Space_Mono'] text-[9px] uppercase tracking-[0.2em] text-slate-500"
                      >
                        Email address
                      </label>
                      <input
                        id={emailInputId}
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={contact.email}
                        onChange={(event) =>
                          setContact((prev) => ({ ...prev, email: event.target.value }))
                        }
                        className={quizInputClasses}
                        disabled={isSubmitting}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-sm bg-orange-500 px-5 py-4 font-['Space_Mono'] text-[11px] uppercase tracking-[0.16em] text-slate-950 transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_10px_30px_rgba(249,115,22,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send my answers"}
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-5">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0 || isSubmitting}
                  className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 hover:text-orange-300 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ← Back
                </button>
                <span className="font-['Space_Mono'] text-[9px] uppercase tracking-[0.16em] text-slate-600">
                  {activeQuestion ? "Pick one to continue" : "Takes about 20 seconds"}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-6 -right-3 hidden rounded-sm border border-white/10 bg-[#0b1120]/95 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur md:block">
        <span className="font-['Space_Mono'] text-[8px] uppercase tracking-[0.22em] text-slate-600">
          Status
        </span>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          <span className="font-['Space_Mono'] text-[10px] tracking-[0.14em] text-slate-300">
            ACCEPTING NEW WORK
          </span>
        </div>
      </div>
    </div>
  );
}
