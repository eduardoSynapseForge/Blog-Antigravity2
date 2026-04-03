import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Philosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // A imagem de fundo irá mover-se lentamente para baixo enquanto a seção sobe, gerando parallax fluido
  const yParallax = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section id="philosophy" ref={ref} className="relative py-40 px-[5%] flex items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Organic Low-op Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-20 filter blur-[2px] w-full h-[140%] -top-[20%]"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1550537687-c9a0c270da09?q=80&w=2560&auto=format&fit=crop")',
          y: yParallax
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="relative z-10 max-w-5xl text-center flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col gap-4"
        >
          <span className="font-sans text-xl md:text-2xl text-gray-500 font-medium tracking-wide">
            A maioria foca em: tutoriais vazios.
          </span>
          <h2 className="font-serif italic font-black text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1.1 }}>
            Nós focamos em: <br/>
            <span className="text-[var(--color-neon-purple)]">Arquitetura.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
