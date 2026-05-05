import { Reveal } from "../components/ui/Reveal";
import { motion } from "motion/react";
import { Sparkles, Gift, Store, Trophy, Layers, Users, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: Sparkles,
    title: "Experiential Marketing",
    desc: "From product launches to immersive brand houses, we create physical and digital experiences that build deep connections. We design spaces and moments where consumers don't just see your brand—they live it.",
    theme: {
      cardHover: "hover:bg-primary/5 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(249,115,22,0.12)]",
      iconGroupHover: "group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/20",
      bgBase: "bg-primary/10",
      borderBase: "border-primary/20",
      text: "text-primary",
    }
  },
  {
    icon: Gift,
    title: "Consumer & Trade Promotions",
    desc: "End-to-end management of targeted promotions that drive trial, frequency, and volume. We handle strategy, reward sourcing, legal compliance, and execution.",
    theme: {
      cardHover: "hover:bg-secondary/5 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)]",
      iconGroupHover: "group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-secondary/20",
      bgBase: "bg-secondary/10",
      borderBase: "border-secondary/20",
      text: "text-secondary",
    }
  },
  {
    icon: Store,
    title: "POSM",
    desc: "Point of Sale Materials that disrupt the shopper journey. We design, produce, and deploy high-impact collateral that wins at the last mile of purchase.",
    theme: {
      cardHover: "hover:bg-primary/5 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(249,115,22,0.12)]",
      iconGroupHover: "group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/20",
      bgBase: "bg-primary/10",
      borderBase: "border-primary/20",
      text: "text-primary",
    }
  },
  {
    icon: Trophy,
    title: "Trade Incentives & Reward Solutions",
    desc: "Programs designed to motivate channel partners, distributors, and sales teams. We build tiered reward structures that align with your sales objectives.",
    theme: {
      cardHover: "hover:bg-secondary/5 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)]",
      iconGroupHover: "group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-secondary/20",
      bgBase: "bg-secondary/10",
      borderBase: "border-secondary/20",
      text: "text-secondary",
    }
  },
  {
    icon: Layers,
    title: "Merchandising Services",
    desc: "Ensuring optimal visibility and share of shelf. Our trained merchandisers execute planograms perfectly and maintain your brand's physical presence at retail.",
    theme: {
      cardHover: "hover:bg-primary/5 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(249,115,22,0.12)]",
      iconGroupHover: "group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/20",
      bgBase: "bg-primary/10",
      borderBase: "border-primary/20",
      text: "text-primary",
    }
  },
  {
    icon: Users,
    title: "Trade Force Recruitment & Management",
    desc: "We source, train, and manage dedicated sales and promotional teams. Our rigorous training ensures they represent your brand with the highest standards.",
    theme: {
      cardHover: "hover:bg-secondary/5 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)]",
      iconGroupHover: "group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-secondary/20",
      bgBase: "bg-secondary/10",
      borderBase: "border-secondary/20",
      text: "text-secondary",
    }
  },
  {
    icon: Truck,
    title: "Procurement & Supply",
    desc: "Reliable sourcing of promotional items, event materials, and branded assets. We manage the supply chain to ensure on-time delivery and strict cost control.",
    theme: {
      cardHover: "hover:bg-primary/5 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(249,115,22,0.12)]",
      iconGroupHover: "group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/20",
      bgBase: "bg-primary/10",
      borderBase: "border-primary/20",
      text: "text-primary",
    }
  }
];

export default function Services() {
  return (
    <div className="w-full pt-32 md:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <section className="mb-24 text-center">
          <Reveal>
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">What We Do</span>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold uppercase tracking-tighter leading-[0.9] mb-8">
              Capabilities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solutions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Our service portfolio is designed to cover every touchpoint where your brand meets its audience.
            </p>
          </Reveal>
        </section>

        <section className="space-y-6 md:space-y-12">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <div 
                className={`bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 md:gap-16 items-start group ${service.theme.cardHover} transition-all duration-500`}
              >
                <div className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl ${service.theme.bgBase} ${service.theme.borderBase} border flex items-center justify-center ${service.theme.iconGroupHover} transition-all duration-500`}>
                  <service.icon size={48} className={service.theme.text} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight mb-4 text-white group-hover:text-gray-200 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8 max-w-3xl">
                    {service.desc}
                  </p>
                  <Link to="/contact" className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${service.theme.text} hover:text-white transition-colors`}>
                    Request this service <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </section>
        
        {/* Next Step CTA */}
        <section className="mt-32 text-center border-t border-white/10 pt-24">
           <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-8">
              Discuss Your Next Campaign
            </h2>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-primary text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-dark-900 transition-all duration-300 rounded-full"
            >
              Contact Us
            </Link>
           </Reveal>
        </section>
      </div>
    </div>
  );
}
