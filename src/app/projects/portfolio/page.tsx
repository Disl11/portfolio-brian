import Image from "next/image";
import Link from "next/link";


export default function Portfolio() {
    return (
        <main className="text-foreground min-h-screen">

            {/* HERO */}
            <section className="max-w-5xl mx-auto px-4 py-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Mon Portfolio
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                    Stack utilisée sur le projet
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
                        Next.js
                    </span>

                    <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 border border-green-400/30">
                        Tailwind
                    </span>
                    <span className="px-4 py-2 rounded-full bg-indigo-500/20 text-green-300 border border-green-400/30">
                        Shadcn/ui
                    </span>
                </div>
            </section>

            {/* PROJET */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-10">
                    Le projet
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <p className="text-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
                        Ce portfolio a été conçu pour présenter mes projets, mes compétences
                        et mon évolution en développement web/mobile.

                        Il reflète ma manière de travailler : proposer des interfaces
                        claires, structurées et efficaces.

                        À travers ce projet, j’ai cherché à créer une vitrine professionnelle
                        et accessible.
                    </p>

                    <a
                        href="https://github.com/Disl11/portfolio-brian"
                        target="_blank"
                        className="bg-orange-300 text-[#061423] px-4 py-2 rounded-lg font-bold hover:bg-white transition"
                    >
                        Voir repository GitHub
                    </a>
                </div>
            </section>

            {/* CHOIX TECHNIQUES */}
            <section className="max-w-5xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Choix techniques
                </h2>

                <p className="text-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    Conçu avec Next.js 15, Tailwind CSS et shadcn/ui, ce portfolio reflète
                    mon approche du développement : un code propre, une interface soignée
                    et une expérience utilisateur pensée sur tous les écrans.
                    Il évolue au fil de mes projets et de ma progression.
                </p>
            </section>

            {/* ARBORESCENCE */}
            <section className="max-w-5xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-6">
                    Arborescence du projet
                </h2>

                <p className="text-foreground mb-10">
                    Structure claire pour faciliter maintenance et évolution.
                </p>

                <pre className="bg-white/5 text-foreground p-6 rounded-xl text-sm overflow-x-auto text-left">
                    {`portfolio-brian/
├── public/
│   ├── images/
│   └── CV_Brian_Farnier.pdf
└── src/
    ├── app/
    │   ├── about/
    │   │   └── page.tsx
    │   ├── contact/
    │   │   └── page.tsx
    │   ├── projects/
    │   │   ├── un-jour-internet/
    │   │   │   └── page.tsx
    │   │   ├── portfolio/
    │   │   │   └── page.tsx
    │   │   └── breakdanet/
    │   │       └── page.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    └── components/
        ├── ui/
        ├── Navbar.tsx
        ├── mode-toggle.tsx
        └── theme-provider.tsx`}
                </pre>
            </section>
        </main>
    );
}