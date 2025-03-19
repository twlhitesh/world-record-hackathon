import React, { lazy, Suspense } from 'react';
import { IconBrandGithub, IconBrandTwitter, IconBrandDiscord, IconBolt } from '@tabler/icons-react';
import { Globe } from '@/components/ui/globe';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import { Header } from '@/components/ui/header';
import { Meteors } from '@/components/ui/meteors';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

// Lazy load sections with loading priority
const BoltSection = lazy(() => import('./components/sections/BoltSection'));
const EventInfoSection = lazy(() => import('./components/sections/EventInfoSection'));
const PrizesSection = lazy(() => import('./components/sections/PrizesSection'));
const JudgesSection = lazy(() => import('./components/sections/JudgesSection'));
const SponsorsSection = lazy(() => import('./components/sections/SponsorsSection'));

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
              
              <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-light text-neutral-400 [text-shadow:_0_2px_2px_rgb(0_0_0_/_50%)] luxury-fade">
                Join the world's largest hackathon. 
                <br className="hidden sm:block" />
                <span className="text-blue-400">Build the future with AI.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://form.typeform.com/to/wf94YwH4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button w-full sm:w-auto text-center transform-gpu"
                >
                  Register Now
                </a>
                <a
                  href="#learn-more"
                  className="w-full sm:w-auto text-center px-8 py-4 border border-neutral-800 text-white text-lg font-bold hover:bg-white/5 transition-colors duration-200 rounded-lg animate-text transform-gpu"
                >
                  Learn More
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

            <div className="hidden lg:block relative w-full aspect-square max-w-2xl mx-auto image-reveal">
              <Globe className="top-0" />
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = {
    quickLinks: [
      { href: "#about", label: "About" },
      { href: "#prizes", label: "Prizes" },
      { href: "#judges", label: "Judges" },
      { href: "#sponsors", label: "Sponsors" }
    ],
    resources: [
      { href: "/faq", label: "FAQ" },
      { href: "/rules", label: "Rules" },
      { href: "/schedule", label: "Schedule" },
      { href: "/contact", label: "Contact" }
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/code-of-conduct", label: "Code of Conduct" }
    ],
    social: [
      { href: "https://github.com/stackblitz", icon: IconBrandGithub, label: "GitHub" },
      { href: "https://twitter.com/stackblitz", icon: IconBrandTwitter, label: "Twitter" },
      { href: "https://discord.gg/stackblitz", icon: IconBrandDiscord, label: "Discord" }
    ]
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-black border-t border-neutral-800 py-12 relative">
      <div className="absolute inset-0 [background:linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_0_0,linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_20px_20px] [background-size:40px_40px] opacity-10" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IconBolt className="w-8 h-8 text-blue-500" stroke={2.5} />
              <div>
                <div className="font-black text-xl tracking-tight flex items-center gap-1">
                  <span className="text-white">$1M</span>
                  <span className="text-blue-500">//</span>
                  <span className="text-white">HACKATHON</span>
                </div>
                <div className="text-xs text-neutral-500">March 18, 2025</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400">
              Join 100K+ developers in building the future with AI-assisted development.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleNavigation(e, href)}
                    className="text-neutral-400 hover:text-white transition-colors animate-text block py-1 transform-gpu"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-neutral-400 hover:text-white transition-colors animate-text block py-1 transform-gpu"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              {footerLinks.social.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors layout-transition p-2 transform-gpu"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-sm text-neutral-500">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div>© {new Date().getFullYear()} Bolt.new $1M Hackathon. All rights reserved.</div>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {footerLinks.legal.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="hover:text-white transition-colors animate-text transform-gpu"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-black text-white selection:bg-blue-500 selection:text-white antialiased">
      <ErrorBoundary>
        <Header />
        <HeroSection />
        <Suspense fallback={<LoadingSpinner />}>
          <BoltSection />
          <EventInfoSection />
          <PrizesSection />
          <JudgesSection />
          <SponsorsSection />
        </Suspense>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;