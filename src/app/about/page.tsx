"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
        show: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
    };

    return (
        <>
            {/* HERO */}
            <section className="max-w-5xl mx-auto px-4 py-10 text-center">
                <h1 className="text-4xl dark:text-orange-300 text-orange-700 md:text-6xl font-bold mb-6">
                    Brian Farnier
                </h1>
                <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
                    Développeur web/mobile junior, basé à Montpellier.
                </p>


                <a href="/CV_Brian_Farnier.pdf"
                    download
                    className="inline-block mt-8 px-6 py-3 bg-orange-300 text-[#061423] font-bold rounded-lg hover:bg-white transition">

                    Télécharger mon CV
                </a>
            </section >

            {/* COMPÉTENCES */}
            <motion.section
                className="max-w-5xl mx-auto px-4 py-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={container}
            >
                <div className="flex flex-col md:flex-row justify-center items-center gap-16 text-center">

                    {[
                        { title: "Front-end", icons: ["javascript", "nextjs"] },
                        { title: "Back-end", icons: ["nodejs", "symfony", "python"] },
                        { title: "Mobile", icons: ["flutter"] },
                        { title: "Database", icons: ["mysql", "sqlite"] },
                        { title: "Versioning", icons: ["git", "github"] },
                        { title: "Conteneurisation", icons: ["docker"] },
                    ].map(({ title, icons }) => (
                        <motion.div key={title} variants={item}>
                            <h3 className="mb-6 font-bold text-xl">{title}</h3>

                            <div className="flex justify-center gap-6">
                                {icons.map((icon) => (
                                    <i
                                        key={icon}
                                        className={`devicon-${icon}-plain text-5xl ${["symfony", "github"].includes(icon)
                                            ? "text-black dark:text-white"
                                            : "colored"
                                            }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </motion.section>
            {/* PARCOURS */}
            <section className="max-w-5xl mx-auto px-4 py-10">
                <h2 className="text-2xl dark:text-orange-300 text-orange-700 mb-6">
                    Mon parcours
                </h2>

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
                    Pendant 12 ans, j’ai travaillé comme tailleur de pierre sur des projets
                    exigeants, principalement dans le secteur du luxe. Cette expérience m’a
                    permis de développer rigueur, précision et sens du détail, des qualités
                    que j’applique aujourd’hui dans le développement.
                </p>

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
                    J’ai également obtenu un Brevet Professionnel auprès des Compagnons du
                    Devoir, une formation qui m’a appris l’exigence, l’autonomie et le travail
                    en équipe.
                </p>


                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
                    En 2025, j’ai entrepris une reconversion dans le développement web et
                    mobile à travers une formation orientée MERN et Flutter, complétée par une
                    expérience de stage chez ICATY. Aujourd’hui, je continue de développer mes
                    compétences à travers des projets personnels et une pratique régulière.
                </p>


                <p className="text-foreground text-lg md:text-xl leading-relaxed ">
                    En 2019-2020, j’ai réalisé un PVT de 8 mois en Australie. Cette expérience
                    m’a permis de gagner en adaptabilité et d’améliorer mon niveau d’anglais
                    dans un contexte international.
                </p>
            </section>



            {/* MÉTHODE */}
            <section className="max-w-5xl mx-auto px-4 py-10">
                <h2 className="text-2xl dark:text-orange-300 text-orange-700 mb-6">
                    Ma façon de travailler
                </h2>

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
                    Je porte une attention particulière à la lisibilité, la structure et la
                    maintenabilité du code. J’aime concevoir des interfaces claires,
                    responsive et cohérentes, tout en cherchant à appliquer de bonnes
                    pratiques de développement.
                </p>

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
                    Lorsqu’un problème se présente, j’essaie d’analyser la situation de façon
                    méthodique et de trouver des solutions adaptées. J’apprécie également le
                    travail collaboratif et les échanges techniques, qui permettent de
                    progresser plus efficacement au sein d’une équipe.
                </p>

                <p className="text-foreground text-lg md:text-xl leading-relaxed">
                    Durant ma formation et mon stage chez ICATY, j’ai été initié aux méthodes
                    Agile, notamment Scrum et Kanban, avec une organisation en sprints,
                    des réunions de suivi et une gestion des tâches en équipe.
                </p>
            </section>

            {/* OBJECTIFS */}
            <section className="max-w-5xl mx-auto px-4 py-16">
                <h2 className="text-2xl dark:text-orange-300 text-orange-700 mb-6">
                    Mes objectifs
                </h2>

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
                    Mon parcours dans l’artisanat m’a appris la rigueur, la précision et
                    l’importance du travail bien réalisé. Aujourd’hui, j’applique cette même
                    approche au développement web et mobile à travers des projets concrets et
                    une montée en compétence continue.
                </p>

                <p className="text-foreground text-lg md:text-xl leading-relaxed">
                    Je recherche aujourd’hui une première expérience en tant que développeur
                    junior afin de continuer à progresser au sein d’une équipe technique,
                    participer à des projets réels et développer des solutions utiles,
                    maintenables et bien construites.
                </p>
            </section>

            {/* EXPÉRIENCES & FORMATIONS */}
            <section className="max-w-5xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Expériences */}
                    <div>
                        <h3 className="text-xl font-bold dark:text-orange-300/90  text-orange-700 mb-8">Expériences</h3>
                        <div className="relative border-l-2 border-orange-300/30  pl-8 space-y-10">
                            {[
                                {
                                    period: "Janvier 2026 – Mars 2026",
                                    title: "Stage Développeur Web/Mobile",
                                    company: "Association ICATY, Montpellier (34)",
                                    points: [
                                        "Création de l'application \"Un jour internet\"",
                                        "Conception (Merise, cahier des charges, maquettes)",
                                        "Création d'une base de données",
                                        "Outils : Flutter, Python, Flask, SQLite, GitHub, Trello, SQLAlchemy",
                                    ],
                                },
                                {
                                    period: "Novembre 2025 – Décembre 2025",
                                    title: "Projet de formation",
                                    company: "FondesPierre BeWeb, Montpellier (34)",
                                    points: [
                                        "Création d'un réseau social web/responsive",
                                        "Méthode agile, conception (Merise, UML, maquettes)",
                                        "Outils : Symfony, Next.js, GitLab, Trello",
                                    ],
                                },
                                {
                                    period: "Mars 2021 – Août 2024",
                                    title: "Tailleur de pierre",
                                    company: "Carrière de Sarragan, Les Baux-de-Provence (13)",
                                    points: [
                                        "Transport et livraison des pierres",
                                        "Débitage tranches et blocs, taille sur mesure (moulure)",
                                        "Extraction des blocs",
                                    ],
                                },
                                {
                                    period: "Janvier 2013 – Mai 2019",
                                    title: "Tailleur de pierre",
                                    company: "LE PETIT ATELIER, Mouans-Sartoux (06)",
                                    points: [
                                        "Travaux sur mesure pour le luxe (fontaines, cuisines, salles de bain...)",
                                        "Transport et livraison des pierres",
                                        "Débitage de tranches et blocs",
                                    ],
                                },
                            ].map(({ period, title, company, points }) => (
                                <div key={period} className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-orange-300 rounded-full border-4 border-[#061423]" />
                                    <p className=" dark:text-orange-300/70 text-orange-700 text-sm font-medium mb-1">{period}</p>
                                    <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
                                    <p className="text-foreground/60 text-sm mb-3">{company}</p>
                                    <ul className="space-y-1">
                                        {points.map((point) => (
                                            <li key={point} className="text-foreground/80 text-base flex items-start gap-2">
                                                <span className="text-orange-300 mt-1 shrink-0">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Formations */}
                    <div>
                        <h3 className="text-xl font-bold dark:text-orange-300/90 text-orange-700 mb-8">Formations</h3>
                        <div className="space-y-6">
                            {[
                                {
                                    period: "Juin 2025 – Avril 2026",
                                    title: "Développeur Full Stack",
                                    company: "Fondespierre BeWeb, Montpellier (34)",
                                },
                                {
                                    period: "Septembre 2013 – Septembre 2015",
                                    title: "Brevet Professionnel métier de la pierre",
                                    company: "Compagnon du Devoir, Morières-les-Avignon (84)",
                                },
                                {
                                    period: "Septembre 2011 – Juillet 2013",
                                    title: "Bac Professionnel Métier de la pierre",
                                    company: "Lycée des Alpilles, Miramas (13)",
                                },
                            ].map(({ period, title, company }) => (
                                <div key={period} className="bg-black/5 dark:bg-[#0a1e35] border border-orange-300/20 rounded-xl p-5">
                                    <p className="dark:text-orange-300/70 text-orange-700 text-sm font-medium mb-1">{period}</p>
                                    <h4 className="text-base font-bold text-foreground dark:text-foreground mb-1">{title}</h4>
                                    <p className="text-foreground/60 dark:text-foreground/60 text-sm">{company}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* HOBBIES */}
            <section className="max-w-5xl mx-auto px-4 py-16">
                <h2 className="text-2xl dark:text-orange-300 text-orange-700 mb-6">Hobbies</h2>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex flex-wrap gap-3 flex-1">
                        {[
                            "Badminton (compétition)",
                            "Breakdance (battles et chorégraphies)",
                            "Professeur de breakdance",
                        ].map((hobby) => (
                            <span
                                key={hobby}
                                className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 text-foreground border border-black/10 dark:border-white/10"
                            >
                                {hobby}
                            </span>
                        ))}
                    </div>

                    <div className="w-full md:flex-1 flex justify-center">
                        <div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden border border-white/10">
                            <Image
                                src="/images/breakdance.jpeg"
                                alt="Breakdance en performance"
                                fill
                                sizes="(max-width: 768px) 100vw, 384px"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}