import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center space-x-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-3"
      aria-label="Toggle theme"
      title={isDark ? "Night (default)" : "Day"}
    >
      <span className="relative flex items-center">
        <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "opacity-40" : "opacity-100"}`} />
        <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "opacity-100" : "opacity-0"}`} />
      </span>
      <span className="text-xs font-medium">{isDark ? "Night" : "Day"}</span>
    </button>
  );
}
