import React from 'react';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandOpenai, IconBrandSupabase, IconBrandVercel, IconBrandTypescript, IconBrandTailwind, IconBrandStripe, IconBrandNextjs, IconBrandCloudflare, IconBrandAws } from '@tabler/icons-react';

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="relative py-32 bg-black border-t border-neutral-800">
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)]" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="font-mono text-sm tracking-wider text-neutral-500 mb-4">
            OFFICIAL SPONSORS
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Backed by Industry Leaders
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Join forces with the world's most innovative technology companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20 items-center justify-items-center">
          {[
            { icon: IconBrandOpenai, name: "OpenAI" },
            { icon: IconBrandSupabase, name: "Supabase" },
            { icon: IconBrandVercel, name: "Vercel" },
            { icon: IconBrandStripe, name: "Stripe" },
            { icon: IconBrandGithub, name: "GitHub" },
            { icon: IconBrandTypescript, name: "TypeScript" },
            { icon: IconBrandTailwind, name: "Tailwind" },
            { icon: IconBrandNextjs, name: "Next.js" },
            { icon: IconBrandCloudflare, name: "Cloudflare" },
            { icon: IconBrandAws, name: "AWS" }
          ].map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full flex items-center justify-center"
            >
              <sponsor.icon 
                size={48} 
                className="text-white/60 hover:text-white transition-colors duration-300"
                stroke={1.5}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://x.com/boltdotnew/status/1902151963468509655"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors group"
          >
            <span>Become a Sponsor</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;