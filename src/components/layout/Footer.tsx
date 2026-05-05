import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex flex-col mb-6 group">
             <span className="text-2xl font-display font-black tracking-tighter uppercase italic text-white group-hover:text-primary transition-colors">Phantom Africa</span>
             <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold ml-1">Experiential Agency</span>
            </Link>
            <p className="text-gray-400 max-w-sm font-sans mb-8 leading-relaxed">
              Nigeria’s leading experiential marketing agency. We deliver high-impact brand experiences that move brands forward.
            </p>
            <form className="flex gap-2 max-w-md">
              <input 
                type="email" 
                placeholder="Subscribe to our newsletter" 
                className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 focus:outline-none focus:border-primary/50 text-xs tracking-wider rounded-none w-full"
              />
              <button 
                type="submit" 
                className="bg-primary-dark text-white hover:bg-primary px-4 py-3 rounded-none transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-400 text-sm">Lagos, Nigeria</li>
              <li><a href="mailto:hello@phantomafrica.com" className="text-gray-400 hover:text-primary transition-colors text-sm">hello@phantomafrica.com</a></li>
              <li><a href="tel:+234000000000" className="text-gray-400 hover:text-primary transition-colors text-sm">+234 (0) 123 456 789</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-sans">
            © {new Date().getFullYear()} Phantom Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
