import React, { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

const BoltSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      title: "AI-Powered Development",
      description: "Let AI assist you in writing, testing, and optimizing your code"
    },
    {
      title: "Instant Cloud Development",
      description: "No setup required - start coding immediately in your browser"
    },
    {
      title: "Collaborative Features",
      description: "Work together in real-time with team members anywhere"
    }
  ];

  // Mobile Feature Card - Simplified version without animations
  const MobileFeatureCard = () => (
    <div className="w-full bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800">
      <div
        className="p-4 flex items-center gap-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <h3 className="text-white font-semibold">Build with Bolt.new</h3>
          <p className="text-sm text-blue-400">Powered by Stackblitz</p>
        </div>
        <div className={`transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
          <IconChevronDown className="w-5 h-5 text-neutral-400" />
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 pt-2 border-t border-neutral-800">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="space-y-1">
                <h4 className="text-white font-medium">{feature.title}</h4>
                <p className="text-sm text-neutral-400">{feature.description}</p>
              </div>
            ))}
            <div className="pt-2">
              <a
                href="https://bolt.new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg"
              >
                Try Bolt.new
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-black py-32 relative border-t border-neutral-800">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <img
                src="https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg"
                alt="Bolt Logo"
                className="w-5 h-5"
              />
              <span className="text-sm text-blue-400">Powered By Stackblitz</span>
            </div>
            <h2 className="text-3xl font-black mb-4">
              Build with <span className="text-blue-500">Bolt.new</span>
            </h2>
            <p className="text-neutral-400">
              Experience the future of web development with AI-assisted coding
            </p>
          </div>
          <MobileFeatureCard />
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://github.com/stackblitz/bolt.new/raw/main/public/social_preview_index.jpg"
              alt="Bolt.new Interface"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <img
                src="https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg"
                alt="Bolt Logo"
                className="w-5 h-5"
              />
              <span className="text-sm text-blue-400">Powered By Stackblitz</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Build, Deploy, and Scale with{" "}
              <span className="text-blue-500">Bolt.new</span>
            </h2>

            <p className="text-xl text-neutral-400">
              Bolt.new is the platform for rapid progress. Let your team focus on shipping
              features instead of managing infrastructure with automated CI/CD, built-in
              testing, and integrated collaboration.
            </p>

            <p className="text-lg text-neutral-300">
              Prompt, run, edit, and deploy full-stack web and mobile apps with Bolt.new.
            </p>

            <div className="pt-4">
              <a
                href="https://bolt.new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 group"
              >
                Try Bolt.new
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoltSection;