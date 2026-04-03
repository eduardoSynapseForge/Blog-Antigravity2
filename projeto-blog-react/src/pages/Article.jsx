import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import { ArrowLeft, Copy, Check } from 'lucide-react'
import { articles } from '../data/articles'
import 'highlight.js/styles/atom-one-dark.css' // Import a highlight.js theme

export default function Article() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 text-white text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-gray-400 mb-8">Essa abstração pode ter se perdido no vazio.</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">Retornar à Base</Link>
        </div>
      </div>
    );
  }

  // Related posts matching tags
  const related = articles.filter(a => a.id !== article.id && a.tags.some(t => article.tags.includes(t))).slice(0, 3);

  // Custom code component for markdown to add copy button
  const CodeBlock = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    const [copiedContent, setCopiedContent] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
      setCopiedContent(true);
      setTimeout(() => setCopiedContent(false), 2000);
    }

    if (!inline && match) {
      return (
        <div className="relative group my-6 border border-[#333] rounded-lg overflow-hidden bg-[#0A0A0A]">
          <div className="flex justify-between items-center px-4 py-2 bg-[#111] border-b border-[#333] text-xs text-gray-400 font-mono">
            <span>{match[1]}</span>
            <button 
              onClick={handleCopy}
              className="hover:text-cyan-400 transition-colors"
              title="Copy code"
            >
              {copiedContent ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <code className={className} {...props}>
            {children}
          </code>
        </div>
      )
    }
    return (
      <code className="bg-[#222] px-1.5 py-0.5 rounded text-sm font-mono text-cyan-300" {...props}>
        {children}
      </code>
    )
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Computus Script</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
      </Helmet>

      <article className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto bg-black text-gray-200">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-12">
          <ArrowLeft size={16} className="mr-2" />
          Voltar para Home
        </Link>
        
        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 uppercase tracking-widest">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">{article.title}</h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed mb-6">{article.description}</p>
          <div className="flex items-center text-sm text-gray-500 font-mono">
            <time>{article.date}</time>
            <span className="mx-3">•</span>
            <span>By System Admin</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{ code: CodeBlock }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Categories / Tags mapping internally handled, interaction could go here */}

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="mt-24 pt-12 border-t border-[#222]">
            <h3 className="text-2xl font-bold text-white mb-8">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map(rel => (
                <Link to={`/article/${rel.id}`} key={rel.id} className="block group">
                  <div className="border border-[#333] bg-[#0A0A0A] p-6 rounded-2xl h-full transition-all duration-300 hover:border-cyan-500">
                    <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-300">{rel.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-2">{rel.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
