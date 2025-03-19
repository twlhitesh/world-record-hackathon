import React from 'react';
import { motion } from 'framer-motion';
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
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&w=400&h=400&q=80",
      bio: "Successful serial entrepreneur known for creating multiple profitable products. Expert in bootstrapped startups and indie hacking."
    },
    {
      name: "Greg Eisenberg",
      role: "Host & Judge",
      company: "Developer Advocate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=400&h=400&q=80",
      bio: "Experienced developer advocate and educator, produced numerous helpful resources for the developer community."
    },
    {
      name: "Dr. Sarah Chen",
      role: "AI Expert",
      company: "Research Director",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?&w=400&h=400&q=80",
      bio: "Leading researcher in artificial intelligence with expertise in machine learning and neural networks."
    },
    {
      name: "Elena Rodriguez",
      role: "Technical Judge",
      company: "Engineering Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=400&h=400&q=80",
      bio: "Engineering leader specializing in scalable systems and innovative technology solutions."
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 group-hover:border-neutral-700 transition-all duration-300">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{judge.name}</h3>
              <div className="text-blue-500 font-mono text-sm mb-2">
                {judge.role} @ {judge.company}
              </div>
              <p className="text-sm text-neutral-400">{judge.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;