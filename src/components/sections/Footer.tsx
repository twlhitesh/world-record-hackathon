import React from 'react';
import { IconBolt, IconBrandGithub, IconBrandTwitter, IconBrandDiscord } from '@tabler/icons-react';

const Footer = () => {
  const footerLinks = {
    quickLinks: [
      { href: "#about", label: "About" },
      { href: "#prizes", label: "Prizes" },
      { href: "#judges", label: "Judges" }
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
                <div className="text-xs text-neutral-500">DATE TBD</div>
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
};

export default Footer;