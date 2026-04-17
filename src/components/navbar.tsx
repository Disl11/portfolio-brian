"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

const links = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/experience", label: "Expériences" },
    { href: "/projects", label: "Projets" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    BF
                </Link>

                <ul className="flex items-center gap-6">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`text-sm transition-colors hover:text-foreground ${pathname === href
                                    ? "font-medium text-foreground"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ModeToggle />
            </nav>
        </header>
    );
}