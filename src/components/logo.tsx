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
        <span className="font-display text-xl font-extrabold uppercase tracking-tight">
          <span className="text-accent">Power</span>{" "}
          <span className={variant === "light" ? "text-brand" : "text-white"}>
            Money
          </span>
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium tracking-wide",
            variant === "light" ? "text-foreground/45" : "text-white/50"
          )}
        >
          Grow More. Earn More. Live More.
        </span>
      </span>
    </span>
  );
}
