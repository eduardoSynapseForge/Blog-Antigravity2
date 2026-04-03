import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Philosophy from '../components/Philosophy'
import Protocol from '../components/Protocol'
import MembershipFooter from '../components/MembershipFooter'
import { articles } from '../data/articles'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Computus Script Paper | Deep Space Tech Blog</title>
        <meta name="description" content="Explore deep tech, algorithms, and computing abstractions in our immersive mobile-first blog." />
      </Helmet>
      
      <Hero />

      <section className="py-24 bg-black relative border-t border-[#333]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-10">Artigos Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id} className="block group">
                <div className="border border-[#333] bg-[#0A0A0A] p-6 rounded-2xl h-full transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map(tag => (
                      <span key={tag} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.description}</p>
                  <p className="text-gray-600 text-xs">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Philosophy />
      <Protocol />
      
      <MembershipFooter />
    </>
  )
}
