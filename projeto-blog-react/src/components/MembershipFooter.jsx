import { Send } from 'lucide-react';

export default function MembershipFooter() {
  return (
    <>
      <section className="pt-32 pb-20 px-[5%] max-w-4xl mx-auto text-center">
        <div className="font-mono text-sm tracking-widest text-[var(--color-neon-blue)] mb-6 uppercase">
          Fique Atualizado
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Assine a Newsletter
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Receba ensaios profundos sobre arquitetura de software, estrutura de dados e engenharia de sistemas diretamente na sua caixa de entrada. Sem spam, apenas sinal puro.
        </p>

        <form className="relative max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="engenheiro@sistema.com" 
            className="w-full bg-[#0A0A0A] border border-[#333] text-white px-6 py-4 rounded-full focus:outline-none focus:border-[var(--color-neon-blue)] focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all"
            required
          />
          <button 
            type="submit" 
            className="absolute right-2 top-2 bottom-2 bg-[var(--color-neon-blue)] text-black px-6 rounded-full font-bold hover:shadow-[0_0_20px_var(--color-neon-blue)] transition-all flex items-center gap-2"
          >
            <Send size={16} /> <span className="hidden sm:inline">Assinar</span>
          </button>
        </form>
      </section>

      <footer className="w-full bg-[#030305] rounded-t-[4rem] border-t border-white/10 pt-20 pb-10 px-[5%] mt-20 relative overflow-hidden">
        {/* Glow de fundo no footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent blur-sm" />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-xs">
            <h4 className="font-heading font-bold text-2xl text-white mb-4">Computus.</h4>
            <p className="font-mono text-xs text-gray-500 mb-6">Educação técnica imersiva. Construída para a próxima década.</p>
            <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              STATUS DO SISTEMA: OPERACIONAL
            </div>
          </div>

          <div className="flex gap-16 font-mono text-sm text-gray-400">
            <div className="flex flex-col gap-4">
              <div className="text-white font-bold mb-2">Platform</div>
              <a href="#" className="hover:text-[var(--color-neon-blue)]">Features</a>
              <a href="#" className="hover:text-[var(--color-neon-blue)]">Pricing</a>
              <a href="#" className="hover:text-[var(--color-neon-blue)]">Changelog</a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-white font-bold mb-2">Legal</div>
              <a href="#" className="hover:text-[var(--color-neon-blue)]">Terms</a>
              <a href="#" className="hover:text-[var(--color-neon-blue)]">Privacy</a>
            </div>
          </div>
          
        </div>
      </footer>
    </>
  );
}


