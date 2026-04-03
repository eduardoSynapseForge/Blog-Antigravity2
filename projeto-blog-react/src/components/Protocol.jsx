import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: '01', title: 'Inteligência Artificial', color: 'text-blue-400' },
  { id: '02', title: 'Agentes IA', color: 'text-purple-400' },
  { id: '03', title: 'Programação', color: 'text-green-400' }
];

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray('.protocol-card');

      cardElements.forEach((card, index) => {
        // Empilhamento usando sticky manual e animando redução visual do anterior
        // O container maior cuida do scroll nativo graças ao flex-col, gsap apenas aplica efeitos visuais
        if (index < cardElements.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 15%",
            endTrigger: cardElements[index + 1],
            end: "top 30%",
            animation: gsap.to(card, {
              scale: 0.9,
              filter: "blur(10px)",
              opacity: 0.5,
              ease: "none"
            }),
            scrub: true,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="py-20 px-[5%] max-w-4xl mx-auto flex flex-col gap-[50vh] pb-[50vh]">
      {cards.map((card, idx) => (
        <div
          key={card.id}
          className="protocol-card sticky top-[15%] h-[70vh] w-full glass p-12 flex flex-col justify-between overflow-hidden shadow-2xl"
          style={{ zIndex: idx }}
        >
          <div className={`font-mono text-8xl font-black opacity-20 ${card.color}`}>
            {card.id}
          </div>

          <div className="relative z-10">
            <h3 className="font-heading font-bold text-5xl mb-6">{card.title}</h3>
            <p className="font-mono text-gray-400 text-sm max-w-sm leading-relaxed">
              Este é o arquivo imutável. Estruturado para o longo prazo. Conhecimento densificado em protocolos absolutos.
            </p>
          </div>

          {/* SVG Bg Animations */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 w-1/2 h-full pointer-events-none">
            {idx === 0 && (
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" fill="none" /></svg>
            )}
            {idx === 1 && (
              <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="2" className="animate-pulse" /></svg>
            )}
            {idx === 2 && (
              <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M0 50 Q 25 20, 50 50 T 100 50" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
