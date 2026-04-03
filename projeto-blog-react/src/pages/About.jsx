import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre Mim | Computus Script</title>
        <meta name="description" content="Conheça o autor por trás do Computus Script Paper. Engenheiro de Software especializado em abstrações e computação de alta performance." />
      </Helmet>

      <div className="bg-black min-h-screen text-white pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Decodificando a Complexidade.
          </h1>

          <div className="prose prose-invert prose-lg mb-12">
            <p>
              Olá, sou o arquiteto por trás do <strong>Computus Script Paper</strong>. Minha missão é traduzir a vasta complexidade da ciência da computação e tecnologia profunda em conceitos acessíveis e práticos.
            </p>
            <p>
              Com experiência em sistemas distribuídos, algoritmos de baixa latência e engenharia de software escalável, criei este espaço para engenheiros que estão cansados do conteúdo superficial e buscam entender os <em>"porquês"</em> fundamentais.
            </p>
            <p>
              Quando não estou explorando novas abstrações ou depurando concorrência, estou aqui documentando as descobertas.
            </p>
          </div>

          <div className="border-t border-[#333] pt-12">
            <h2 className="text-2xl font-semibold mb-6">Conecte-se</h2>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-2 border border-[#333] rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all bg-[#0A0A0A]">
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-2 border border-[#333] rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all bg-[#0A0A0A]">
                <span>Twitter / X</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-2 border border-[#333] rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all bg-[#0A0A0A]">
                <span>LinkedIn</span>
              </a>
              <a href="mailto:contact@computusscript.com" className="flex items-center gap-2 px-6 py-2 border border-[#333] rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all bg-[#0A0A0A]">
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
