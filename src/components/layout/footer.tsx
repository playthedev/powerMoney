import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo variant="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Research, compare and understand stocks, mutual funds, loans
              and insurance — all in one place, built for Indian investors.
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
            Mutual fund and stock market investments are subject to market
            risks. Read all scheme-related documents carefully.
          </p>
        </div>
      </Container>
    </footer>
  );
}
