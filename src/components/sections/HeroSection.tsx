import React, { lazy, Suspense } from 'react';
import { IconBolt } from '@tabler/icons-react';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import { Globe } from '@/components/ui/globe';
import { Meteors } from '@/components/ui/meteors';

const avatarUrls = [
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?&w=40&h=40&dpr=2&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?&w=40&h=40&dpr=2&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=40&h=40&dpr=2&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?&w=40&h=40&dpr=2&q=80",
];

function HeroSection() {
  return (
    <section className="min-h-[100dvh] w-full flex items-center justify-center bg-black relative overflow-hidden pt-16">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)]" />
        <div className="absolute inset-0 [background:linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_0_0,linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_20px_20px] [background-size:40px_40px] opacity-20" />
        <div className="absolute inset-0 [background:repeating-linear-gradient(-45deg,_#000,_#000_2px,_transparent_2px,_transparent_8px)] opacity-10" />
      </div>

      <div className="w-full min-h-[calc(100dvh-4rem)] flex items-center relative z-10 py-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="font-mono text-sm tracking-wider text-neutral-500 mb-4 sm:mb-8 text-reveal-slide">
                  Every generation needs a new revolution!
                </div>
                
                <h1 className="text-[2.5rem] sm:text-[3.5rem] leading-[0.9] md:text-[5rem] xl:text-[6rem] font-black tracking-tight">
                  <span className="block text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)] vintage-text">
                    $1 MILLION
                  </span>
                  <span className="block text-blue-500 [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)] vintage-text">
                    →HACKATHON
                  </span>
                  <span className="block text-2xl sm:text-3xl font-mono mt-4 text-neutral-500 text-reveal-slide">
                    100,000+ Developers. One Mission.
                  </span>
                </h1>
              </div>
              
              <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-light text-neutral-400 [text-shadow:_0_2px_2px_rgb(0_0_0_/_50%)]">
                Join the world's largest hackathon. 
                <br className="hidden sm:block" />
                <span className="text-blue-400">Build the future with AI.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://form.typeform.com/to/wf94YwH4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold rounded-lg transition-all duration-300 group transform-gpu"
                >
                  Register Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-4 border border-neutral-800 text-white text-lg font-bold hover:bg-white/5 transition-colors duration-200 rounded-lg group transform-gpu"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              <div className="pt-6">
                <div className="flex items-center gap-4">
                  <AvatarCircles
                    avatarUrls={avatarUrls}
                    numPeople={96000}
                    className="scale-90"
                  />
                  <span className="text-neutral-400 text-sm">
                    Join <span className="text-white font-semibold">96,000+</span> developers already registered
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative w-full aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-[700px] max-h-[700px]">
                  <Globe />
                </div>
              </div>
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;