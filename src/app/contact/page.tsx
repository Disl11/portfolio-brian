"use client";
import { motion } from "framer-motion";
import Link from "next/link";
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
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
				<svg
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
					className="text-orange-300"
				>
					<rect x="2" y="4" width="20" height="16" rx="2" />
					<path d="M22 4L12 13 2 4" />
				</svg>
			),
			label: "Email",
			value: "brian.pro1993@gmail.com",
		},
		{
			href: "https://www.youtube.com/@Brillant9384",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="text-orange-300"
				>
					<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z" />
				</svg>
			),
			label: "YouTube",
			value: "youtube.com/@Brillant9384",
		},
		{
			href: "https://www.linkedin.com/in/brian-farnier-353524307/",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="text-orange-300"
				>
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
			),
			label: "LinkedIn",
			value: "brian-farnier-353524307",
		},
		{
			href: "tel:+33612345678",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="text-orange-300"
				>
					<path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
				</svg>
			),
			label: "Téléphone",
			value: "07 87 06 06 65",
		},
	];

	return (
		<>
			<motion.section
				className="max-w-6xl mx-auto px-4 py-16 md:py-24"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
			>
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h1 className="text-4xl md:text-5xl font-bold dark:text-orange-300 text-orange-700 mb-4">
						CONTACT
					</h1>
					<p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
						Disponible pour des opportunités comme animateur
						polyvalent ou speaker, ou pour toute discussion
						professionnel. Je réponds sous 24h à 48h.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
					{contacts.map(({ href, icon, label, value }, index) => (
						<motion.a
							key={label}
							href={href}
							target={
								href.startsWith("mailto") ? undefined : "_blank"
							}
							rel={
								href.startsWith("mailto")
									? undefined
									: "noopener noreferrer"
							}
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.6,
								delay: index * 0.2,
								ease: "easeOut",
							}}
							className="group flex items-center gap-4 dark:bg-[#0a1e35] bg-black/5 border border-orange-300/20 p-5 rounded-xl dark:hover:border-orange-300/60 hover:border-orange-700 hover:bg-black/5 transition-all duration-300"
						>
							<div className="shrink-0 w-12 h-12 dark:bg-orange-300/10 bg-orange-700 rounded-lg flex items-center justify-center group-hover:bg-orange-300/20 transition">
								{icon}
							</div>

							<div className="min-w-0">
								<p className="dark:text-orange-300 text-orange-700 text-sm font-semibold uppercase tracking-wide">
									{label}
								</p>
								<p className="text-foreground/90 text-sm truncate">
									{value}
								</p>
							</div>
						</motion.a>
					))}
				</div>

				<motion.div
					className="max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<div className="dark:bg-[#0a1e35] bg-black/5 border border-orange-300/20 rounded-2xl p-8 md:p-10">
						<h2 className="text-2xl font-bold dark:text-orange-300 text-orange-700 mb-6">
							Envoyez-moi un message
						</h2>

						{success && (
							<div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm font-medium">
								Message envoyé avec succès ! Je vous réponds
								sous 24h à 48h.
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid sm:grid-cols-2 gap-5">
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="text-sm text-foreground/70 font-medium"
									>
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
										className="w-full dark:bg-[#061423] bg-white border dark:border-orange-300/20 border-orange-700 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-orange-300/60 transition"
									/>
								</div>

								<div className="space-y-2">
									<label
										htmlFor="email"
										className="text-sm text-foreground/70 font-medium"
									>
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
								<label
									htmlFor="subject"
									className="text-sm text-foreground/70 font-medium"
								>
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
								<label
									htmlFor="message"
									className="text-sm text-foreground/70 font-medium"
								>
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
								{loading
									? "Envoi en cours..."
									: "Envoyer le message"}
							</button>
						</form>
					</div>
				</motion.div>
			</motion.section>
			{/* RETOUR */}
			<div className="max-w-5xl mx-auto px-4 pb-16">
				<Link
					href="/"
					className="inline-block bg-orange-300 text-[#061423] px-6 py-2 rounded-lg font-bold hover:bg-white transition"
				>
					← Retour page principale
				</Link>
			</div>
		</>
	);
}
