"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Elements that get a staggered reveal as they scroll into view. The pre-state
 * is applied from JS so the page stays fully readable when JS never runs.
 */
const REVEAL_SELECTOR = [
  ".about-copy",
  ".investor-card",
  ".reference-plan",
  ".reference-stats > div",
  ".reference-review-grid figure",
  ".about-points > div",
  ".reference-plans > .eyebrow",
  ".reference-plans > h2",
  ".reference-reviews > .eyebrow",
  ".reference-reviews > h2",
  "main article",
  "main section h2",
].join(",");

/** Stat values such as "10,000+", "₹25CR+", "99.8%" or "100%". */
const NUMBER_PATTERN = /^(\D*?)([\d,]+(?:\.\d+)?)(.*)$/;

function countUp(el: HTMLElement) {
  const match = (el.textContent ?? "").trim().match(NUMBER_PATTERN);
  if (!match) return;

  const [, prefix, rawNumber, suffix] = match;
  const target = Number(rawNumber.replace(/,/g, ""));
  if (!Number.isFinite(target) || target === 0) return;

  const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0;
  const grouped = rawNumber.includes(",");
  const format = (value: number) => {
    const fixed = value.toFixed(decimals);
    return grouped ? Number(fixed).toLocaleString("en-IN", { minimumFractionDigits: decimals }) : fixed;
  };

  const duration = 1300;
  const start = performance.now();
  el.style.fontVariantNumeric = "tabular-nums";

  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    // easeOutCubic keeps the last digits from crawling
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `${prefix}${format(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || typeof IntersectionObserver === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    ).filter((el) => !el.hasAttribute("data-reveal"));

    // stagger each element against its matching siblings
    const seen = new Map<Element, number>();
    for (const el of elements) {
      const parent = el.parentElement ?? document.body;
      const index = seen.get(parent) ?? 0;
      seen.set(parent, index + 1);
      el.style.setProperty("--reveal-i", String(Math.min(index, 6)));
      el.setAttribute("data-reveal", "");
    }

    const counters = Array.from(
      document.querySelectorAll<HTMLElement>(".reference-stats strong")
    );
    const counted = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.setAttribute("data-reveal", "in");
          if (counters.includes(el) && !counted.has(el)) {
            counted.add(el);
            countUp(el);
          }
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );

    for (const el of elements) observer.observe(el);
    for (const el of counters) observer.observe(el);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
