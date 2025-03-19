import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BoltSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="bg-black py-32 relative border-t border-neutral-800" ref={ref}>
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_100%)]" />
      <div className="absolute inset-0 [background:linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_0_0,linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000)_20px_20px] [background-size:40px_40px] opacity-10" />
      
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="https://github.com/stackblitz/bolt.new/raw/main/public/social_preview_index.jpg"
              alt="Bolt.new Interface"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <img
                src="https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg"
                alt="Podif Logo"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoltSection;
