"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, x: 60, scale: 0.95, filter: "blur(4px)" },
		show: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
	};
	return (
		<>
			{/* HERO */}
			<motion.section
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="max-w-6xl mx-auto px-4 py-8"
			>
				<div className="flex flex-col md:flex-row gap-15">
					<div className="w-40 h-40 md:w-52 md:h-52 rounded-[40px_100px_20px_100px] overflow-hidden relative shrink-0">
						<Image
							src="/images/photo-animateur.jpeg"
							alt="Photo de Brian Farnier"
							fill
							sizes="(max-width: 768px) 160px, 208px"
							className="object-cover object-center scale-105"
						/>
					</div>
					<h1 className="text-4xl md:text-6xl font-serif leading-tight py-5">
						Brian Farnier <br />
						<span className="text-3xl md:text-4xl font-bold dark:text-orange-300 text-orange-700">
							Animateur Polyvalent
						</span>
					</h1>
				</div>
			</motion.section>

			{/* À PROPOS */}
			<motion.section
				className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-15"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7 }}
			>
				<div className="md:col-span-2">
					<h2 className="text-2xl md:text-3xl font-bold dark:text-orange-300 text-orange-700 mb-10">
						À PROPOS
					</h2>
					<p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
						Après 12 ans comme tailleur de pierre, j’ai choisi à
						l’été 2026 de changer de voie pour me lancer dans
						l’animation. Ma première expérience en camping m’a
						permis de découvrir un nouvel univers, de confirmer mon
						envie de transmettre et surtout de créer des moments qui
						rassemblent et font vivre des émotions.
					</p>

					<p className="text-foreground text-lg md:text-xl leading-relaxed mb-6">
						Danseur de breakdance et issu de la culture Hip-Hop,
						j’ai également développé mon expérience de speaker, où
						j’ai appris à prendre la parole et à créer différentes
						ambiances. Aujourd’hui animateur polyvalent, je souhaite
						continuer à apprendre, découvrir de nouveaux univers et
						relever le défi d’une saison d’hiver.
					</p>
					<div className="flex items-center gap-56">
						<Link
							href="/about"
							className="inline-block bg-orange-300 text-[#061423] px-4 py-2 rounded-lg font-bold hover:bg-white transition"
						>
							En savoir plus
						</Link>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1, duration: 0.8 }}
							className="flex items-center gap-2 text-foreground/70"
						>
							<span>Défiler</span>

							<motion.span
								animate={{ y: [0, 5, 0] }}
								transition={{
									duration: 1.2,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="text-orange-300 text-xl"
							>
								↓
							</motion.span>
						</motion.div>
					</div>
				</div>

				<div>
					<h3 className="text-2xl md:text-3xl font-bold dark:text-orange-300 text-orange-700 mb-10">
						RÉSEAUX
					</h3>

					<div className="space-y-4">
						{[
							{
								type: "link",
								href: "https://www.youtube.com/@brillant9384",
								icon: (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-7 h-7 text-black dark:text-white shrink-0"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.9V8.1l6.5 3.9-6.5 3.9z" />
									</svg>
								),
								text: "YouTube Brillant9384",
							},
							{
								type: "link",
								href: "https://www.linkedin.com/in/brian-farnier-353524307/",
								icon: (
									<i className="devicon-linkedin-plain text-3xl text-black dark:text-white" />
								),
								text: "LinkedIn Brian Farnier",
							},
							{
								type: "text",
								icon: (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-7 h-7 text-black dark:text-white shrink-0"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<rect
											x="2"
											y="4"
											width="20"
											height="16"
											rx="2"
										/>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
									</svg>
								),
								text: "brian.pro1993@gmail.com",
							},
							{
								type: "text",
								icon: (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-7 h-7 text-black dark:text-white shrink-0"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.15a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0 1 22 16.92z" />
									</svg>
								),
								text: "07 87 06 06 65",
							},
						].map((item, index) => (
							<motion.div
								key={item.text}
								initial={{ opacity: 0, x: 80 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.2,
									ease: "easeOut",
								}}
							>
								{item.type === "link" ? (
									<a
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 hover:text-orange-300 transition"
									>
										{item.icon}
										{item.text}
									</a>
								) : (
									<div className="flex items-center gap-3">
										{item.icon}
										{item.text}
									</div>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>

			{/* COMPÉTENCES */}
			<motion.section
				className="max-w-6xl mx-auto px-4 py-12"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				variants={container}
			>
				<motion.h2
					variants={item}
					className="text-2xl md:text-3xl font-bold dark:text-orange-300 text-orange-700 mb-10"
				>
					COMPÉTENCES
				</motion.h2>

				{/* ANIMATION + VIDÉO */}
				<div className="grid md:grid-cols-2 gap-15">
					{/* ANIMATION */}
					<motion.div variants={item}>
						<h3 className="text-xl md:text-2xl font-bold mb-6">
							Animation
						</h3>

						<div className="space-y-4 text-lg md:text-xl leading-relaxed">
							<p>
								Adaptation des activités aux différents publics
							</p>

							<p>
								Création d’une ambiance conviviale et dynamique
							</p>

							<p>
								Animation dans un cadre bienveillant et
								sécurisant
							</p>
						</div>

						{/* DANSE & EXPRESSION */}
						<motion.div variants={item} className="mt-12">
							<h3 className="text-xl md:text-2xl font-bold mb-6">
								Expression &amp; danse
							</h3>

							<div className="space-y-4 text-lg md:text-xl leading-relaxed">
								<p>Speaker</p>
								<p>Danseur de breakdance</p>
								<p>Professeur de danse</p>
							</div>
						</motion.div>
					</motion.div>

					{/* VIDÉO */}
					<motion.div
						variants={item}
						className="flex items-center justify-center"
					>
						<video
							src="/videos/vidéo-danse.mp4"
							controls
							playsInline
							preload="metadata"
							className="w-full max-w-sm rounded-[40px_100px_20px_100px] object-cover"
						/>
					</motion.div>
				</div>

				{/* ATOUTS */}
				<motion.div variants={item} className="mt-12">
					<h3 className="text-xl md:text-2xl font-bold mb-6">
						Mes atouts
					</h3>

					<div className="flex flex-wrap gap-4 mb-10">
						<span className="bg-orange-300 text-[#061423] px-5 py-2 rounded-lg font-bold">
							Dynamique
						</span>

						<span className="bg-orange-300 text-[#061423] px-5 py-2 rounded-lg font-bold">
							Sourire naturel
						</span>

						<span className="bg-orange-300 text-[#061423] px-5 py-2 rounded-lg font-bold">
							À l’écoute
						</span>

						<span className="bg-orange-300 text-[#061423] px-5 py-2 rounded-lg font-bold">
							Adaptable
						</span>
					</div>

					{/* VIDÉOS SPEAKER */}
					<div className="grid md:grid-cols-2 gap-8">
						<motion.div
							variants={item}
							className="flex justify-center"
						>
							<video
								src="/videos/toro-piscine-saut.mp4"
								controls
								playsInline
								preload="metadata"
								className="w-full max-w-sm rounded-[40px_100px_20px_100px] object-cover"
							/>
						</motion.div>

						<motion.div
							variants={item}
							className="flex justify-center"
						>
							<video
								src="/videos/toro-piscine-speaking.mp4"
								controls
								playsInline
								preload="metadata"
								className="w-full max-w-sm rounded-[40px_100px_20px_100px] object-cover"
							/>
						</motion.div>
					</div>
				</motion.div>
			</motion.section>

			{/* contact */}
			<motion.section
				className="max-w-6xl mx-auto px-4 py-16"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7 }}
			>
				<div className="flex items-center gap-4 flex-wrap text-lg">
					<p>
						Disponible pour des opportunités d'animation ou des
						collaborations danse/speaking.
					</p>
					<Link
						href="/contact"
						className="inline-block bg-orange-300 text-[#061423] px-6 py-2 rounded font-bold hover:bg-white transition shrink-0"
					>
						Me contacter
					</Link>
				</div>
			</motion.section>
		</>
	);
}
