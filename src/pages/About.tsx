import { Reveal } from "../components/ui/Reveal";
import { motion } from "motion/react";
import {
  Target,
  Eye,
  Lightbulb,
  PenTool,
  Settings,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <div className="w-full pt-32 md:pt-28 pb-32">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/10 to-secondary/10 pointer-events-none" />
      <div className="bg-white dark:bg-dark-900 h-[85vh] mb-10" style={{ backgroundImage: `url('/assets/images/phantom-africa-image1.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full h-full bg-white/80 dark:bg-dark-900/85 backdrop-blur-sm flex items-center justify-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold uppercase tracking-tighter leading-[0.9] text-slate-900 dark:text-white text-center">
              About <br/> <span className="text-primary">Phantom Africa</span>
            </h1>
          </Reveal>
        </div>
      </div>

      {/* OUR STORY */}
      <section className="pt-10 mb-32 max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold uppercase tracking-tighter leading-[0.9] mb-12">
            Engagement <span className="text-slate-600 dark:text-gray-400">Is Everything.</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 font-light leading-relaxed">
              Phantom Africa was built on a simple idea: brands grow faster when
              people truly experience them. In a crowded and competitive market,
              visibility alone is no longer enough.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-slate-600 dark:text-gray-400 font-light leading-relaxed mb-6">
              We partner with brands to create immersive, impactful experiences
              that influence perception, drive trial, and inspire loyalty. From
              concept to execution, we ensure every interaction delivers value.
            </p>
            <div className="w-full h-px bg-slate-200 dark:bg-white/10 my-8" />
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative mb-32 py-16 md:py-24 px-6 md:px-12 overflow-hidden" style={{ backgroundImage: `url('/assets/images/phantom-africa-image2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/85 dark:bg-dark-900/90 backdrop-blur-sm pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Reveal delay={0.1} direction="right">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-dark-800 backdrop-blur-xl border border-primary/30 p-10 md:p-14 rounded-3xl h-full flex flex-col relative overflow-hidden group shadow-[0_8px_30px_rgb(14,165,233,0.12)]"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target size={120} />
                </div>
                <Target size={40} className="text-primary mb-8" />
                <h2 className="text-5xl font-display text-primary-dark font-bold uppercase tracking-tight mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-700 dark:text-gray-300 font-light leading-relaxed relative z-10">
                  To help brands achieve measurable growth through impactful,
                  insight-driven experiential marketing and trade solutions.
                </p>
              </motion.div>
            </Reveal>

            {/* Vision Card */}
            <Reveal delay={0.2} direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-dark-800 backdrop-blur-xl border border-secondary/30 p-10 md:p-14 rounded-3xl h-full flex flex-col relative overflow-hidden group shadow-[0_8px_30px_rgb(3,105,161,0.12)]"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Eye size={120} />
                </div>
                <Eye size={40} className="text-primary mb-8" />
                <h2 className="text-5xl font-display text-primary-dark font-bold uppercase tracking-tight mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-slate-700 dark:text-gray-300 font-light leading-relaxed relative z-10">
                  To be Africa's most trusted partner for experiential marketing
                  and brand activation, setting global standards locally.
                </p>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section>
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-16 text-center">
            Our <span className="text-slate-600 dark:text-gray-400">Approach</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mx-auto max-w-7xl px-6 md:px-12">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-10 inset-x-12 h-px bg-slate-200 dark:bg-white/10 z-0" />

          {[
            {
              icon: Lightbulb,
              title: "Insight-Led Strategy",
              desc: "We start with deep consumer and market insights to form the foundation.",
            },
            {
              icon: PenTool,
              title: "Creative Excellence",
              desc: "Developing bold, memorable ideas that disrupt the norm.",
            },
            {
              icon: Settings,
              title: "Operational Precision",
              desc: "Flawless execution driven by proactive project management.",
            },
            {
              icon: TrendingUp,
              title: "ROI Focus",
              desc: "Measuring everything against your ultimate commercial goals.",
            },
          ].map((step, i) => (
            <Reveal key={step.title} delay={i * 0.15}>
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                  <span className="absolute top-5 -left-5 text-sm font-display font-bold text-slate-500 dark:text-gray-400 group-hover:text-primary transition-colors">
                    0{i + 1}
                  </span>
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-gray-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
