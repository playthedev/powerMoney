import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, HeartHandshake, Eye } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { footerNav } from "@/data/nav";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="h-1 w-full bg-gradient-to-r from-danger via-accent to-growth" />
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo variant="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Fixed-tenure investment plans with guaranteed monthly returns,
              transferred directly to your bank account — built for Indian
              investors.
            </p>
            <div className="mt-5 flex gap-3">
              {[FacebookIcon, XIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brand hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:grid-cols-3">
          <div className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 shrink-0 text-brand" />
            1800-123-456 (Toll Free)
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="h-4 w-4 shrink-0 text-brand" />
            support@powermoney.in
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 shrink-0 text-brand" />
            HSR Layout, Bengaluru, India
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PowerMoney. All rights reserved.</p>
          <p className="max-w-2xl leading-relaxed">
            *Guaranteed returns are as per the selected plan&apos;s terms.
            Please read all plan-related documents carefully before
            investing.
          </p>
        </div>

        <div className="mt-4 border-t border-white/10 pt-4 text-xs text-white/40">
          <p>
            This site is built by{" "}
            <a
              href="https://www.nexmogen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/60 underline underline-offset-2 transition-colors hover:text-white"
            >
              Nexmogen
            </a>
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-navy-light/40">
        <Container className="flex flex-col items-center justify-between gap-4 py-4 text-xs font-semibold uppercase tracking-wide text-white/60 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-growth" />
              100% Safe
            </span>
            <span className="flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-brand" />
              100% Trusted
            </span>
            <span className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-accent" />
              100% Transparent
            </span>
          </div>
          <p className="normal-case tracking-normal text-white/40">
            Power Money — Powering Your Financial Future
          </p>
        </Container>
      </div>
    </footer>
  );
}
