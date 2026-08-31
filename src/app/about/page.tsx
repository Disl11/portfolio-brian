"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
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
				className="max-w-5xl mx-auto px-4 py-10 text-center"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h1 className="text-4xl dark:text-orange-300 text-orange-700 md:text-6xl font-bold mb-6">
					Brian Farnier
				</h1>
				<p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
					Animateur polyvalent, basé à Montpellier.
				</p>

				<a
					href="/CV Brian Farnier animateur septembre.pdf"
					download
					className="inline-block mt-8 px-6 py-3 bg-orange-300 text-[#061423] font-bold rounded-lg hover:bg-white transition"
				>
					Télécharger mon CV
				</a>
			</motion.section>

			{/* PARCOURS */}
			<motion.section
				className="max-w-5xl mx-auto px-4 py-10"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-2xl dark:text-orange-300 text-orange-700 mb-6">
					Mon parcours
				</h2>

				<p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
					Pendant 12 ans, j’ai travaillé comme tailleur de pierre sur
					des projets exigeants, principalement dans le secteur du
					luxe. Cette expérience m’a permis de développer rigueur,
					précision et sens du détail, des qualités que j’applique
					aujourd’hui dans l'exigence des clients.
				</p>

				<p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
					Fin 2025, j’ai entrepris une reconversion dans le
					développement web et mobile. Cette orientation ne s’étant
					finalement pas concrétisée professionnellement, j’ai choisi
					de me tourner vers mon second projet : l’animation, un
					domaine qui me correspond également par mon parcours dans la
					culture Hip-Hop, danse et aussi le sport avec le badminton.
				</p>

				<div className="w-full flex justify-center gap-6">
					<div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden border border-white/10">
						<Image
							src="/images/breakdance.jpeg"
							alt="Breakdance en performance"
							fill
							sizes="(max-width: 768px) 100vw, 384px"
							className="object-cover object-top"
						/>
					</div>

					<div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden border border-white/10">
						<Image
							src="/images/badminton.jpeg"
							alt="Badminton"
							fill
							sizes="(max-width: 768px) 100vw, 384px"
							className="object-cover object-center"
						/>
					</div>
				</div>

				<p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
					À l’été 2026, j’ai eu l’opportunité de vivre ma première
					saison en tant qu’animateur au camping Le Camarguais. Cette
					première expérience m’a permis de découvrir concrètement le
					métier et de mettre à profit mon énergie, mon sens du
					contact et mon expérience de speaker et de danseur. Les
					retours très positifs de cette saison ont confirmé mon envie
					de poursuivre dans l’animation et de continuer à évoluer
					dans ce milieu.
				</p>

				<p className="text-foreground text-lg md:text-xl leading-relaxed ">
					En 2019-2020, j’ai réalisé un PVT de 8 mois en Australie.
					Cette expérience m’a permis de gagner en adaptabilité et
					d’améliorer mon niveau d’anglais dans un contexte
					international.
				</p>
			</motion.section>

			{/* MÉTHODE */}
			<motion.section
				className="max-w-5xl mx-auto px-4 py-10"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-2xl dark:text-orange-300 text-orange-700 mb-6">
					Ma façon de travailler
				</h2>

				<p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
					J’accorde une importance à la préparation, à l’organisation
					et à l’adaptation. Pour moi, une bonne animation repose sur
					une activité bien préparée, mais aussi sur la capacité à
					s’adapter au public, à l’ambiance et aux imprévus.
				</p>

				<p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
					J’aime créer une ambiance dynamique, conviviale et
					bienveillante, tout en restant attentif aux personnes qui
					m’entourent. Mon expérience de speaker, de danseur et de
					professeur de danse m’a appris à prendre la parole, à
					transmettre mon énergie et à créer des moments qui
					rassemblent.
				</p>

				<p className="text-foreground text-lg md:text-xl leading-relaxed">
					Mon expérience de tailleur de pierre m’a également apporté
					le sens du travail bien fait, de la rigueur et de
					l’engagement. Aujourd’hui, je souhaite mettre ces qualités
					au service de l’animation, continuer à apprendre et évoluer.
				</p>
			</motion.section>

			{/* OBJECTIFS */}
			<motion.section
				className="max-w-5xl mx-auto px-4 py-16"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-2xl dark:text-orange-300 text-orange-700 mb-6">
					Mes objectifs
				</h2>

				<p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
					Après une première saison d’été en tant qu’animateur, je
					souhaite aujourd’hui continuer à évoluer dans ce métier,
					développer mes compétences et enrichir mon expérience auprès
					de différents publics et dans de nouveaux environnements.
				</p>

				<p className="text-foreground text-lg md:text-xl leading-relaxed">
					Mon objectif est de réaliser une saison d’hiver afin de
					découvrir un univers qui m’est encore presque totalement
					inconnu. Cette nouvelle expérience représente pour moi une
					occasion de sortir de ma zone de confort, de mettre à
					l’épreuve ma capacité d’adaptation et de continuer à
					progresser en tant qu’animateur polyvalent.
				</p>
			</motion.section>

			{/* EXPÉRIENCES & FORMATIONS */}
			<motion.section
				className="max-w-5xl mx-auto px-4 py-16"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7 }}
			>
				<div className="grid md:grid-cols-2 gap-12">
					{/* Left: Expériences */}
					<motion.div
						initial={{ opacity: 0, x: -80 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8 }}
					>
						<h3 className="text-xl font-bold dark:text-orange-300/90 text-orange-700 mb-8">
							Expériences
						</h3>

						<div className="relative border-l-2 border-orange-300/30 pl-8 space-y-10">
							{[
								{
									period: "Juin 2026 – Août 2026",
									title: "Animateur polyvalent",
									company:
										"Camping Le Camarguais, Lattes (34)",
									points: [
										"Encadrement et animation d’activités sportives pour enfants et adultes : pétanque, aquagym, football, ping-pong et volley-ball",
										"Création et animation d’activités manuelles et ludiques : fabrication de cannes à pêche, pêche et chasse au trésor",
										"Organisation et animation de soirées à thème : taureau piscine, karaoké, pool party, soirées dansantes et Family Games",
										"Création et animation de la Danse de l’été",
									],
								},
								{
									period: "Janvier 2026 – Mars 2026",
									title: "Stage Développeur Web/Mobile",
									company:
										"Association ICATY, Montpellier (34)",
									points: [
										'Création de l\'application "Un jour internet"',
										"Conception (Merise, cahier des charges, maquettes)",
										"Création d'une base de données",
										"Outils : Flutter, Python, Flask, SQLite, GitHub, Trello, SQLAlchemy",
									],
								},
								{
									period: "Mars 2021 – Août 2024",
									title: "Tailleur de pierre",
									company:
										"Carrière de Sarragan, Les Baux-de-Provence (13)",
									points: [
										"Transport et livraison des pierres",
										"Débitage tranches et blocs, taille sur mesure (moulure)",
										"Extraction des blocs",
									],
								},
								{
									period: "Janvier 2013 – Mai 2019",
									title: "Tailleur de pierre",
									company:
										"LE PETIT ATELIER, Mouans-Sartoux (06)",
									points: [
										"Travaux sur mesure pour le luxe (fontaines, cuisines, salles de bain...)",
										"Transport et livraison des pierres",
										"Débitage de tranches et blocs",
									],
								},
							].map(
								({ period, title, company, points }, index) => (
									<motion.div
										key={period}
										className="relative"
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.6,
											delay: index * 0.15,
										}}
									>
										<div className="absolute -left-[41px] top-1 w-5 h-5 bg-orange-300 rounded-full border-4 border-[#061423]" />
										<p className="dark:text-orange-300/70 text-orange-700 text-sm font-medium mb-1">
											{period}
										</p>
										<h3 className="text-lg font-bold text-foreground mb-1">
											{title}
										</h3>
										<p className="text-foreground/60 text-sm mb-3">
											{company}
										</p>
										<ul className="space-y-1">
											{points.map((point) => (
												<li
													key={point}
													className="text-foreground/80 text-base flex items-start gap-2"
												>
													<span className="text-orange-300 mt-1 shrink-0">
														•
													</span>
													{point}
												</li>
											))}
										</ul>
									</motion.div>
								),
							)}
						</div>
					</motion.div>

					{/* Right: Formations */}
					<motion.div
						initial={{ opacity: 0, x: 80 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8 }}
					>
						<h3 className="text-xl font-bold dark:text-orange-300/90 text-orange-700 mb-8">
							Formations
						</h3>

						<div className="space-y-6">
							{[
								{
									period: "Juin 2025 – Avril 2026",
									title: "Développeur Full Stack",
									company:
										"Fondespierre BeWeb, Montpellier (34)",
								},
								{
									period: "Septembre 2013 – Septembre 2015",
									title: "Brevet Professionnel métier de la pierre",
									company:
										"Compagnon du Devoir, Morières-les-Avignon (84)",
								},
								{
									period: "Septembre 2011 – Juillet 2013",
									title: "Bac Professionnel Métier de la pierre",
									company: "Lycée des Alpilles, Miramas (13)",
								},
							].map(({ period, title, company }, index) => (
								<motion.div
									key={period}
									className="bg-black/5 dark:bg-[#0a1e35] border border-orange-300/20 rounded-xl p-5"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.6,
										delay: index * 0.2,
									}}
								>
									<p className="dark:text-orange-300/70 text-orange-700 text-sm font-medium mb-1">
										{period}
									</p>
									<h4 className="text-base font-bold text-foreground dark:text-foreground mb-1">
										{title}
									</h4>
									<p className="text-foreground/60 dark:text-foreground/60 text-sm">
										{company}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
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
