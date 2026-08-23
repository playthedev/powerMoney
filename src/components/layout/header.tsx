"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNav } from "@/data/nav";
import { cn, isNavActive } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  return <HeaderNav key={pathname} pathname={pathname} />;
}

function HeaderNav({ pathname }: { pathname: string }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-white/90 backdrop-blur-md">
      <div className="h-1 w-full bg-gradient-to-r from-danger via-accent to-growth" />
      <Container className="flex h-18 items-center justify-between py-3.5">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = !item.href.includes("#") && isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-navy",
                  active && "bg-surface font-semibold text-brand hover:text-brand"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+911800123456"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-navy"
          >
            <Phone className="h-4 w-4" />
            1800-123-456
          </a>
          <Button href="/contact" size="sm">
            Get a Callback
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border-subtle bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => {
              const active = !item.href.includes("#") && isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-surface",
                    active && "bg-brand-light font-semibold text-brand"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="tel:+911800123456"
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/70"
            >
              <Phone className="h-4 w-4" />
              1800-123-456
            </a>
            <Button href="/contact" className="mt-1 w-full">
              Get a Callback
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
