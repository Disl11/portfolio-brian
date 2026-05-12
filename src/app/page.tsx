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
    show: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
  };
  return (
    <>

      {/* HERO */}
      <motion.section initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 py-8">
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
            <span className="text-3xl md:text-4xl font-bold dark:text-orange-300 text-orange-700">
              Développeur Fullstack
            </span>
          </h1>

        </div>
      </motion.section>

      {/* À PROPOS */}
      <motion.section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-15" initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}>
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold dark:text-orange-300 text-orange-700 mb-10">
            À PROPOS
          </h2>
          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-4">
            Mon expérience en tant que tailleur de pierre m’a apporté une rigueur technique et une autonomie solides dans la réalisation de projets exigeants. Cette culture du travail précis et structuré m’a conduit vers le développement, un domaine dans lequel je retrouve les mêmes exigences de logique, de résolution de problèmes et de construction, appliquées cette fois au numérique.
          </p>

          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6">
            Aujourd’hui développeur fullstack junior, je développe des projets avec des technologies comme Next.js, python et Flutter, à travers différentes expériences pratiques qui m’ont permis de concevoir et réaliser des applications de bout en bout.
          </p>
          <Link
            href="/about"
            className="inline-block bg-orange-300 text-[#061423] px-4 py-2 rounded-lg font-bold hover:bg-white transition"
          >
            En savoir plus
          </Link>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold dark:text-orange-300 text-orange-700 mb-10">
            RÉSEAUX
          </h3>

          <div className="space-y-4">
            {[
              {
                type: "link",
                href: "https://github.com/Disl11",
                icon: <i className="devicon-github-plain text-3xl text-black dark:text-white" />,
                text: "GitHub Disl11",
              },
              {
                type: "link",
                href: "https://www.linkedin.com/in/brian-farnier-353524307/",
                icon: <i className="devicon-linkedin-plain text-3xl text-black dark:text-white" />,
                text: "LinkedIn Brian Farnier",
              },
              {
                type: "text",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-black dark:text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
                text: "brian.pro1993@gmail.com",
              },
              {
                type: "text",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-black dark:text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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


      </motion.section >

      {/* PROJETS */}
      <motion.section
        className="max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold dark:text-orange-300 text-orange-700 mb-10">
          PROJETS
        </h2>

        <div className="flex flex-col gap-8 items-center">
          {[
            { label: "1 jour internet", img: "/images/logo_uji.png", href: "/projects/un-jour-internet" },
            { label: "BreakScore", img: "/images/breakdance.jpeg", href: "/projects/breakdanet" },
            { label: "Mon Portfolio", img: "/images/portfolio-photo.jpg", href: "/projects/portfolio" },
          ].map(({ label, img, href }, index) => (
            <motion.div
              key={label}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 120 : -120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="w-full max-w-[700px]"
            >
              <Link
                href={href}
                className="relative w-full max-w-[700px] h-[150px] overflow-hidden hover:scale-105 transition cursor-pointer rounded-lg block"
              >
                <Image src={img} alt={label} fill sizes="700px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#09223bcc] to-transparent" />
                <p className="absolute top-1/2 left-12 -translate-y-1/2 text-white font-bold text-3xl drop-shadow-lg z-10">
                  {label}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

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

      {/* contact */}
      <motion.section className="max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}>
        <div className="flex items-center  gap-4 flex-wrap text-lg">
          <p>Disponible pour des opportunités Developpeur junior web/mobile ou des collaborations techniques.</p>
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