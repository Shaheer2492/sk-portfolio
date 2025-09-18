import type { ReactNode } from "react";

type LiquidButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function LiquidButton({ children, className }: LiquidButtonProps) {
  return (
    <button
      className={`relative px-8 py-3.5 rounded-full text-sm font-medium overflow-hidden group transition-all duration-300 ${className ?? ""}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-fg/90 to-fg dark:from-fg/80 dark:to-fg/90" />
      <span className="absolute inset-0 bg-gradient-to-r from-fg to-fg opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10 text-bg dark:text-bg font-medium tracking-wide">{children}</span>
      <span
        className="absolute inset-0 -z-10 bg-gradient-to-r from-muted/20 to-muted/10 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all"
      />
    </button>
  );
}


