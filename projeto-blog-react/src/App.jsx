import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Lenis from '@studio-freight/lenis'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Article from './pages/Article'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  useEffect(() => {
    // Inicialização do Lenis (Smooth Scroll)
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <main className="bg-[#000000] min-h-screen text-white relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </HelmetProvider>
  )
}

export default App
