"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Capture the form element now — event.currentTarget becomes null
    // after the first `await`, since React clears it once the event
    // has finished dispatching.
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to send your message.");
      }

      setStatus("success");
      setMessage("Thanks for reaching out — your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm text-slate-700 dark:text-slate-200">
          <span className="mb-1 block">Name</span>
          <input
            name="name"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </label>
        <label className="text-sm text-slate-700 dark:text-slate-200">
          <span className="mb-1 block">Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </label>
      </div>

      <label className="block text-sm text-slate-700 dark:text-slate-200">
        <span className="mb-1 block">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </Button>
        {message ? (
          <p className={`text-sm ${status === "success" ? "text-emerald-600" : "text-rose-600"}`}>{message}</p>
        ) : null}
      </div>
    </form>
  );
}