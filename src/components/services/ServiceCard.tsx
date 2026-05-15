import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, LucideIcon } from "lucide-react";

export type ServiceTheme = {
  cardHover: string;
  iconGroupHover: string;
  bgBase: string;
  borderBase: string;
  text: string;
};

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: { src: string; alt: string };
  theme: ServiceTheme;
};

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
  isActive: boolean;
  onVisible: (index: number) => void;
};

export function ServiceCard({ service, index, isActive, onVisible }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "-35% 0px -35% 0px" });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.05]);
  const isEven = index % 2 === 0;
  const Icon = service.icon;

  return (
    <article
      ref={cardRef}
      id={`service-${index}`}
      className="scroll-mt-36 md:scroll-mt-44"
    >
      <motion.div
        layout
        animate={{
          scale: isActive ? 1 : 0.985,
          opacity: isActive ? 1 : 0.72,
        }}
        transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`bg-white dark:bg-dark-800 border rounded-3xl overflow-hidden group transition-colors duration-500 ${
          isActive ? "border-slate-300 dark:border-white/20 shadow-[0_20px_60px_rgba(14,165,233,0.12)]" : "border-slate-200 dark:border-white/10"
        } ${service.theme.cardHover}`}
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}
        >
          <div className="relative w-full lg:w-[42%] min-h-[240px] md:min-h-[320px] lg:min-h-[380px] overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{ y: imageY, scale: imageScale }}
            >
              <img
                src={service.image.src}
                alt={service.image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent dark:from-dark-800 dark:via-dark-800/40 lg:bg-linear-to-r lg:from-white lg:via-sky-50/50 lg:to-transparent dark:lg:from-dark-800 dark:lg:via-dark-900/50 dark:lg:to-transparent"
              animate={{ opacity: isActive ? 0.35 : 0.55 }}
              transition={{ duration: 0.4 }}
            />
            <div
              className={`absolute bottom-6 left-6 w-16 h-16 md:w-20 md:h-20 rounded-2xl ${service.theme.bgBase} ${service.theme.borderBase} border flex items-center justify-center backdrop-blur-md ${service.theme.iconGroupHover} transition-all duration-500`}
            >
              <Icon size={36} className={service.theme.text} />
            </div>
          </div>

          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <span
              className={`text-xs font-semibold uppercase tracking-[0.25em] mb-4 ${service.theme.text} opacity-80`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              {service.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 font-light leading-relaxed mb-8 max-w-3xl">
              {service.desc}
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${service.theme.text} hover:text-primary-dark transition-colors group/link`}
            >
              Request this service
              <motion.span
                className="inline-flex"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </article>
  );
}
