"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        ...form,
      }),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }

    setLoading(false);
  };

  const contacts = [
    {
      href: "mailto:brian.pro1993@gmail.com",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-orange-300">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4L12 13 2 4" />
        </svg>
      ),
      label: "Email",
      value: "brian.pro1993@gmail.com",
    },
    {
      href: "https://github.com/Disl11",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-300">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2.02 1.03-2.72-.1-.25-.45-1.23.1-2.57 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.02 2.747-1.02.55 1.34.2 2.32.1 2.57.65.7 1.03 1.61 1.03 2.72 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/Disl11",
    },
    {
      href: "https://www.linkedin.com/in/brian-farnier-353524307/",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-300">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "brian-farnier-353524307",
    },
  ];

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold dark:text-orange-300 text-orange-700 mb-4">
            CONTACT
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Disponible pour des opportunités en développement web/mobile, ou pour toute discussion technique.
            Je réponds sous 24h à 48h.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contacts.map(({ href, icon, label, value }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 dark:bg-[#0a1e35] bg-black/5 border border-orange-300/20 p-5 rounded-xl dark:hover:border-orange-300/60 hover:border-orange-700 hover:bg-black/5 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 dark:bg-orange-300/10 bg-orange-700 rounded-lg flex items-center justify-center group-hover:bg-orange-300/20 transition">
                {icon}
              </div>

              <div className="min-w-0">
                <p className="dark:text-orange-300  text-orange-700 text-sm font-semibold uppercase tracking-wide">
                  {label}
                </p>
                <p className="text-foreground/90 text-sm truncate">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className=" dark:bg-[#0a1e35] bg-black/5  border border-orange-300/20 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold dark:text-orange-300 text-orange-700  mb-6">
              Envoyez-moi un message
            </h2>

            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm font-medium">
                Message envoyé avec succès ! Je vous réponds sous 24h à 48h.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-foreground/70 font-medium">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full dark:bg-[#061423] bg-white border dark:border-orange-300/20 border-orange-700  rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-orange-300/60 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-foreground/70 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full dark:bg-[#061423] bg-white border dark:border-orange-300/20 border-orange-700 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-orange-300/60 transition"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-foreground/70 font-medium">
                  Sujet
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  className="w-full dark:bg-[#061423] bg-white border dark:border-orange-300/20 border-orange-700 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-orange-300/60 transition"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-foreground/70 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  className="w-full dark:bg-[#061423] bg-white border dark:border-orange-300/20 border-orange-700 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-orange-300/60 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-300 text-[#061423] font-bold py-3 rounded-lg hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>
        </div>
      </section >
    </>
  );
}