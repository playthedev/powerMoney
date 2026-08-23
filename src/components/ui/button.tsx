import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white shadow-sm shadow-brand/20 hover:bg-brand-dark hover:shadow-md hover:shadow-brand/30 active:scale-[0.98]",
        growth:
          "bg-growth text-white shadow-sm shadow-growth/20 hover:bg-growth-dark hover:shadow-md active:scale-[0.98]",
        navy:
          "bg-navy text-white shadow-sm shadow-navy/20 hover:bg-navy-light hover:shadow-md active:scale-[0.98]",
        violet:
          "bg-violet text-white shadow-sm shadow-violet/20 hover:bg-violet-dark hover:shadow-md active:scale-[0.98]",
        accent:
          "bg-accent text-navy shadow-sm shadow-accent/20 hover:bg-accent-dark hover:text-white hover:shadow-md active:scale-[0.98]",
        outline:
          "border border-border-subtle bg-white text-foreground hover:border-brand hover:text-brand active:scale-[0.98]",
        ghost: "text-foreground hover:bg-surface active:scale-[0.98]",
        inverse:
          "bg-white text-navy hover:bg-white/90 shadow-sm active:scale-[0.98]",
        link: "text-brand hover:text-brand-dark underline-offset-4 hover:underline rounded-none px-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
