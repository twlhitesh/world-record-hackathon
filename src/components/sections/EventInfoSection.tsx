import React, { useState } from 'react';
import { IconCalendar, IconTrophy, IconUsers, IconRocket, IconBrain, IconCode, IconChevronDown } from '@tabler/icons-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { motion, AnimatePresence } from 'framer-motion';

const EventInfoSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const eventCards = [
    {
      title: "Event Date",
      icon: IconCalendar,
      description: "March 18, 2025",
      details: "72 hours of non-stop innovation with flexible timezone support for global participation",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2048&h=1024",
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
    },
    {
      title: "Prize Pool",
      icon: IconTrophy,
      description: "$1M Total",
      details: "The largest prize pool in hackathon history, with multiple award categories",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=2048&h=1024",
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
    },
    {
      title: "AI Development",
      icon: IconBrain,
      description: "Cutting-edge Tools",
      details: "Access to advanced AI assistance to accelerate your development process",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2048&h=1024",
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
    },
    {
      title: "Global Community",
      icon: IconUsers,
      description: "100K+ Developers",
      details: "Join the largest gathering of developers in hackathon history",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2048&h=1024",
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
    },
    {
      title: "Technical Support",
      icon: IconCode,
      description: "24/7 Expert Help",
      details: "Get assistance from industry experts and mentors throughout the event",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2048&h=1024",
      area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
    }
  ];

  // Mobile Event Card Component
  const MobileEventCard = ({ card }: { card: typeof eventCards[0] }) => {
    const isExpanded = expandedCard === card.title;
    const Icon = card.icon;

    return (
      <motion.div
        layout
        className="w-full bg-neutral-900/50 rounded-xl overflow-hidden border border-neutral-800"
        initial={false}
        animate={{ height: isExpanded ? "auto" : "72px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className="p-4 flex items-center gap-4 cursor-pointer"
          onClick={() => setExpandedCard(isExpanded ? null : card.title)}
        >
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold truncate">{card.title}</h3>
            <p className="text-sm text-blue-400 truncate">{card.description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconChevronDown className="w-5 h-5 text-neutral-400" />
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-4 pb-4 pt-2 border-t border-neutral-800"
            >
              <p className="text-sm text-neutral-400 leading-relaxed">
                {card.details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)]" />
      <div className="absolute inset-0 [background:linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_0_0,linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_20px_20px] [background-size:40px_40px] opacity-10" />
      <div className="absolute inset-0 [background:repeating-linear-gradient(-45deg,_#000,_#000_2px,_transparent_2px,_transparent_8px)] opacity-5" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            The World's Largest Hackathon
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Join 100,000 developers in making history with groundbreaking innovations powered by AI
          </p>
        </div>

        {/* Mobile Event Cards */}
        <div className="md:hidden space-y-3">
          <AnimatePresence>
            {eventCards.map((card) => (
              <MobileEventCard key={card.title} card={card} />
            ))}
          </AnimatePresence>
        </div>

        {/* Desktop Event Cards Grid */}
        <ul className="hidden md:grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {eventCards.map((card, index) => (
            <li key={index} className={`min-h-[14rem] list-none ${card.area}`}>
              <div className="relative h-full rounded-2.5xl border border-neutral-800/50 p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-neutral-800/50 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
                  </div>
                  
                  <div className="relative z-10 flex flex-1 flex-col justify-between gap-3 p-6">
                    <div className="w-fit rounded-lg border border-blue-500/20 bg-blue-500/5 p-2">
                      <card.icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                          {card.title}
                        </h3>
                        <p className="text-blue-400 text-lg">{card.description}</p>
                      </div>
                      <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-400">
                        {card.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-16">
          <a 
            href="https://form.typeform.com/to/wf94YwH4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold rounded-lg transition-colors group"
          >
            Register Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;