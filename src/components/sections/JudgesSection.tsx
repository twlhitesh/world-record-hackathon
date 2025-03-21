import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';

const JudgesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [expandedJudge, setExpandedJudge] = useState<string | null>(null);

  const judges = [
    {
      name: "Eric Simons",
      role: "Host & Lead Judge",
      company: "Bolt.new / Stackblitz",
      image: "https://pbs.twimg.com/profile_images/1749853832669270016/HKjutsvf_400x400.jpg",
      bio: "Successful entrepreneur CEO Bolt.new"
    },
    {
      name: "Peter Levels",
      role: "Lead Judge",
      company: "Serial Entrepreneur",
      image: "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg",
      bio: "Successful serial entrepreneur known for creating multiple profitable products. Expert in bootstrapped startups and indie hacking."
    },
    {
      name: "Greg Eisenberg",
      role: "Host & Judge",
      company: "Developer Advocate",
      image: "https://yt3.googleusercontent.com/5wiiTxMamM0NnCmGOt0iJ6eoVRmFLNIGF-BEiTZ_AVqaS02YIxAsB-2XY6xwLCUWQfoENG1MHKo=s900-c-k-c0x00ffffff-no-rj",
      bio: "Experienced developer advocate and educator, produced numerous helpful resources for the developer community."
    },
    {
      name: "Evan You",
      role: "Judge",
      company: "VoidZero",
      image: "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg",
      bio: "Founder @voidzerodev / Creator @vuejs & @vite_js"
    },
    {
      name: "Karthik Puvvada",
      role: "Judge",
      company: "Paddle",
      image: "https://imgs.search.brave.com/yjy-LstvMU2UK_FYUDBhZFEDZ0QfvRZkDfCGzoDaBdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pbnRyby5jby9h/dmF0YXJzLzMxMjMw/NWlLakFWTTNaLmpw/Zw",
      bio: "Program Director for On Deck No-Code and leads Founder Relations at Paddle"
    },
    {
      name: "Sarah Guo",
      role: "Judge",
      company: "Conviction",
      image: "https://i.insider.com/6408d41c75a7270019daf48f?width=1000&format=jpeg&auto=webp",
      bio: "startup investor/helper, founder @conviction . accelerating AI adoption, interested in progress. tech podcast: @nopriorspod"
    },
    {
      name: "Logan Kilpatrick",
      role: "AI Expert",
      company: "Google Deepmind",
      image: "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg",
      bio: "Leading researcher in artificial intelligence with expertise in machine learning and neural networks."
    },
    {
      name: "Theo Browne",
      role: "Technical Judge",
      company: "Engineering Director",
      image: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg",
      bio: "Full time CEO @t3dotchat. Part time YouTuber, investor, and developer"
    }
  ];

  // Mobile Judge Card Component
  const MobileJudgeCard = ({ judge }: { judge: typeof judges[0] }) => {
    const isExpanded = expandedJudge === judge.name;

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
          onClick={() => setExpandedJudge(isExpanded ? null : judge.name)}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-neutral-700">
            <img
              src={judge.image}
              alt={judge.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold truncate">{judge.name}</h3>
            <p className="text-sm text-neutral-400 truncate">{judge.role}</p>
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
              <div className="text-sm text-neutral-300 mb-2">
                <span className="text-blue-400">{judge.company}</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {judge.bio}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  // Desktop Judge Card Component
  const DesktopJudgeCard = ({ judge }: { judge: typeof judges[0] }) => (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-black transition duration-300 hover:border-neutral-700 hover:bg-neutral-900/50">
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={judge.image}
          alt={judge.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          width={400}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{judge.name}</h3>
        <div className="text-blue-400 font-mono text-sm mb-2">
          {judge.role} @ {judge.company}
        </div>
        <p className="text-sm text-neutral-400">{judge.bio}</p>
      </div>
    </div>
  );

  return (
    <section 
      id="judges" 
      className="bg-black py-32 relative border-t border-neutral-800"
      ref={ref}
    >
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)]" />
      <div className="absolute inset-0 [background:repeating-linear-gradient(-45deg,_#000,_#000_2px,_transparent_2px,_transparent_8px)] opacity-5" />
      
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-600 ease-out transform-gpu ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="font-mono text-sm tracking-wider text-neutral-500 mb-4">
            MEET THE JUDGES
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Industry Leaders & Innovators
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Your projects will be evaluated by some of the most respected names in technology
          </p>
        </div>

        {/* Mobile Judges View */}
        <div className="md:hidden space-y-3">
          <AnimatePresence>
            {judges.map((judge) => (
              <MobileJudgeCard key={judge.name} judge={judge} />
            ))}
          </AnimatePresence>
        </div>

        {/* Desktop Judges Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge) => (
            <DesktopJudgeCard key={judge.name} judge={judge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;