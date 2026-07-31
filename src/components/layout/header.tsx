"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { productLinks, mainNav } from "@/data/nav";
import { cn, isNavActive } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  return <HeaderNav key={pathname} pathname={pathname} />;
}

function HeaderNav({ pathname }: { pathname: string }) {
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isProductsActive = productLinks.some((item) => isNavActive(pathname, item.href));

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-white/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3.5">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-navy",
                (productsOpen || isProductsActive) && "bg-surface text-navy",
                isProductsActive && "font-semibold text-brand hover:text-brand"
              )}
            >
              Products
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  productsOpen && "rotate-180"
                )}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border-subtle bg-white p-3 shadow-xl shadow-slate-900/10">
                  {productLinks.map((item) => {
                    const active = isNavActive(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface",
                          active && "bg-brand-light/60"
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand",
                            active && "bg-brand text-white"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span
                            className={cn(
                              "block text-sm font-semibold text-navy",
                              active && "text-brand"
                            )}
                          >
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-foreground/55">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {mainNav.map((item) => {
            const active = isNavActive(pathname, item.href);
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
            <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-foreground/40">
              Products
            </p>
            {productLinks.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-surface",
                    active && "bg-brand-light font-semibold text-brand"
                  )}
                >
                  <item.icon className={cn("h-4 w-4 text-brand", active && "text-brand")} />
                  {item.label}
                </Link>
              );
            })}
            <div className="my-2 h-px bg-border-subtle" />
            {mainNav.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-surface",
                    active && "bg-brand-light font-semibold text-brand"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href="/contact" className="mt-3 w-full">
              Get a Callback
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
