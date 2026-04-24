

export default function Breakdanet() {
    return (
        <main className="bg-[#061423] text-white min-h-screen">


            {/* HERO */}
            <section className="max-w-5xl mx-auto px-4 py-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    BreakDaNet
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                    Plateforme dédiée à la culture breakdance
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
                        HTML / CSS / JavaScript
                    </span>

                    <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 border border-green-400/30">
                        Tailwind
                    </span>

                    <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                        Projet en cours
                    </span>
                </div>
            </section>

            {/* PROJET */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-10">
                    Le projet
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl">
                        BreakDaNet est une plateforme dédiée à la culture breakdance.
                        L’objectif est de centraliser les informations, événements,
                        danseurs et contenus liés à cette discipline.

                        Ce projet vise à créer un espace moderne, accessible et dynamique
                        pour la communauté, tout en mettant en valeur les talents et
                        les actualités du milieu.
                    </p>

                    <a
                        href="#"
                        className="bg-orange-300 text-[#061423] px-4 py-2 rounded-lg font-bold hover:bg-white transition"
                    >
                        Projet en cours 🚧
                    </a>
                </div>
            </section>

            {/* OBJECTIFS */}
            <section className="max-w-5xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Objectifs
                </h2>

                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    L’objectif principal est de proposer une plateforme complète autour
                    du breakdance : événements, profils de danseurs, contenus vidéos
                    et actualités.

                    Le projet met également l’accent sur l’expérience utilisateur,
                    avec une interface fluide, responsive et moderne.
                </p>
            </section>

            {/* EVOLUTION */}
            <section className="max-w-5xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Évolution du projet
                </h2>

                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    BreakDaNet est actuellement en cours de développement.
                    De nouvelles fonctionnalités seront ajoutées progressivement :

                    gestion des utilisateurs, base de données, système de publication
                    et interactions sociales.
                </p>
            </section>
        </main>
    );
}