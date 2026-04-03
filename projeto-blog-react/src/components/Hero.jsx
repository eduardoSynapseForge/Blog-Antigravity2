import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: [0.23, 1, 0.32, 1], duration: 1 } }
  };

  return (
    <section ref={ref} className="relative h-[100dvh] w-full flex items-end pb-[15vh] px-[5%] overflow-hidden">
      {/* Background Deep Space Tech com Parallax */}
      <motion.div 
        className="absolute inset-x-0 top-0 z-0 opacity-40 w-full h-[120%]"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), url(https://images.unsplash.com/photo-1544256718-3bda237e502c?q=80&w=2560&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: yBg
        }}
      />
      {/* Heavy Gradient to Black - Static */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

      {/* Content na Terça Parte Inferior Esquerda animando também no scroll */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 max-w-4xl"
      >
        <motion.div variants={item} className="mb-6">
          <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-[var(--color-neon-blue)] px-4 py-2 rounded-full border border-[var(--color-neon-blue)]/30 bg-blue-900/10 backdrop-blur-sm">
            SYSTEM INIT // 1.0.0
          </span>
        </motion.div>

        <motion.h1 variants={item} className="flex flex-col gap-2">
          <span className="font-sans font-black text-white leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            DECODIFICANDO
          </span>
          <span className="font-serif italic text-gray-400 leading-none tracking-tight ml-4 md:ml-12" style={{ fontSize: 'clamp(4rem, 9vw, 8rem)', fontWeight: 600 }}>
            a Ciência
          </span>
        </motion.h1>
        
        <motion.p variants={item} className="mt-8 mb-12 text-gray-400 font-mono max-w-lg text-sm md:text-base leading-relaxed">
          Deep dives precisos em engenharia de software e fundamentos da computação. Sem ruído. Apenas arquitetura.
        </motion.p>
      </motion.div>
    </section>
  );
}
