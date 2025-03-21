import React, { useState } from 'react';
import { IconTrophy, IconGift, IconAward, IconMedal, IconRocket, IconBrain, IconChevronDown } from '@tabler/icons-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PrizesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [expandedPrize, setExpandedPrize] = useState<string | null>(null);

  const prizes = [
    {
      title: "Grand Prize",
      amount: "$500,000",
      description: "For the most innovative project that pushes technological boundaries and demonstrates exceptional potential for real-world impact.",
      icon: IconTrophy,
      image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?q=80&w=1800&auto=format&fit=crop",
      color: "from-yellow-500/20 to-amber-600/20"
    },
    {
      title: "Runner Up",
      amount: "$250,000",
      description: "Awarded to projects that showcase outstanding technical excellence and creative problem-solving.",
      icon: IconMedal,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1800&auto=format&fit=crop",
      color: "from-slate-300/20 to-slate-400/20"
    },
    {
      title: "Community Choice",
      amount: "$150,000",
      description: "Selected by the developer community for projects that resonate most with users and fellow developers.",
      icon: IconAward,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1800&auto=format&fit=crop",
      color: "from-amber-700/20 to-yellow-600/20"
    },
    {
      title: "AI Innovation",
      amount: "$50,000",
      description: "For groundbreaking applications of AI and machine learning that demonstrate novel approaches.",
      icon: IconBrain,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1800&auto=format&fit=crop",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Technical Achievement",
      amount: "$25,000",
      description: "Recognizing exceptional technical implementation and engineering excellence.",
      icon: IconRocket,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Category Prizes",
      amount: "$25,000",
      description: "Additional prizes for outstanding projects in Web3, Sustainability, and Social Impact tracks.",
      icon: IconGift,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop",
      color: "from-green-500/20 to-green-600/20"
    }
  ];

  // Mobile Prize Card Component
  const MobilePrizeCard = ({ prize }: { prize: typeof prizes[0] }) => {
    const isExpanded = expandedPrize === prize.title;
    const Icon = prize.icon;

    return (
      <motion.div
        layout
        className="w-full bg-neutral-900/50 rounded-xl overflow-hidden border border-neutral-800"
        initial={false}
        animate={{ height: isExpanded ? "auto" : "80px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className="p-4 flex items-center gap-4 cursor-pointer"
          onClick={() => setExpandedPrize(isExpanded ? null : prize.title)}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${prize.color} backdrop-blur-xl border border-white/10`}>
            <Icon size={24} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold truncate">{prize.title}</h3>
            <p className="text-lg font-bold text-blue-500">{prize.amount}</p>
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
              className="px-4 pb-4 border-t border-neutral-800"
            >
              <p className="text-sm text-neutral-400 leading-relaxed pt-4">
                {prize.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  // Desktop Prize Card Component
  const DesktopPrizeCard = ({ prize, index }: { prize: typeof prizes[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group/card"
    >
      <Card className="overflow-hidden h-[400px] relative cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-neutral-700">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover/card:scale-105"
          style={{ backgroundImage: `url(${prize.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95" />
        </div>

        <CardHeader className="relative z-10">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${prize.color} backdrop-blur-xl mb-4 border border-white/10`}>
            <prize.icon size={28} className="text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-white mb-2">{prize.title}</CardTitle>
          <div className="text-3xl font-black text-blue-500">{prize.amount}</div>
        </CardHeader>

        <CardContent className="relative z-10">
          <p className="text-neutral-300">{prize.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="prizes" className="bg-black py-32 relative border-t border-neutral-800" ref={ref}>
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)]" />
      <div className="absolute inset-0 [background:linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_0_0,linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_20px_20px] [background-size:40px_40px] opacity-10" />
      
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="font-mono text-sm tracking-wider text-neutral-500 mb-4">
            PRIZES & REWARDS
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            $1M+ Prize Pool
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Compete for substantial rewards across multiple categories. Your innovative solution could be worth up to $500,000.
          </p>
        </div>

        {/* Mobile Prizes View */}
        <div className="md:hidden space-y-3">
          <AnimatePresence>
            {prizes.map((prize) => (
              <MobilePrizeCard key={prize.title} prize={prize} />
            ))}
          </AnimatePresence>
        </div>

        {/* Desktop Prizes Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <DesktopPrizeCard key={prize.title} prize={prize} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;