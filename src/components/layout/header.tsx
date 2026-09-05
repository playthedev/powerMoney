"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, TrendingUp } from "lucide-react";
import { mainNav } from "@/data/nav";
export function Header() {
 const [open, setOpen] = useState(false);
 const pathname = usePathname();
 return <header className="site-header"><div className="header-inner">
 <Link className="reference-logo" href="/" aria-label="Power Money home"><Image className="reference-logo-image" src="/power-money-logo-reference.png" alt="Power Money — Grow More. Earn More. Live More." width={960} height={216} priority /></Link>
 <nav className={open ? "reference-nav is-open" : "reference-nav"} id="main-navigation" aria-label="Main navigation">{mainNav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
 <Link className="reference-button gold header-invest" href="/contact"><TrendingUp /> Invest Now</Link>
 <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
 </div></header>;
}
