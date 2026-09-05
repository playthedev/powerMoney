import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import "./globals.css";
export const metadata: Metadata = {
 title: { default: "PowerMoney - Powering Your Financial Future", template: "%s | PowerMoney" },
 description: "Explore Power Money investment plans, learn how they work, and contact our team for more information.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en" className="h-full antialiased"><body className="flex min-h-full flex-col bg-white"><ScrollReveal /><Header /><main className="flex-1">{children}</main><Footer /></body></html>;
}
