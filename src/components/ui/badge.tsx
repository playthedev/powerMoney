import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        brand: "bg-brand-light text-brand-dark",
        growth: "bg-growth-light text-growth-dark",
        accent: "bg-accent-light text-accent-dark",
        danger: "bg-danger-light text-danger",
        violet: "bg-violet-light text-violet-dark",
        navy: "bg-navy text-white",
        neutral: "bg-surface-alt text-foreground/70",
      },
    },
    defaultVariants: {
      variant: "brand",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
