"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "gold";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border-2 border-primary hover:bg-primary-dark hover:border-primary-dark shadow-lg shadow-primary/20",
  outline:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
  ghost:
    "bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/60",
  gold:
    "bg-gold text-carbon border-2 border-gold hover:bg-gold-light hover:border-gold-light shadow-lg shadow-gold/20",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm tracking-wide",
  md: "px-7 py-3.5 text-base tracking-wide",
  lg: "px-10 py-4 text-lg tracking-wider",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, className, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        disabled={disabled || loading}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-sm font-body font-semibold",
          "transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export { Button };
