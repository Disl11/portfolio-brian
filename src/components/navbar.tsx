"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const projects = [
    { href: "/projects/un-jour-internet", label: "Un jour internet" },
    { href: "/projects/portfolio", label: "Mon Portfolio" },
    { href: "/projects/breakdanet", label: "Breakdanet" },
];

const links = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    BF
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-sm transition-colors hover:text-foreground ${pathname === href
                                ? "font-medium text-foreground"
                                : "text-muted-foreground"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Dropdown Projets */}
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={`text-sm bg-transparent p-2 h-auto hover:bg-transparent focus:bg-transparent ${pathname.startsWith("/projects")
                                        ? "font-medium text-foreground"
                                        : "text-muted-foreground"
                                        }`}
                                >
                                    Projets
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-40 p-2">
                                        {projects.map(({ href, label }) => (
                                            <li key={href}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={href}
                                                        className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                                                    >
                                                        <p className="text-sm font-medium">{label}</p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center gap-2">
                    <ModeToggle />

                    {/* Burger mobile */}
                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="!w-56 !max-w-56" >
                                <SheetTitle className="text-left py-5 px-5">Menu</SheetTitle>
                                <ul className=" flex flex-col gap-2 px-5">
                                    {links.map(({ href, label }) => (
                                        <li key={href}>
                                            <Link
                                                href={href}
                                                onClick={() => setOpen(false)}
                                                className={`text-base transition-colors hover:text-foreground ${pathname === href
                                                    ? "font-medium text-foreground"
                                                    : "text-muted-foreground"
                                                    }`}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}

                                    {/* Projets dans le menu mobile — liste directe */}
                                    <li>
                                        <p className="text-base font-medium text-foreground mb-2">Projets</p>
                                        <ul className="flex flex-col gap-3 pl-3 border-l border-border">
                                            {projects.map(({ href, label }) => (
                                                <li key={href}>
                                                    <Link
                                                        href={href}
                                                        onClick={() => setOpen(false)}
                                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                    >
                                                        {label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    );
}