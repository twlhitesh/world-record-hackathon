import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel';
import { FloatingSponsors } from '@/components/ui/floating-sponsors';

const SponsorsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const mainSponsors = [
    {
      name: "Supabase",
      image: "https://pbs.twimg.com/profile_images/1822981431586439168/7xkKXRGQ_400x400.jpg",
      href: "https://supabase.com"
    },
    {
      name: "Netlify",
      image: "https://pbs.twimg.com/profile_images/1633183038140981248/Mz4bv8Ja_400x400.png",
      href: "https://netlify.com"
    },
    {
      name: "Cloudfare",
      image: "https://pbs.twimg.com/profile_images/1600539069217480704/RzK50Sks_400x400.jpg",
      href: "https://cloudflare.com"
    },
    {
      name: "Sentry",
      image: "https://pbs.twimg.com/profile_images/1778495572238086150/qDkInWXX_400x400.png",
      href: "https://sentry.io"
    },
    {
      name: "Loops",
      image: "https://pbs.twimg.com/profile_images/1729539310058147840/iE5EGXW3_400x400.jpg",
      href: "https://loops.so"
    },
    {
      name: "Algorand Foundation",
      image: "https://pbs.twimg.com/profile_images/1805829136381861889/0fI5Zrbv_400x400.jpg",
      href: "https://algorand.foundation"
    },
    {
      name: "Bolt.new",
      image: "https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg",
      href: "https://bolt.new"
    },
    {
      name: "Stackblitz",
      image: "https://pbs.twimg.com/profile_images/1880708699624542208/QTb9LC0L_400x400.jpg",
      href: "https://stackblitz.com"
    }
  ];

  const additionalSponsors = [
    {
      name: "Vercel",
      image: "https://pbs.twimg.com/profile_images/1767351110228918272/3Pndc5OT_400x400.png",
      href: "https://vercel.com"
    },
    {
      name: "Stripe",
      image: "https://pbs.twimg.com/profile_images/1618575477781807105/iDuRlqTe_400x400.jpg",
      href: "https://stripe.com"
    },
    {
      name: "MongoDB",
      image: "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
      href: "https://mongodb.com"
    },
    {
      name: "Prisma",
      image: "https://pbs.twimg.com/profile_images/1773419566955188224/CA54xhtv_400x400.jpg",
      href: "https://prisma.io"
    },
    {
      name: "Planet Scale",
      image: "https://pbs.twimg.com/profile_images/1504919223168077836/RSsCSpKf_400x400.jpg",
      href: "https://planetscale.com"
    },
    {
      name: "Railway",
      image: "https://pbs.twimg.com/profile_images/1620522598567124994/kaGB4rBI_400x400.jpg",
      href: "https://railway.app"
    },
    {
      name: "Hashnode",
      image: "https://pbs.twimg.com/profile_images/1717595803185721344/NrKoPvVn_400x400.png",
      href: "https://hashnode.com"
    },
    {
      name: "Clerk",
      image: "https://pbs.twimg.com/profile_images/1721635100763275264/XTLwijo3_400x400.jpg",
      href: "https://clerk.com"
    }
  ];

  // Mobile Sponsors View Component
  const MobileSponsors = () => (
    <div className="px-4 py-12 md:hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Sponsors</h2>
        <p className="text-neutral-400">Backed by industry leaders</p>
      </div>
      
      <div className="space-y-8">
        {/* Main Sponsors Grid */}
        <div className="grid grid-cols-4 gap-4">
          {mainSponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square rounded-full overflow-hidden border border-neutral-800 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:border-neutral-700 group-hover:bg-neutral-900/50">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Additional Sponsors Grid */}
        <div className="grid grid-cols-4 gap-4 opacity-60">
          {additionalSponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-square rounded-full overflow-hidden border border-neutral-800/50 bg-black/30 backdrop-blur-sm transition-all duration-300 group-hover:border-neutral-700 group-hover:bg-neutral-900/30">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="mailto:sponsors@bolt.new"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-blue-500/20"
        >
          Become a Sponsor
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );

  // Desktop Sponsors View Component
  const DesktopSponsors = () => (
    <div className="hidden md:block">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Backed by Industry Leaders
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Join forces with the world's most innovative technology companies
          </p>
        </motion.div>
      </div>

      <div className="mt-8 h-[400px] relative">
        <ThreeDPhotoCarousel />
      </div>

      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Additional Partners
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Supported by leading companies in developer tooling and infrastructure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <FloatingSponsors 
            items={additionalSponsors}
            desktopClassName="shadow-xl"
            mobileClassName="mx-auto"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <a
          href="mailto:sponsors@bolt.new"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 ease-out group transform-gpu"
        >
          <span>Become a Sponsor</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">→</span>
        </a>
      </motion.div>
    </div>
  );

  return (
    <section id="sponsors" ref={ref} className="relative py-20 overflow-visible bg-black border-t border-neutral-800">
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)]" />
      <div className="absolute inset-0 [background:linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_0_0,linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_20px_20px] [background-size:40px_40px] opacity-10" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <MobileSponsors />
        <DesktopSponsors />
      </div>
    </section>
  );
};

export default SponsorsSection;