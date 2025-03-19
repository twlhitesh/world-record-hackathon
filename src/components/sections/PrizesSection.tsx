import React from 'react';
import { IconTrophy, IconGift, IconAward, IconMedal, IconRocket, IconBrain } from '@tabler/icons-react';

const PrizesSection = () => {
  const prizes = [
    {
      title: "Grand Prize",
      amount: "$500,000",
      description: "For the most innovative project that pushes technological boundaries and demonstrates exceptional potential for real-world impact.",
      icon: IconTrophy,
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Runner Up",
      amount: "$250,000",
      description: "Awarded to projects that showcase outstanding technical excellence and creative problem-solving.",
      icon: IconMedal,
      color: "from-slate-300 to-slate-400"
    },
    {
      title: "Community Choice",
      amount: "$150,000",
      description: "Selected by the developer community for projects that resonate most with users and fellow developers.",
      icon: IconAward,
      color: "from-amber-700 to-yellow-600"
    },
    {
      title: "AI Innovation",
      amount: "$50,000",
      description: "For groundbreaking applications of AI and machine learning that demonstrate novel approaches.",
      icon: IconBrain,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Technical Achievement",
      amount: "$25,000",
      description: "Recognizing exceptional technical implementation and engineering excellence.",
      icon: IconRocket,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Category Prizes",
      amount: "$25,000",
      description: "Additional prizes for outstanding projects in Web3, Sustainability, and Social Impact tracks.",
      icon: IconGift,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="prizes" className="bg-black py-32 relative border-t border-neutral-800">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize) => (
            <div
              key={prize.title}
              className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-8 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${prize.color} mb-6`}>
                <prize.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
              <div className="text-3xl font-black text-blue-500 mb-4">{prize.amount}</div>
              <p className="text-neutral-400">{prize.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;