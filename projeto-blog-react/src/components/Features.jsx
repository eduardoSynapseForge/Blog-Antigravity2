import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { articles } from '../data/articles';

gsap.registerPlugin(ScrollTrigger);

// Resumos pre-definidos para qualquer tag que possa vir a ser "Top 3"
const themeSummaries = {
  "algorithms": "Descubra como otimizar o tempo de execucao (Big-O).\nAprenda estruturas de dados complexas.\nImplemente solucoes escalaveis e deterministicas.",
  "architecture": "Projete sistemas de larga escala.\nAplique principios SOLID para codigo resiliente.\nDesacople componentes para facil manutencao.",
  "protocols": "Entenda as fundacoes do modelo OSI.\nDomine TCP/IP e confiabilidade de rede.\nExplore o roteamento de pacotes na web profunda.",
  "data-structures": "Gerencie a memoria com eficiencia maxima.\nExplore arvores, grafos e Bloom Filters.\nCrie buscas O(1) com Hash Maps.",
  "rust": "Mergulhe no poderoso ecossistema de sistemas.\nTrave Data Races com o modelo de Ownership.\nGerencie memoria sem coletor de lixo.",
  "system-design": "Crie caches ultra-rapidos e reduza latencia.\nDesenhe APIs escalaveis e distribuidas.\nLide com tolerencia a falhas global.",
  "default": "Explore conceitos fundamentais da tecnologia.\nAprofunde-se nas raizes da computacao.\nLeia artigos detalhados e praticos."
};

const cardColors = ['text-blue-400', 'text-purple-400', 'text-green-400'];

export default function Features() {
  const containerRef = useRef(null);

  // Calcula top 3 temas dinamicamente no runtime
  const cards = useMemo(() => {
    const tagCount = {};
    articles.forEach(article => {
      article.tags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });

    const topTags = Object.entries(tagCount)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 3)
      .map(entry => entry[0]);

    return topTags.map((tag, index) => {
      const summary = themeSummaries[tag] || themeSummaries["default"];
      return {
        id: "0" + (index + 1),
        title: tag.toUpperCase(),
        color: cardColors[index % cardColors.length],
        summaryLines: summary.split('\n')
      };
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.flashcard', 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="py-32 px-[5%] max-w-7xl mx-auto w-full" ref={containerRef}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Temas Centrais.</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Passe o mouse por cima dos cartoes para revelar nossos pilares mais fundamentais.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000 relative">
        {cards.map((card) => (
          <div key={card.id} className="flashcard h-96 relative group [perspective:1000px] hover:z-50 z-10 transition-all duration-300">
            {/* O cartao engloba os dois lados (frente e verso) e gira quando entra em hover */}
            <div className="w-full h-full absolute transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer shadow-2xl">
              
              {/* FACE FRONTAL: Tema */}
              <div className="absolute w-full h-full bg-[#0A0A0A] border border-[#333] rounded-3xl p-8 [backface-visibility:hidden] flex flex-col justify-between overflow-hidden">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className={"font-mono text-xl font-bold tracking-widest mb-4 uppercase " + card.color}>
                    {card.id} 
                  </div>
                  <h3 className="text-4xl font-semibold text-white leading-relaxed text-center break-words w-full">
                    {card.title}
                  </h3>
                </div>
                <div className="font-mono text-sm text-gray-500 flex items-center justify-center gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                  Hover to decrypt
                </div>
              </div>

              {/* FACE TRASEIRA: Resumo de 3 linhas */}
              <div className="absolute w-full h-full bg-[#111] border border-cyan-500/30 rounded-3xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center overflow-hidden">
                <div className="font-mono text-xs text-cyan-400 mb-4 uppercase border-b border-cyan-500/20 pb-4">
                  Decrypted Core:
                </div>
                <ul className="text-gray-200 text-sm md:text-base leading-relaxed font-mono flex flex-col gap-4 list-disc pl-5">
                  {card.summaryLines.map((line, idx) => (
                    <li key={idx} className="marker:text-cyan-500">{line}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}