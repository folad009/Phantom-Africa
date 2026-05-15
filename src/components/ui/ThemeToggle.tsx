import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/src/context/ThemeContext";
import { cn } from "@/src/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
        "border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary hover:bg-sky-50",
        "dark:border-white/15 dark:bg-dark-800 dark:text-gray-300 dark:hover:border-primary dark:hover:bg-primary/10 dark:hover:text-primary",
        className,
      )}
    >
      <Sun
        size={18}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Moon
        size={18}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
    </button>
  );
}
