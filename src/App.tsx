import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu,
  X,
  BookOpen
} from "lucide-react";
import Edition01 from "./components/Edition01";
import Edition02 from "./components/Edition02";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [edition, setEdition] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('el_dorrego_edition');
      return saved ? parseInt(saved) : 1;
    }
    return 1;
  });

  useEffect(() => {
    localStorage.setItem('el_dorrego_edition', edition.toString());
  }, [edition]);

  const toggleEdition = (num: number) => {
    setEdition(num);
    setShowMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen bg-[#dcdcdc] flex justify-center p-4 md:p-10 font-mono paper-texture overflow-x-hidden"
      style={{ 
        zoom: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0.67 
      }}
    >
      
      {/* Botón de Menú (Cuadradito) */}
      <button 
        id="btn-menu"
        onClick={() => setShowMenu(!showMenu)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 border-4 border-black flex items-center justify-center transition-all shadow-[6px_6px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 bg-white"
      >
        {showMenu ? <X className="w-8 h-8 text-black" /> : <Menu className="w-8 h-8 text-black" />}
      </button>

      {/* Menú Desplegable */}
      <AnimatePresence>
        {showMenu && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-72 bg-black text-white z-40 p-6 border-4 border-white shadow-[10px_10px_0px_rgba(255,255,255,0.2)] max-h-[70vh] overflow-y-auto"
          >
            <h3 className="text-xl font-black italic mb-6 border-b-2 border-white/20 pb-2 uppercase tracking-tighter flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> EL DORREGO
            </h3>
            
            <div className="mb-8 space-y-2">
              <p className="text-[10px] font-black uppercase opacity-50 mb-2">Seleccionar Edición</p>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => toggleEdition(1)}
                  className={`border-2 p-2 text-xs font-black uppercase transition-colors ${edition === 1 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 01
                </button>
                <button 
                  onClick={() => toggleEdition(2)}
                  className={`border-2 p-2 text-xs font-black uppercase transition-colors ${edition === 2 ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'}`}
                >
                  Vol. 02
                </button>
              </div>
            </div>

            <nav className="space-y-4">
              <p className="text-[10px] font-black uppercase opacity-50 mb-2">Navegación</p>
              <a href="#inicio" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Inicio</a>
              {edition === 1 && (
                <>
                  <a href="#que-es-alero" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">¿Qué es un Alero?</a>
                  <a href="#historias-risa" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Historias que dan risa</a>
                  <a href="#terror" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Historia de Terror</a>
                  <a href="#cristina-solis" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Cristina Solís</a>
                  <a href="#literatura" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Literatura del Barrio</a>
                  <a href="#pedidos" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Pedidos del Barrio</a>
                  <a href="#quienes-somos" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Quiénes Somos</a>
                  <a href="#mantitas" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-yellow-400 transition-colors border-b border-white/10 pb-1">Mantitas de Bienvenida</a>
                </>
              )}
              {edition === 2 && (
                <>
                  <a href="#inicio" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-green-400 transition-colors border-b border-white/10 pb-1">Inicio Vol. 02</a>
                  <a href="#preparativos" onClick={() => setShowMenu(false)} className="block text-sm font-bold uppercase hover:text-orange-400 transition-colors border-b border-white/10 pb-1 text-orange-400 animate-pulse">Preparativos Cumple</a>
                  <p className="text-[8px] font-black uppercase opacity-30 mt-4">Secciones</p>
                  <p className="text-xs italic opacity-60">Respuestas Chistes • Hacer Nacer • Taller en Vivo</p>
                </>
              )}
            </nav>
            <div className="mt-8 pt-4 border-t-2 border-white/20">
              <p className="text-[10px] font-bold italic opacity-70 uppercase">Prensa Infantil • Edición {edition.toString().padStart(2, '0')}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        key={edition}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full bg-[#fdfdfd] shadow-[0_30px_100px_rgba(0,0,0,0.3)] border-x-[12px] border-black p-6 md:p-14 relative overflow-hidden"
      >
        {edition === 1 ? <Edition01 /> : <Edition02 />}

        {/* Decorative elements */}
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 rotate-90 text-8xl font-black opacity-[0.03] pointer-events-none select-none uppercase tracking-[1em]">
          EL ALERO EL ALERO EL ALERO
        </div>
      </motion.div>
    </div>
  );
}


