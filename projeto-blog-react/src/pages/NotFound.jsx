import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404: Página não encontrada | Computus Script</title>
      </Helmet>
      
      <div className="bg-black min-h-screen flex items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10">
          <h1 className="text-9xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Segmentação de Memória Falhou
          </h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            O endereço para onde você tentou navegar não aponta para um recurso válido neste domínio.
          </p>
          <Link to="/" className="inline-block px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
            Retornar à Base
          </Link>
        </div>
      </div>
    </>
  )
}
