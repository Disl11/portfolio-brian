import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-15">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-[40px_100px_20px_100px] overflow-hidden relative shrink-0">
            <Image
              src="/images/unnamed.jpg"
              alt="Photo de Brian Farnier"
              fill
              sizes="(max-width: 768px) 160px, 208px"
              className="object-cover object-center scale-105"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight py-5">
            Brian Farnier <br />
            <span className="text-3xl md:text-4xl font-bold text-orange-300">
              Développeur Fullstack
            </span>
          </h1>

        </div>
      </section>

      {/* À PROPOS */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-15">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-10">
            À PROPOS
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
            Après 12 ans d'expérience en tant que tailleur de pierre, j'ai entamé
            une reconversion dans le développement web et mobile et je suis
            aujourd'hui développeur fullstack junior. Motivé et curieux, je cherche
            à mettre mes compétences à profit tout en continuant à apprendre.
          </p>
          <Link
            href="/about"
            className="inline-block bg-orange-300 text-[#061423] px-4 py-2 rounded-lg font-bold hover:bg-white transition"
          >
            En savoir plus
          </Link>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-300 mb-10">
            RÉSEAUX
          </h3>
          <div className="space-y-4">

            <a href="https://github.com/Disl11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-orange-300 transition"
            >
              <Image
                src="/images/github.png"
                alt="GitHub"
                width={32}
                height={32}
              />
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/brian-farnier-353524307/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-orange-300 transition"
            >
              <Image
                src="/images/linkedin.webp"
                alt="linkedin"
                width={27}
                height={27}
              />
              LinkedIn
            </a>
          </div>
        </div>
      </section >

      {/* PROJETS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-10">
          PROJETS
        </h2>
        <div className="flex flex-col gap-8 items-center">
          {[
            { label: "1 mot internet", img: "/images/logo_uji.png", href: "/projects/un-jour-internet" },
            { label: "Mon Portfolio", img: "/images/portfolio-photo.jpg", href: "/projects/portfolio" },
            { label: "Breakdanet", img: "/images/a venir.avif", href: "/projects/breakdanet" },
          ].map(({ label, img, href }) => (
            <Link
              key={label}
              href={href}
              className="relative w-full max-w-[700px] h-[150px] overflow-hidden hover:scale-105 transition cursor-pointer rounded-lg block"
            >
              <Image src={img} alt={label} fill sizes="700px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#09223bcc] to-transparent" />
              <p className="absolute top-1/2 left-12 -translate-y-1/2 text-white font-bold text-3xl drop-shadow-lg z-10">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* COMPÉTENCES */}
      < section className="max-w-6xl mx-auto px-4 py-16" >
        <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-12">
          COMPÉTENCES
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Je suis actuellement le plus à l'aise avec Next.js, Python, Flutter et SQLite.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 text-center">
          {[
            { title: "Front-end", icons: ["javascript", "nextjs"] },
            { title: "Back-end", icons: ["nodejs", "symfony", "python"] },
            { title: "Mobile", icons: ["flutter"] },
            { title: "Database", icons: ["mysql", "sqlite"] },
            { title: "Versioning", icons: ["git", "github",] },
            { title: "Conteneurisation", icons: ["docker"] },
          ].map(({ title, icons }) => (
            <div key={title}>
              <h3 className="mb-6 font-bold text-xl">{title}</h3>
              <div className="flex justify-center gap-6">
                {icons.map((icon) => (
                  <i key={icon} className={`devicon-${icon}-plain colored text-5xl`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* CONTACT */}
      < section className="max-w-3xl mx-auto px-4 py-16" >
        <h2 className="text-2xl md:text-3xl font-bold text-orange-300 mb-10">
          CONTACT
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-orange-300 text-[#061423] px-6 py-2 rounded font-bold hover:bg-white transition"
        >
          Me contacter
        </Link>
      </section >



    </>
  );
}