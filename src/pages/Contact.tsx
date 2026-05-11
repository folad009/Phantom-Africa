import { Reveal } from "../components/ui/Reveal";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="w-full pt-32 md:pt-48 pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/20 to-secondary/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <section className="mb-16 md:mb-24">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold uppercase tracking-tighter leading-[0.9] mb-8">
              Let's <span className="text-gray-600">Talk.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
              Tell us about your brand's next big project. Our team is ready to bring your vision to life.
            </p>
          </Reveal>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Details */}
          <div className="order-2 lg:order-1 space-y-12">
            <Reveal delay={0.2} direction="right">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium uppercase tracking-widest text-sm mb-2">Office Address</h3>
                  <p className="text-xl text-white font-light">123 Agency Way<br />Victoria Island, Lagos<br />Nigeria</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="right">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium uppercase tracking-widest text-sm mb-2">Email Us</h3>
                  <a href="mailto:ufuoma.m@phantomafrica.com" className="text-xl text-white font-light hover:text-primary transition-colors">ufuoma.m@phantomafrica.com</a><br/>
                  <a href="mailto:contactus@phantomafrica.com" className="text-xl text-white font-light hover:text-primary transition-colors">contactus@phantomafrica.com</a>

                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4} direction="right">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium uppercase tracking-widest text-sm mb-2">Call Us</h3>
                  <a href="tel:+2349125972525" className="text-xl text-white font-light hover:text-primary transition-colors">+234 912 597 2525</a>
                </div>
              </div>
            </Reveal>
            
            {/* Abstract Map Graphic */}
            <Reveal delay={0.5}>
              <div className="w-full aspect-2/1 mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl relative overflow-hidden flex items-center justify-center group shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gridme.png')] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-700" />
                <div className="relative z-10 flex flex-col items-center gap-2 text-primary">
                  <MapPin size={32} className="animate-bounce" />
                  <span className="text-xs font-bold tracking-widest uppercase">Lagos, NG</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <Reveal delay={0.2} direction="left">
              <motion.form 
                onSubmit={(e) => e.preventDefault()}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
              >
                <div className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-dark-900 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-700" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-dark-900 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-700" 
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Area of Interest</label>
                    <select 
                      id="interest" 
                      className="w-full bg-dark-900 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors bg-transparent appearance-none"
                    >
                      <option>Experiential Marketing</option>
                      <option>Trade Promotions</option>
                      <option>Brand Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Project Details</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-dark-900 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none bg-transparent placeholder-gray-700" 
                      placeholder="Tell us a bit about your campaign goals..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-white text-dark-900 font-bold uppercase tracking-widest text-sm py-5 mt-4 hover:bg-gray-200 transition-colors duration-300 flex justify-center items-center gap-3 shadow-[0_4px_20px_rgb(255,255,255,0.1)]"
                  >
                    Send Message <Send size={18} />
                  </button>
                </div>
              </motion.form>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
