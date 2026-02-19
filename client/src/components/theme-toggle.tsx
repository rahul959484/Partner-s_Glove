import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const current = theme === "system" ? (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;

  const isDark = current === "dark";

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center space-x-2 rounded-lg text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary bg-primary/10 hover:bg-primary/20 hover:border-primary text-foreground h-12 px-4"
      aria-label="Toggle theme"
      title={isDark ? "Night (default)" : "Day"}
    >
      <span className="relative flex items-center h-6 w-6">
        <img src="/sun.svg" alt="day" className={`h-6 w-6 transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-100"}`} />
        <img src="/moon.svg" alt="night" className={`absolute h-6 w-6 transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-30"}`} />
      </span>
      <span className="text-sm font-bold ml-1">{isDark ? "Night" : "Day"}</span>
    </button>
  );
}
