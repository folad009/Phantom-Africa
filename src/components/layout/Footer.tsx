import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/src/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-800 border-t border-slate-200 dark:border-white/10 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="md:col-span-2">
            <Logo className="mb-6" imageClassName="h-10 md:h-12" />
            <p className="text-slate-500 dark:text-gray-400 max-w-sm font-sans mb-8 leading-relaxed">
              Nigeria's leading experiential marketing agency. We deliver high-impact brand experiences that move brands forward.
            </p>
            <form className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-white/10 px-4 py-3 focus:outline-none focus:border-primary/50 text-xs tracking-wider rounded-lg w-full text-slate-700 dark:text-gray-200 placeholder:text-slate-400 dark:placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="bg-primary text-white hover:bg-primary-dark px-4 py-3 rounded-lg transition-colors shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-display font-semibold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/about" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="text-slate-500 dark:text-gray-400 text-sm">Lagos, Nigeria</li>
              <li>
                <a
                  href="mailto:contactus@phantomafrica.com"
                  className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  contactus@phantomafrica.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349125972525"
                  className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  +234 912 597 2525
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm font-sans">
            &copy; {new Date().getFullYear()} Phantom Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
