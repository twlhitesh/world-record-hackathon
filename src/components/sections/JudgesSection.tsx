import React from 'react';
import { useInView } from 'react-intersection-observer';

const JudgesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const judges = [
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
      name: "Sarah Guo",
      role: "Judge",
      company: "Conviction",
      image: "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => (
            <div
              key={judge.name}
              className={`group relative transition-all duration-500 ease-out transform-gpu ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 transition-all duration-300 ease-out group-hover:border-neutral-700">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{judge.name}</h3>
              <div className="text-blue-500 font-mono text-sm mb-2">
                {judge.role} @ {judge.company}
              </div>
              <p className="text-sm text-neutral-400">{judge.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;
