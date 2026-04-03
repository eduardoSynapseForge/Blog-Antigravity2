import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.location.hash = hash;
      }, 100);
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full transition-all duration-300 px-6 py-4 flex items-center justify-between
          ${scrolled ? 'bg-black/60 backdrop-blur-xl border border-white/10' : 'bg-transparent border border-transparent'}`}
      >
        <Link to="/" className="font-heading font-bold text-xl tracking-tight text-white cursor-pointer hover:opacity-80 transition-opacity">
          Computus<span className="text-[var(--color-neon-blue)]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center font-mono text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">/HOME</Link>
          <button onClick={() => handleNavClick('#features')} className="hover:text-white transition-colors">/FEATURES</button>
          <Link to="/about" className="hover:text-white transition-colors">/ABOUT</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="bg-[var(--color-neon-blue)] text-black px-6 py-2 rounded-full font-bold text-sm tracking-wide hover:shadow-[0_0_20px_var(--color-neon-blue)] transition-all">
            ASSINAR
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu (Thumb Nav) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/10 rounded-t-3xl z-40 p-8 pb-12 flex flex-col gap-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-4 border-b border-[#333] pb-4">
              <div className="font-mono text-xs text-gray-500">Navegação de Polegar v1.1</div>
              <button className="text-gray-400"><Search size={20} /></button>
            </div>
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-2xl font-heading font-bold text-white">HOME</Link>
            <button onClick={() => handleNavClick('#features')} className="text-2xl font-heading font-bold text-left text-white">FEATURES</button>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="text-2xl font-heading font-bold text-white">ABOUT</Link>
            <button className="bg-[var(--color-neon-blue)] text-black w-full py-4 rounded-xl font-bold mt-4">
              ASSINAR CTA
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
