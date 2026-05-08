

export default function Breakdanet() {
    return (
        <div>


            {/* HERO */}
            <section className="max-w-5xl mx-auto px-4 py-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    BreakScore
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                    Application dédiée à la culture hip-hop
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <span className="px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-400/30">
                        HTML / CSS / JavaScript
                    </span>

                    <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-400/30">
                        Tailwind
                    </span>
                    <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-red-500/20 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-400/30">
                        Flutter
                    </span>                    <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-400/30">
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
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
                        BREAKSCORE est une app de scoring la culture hip-hop notamement le breakance, inspirée du jeu "HORSE" au basket et du "OUT" skateboard.
                        Le principe est simple : les danseurs s'affrontent en physique et l'app gère le score.
                        Un danseur pose une figure de son choix. S'il la réussit, tous les autres doivent la reproduire. Ceux qui échouent reçoivent une lettre du mot B·R·E·A·K. Le danseur qui complète les 5 lettres est éliminé. Le dernier encore en jeu remporte le cypher.
                        Si le poseur rate sa propre figure, le tour passe au suivant sans conséquence.

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
            <section className="max-w-5xl mx-auto px-4 py-16 ">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Objectifs
                </h2>

                <p className=" text-lg md:text-xl leading-relaxed max-w-3xl ">
                    L’objectif principal est de proposer un système de scoring et de tracking permettant aux danseurs de suivre facilement les performances, les victoires et les défaites au fur et à mesure des figures réalisées.
                    Pensée pour la culture hip-hop et l’univers du breaking, la plateforme offre une manière simple, rapide et ludique d’organiser des sessions, battles et entraînements entre danseurs.

                    Le projet met également l’accent sur l’expérience utilisateur,
                    avec une interface fluide et moderne.
                </p>
            </section>

            {/* EVOLUTION */}
            <section className="max-w-5xl mx-auto px-4 py-16 ">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Évolution du projet
                </h2>

                <p className=" text-lg md:text-xl leading-relaxed max-w-3xl ">
                    BreakScore est actuellement en cours de développement. De nouvelles fonctionnalités seront ajoutées progressivement, avec pour objectif de rester simple à faire évoluer au fil du temps.
                    Au programme : nouveaux modes de jeu en solo et en groupe, pour enrichir l'expérience sans jamais perdre l'essentiel — jouer, s'affronter, progresser.
                </p>
            </section>
        </div>

    );
}