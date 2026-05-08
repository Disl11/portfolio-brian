import Image from "next/image";

export default function About() {
    return (
        <>
            {/* HERO */}
            <section className="max-w-5xl mx-auto px-4 py-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
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
            <section className="max-w-5xl mx-auto px-4 py-10">

                <div className="flex flex-col md:flex-row justify-center items-center gap-16 text-center">
                    {[
                        { title: "Front-end", icons: ["javascript", "nextjs"] },
                        { title: "Back-end", icons: ["nodejs", "symfony", "python"] },
                        { title: "Mobile", icons: ["flutter"] },
                        { title: "Database", icons: ["mysql", "sqlite"] },
                        { title: "Versioning", icons: ["git", "github"] },
                        { title: "Conteneurisation", icons: ["docker"] },
                    ].map(({ title, icons }) => (
                        <div key={title}>
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
                        </div>
                    ))}
                </div>
            </section>
            {/* PARCOURS */}
            < section className="max-w-5xl mx-auto px-4 py-10" >
                <h2 className="text-2xl text-orange-300 mb-6">Mon parcours</h2>
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
                    Tailleur de pierre pendant 12 ans, j'ai développé des compétences en rigueur,
                    précision et travail en équipe à travers des projets exigeants principalement dans le luxe.
                    J'ai obtenu un Brevet Professionnel (BP) auprès des Compagnons du Devoir,
                    une formation qui m'a permis d'atteindre un haut niveau d'exigence et de savoir-faire.
                </p>
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
                    En 2019-2020, j'ai effectué un PVT de 8 mois en Australie.
                    Parti sans véritable niveau en anglais, cette expérience m'a permis de développer
                    une capacité d'adaptation et d'améliorer significativement mes compétences linguistiques,
                    atteignant aujourd'hui un niveau intermédiaire.
                </p>
                <p className="text-foreground text-lg md:text-xl leading-relaxed">
                    En 2025, j'ai entrepris une reconversion dans le développement web et mobile
                    en suivant une formation de juin à avril. Aujourd'hui, je poursuis mon apprentissage
                    et développe mes compétences à travers des projets.
                </p>
            </section >



            {/* MÉTHODE */}
            < section className="max-w-5xl mx-auto px-4 py-10" >
                <h2 className="text-2xl text-orange-300 mb-6">Ma façon de travailler</h2>
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
                    J'essaie de produire un code propre, lisible et maintenable, tout en cherchant
                    à progresser sur les bonnes pratiques. Lorsqu'un problème survient, je n'hésite
                    pas à échanger afin de mieux comprendre et avancer efficacement.
                </p>
                <p className="text-foreground text-lg md:text-xl leading-relaxed">
                    Lors de ma formation, j'ai été initié aux méthodes Agile, notamment Scrum et Kanban.
                    J'ai pu les mettre en pratique au sein de projets d'équipe, avec des réunions
                    quotidiennes, une organisation en sprints et une gestion des tâches via des tableaux
                    de suivi, notamment durant mon stage au sein de l'association ICATY.
                </p>
            </section >

            {/* OBJECTIFS */}
            < section className="max-w-5xl mx-auto px-4 py-16" >
                <h2 className="text-2xl text-orange-300 mb-6">Mes objectifs</h2>
                <p className="text-foreground text-lg md:text-xl leading-relaxed">
                    La taille de pierre m'a permis de développer une approche basée sur la précision,
                    la rigueur et la recherche d'un résultat propre et soigné. Ce qui m'anime aujourd'hui
                    dans le développement, c'est de comprendre comment concevoir des solutions claires,
                    structurées et efficaces. Je suis en constant apprentissage, mais déjà capable de
                    contribuer sur des projets concrets. Je cherche aujourd'hui une entreprise où je
                    pourrai évoluer tout en contribuant activement aux projets.
                </p>
            </section >

            {/* EXPÉRIENCES & FORMATIONS */}
            <section className="max-w-5xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Expériences */}
                    <div>
                        <h3 className="text-xl font-bold text-orange-300/90 mb-8">Expériences</h3>
                        <div className="relative border-l-2 border-orange-300/30 pl-8 space-y-10">
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
                                    <p className="text-orange-300/70 text-sm font-medium mb-1">{period}</p>
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
                        <h3 className="text-xl font-bold text-orange-300/90 mb-8">Formations</h3>
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
                                    <p className="text-orange-300/70 text-sm font-medium mb-1">{period}</p>
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
                <h2 className="text-2xl text-orange-300 mb-6">Hobbies</h2>
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