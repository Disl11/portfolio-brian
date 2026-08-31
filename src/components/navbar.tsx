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
							className={`text-sm transition-colors hover:text-foreground ${
								pathname === href
									? "font-medium text-foreground"
									: "text-muted-foreground"
							}`}
						>
							{label}
						</Link>
					))}
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
							<SheetContent
								side="right"
								className="!w-56 !max-w-56"
							>
								<SheetTitle className="text-left py-5 px-5">
									Menu
								</SheetTitle>
								<ul className=" flex flex-col gap-2 px-5">
									{links.map(({ href, label }) => (
										<li key={href}>
											<Link
												href={href}
												onClick={() => setOpen(false)}
												className={`text-base transition-colors hover:text-foreground ${
													pathname === href
														? "font-medium text-foreground"
														: "text-muted-foreground"
												}`}
											>
												{label}
											</Link>
										</li>
									))}
								</ul>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</nav>
		</header>
	);
}
