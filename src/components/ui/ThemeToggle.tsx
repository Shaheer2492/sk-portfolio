"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="h-9 w-16 rounded-full glass flex items-center px-1">
        <div className="h-7 w-7 rounded-full bg-fg text-bg grid place-items-center">
          <div className="w-[14px] h-[14px] rounded-full bg-bg opacity-50" />
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-9 w-16 rounded-full glass glass-hover flex items-center px-1"
    >
      <motion.span
        layout
        className="h-7 w-7 rounded-full bg-fg text-bg grid place-items-center shadow-sm"
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{ x: isDark ? 32 : 0 }}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.span>
      <span className="sr-only">Switch to {isDark ? "light" : "dark"} mode</span>
    </button>
  );
}


