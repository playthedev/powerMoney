import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-icon.png"
      alt="PowerMoney"
      width={695}
      height={746}
      priority
      className={cn("h-9 w-auto", className)}
    />
  );
}

export function Logo({
  className,
  markClassName,
  variant = "light",
}: {
  className?: string;
  markClassName?: string;
  variant?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight",
            variant === "light" ? "text-navy" : "text-white"
          )}
        >
          Power<span className="text-brand">Money</span>
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-wider",
            variant === "light" ? "text-foreground/40" : "text-white/50"
          )}
        >
          Powering your financial future
        </span>
      </span>
    </span>
  );
}
