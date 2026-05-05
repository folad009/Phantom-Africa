import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, MonitorSmartphone, Target, Zap, Gift, BarChart3, Users, Globe2, Sparkles, Building2 } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";

export default function Home() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityBg = useTransform(scrollY, [0, 600], [1, 0]);

  // Section Refs for Scroll Animations
  const whoWeAreRef = useRef<HTMLElement>(null);
  const whatWeDoRef = useRef<HTMLElement>(null);
  const whyChooseUsRef = useRef<HTMLElement>(null);

  const { scrollYProgress: whoWeAreProgress } = useScroll({
    target: whoWeAreRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: whatWeDoProgress } = useScroll({
    target: whatWeDoRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: whyChooseUsProgress } = useScroll({
    target: whyChooseUsRef,
    offset: ["start end", "end start"]
  });

  // Transforms
  const whoWeAreImgScale = useTransform(whoWeAreProgress, [0, 0.5, 1], [1.2, 1, 1.05]);
  const whoWeAreTextY = useTransform(whoWeAreProgress, [0, 1], [50, -50]);
  
  const blurY = useTransform(whatWeDoProgress, [0, 1], [-150, 150]);
  
  // Create a spring physics effect for a smoother feeling
  const smoothWhyChooseUsProgress = useSpring(whyChooseUsProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const leftColY = useTransform(smoothWhyChooseUsProgress, [0, 1], [0, -80]);
  const rightColY = useTransform(smoothWhyChooseUsProgress, [0, 1], [0, 80]);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Video Background */}
        <motion.div 
          className="absolute inset-0 z-0 bg-dark-900 overflow-hidden"
          style={{ y: yBg, opacity: opacityBg }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
          >
            <source src="https://cdn.coverr.co/videos/coverr-rave-party-in-a-club-5182/1080p.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900" />
          
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] bg-primary-dark rounded-full blur-[120px] opacity-20 mix-blend-screen animate-pulse pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] bg-secondary rounded-full blur-[150px] opacity-10 mix-blend-screen pointer-events-none" 
               style={{ animation: 'pulse 8s infinite alternate-reverse' }}/>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="h-[1px] w-12 bg-primary"></span>
                <span className="text-xs uppercase tracking-widest text-primary font-bold">Built for the African Market</span>
              </div>
            </Reveal>
            
            <Reveal delay={0.2} direction="up">
               <h1 className="text-5xl md:text-[80px] leading-[0.85] font-display font-black uppercase tracking-tighter mb-6">
                Creating <span className="text-transparent border-t border-b border-white/20 px-2" style={{ WebkitTextStroke: '1px white' }}>Experiences</span> <br/>That Move Brands
              </h1>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 font-sans font-light leading-relaxed">
                Phantom Africa is a leading experiential marketing agency delivering high-impact brand activations across Nigeria. We build lasting connections between brands and people.
              </p>
            </Reveal>

            <Reveal delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-primary-dark text-white font-bold uppercase text-xs tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-2"
                >
                  Work With Us 
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  View Our Projects
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Immersive Card */}
          <div className="lg:col-span-5 flex items-center justify-end relative mt-12 lg:mt-0">
             <Reveal delay={0.5} direction="left" className="w-full">
                <div className="w-full aspect-[4/5] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 to-transparent opacity-50"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex justify-between items-start">
                      <div className="bg-primary text-black text-[10px] font-black px-2 py-1 uppercase">Live Activation</div>
                      <span className="text-4xl font-serif italic text-white/50">01</span>
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-3xl font-display font-bold uppercase mb-2">Urban <br/>Pulse Tour</h3>
                      <p className="text-sm text-white/50 mb-6">National trade activation spanning 12 cities with 4.2M+ live impressions.</p>
                      <div className="w-full h-40 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                           <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </Reveal>
             {/* Decorative African Pattern Stripe */}
             <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-1/2 opacity-20 bg-repeat-y pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #f97316 2px, transparent 2px)', backgroundSize: '8px 8px' }}></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-gray-500 font-display">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>

      {/* 2. WHO WE ARE */}
      <section id="about" ref={whoWeAreRef} className="py-24 md:py-40 relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div style={{ y: whoWeAreTextY }}>
              <Reveal delay={0}>
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-8">
                  Who <span className="text-gray-600">We Are</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="w-16 h-1 mb-8 bg-gradient-to-r from-primary to-transparent" />
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                  Phantom Africa combines creativity, strategy, and execution to transform how brands engage with consumers, trade partners, and corporate stakeholders.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                  With a strong national footprint and deep local market understanding, we deliver experiences that are not just seen—but felt and remembered.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <Link to="/about" className="inline-flex items-center gap-3 text-secondary font-medium uppercase tracking-wider hover:text-white transition-colors group">
                  <span className="border-b border-secondary/30 pb-1 group-hover:border-white">Discover our story</span>
                  <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center group-hover:bg-white group-hover:text-dark-900 group-hover:border-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </Reveal>
            </motion.div>
            
            <Reveal delay={0.3} direction="left">
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 z-10 opacity-60 mix-blend-color" />
                <motion.img 
                  style={{ scale: whoWeAreImgScale }}
                  src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Excited crowd at an event" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-dark-900 to-transparent z-20">
                  <div className="inline-flex items-center gap-2 bg-dark-800/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-white">Live Execution</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (Snapshot) */}
      <section id="services" ref={whatWeDoRef} className="py-24 md:py-40 relative overflow-hidden">
        <motion.div style={{ y: blurY }} className="absolute inset-0 bg-secondary/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
                  What <span className="text-gray-600">We Do</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-xl text-gray-400 font-light">
                  Strategic interventions designed to drive engagement, visibility, and measurable growth.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2} direction="left">
              <Link to="/services" className="px-6 py-4 border border-white/20 hover:bg-white/5 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold inline-flex items-center gap-2">
                All Services <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "Experiential Marketing", desc: "Immersive physical and digital brand experiences." },
              { icon: Target, title: "Trade & Channel Activation", desc: "Strategic interventions at the point of purchase." },
              { icon: Building2, title: "Brand Support Services", desc: "End-to-end logistics and campaign management." },
              { icon: Gift, title: "Promotions & Engagement", desc: "Consumer campaigns that inspire loyalty." }
            ].map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl h-full flex flex-col group transition-colors duration-500 hover:border-primary/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <div className="w-14 h-14 bg-dark-800 rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                    <service.icon size={28} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-4 text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 font-light text-sm mt-auto">
                    {service.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section id="why" ref={whyChooseUsRef} className="py-24 md:py-40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
                Why <span className="text-gray-600">Choose Us</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                We combine national reach with local expertise to deliver flawless execution.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-20">
            {[
              { icon: Globe2, title: "National Reach, Local Expertise", desc: "Our wide network across Nigeria ensures your brand reaches its target audience anywhere, with campaigns tailored for local nuances." },
              { icon: Zap, title: "Speed & Precision", desc: "Agile project management allows us to deploy campaigns quickly without compromising on the meticulous details." },
              { icon: MonitorSmartphone, title: "End-to-End Capability", desc: "From ideation and procurement to staging and reporting, we own the entire value chain to guarantee quality." },
              { icon: BarChart3, title: "Results-Driven", desc: "We focus on what matters: ROI. Every activation is measured against your commercial objectives." }
            ].map((feature, i) => (
              <motion.div key={feature.title} style={{ y: i % 2 === 0 ? leftColY : rightColY }}>
                <Reveal delay={i * 0.1} direction={i % 2 === 0 ? "right" : "left"}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                      <feature.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wide mb-3">{feature.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR IMPACT */}
      <section id="impact" className="py-24 bg-primary relative overflow-hidden text-dark-900 border-y border-primary">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-center mb-16 text-dark-900">
              Our Impact in Numbers
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {[
              { num: "150+", label: "Brand Activations" },
              { num: "5M+", label: "Consumers Reached" },
              { num: "36", label: "States Covered" },
              { num: "2.5x", label: "Engagement ROI" }
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center">
                  <span className="text-5xl md:text-7xl font-display font-bold mb-2 tracking-tighter">{stat.num}</span>
                  <span className="text-sm md:text-base font-bold uppercase tracking-widest text-dark-800">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section id="contact" className="py-32 md:py-48 relative text-center">
        {/* Subtle background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold uppercase tracking-tighter leading-[0.9] mb-8">
              Let's Build Something <span className="text-secondary">Impactful</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
              Ready to take your brand to the next level? Partner with Phantom Africa to create experiences that deliver real results.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-white text-dark-900 font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
