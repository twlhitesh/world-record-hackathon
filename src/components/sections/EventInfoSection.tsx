import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { IconCalendar, IconTrophy, IconUsers, IconRocket, IconBrain, IconCode, IconGift, IconBuildingLighthouse } from '@tabler/icons-react';

const EventInfoSection = () => {
  const timelineData = [
    {
      title: "Origins & Vision",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            The $1 Million Bolt.new Hackathon emerged from a simple social media suggestion that quickly evolved into what could become the world's largest developer competition. Our vision is to bring together 100,000+ developers to push the boundaries of what's possible with AI-assisted development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <IconCalendar size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">March 18, 2025</h3>
              <p className="text-neutral-400 text-sm">72 hours of non-stop innovation with flexible timezone support for global participation</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <IconTrophy size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">$1M Prize Pool</h3>
              <p className="text-neutral-400 text-sm">The largest prize pool in hackathon history, with multiple award categories</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Platform & Tools",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            Bolt.new provides cutting-edge AI-assisted development tools that help you focus on innovation rather than implementation details. Our platform democratizes development, making it accessible to both seasoned developers and newcomers alike.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <IconBrain size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered Development</h3>
              <p className="text-neutral-400 text-sm">Leverage advanced AI assistance to accelerate your development process</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <IconCode size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Accessible to All</h3>
              <p className="text-neutral-400 text-sm">Whether you're a seasoned developer or just starting, our platform levels the playing field</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Support & Resources",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            Participants will have access to comprehensive support and resources throughout the hackathon. From expert mentorship to premium development tools, we're providing everything you need to build your winning solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <IconBuildingLighthouse size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Mentorship</h3>
              <p className="text-neutral-400 text-sm">Get guidance from industry leaders including Peter Levels and successful entrepreneurs</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <IconGift size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Developer Resources</h3>
              <p className="text-neutral-400 text-sm">Access premium cloud credits, API integrations, and comprehensive development tools</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="bg-black relative border-t border-neutral-800">
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)]" />
      <div className="relative z-10">
        <Timeline data={timelineData} />
      </div>
      <div className="flex justify-center pb-20">
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
    </section>
  );
};

export default EventInfoSection;
