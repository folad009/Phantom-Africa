import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { ThemeToggle } from "@/src/components/ui/ThemeToggle";
import { Logo } from "@/src/components/ui/Logo";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === "home") setActiveSection("/");
          else if (id === "about") setActiveSection("/about");
          else if (id === "services") setActiveSection("/services");
          else if (id === "why" || id === "impact" || id === "contact")
            setActiveSection("/contact");
        }
      });
    }, {
      rootMargin: "-40% 0px -60% 0px",
    });

    const ids = ["home", "about", "services", "why", "impact", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 dark:bg-dark-900/90 backdrop-blur-md py-4 border-b border-slate-200 dark:border-white/10 shadow-sm"
            : "bg-white/70 dark:bg-dark-900/70 backdrop-blur-sm py-6 border-b border-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden md:flex items-center gap-8 text-[15px] uppercase tracking-[0.2em] font-medium">
            {NAV_LINKS.map((link) => {
              const isActive =
                location.pathname === "/"
                  ? activeSection === link.path
                  : location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "transition-colors hover:text-primary pb-1",
                    isActive
                      ? "text-slate-900 dark:text-white border-b border-primary"
                      : "text-slate-500 dark:text-gray-400 border-b border-transparent",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/contact"
              className="px-6 py-3 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-gray-200 text-[15px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary hover:bg-sky-50 dark:hover:bg-primary/10 transition-all duration-300 rounded-full"
            >
              Connect
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="relative z-50 text-slate-800 dark:text-gray-200 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/98 dark:bg-dark-900/98 backdrop-blur-xl pt-32 px-6 flex flex-col gap-6 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "text-3xl font-display font-medium",
                    (
                      location.pathname === "/"
                        ? activeSection === link.path
                        : location.pathname === link.path
                    )
                      ? "text-primary"
                      : "text-slate-800 dark:text-gray-200",
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex flex-col gap-4"
            >
              <Link
                to="/contact"
                className="w-full inline-block text-center px-6 py-4 bg-primary text-white font-medium text-lg rounded-full hover:bg-primary-dark transition-colors"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
