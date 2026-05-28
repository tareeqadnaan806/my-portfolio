"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const saved = window.localStorage.getItem("theme");
    return saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-950/15 bg-white/80 text-zinc-800 shadow-[0_0_0_4px_rgba(34,211,238,0.08)] backdrop-blur transition hover:border-fuchsia-500 hover:text-fuchsia-600 dark:border-white/15 dark:bg-white/10 dark:text-white dark:shadow-[0_0_0_4px_rgba(163,230,53,0.10)] dark:hover:border-lime-300 dark:hover:text-lime-300"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
