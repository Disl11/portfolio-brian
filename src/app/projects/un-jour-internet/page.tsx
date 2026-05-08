import Image from "next/image";
import Link from "next/link";

export default function UnJourInternet() {
    return (
        <>
            {/* HERO */}
            <section className="max-w-5xl mx-auto px-4 py-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Un jour internet
                </h1>
                <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
                    Stack utilisée sur le projet
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {[
                        { label: "Html / CSS / JavaScript", color: "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-400/30" },
                        { label: "Python", color: "bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 border-green-300 dark:border-green-400/30" },
                        { label: "Flask", color: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-400/30" },
                        { label: "Flutter", color: "bg-sky-100 dark:bg-sky-500/20 text-sky-800 dark:text-sky-300 border-sky-300 dark:border-sky-400/30" },
                        { label: "SQLite", color: "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-400/30" },
                        { label: "Figma", color: "bg-pink-100 dark:bg-pink-500/20 text-pink-800 dark:text-pink-300 border-pink-300 dark:border-pink-400/30" },
                        { label: "Docker", color: "bg-orange-100 dark:bg-orange-500/20 text-orange-800 dark:text-orange-300 border-orange-300 dark:border-orange-400/30" },
                        { label: "Looping", color: "bg-gray-100 dark:bg-gray-500/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-400/30" },
                        { label: "Intégration Continue", color: "bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-300 border-red-300 dark:border-red-400/30" },
                    ].map(({ label, color }) => (
                        <span key={label} className={`px-4 py-2 rounded-full border text-sm md:text-base ${color}`}>
                            {label}
                        </span>
                    ))}
                </div>
            </section>

            {/* LE PROJET */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Le projet
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <p className="text-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
                        Lors de mon stage au sein de l'association ICATY, j'ai participé au développement
                        d'une application mobile et web complète dans un contexte réel de situation
                        client/développeur. Ma mission principale était de concevoir l'application
                        « Un jour internet », de la conception jusqu'au déploiement. J'ai travaillé sur
                        le back-end avec la création d'une API et la gestion de la base de données, ainsi
                        que sur le front-end mobile et le back-office web destiné aux administrateurs.
                        Cette application a pour objectif de sensibiliser les personnes âgées aux usages
                        du numérique et de renforcer leur sécurité en ligne. Elle propose un mot par jour,
                        accompagné d'une explication simple et accessible.
                    </p>
                    <div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden">
                        <Image
                            src="/images/logo_uji.png"
                            alt="Logo Un jour internet"
                            fill
                            sizes="384px"
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* ARCHITECTURE */}
            <section className="max-w-5xl mx-auto px-4 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Architecture de l'application
                </h2>
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-10">
                    L'application « Un jour internet » est structurée en plusieurs parties afin
                    d'assurer une expérience fluide, sécurisée et évolutive.
                </p>

                <div className="flex justify-center mb-10">
                    <div className="relative w-full max-w-xl h-80 rounded-xl overflow-hidden">
                        <Image
                            src="/images/archi.png"
                            alt="Architecture de l'application"
                            fill
                            sizes="576px"
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="space-y-6 text-foreground text-lg leading-relaxed">
                    {[
                        {
                            title: "Front-end mobile (pour les utilisateurs)",
                            desc: "Destiné aux utilisateurs, il permet de consulter le mot du jour, d'accéder aux anciens mots, de choisir l'heure des notifications et de contacter ICATY.",
                            badge: { label: "Flutter", color: "bg-sky-100 dark:bg-sky-500/20 text-sky-800 dark:text-sky-300 border-sky-300 dark:border-sky-400/30" },
                        },
                        {
                            title: "Back-office web (pour les administrateurs)",
                            desc: "Interface réservée aux administrateurs authentifiés, permettant la gestion des mots, des comptes administrateurs ainsi que l'accès aux statistiques.",
                            badge: { label: "Html / CSS / JavaScript", color: "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-400/30" },
                        },
                        {
                            title: "Back-end & base de données",
                            desc: "Le back-end gère la logique métier, le traitement des requêtes et la communication avec la base de données.",
                            badge: { label: "Python · Flask · SQLite", color: "bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 border-green-300 dark:border-green-400/30" },
                        },
                    ].map(({ title, desc, badge }) => (
                        <div key={title}>
                            <h3 className="text-foregroundfont-semibold mb-2">{title}</h3>
                            <p>
                                {desc}{" "}
                                <span className={`inline-block px-4 py-1 rounded-full border text-sm ${badge.color}`}>
                                    {badge.label}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <h3 className="text-xl font-bold text-orange-300 mb-4">
                        Fonctionnalités principales
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                        {[
                            "Réception d'une notification quotidienne à heure définie",
                            "Accès au mot du jour et à ses explications",
                            "Personnalisation de l'heure des notifications",
                            "Possibilité de revoir les mots des jours précédents",
                            "Application gratuite financée par la publicité",
                            "Gestion complète des contenus par les administrateurs",
                            "Statistiques anonymisées accessibles uniquement aux administrateurs",
                        ].map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* APERÇU */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6 text-center">
                    Aperçu de l'application (côté utilisateur)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        { src: "/images/dic.png", alt: "Mot du jour", caption: "Affichage du mot du jour" },
                        { src: "/images/horrair.png", alt: "Page options", caption: "Paramétrage de l'heure des notifications" },
                    ].map(({ src, alt, caption }) => (
                        <div key={alt} className="text-center">
                            <div className="relative w-full max-w-sm mx-auto h-96 rounded-xl overflow-hidden">
                                <Image src={src} alt={alt} fill sizes="384px" className="object-contain" />
                            </div>
                            <p className="mt-3 text-foreground text-sm md:text-base">{caption}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONCEPTION */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6 text-center">
                    Conception & architecture technique
                </h2>
                <div className="space-y-10 text-foreground text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-foreground font-semibold mb-2">Conception de la base de données</h3>
                        <p className="mb-6">
                            La base de données a été conçue en utilisant la méthode Merise afin de structurer
                            efficacement les données. J'ai utilisé l'outil Looping pour réaliser les modèles
                            conceptuels et logiques (MCD / MLD / MPD).
                        </p>
                        <div className="relative w-full max-w-2xl mx-auto h-80 rounded-xl overflow-hidden">
                            <Image src="/images/mcd.png" alt="MCD" fill sizes="672px" className="object-contain" />
                        </div>
                        <p className="text-center text-sm text-foreground mt-2">
                            Modèle Conceptuel de Données (MCD) réalisé avec Looping
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-2">Portabilité du projet</h3>
                        <p>
                            J'ai utilisé Docker afin de faciliter le déploiement et garantir la portabilité
                            de l'application sur différents environnements.
                        </p>
                    </div>
                </div>
            </section>

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