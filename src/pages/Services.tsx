import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Sparkles,
  Gift,
  Store,
  Trophy,
  Layers,
  Users,
  Truck,
} from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { ServiceCard, type ServiceItem } from "../components/services/ServiceCard";

const SERVICES: ServiceItem[] = [
  {
    icon: Sparkles,
    title: "Experiential Marketing",
    desc: "We conceptualize and execute consumer, trade, and corporate experiences that bring brands to life. From product launches to roadshows and immersive activations, we create moments that connect and convert.",
    image: {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Live experiential brand activation",
    },
    theme: {
      cardHover:
        "hover:bg-primary/5 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(14,165,233,0.12)]",
      iconGroupHover:
        "group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/20",
      bgBase: "bg-primary/10",
      borderBase: "border-primary/20",
      text: "text-primary",
    },
  },
  {
    icon: Gift,
    title: "Consumer & Trade Promotions",
    desc: "We design and manage promotions that drive product trial, increase sales, and reward loyalty. Our campaigns are structured to deliver both short-term impact and long-term brand equity.",
    image: {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Consumer promotion event setup",
    },
    theme: {
      cardHover:
        "hover:bg-secondary/5 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)]",
      iconGroupHover:
        "group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-secondary/20",
      bgBase: "bg-secondary/10",
      borderBase: "border-secondary/20",
      text: "text-secondary",
    },
  },
  {
    icon: Store,
    title: "Point-of-Sale Materials (POSM)",
    desc: "We develop and supply high-quality POS materials that enhance visibility at the point of purchase and influence buying decisions where it matters most.",
    image: {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Retail point of sale display",
    },
    theme: {
      cardHover:
        "hover:bg-primary/5 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(14,165,233,0.12)]",
      iconGroupHover:
        "group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/20",
      bgBase: "bg-primary/10",
      borderBase: "border-primary/20",
      text: "text-primary",
    },
  },
  {
    icon: Trophy,
    title: "Trade Incentives & Reward Solutions",
    desc: "We motivate distributors, retailers, and sales teams through well-structured incentive programs that boost performance and strengthen partnerships.",
    image: {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Team celebrating trade incentive success",
    },
    theme: {
      cardHover:
        "hover:bg-secondary/5 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)]",
      iconGroupHover:
        "group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-secondary/20",
      bgBase: "bg-secondary/10",
      borderBase: "border-secondary/20",
      text: "text-secondary",
    },
  },
  {
    icon: Layers,
    title: "Merchandising Services",
    desc: "Our merchandising teams ensure your products are visible, available, and properly represented across retail channels—maximizing sales opportunities.",
    image: {
      src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Retail merchandising on store shelves",
    },
    theme: {
      cardHover:
        "hover:bg-primary/5 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(14,165,233,0.12)]",
      iconGroupHover:
        "group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/20",
      bgBase: "bg-primary/10",
      borderBase: "border-primary/20",
      text: "text-primary",
    },
  },
  {
    icon: Users,
    title: "Trade Force Recruitment & Management",
    desc: "We recruit, train, deploy, and manage field teams that represent your brand with professionalism and efficiency across Nigeria.",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Field trade team collaboration",
    },
    theme: {
      cardHover:
        "hover:bg-secondary/5 hover:border-secondary/30 hover:shadow-[0_8px_30px_rgb(37,99,235,0.12)]",
      iconGroupHover:
        "group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-secondary/20",
      bgBase: "bg-secondary/10",
      borderBase: "border-secondary/20",
      text: "text-secondary",
    },
  },
  {
    icon: Truck,
    title: "Procurement & Supply",
    desc: "We handle sourcing and supply of materials and assets needed to support marketing campaigns and trade activities—reliably and at scale.",
    image: {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Logistics and supply chain operations",
    },
    theme: {
      cardHover:
        "hover:bg-primary/5 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(14,165,233,0.12)]",
      iconGroupHover:
        "group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/20",
      bgBase: "bg-primary/10",
      borderBase: "border-primary/20",
      text: "text-primary",
    },
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  const handleVisible = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const scrollToService = (index: number) => {
    document.getElementById(`service-${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="w-full pt-32 md:pt-48 pb-24">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/10 to-secondary/10 pointer-events-none" />

      <div
        ref={heroRef}
        className="relative h-[50vh] md:h-[60vh] mb-16 md:mb-24 overflow-hidden mx-6 md:mx-12 rounded-3xl border border-slate-200 dark:border-white/10"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="/assets/images/phantom-africa-image2.jpg"
            alt="Phantom Africa capabilities"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-white/80 dark:bg-dark-900/85 backdrop-blur-[2px]" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <section className="text-center max-w-4xl">
            <Reveal>
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
                What We Do
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                Capabilities &{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Solutions
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
                Our service portfolio is designed to cover every touchpoint where your brand meets its audience.
              </p>
            </Reveal>
          </section>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <aside className="hidden lg:block lg:w-64 shrink-0">
            <nav className="sticky top-36 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400 mb-4">
                Services
              </p>
              {SERVICES.map((service, index) => (
                <motion.button
                  key={service.title}
                  type="button"
                  onClick={() => scrollToService(index)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                    activeIndex === index
                      ? "bg-sky-50 dark:bg-dark-800 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white"
                      : "border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-300 hover:bg-sky-50 dark:hover:bg-dark-800"
                  }`}
                >
                  <span
                    className={`mr-2 ${activeIndex === index ? service.theme.text : "text-slate-500"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {service.title}
                </motion.button>
              ))}
            </nav>
          </aside>

          <section className="flex-1 space-y-8 md:space-y-12 min-w-0">
            <motion.div
              className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {SERVICES.map((service, index) => (
                <motion.button
                  key={service.title}
                  type="button"
                  onClick={() => scrollToService(index)}
                  whileTap={{ scale: 0.96 }}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                    activeIndex === index
                      ? `${service.theme.bgBase} ${service.theme.borderBase} ${service.theme.text}`
                      : "border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400"
                  }`}
                >
                  {service.title.split(" ")[0]}
                </motion.button>
              ))}
            </motion.div>

            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <ServiceCard
                  service={service}
                  index={index}
                  isActive={activeIndex === index}
                  onVisible={handleVisible}
                />
              </Reveal>
            ))}
          </section>
        </div>

        <section className="mt-32 text-center border-t border-slate-200 dark:border-white/10 pt-24">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-8">
              Discuss Your Next Campaign
            </h2>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-block px-10 py-5 bg-primary text-white font-bold uppercase tracking-wider text-sm hover:bg-primary-dark transition-all duration-300 rounded-full"
              >
                Contact Us
              </Link>
            </motion.div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
